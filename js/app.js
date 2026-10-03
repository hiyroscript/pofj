import { graph, endingVariants, pickEnding } from '../data/story.js';
import { freshState, average, STAT_NAMES, WEIGHTS, academicPass, rating, matches, romanceEligible } from './state.js';
import { enter, choose, blocksFor, choicesFor, validateGraph } from './engine.js';
import { load, save, encode, decode, archiveRead, archiveAdd, SAVE_KEY, ARCHIVE_KEY } from './save.js';
import { challenges, finishChallenge, evaluate } from './minigames.js';
const $ = id => document.getElementById(id);
const el = (tag, text, className) => { const e = document.createElement(tag); if (text !== undefined) e.textContent = text; if (className) e.className = className; return e; };
const button = (text, handler, className) => { const b = el('button', text, className); b.addEventListener('click', handler); return b; };
let state = null, busy = false, blocked = false, previousFocus = null, saveError = null, rawCorrupt = null, lastActivation = -Infinity;
const stage = $('stage'), choices = $('choices'), dialog = $('panel');
function syncMode(){document.body.dataset.mode=blocked?'ORIENTATION_BLOCKED':dialog.open?'PAUSED':state?.mode||'TITLE';}
function announce(text) { $('announcement').textContent = text; }
function persist() { if (!state) return; const r = save(state); saveError = r.ok ? null : r.message; $('save-status').textContent = saveError || 'Saved on this device'; }
function appendBlocks(parent, blocks) {
  const prose = el('div', undefined, 'scene-prose');
  for (const b of blocks || []) { const p = el('p', b.text, b.type === 'dialogue' ? 'dialogue' : ''); if (b.speaker) { const span = el('span', b.speaker, 'speaker'); p.prepend(span); } prose.append(p); }
  parent.append(prose);
}
function heading(parent, eyebrow, title, location) {
  parent.append(el('p', eyebrow, 'eyebrow')); const h = el('h1', title); h.tabIndex = -1; parent.append(h);
  if (location) parent.append(el('p', location, 'location')); return h;
}
function resetStage() { stage.replaceChildren(); choices.replaceChildren(); choices.className = ''; $('decision-meta').textContent = ''; stage.scrollTop = 0; }
function setSettings() { if (!state) return; document.documentElement.style.setProperty('--type', `${state.settings.textSize}px`); document.body.classList.toggle('reduced-motion', state.settings.reducedMotion); document.body.classList.toggle('high-contrast', state.settings.highContrast); }
function title(error) {
  syncMode();
  resetStage(); $('compact-stats').hidden=true; $('calendar').textContent = 'A BELLWETHER STORY'; $('chapter-progress').textContent = 'FIFTEEN WEEKS. A LIFE TAKING SHAPE.';
  const wrap = el('section', undefined, 'title-screen'); wrap.append(el('p', 'AN INTERACTIVE NOVEL · BELLWETHER COLLEGE', 'eyebrow'));
  const h = el('h1'); h.append(document.createTextNode('A Golden'), el('br'), el('em', 'Semester.')); wrap.append(h, el('p', 'Every choice has a semester behind it.', 'hook'), el('div', undefined, 'title-line'), el('p', 'One room. A borrowed chance. Fifteen weeks to find your footing—and the people who make a place feel like yours.', 'intro'));
  const bottom = el('div', undefined, 'title-bottom'); ['READ AT YOUR PACE', 'CHOICES THAT REMEMBER', 'NO SOUND. JUST STORY.'].forEach(t => bottom.append(el('span', t))); wrap.append(bottom);
  if (error) wrap.append(el('p', error, 'error')); stage.append(wrap); choices.className = 'single';
  choices.append(button('Begin semester →', () => startConfirmation(), 'gold-button'));
  if (rawCorrupt) choices.append(button('Export unreadable save', () => download(rawCorrupt, 'golden-semester-recovery.json')));
}
function startConfirmation() {
  if (state || rawCorrupt) openPanel('Start a new semester?', body => { body.append(el('p', 'This replaces the current playthrough. Unlocked endings remain in your archive. Export the current save first if you want to keep it.')); body.append(button('Keep my place', closePanel), button('Start a new semester', startNew, 'gold-button')); });
  else startNew();
}
function startNew() { closePanel(); rawCorrupt = null; state = freshState(); enter(state, graph, 'p01'); persist(); render(); openControls(); }
function render(focus = true) {
  if (!state) return title(); syncMode(); setSettings(); resetStage();
  $('compact-stats').hidden=false; $('compact-stats').replaceChildren(); for(const name of STAT_NAMES){const item=el('span',name);item.append(el('strong',String(state.stats[name])));const bar=el('span',undefined,'mini-bar'),fill=el('i');fill.style.width=`${state.stats[name]}%`;bar.append(fill);item.append(bar);$('compact-stats').append(item);}
  const node = graph[state.currentNodeId];
  $('calendar').textContent = `${state.week ? `WEEK ${String(state.week).padStart(2, '0')}` : 'PROLOGUE'} · ${state.day.toUpperCase()}`;
  $('chapter-progress').textContent = state.week ? `WEEK ${String(state.week).padStart(2, '0')} OF 15 · ${node.chapterTitle.toUpperCase()}` : 'PROLOGUE · WHAT IT COST';
  $('save-status').textContent = saveError || 'Saved on this device';
  if (node.terminal) { renderEnding(); return; }
  if (state.mode === 'MINIGAME') { renderChallenge(); return; }
  const wrap = el('article', undefined, 'reading');
  if (state.lastOutcome?.blocks?.length) { const out = el('section', undefined, 'outcome'); out.append(el('p', 'THE CHOICE YOU CARRIED', 'eyebrow')); appendBlocks(out, state.lastOutcome.blocks); if (state.lastOutcome.reason) { const d = el('details'); d.append(el('summary', 'Why this happened'), el('p', state.lastOutcome.reason)); out.append(d); } wrap.append(out); }
  const h = heading(wrap, `${state.week ? `WEEK ${String(state.week).padStart(2, '0')}` : 'PROLOGUE'} / ${node.timeSlot.toUpperCase()}`, node.title, `${node.location}${node.parts ? ` · Passage ${node.part} of ${node.parts}` : ''}`);
  appendBlocks(wrap, blocksFor(state, node));
  if (state.challenges[node.id]) { const r = state.challenges[node.id], result = el('section', undefined, 'result'); result.append(el('h3', `Recorded result · ${r.points} / ${r.total}`)); if (challenges[node.minigame]?.grade && challenges[node.minigame].grade !== 'research') result.append(el('p', `Assessment grade: ${r.grade}/100`)); r.feedback.forEach(t => result.append(el('p', t))); wrap.append(result); }
  stage.append(wrap);
  const cs = choicesFor(state, node);
  cs.forEach((c, i) => { const b = button('', () => commitChoice(c.id, node.id), 'choice'); b.append(el('span', `${String.fromCharCode(65 + i)})`, 'choice-letter')); const copy = el('span', c.label, 'choice-copy'); if (c.check) copy.append(el('span', state.settings.explainChecks ? `Uncertain · ${Object.keys(c.check.weights).join(' + ')} and preparation` : 'Uncertain approach', 'risk')); b.append(copy); choices.append(b); });
  $('decision-meta').textContent = `${cs.length} ways forward · Academic standing ${average(state).toFixed(1)}`;
  if (focus && !blocked) { h.focus({ preventScroll: true }); announce(`${node.chapterTitle}. ${node.title}. ${cs.length} choices.`); }
}
function commitChoice(id, expected) {
  if (busy || blocked || dialog.open || performance.now() - lastActivation < 420) return;
  busy = true; lastActivation = performance.now(); choices.querySelectorAll('button').forEach(b => b.disabled = true);
  try { if (choose(state, graph, id, expected)) { persist(); render(); } } finally { busy = false; }
}
function renderEnding() {
  const ending = pickEnding(state); state.ending = ending.id;
  const stars = rating(state), wrap = el('article', undefined, 'reading');
  heading(wrap, 'AFTER THE GRADES', ending.title, 'Alderport · December');
  const symbol = el('p', ['','★☆☆','★★☆','★★★'][stars], 'stars'); symbol.setAttribute('aria-label', `${stars} out of three stars`); wrap.append(symbol, el('p', ['','BAD ENDING / ACADEMIC DISMISSAL','FAIR ENDING / SEMESTER PASSED','GOOD ENDING / SEMESTER PASSED + MUTUAL DATING'][stars], 'eyebrow'));
  if (state.lastOutcome?.blocks) appendBlocks(wrap, state.lastOutcome.blocks);
  const epilogueSection=el('section');epilogueSection.id='ending-prose';epilogueSection.tabIndex=-1;appendBlocks(epilogueSection, ending.blocks);wrap.append(epilogueSection);
  const facts = el('details'); facts.append(el('summary', 'The semester you lived'));
  facts.append(el('p', `Overall grade ${average(state).toFixed(1)}. ${state.flags.disqualified ? 'An unresolved formal integrity finding also prevents retention.' : 'No disqualifying integrity finding.'} ${state.choiceHistory.length} decisions recorded.`));
  for (const record of state.choiceHistory.filter(r => ['w0205','w0501','w0603','w0902','w1201','w1303','w1503'].includes(r.nodeId))) { const n = graph[record.nodeId], c = n?.choices.find(c => c.id === record.choiceId); if (c) facts.append(el('p', `${n.title}: ${c.label}`)); }
  wrap.append(facts, el('p', 'The stars describe this story’s outcome category, never the worth of a person or of a life without romance.', 'small muted')); stage.append(wrap);
  archiveAdd({ id: ending.id, rating: stars, title: ending.title, at: new Date().toISOString() }); persist();
  choices.append(button('View epilogue',()=>{epilogueSection.scrollIntoView({block:'start'});epilogueSection.focus({preventScroll:true});},'choice'),button('Read the ending archive', openArchive, 'choice'), button('Begin another semester', startConfirmation, 'choice'));
  announce(`${stars} star ending. ${ending.title}.`);
}
function updatePending(key, value) { state.pending.answers[key] = value; persist(); }
function selectGroup(parent, prompt, values, key, current, onSelect) {
  const field = el('fieldset'); field.append(el('legend', prompt)); const list = el('div', undefined, 'answers');
  values.forEach((text, i) => { const b = button(text, () => { onSelect ? onSelect(i) : updatePending(key, i); for (const [j, item] of [...list.children].entries()) item.setAttribute('aria-pressed', String(j === i)); updateChallengeSubmit(); }, 'answer'); b.setAttribute('aria-pressed', String(current === i)); list.append(b); }); field.append(list); parent.append(field);
}
function renderChallenge() {
  resetStage(); const node = graph[state.currentNodeId], config = challenges[node.minigame], answers = state.pending.answers, wrap = el('section', undefined, 'challenge');
  heading(wrap, `WEEK ${String(state.week).padStart(2, '0')} / PRACTICE INTO ACTION`, config.title, node.location);
  const context = el('details'); context.append(el('summary', 'Scene and instructions')); appendBlocks(context, blocksFor(state, node)); wrap.append(context, el('p', config.instructions, 'instructions'));
  if (['exam', 'revision'].includes(config.type)) {
    const step = Math.min(state.pending.step, config.questions.length - 1), q = config.questions[step];
    wrap.append(el('p', `${step + 1} / ${config.questions.length} · ${config.questions.filter(q => Number.isInteger(answers[q.id])).length} answered`, 'challenge-progress'));
    selectGroup(wrap, q.prompt, q.options, q.id, answers[q.id]);
    if (state.prep >= 5) { const d = el('details', undefined, 'hint'); d.append(el('summary', 'Consult a study prompt'), el('p', 'Identify the population, denominator and scope of the claim. Ask what alternative explanation or consent condition has not been addressed. You may consult these notes without a time penalty.')); wrap.append(d); }
    const nav = el('div', undefined, 'challenge-nav'); const prev = button('← Previous', () => { state.pending.step--; persist(); renderChallenge(); }); prev.disabled = step === 0; const next = button('Next →', () => { state.pending.step++; persist(); renderChallenge(); }); next.disabled = step === config.questions.length - 1; nav.append(prev,next); wrap.append(nav);
  } else if (config.type === 'sequence') {
    const order = answers.order || [];
    config.notes.forEach((text, i) => { const b = button(text, () => { updatePending('order', order.includes(i) ? order.filter(n => n !== i) : order.length < 4 ? [...order,i] : order); renderChallenge(); }, 'answer'); b.setAttribute('aria-pressed', String(order.includes(i))); b.style.marginBottom = '8px'; wrap.append(b); });
    wrap.append(el('h3', 'Your sequence'));
    order.forEach((id, i) => { const row = el('div', undefined, 'sequence-row'); row.append(el('span', `${i + 1}. ${config.notes[id]}`)); for (const delta of [-1,1]) { const b = button(delta < 0 ? 'Move up' : 'Move down', () => { const copy = [...order]; [copy[i],copy[i+delta]] = [copy[i+delta],copy[i]]; updatePending('order', copy); renderChallenge(); }); b.disabled = i + delta < 0 || i + delta >= order.length; row.append(b); } wrap.append(row); });
  } else if (config.type === 'planning') {
    const remain = el('p', undefined, 'challenge-progress'); const update = () => remain.textContent = `${config.blocks - config.categories.reduce((n,k) => n + Number(state.pending.answers[k] || 0),0)} blocks remaining`; update(); wrap.append(remain);
    config.categories.forEach(k => { const row = el('div', undefined, 'allocation'); const label = el('label', k); label.htmlFor = `plan-${k}`; const input = el('input'); input.id = `plan-${k}`; input.type = 'number'; input.min = 0; input.max = config.blocks; input.value = answers[k] || 0; input.addEventListener('input', () => { updatePending(k, Number(input.value)); update(); updateChallengeSubmit(); }); row.append(label,input); wrap.append(row); });
  } else if (config.type === 'budget') {
    wrap.append(el('p', `Current ledger: $${state.cash}. Rent $${config.bill} + food + $${config.travel} travel. ${state.flags.aidApproved ? 'Aid is approved: $180 this period.' : 'New aid applications are pending for one week.'}`, 'hint'));
    dropdown(wrap, 'Paid shifts (four hours at $12/hour)', 'shifts', [['0','No shifts'],['2','Two shifts · +$96'],['4','Four shifts · +$192; less study and recovery time']]);
    dropdown(wrap, 'Support arrangement', 'support', [['aid','Attend aid appointment / use approved aid'],['installment','Request a written installment plan for any shortfall'],['none','Pay directly; any shortfall remains overdue']]);
    dropdown(wrap, 'Food plan', 'food', [['groceries','Groceries · $45'],['pantry','Pantry plus groceries · $20']]);
  } else if (config.type === 'negotiation') {
    config.roles.forEach(role => dropdown(wrap, role, role, config.people.map(p => [p,p])));
    dropdown(wrap, 'Resolve the scheduling conflict', 'resolution', [['rehearse','Agree a short rehearsal for Ben'],['deadline','Arrange an early handoff for Priya'],['command','Announce the roles without discussion']]);
  } else if (config.type === 'matching') {
    config.claims.forEach((q,i) => selectGroup(wrap, q.text, config.sources, `claim${i}`, answers[`claim${i}`])); selectGroup(wrap, config.qualification.prompt, config.qualification.options, 'qualify', answers.qualify);
  } else if (config.type === 'presentation') {
    config.rounds.forEach((q,i) => { selectGroup(wrap, q.question, q.moves, `move${i}`, answers[`move${i}`]); selectGroup(wrap, 'What evidence follows?', q.evidence, `evidence${i}`, answers[`evidence${i}`]); });
  }
  stage.append(wrap); const submit = button('Submit and record result', () => { if (busy || blocked || dialog.open || performance.now()-lastActivation<420) return; busy=true; lastActivation=performance.now(); const result = finishChallenge(state,config,graph); if (result) { persist(); render(); } busy=false; }, 'gold-button'); submit.id = 'challenge-submit';
  choices.className='single'; choices.append(submit,button('Open course notes',openNotes)); updateChallengeSubmit(); announce(`${config.title}. Untimed assessment.`);
}
function dropdown(parent,labelText,key,options) { const label=el('label',labelText), select=el('select'); select.id=`select-${key}`; label.htmlFor=select.id; const placeholder=el('option','Choose an option'); placeholder.value=''; select.append(placeholder); options.forEach(([value,text])=>{ const opt=el('option',text); opt.value=value; select.append(opt); }); select.value=state.pending.answers[key] ?? ''; select.addEventListener('change',()=>{ updatePending(key,select.value); updateChallengeSubmit(); }); parent.append(label,select); }
function updateChallengeSubmit() { const submit=$('challenge-submit'); if(!submit || !state?.pending)return; const config=challenges[graph[state.currentNodeId].minigame]; const valid=evaluate(config,state.pending.answers,state).valid; submit.disabled=!valid; $('decision-meta').textContent=valid?'Ready to submit · Answers are saved':'Complete all selections before submitting · No time limit'; }
function openPanel(titleText, build) { previousFocus=document.activeElement; $('panel-title').textContent=titleText; $('panel-body').replaceChildren(); build($('panel-body')); if(!dialog.open)dialog.showModal(); $('close-panel').focus(); syncMode(); }
function closePanel(){ if(dialog.open)dialog.close(); if(previousFocus?.isConnected)previousFocus.focus(); syncMode(); }
function openStatus(){ if(!state){openControls();return;} openPanel('Your semester',body=>{
  body.append(el('p','These measures describe current practice and circumstances, not fixed ability or personal worth.','muted'));
  const stats=el('div',undefined,'stats'); STAT_NAMES.forEach(k=>{const box=el('div'),label=el('div',undefined,'stat-label');label.append(el('span',k),el('span',`${state.stats[k]} / 100`)); const bar=el('div',undefined,'stat-bar'),fill=el('span');fill.style.width=`${state.stats[k]}%`;bar.append(fill);box.append(label,bar);stats.append(box);});body.append(stats);
  body.append(el('p','Intelligence: learned understanding. Charisma: listening and communication. Looks: rest, neatness and presentation. Happiness: current mood and belonging.','small muted'));
  const dl=el('dl');const row=(k,val)=>dl.append(el('dt',k),el('dd',String(val)));
  row('Academic standing',`${average(state).toFixed(1)} / 100`);row('Retention standard','70 + required work + integrity');row('Cash / account balance',`$${state.cash}`);row('Food security',`${state.food} day reserve`);row('Energy',`${state.energy}/100`);row('Stress',`${state.stress}/100`);row('Rent covered through',`Week ${state.flags.rentPaidThrough}`);row('Payment shortfall',`$${Math.max(0,-state.cash)}`);row('Arrangement',state.flags.paymentArrangement?'Installment plan recorded':'No installment plan');
  for(const [k,w]of Object.entries(WEIGHTS))row(`${k} · ${w*100}%`,state.grades[k]===null?'Not assessed':state.grades[k]);
  row('Maya',state.flags.trustRupture?'Needs distance':state.relationships.Maya>=12?'Established trust':state.relationships.Maya>=5?'Growing trust':state.week<3?'Not yet introduced':'An acquaintance');row('Ben',state.relationships.Ben>=7?'A reliable friend':state.relationships.Ben>0?'Getting to know each other':'Not close yet');row('Sofia',state.relationships.Sofia>=5?'Mutual professional respect':state.relationships.Sofia<0?'Some tension':'A fellow student');body.append(dl);
});}
function openMenu(){openPanel('A moment between pages',body=>{body.append(el('p',saveError||'Autosaved on this device. No account, tracking or cloud storage.','muted'));const grid=el('div',undefined,'menu-grid');[['Continue reading',closePanel],['Story journal',openJournal],['Course notes',openNotes],['Settings',openSettings],['Controls',openControls],['Ending archive',openArchive],['Export save',()=>state&&download(encode(state),'golden-semester-save.json')],['Import save',openImport],['New semester',startConfirmation],['Delete saved data',openDelete]].forEach(([t,fn])=>grid.append(button(t,fn)));body.append(grid);});}
function openControls(){openPanel('Read. Decide. Remember.',body=>{body.append(el('p','Read at your own pace. The story scrolls independently above the decision area. Every choice is final for this playthrough and is saved as you go.'),el('p','Choose with touch, click, A–D or 1–4. Arrow keys move between decisions. Enter or Space activates a focused button. Escape closes a panel. Letter shortcuts pause while panels or assessments are open.'),el('p','All assessments are untimed. You may consult notes and change answers before submitting. Use the move buttons to order notes; dragging is never required.'),el('p','Phones use portrait orientation; laptops and desktops use landscape. Rotating pauses interaction and preserves your place. Pinch zoom remains available.'),button('Continue',closePanel,'gold-button'));});}
function openNotes(){openPanel('Your course notebook',body=>{const notes=[['learnedRates','Rates use the relevant group as denominator: 40 of 50 is 80%; 30 of 100 is 30%. A difference in response rate does not explain motivation.'],['learnedSampling','A sample can be large and still exclude relevant people. Ask who could not be recruited by this method.'],['learnedCausation','Association does not establish cause. Self-selection, prior preparation and other variables may explain part of an observed difference.'],['learnedMedian','For 2, 3, 4, 5 and 31, the median is 4 and the mean is 9. Report the spread and the long wait too.'],['learnedPilot','A small, reversible pilot can test a proportionate proposal. Define success, failure and staffing conditions beforehand.'],['researchIntegrity','Consent and citation are separate requirements. A source must support the specific claim attributed to it. Missing data is not zero.']];const ul=el('ul',undefined,'notes-list'); notes.filter(([flag])=>state?.flags[flag]).forEach(([,text])=>ul.append(el('li',text))); if(!ul.children.length)body.append(el('p','Concept notes appear here as Jonah studies them. During assessments, the instructions and reference prompts remain available.'));body.append(ul,el('p','Retention: 70 overall, required project, research, midterm and final complete, and no unresolved disqualifying integrity finding. Revision and recovery opportunities are explained in the story.','small muted'));});}
function openJournal(){openPanel('The pages already read',body=>{if(!state)return body.append(el('p','Your journal begins with the semester.'));for(const id of [...state.journal].reverse()){const n=graph[id];if(!n)continue;const item=el('details',undefined,'history-item');item.append(el('summary',`${n.chapter?`Week ${n.chapter}`:'Prologue'} · ${n.title}`));appendBlocks(item,n.narrativeBlocks);const record=state.choiceHistory.find(r=>r.nodeId===id),choice=n.choices?.find(c=>c.id===record?.choiceId);if(choice){item.append(el('p',`You chose: ${choice.label}`,'small'));appendBlocks(item,record.success?choice.response:choice.failure.response);}body.append(item);}});}
function openSettings(){openPanel('Make room to read',body=>{if(!state)return body.append(el('p','Start the semester to customize and save your reading settings.'));const label=el('label',`Text size · ${state.settings.textSize}px`),input=el('input');input.type='range';input.min=16;input.max=30;input.value=state.settings.textSize;input.setAttribute('aria-label','Narrative text size');input.addEventListener('input',()=>{state.settings.textSize=Number(input.value);label.textContent=`Text size · ${input.value}px`;setSettings();persist();});body.append(label,input);for(const [key,text]of [['reducedMotion','Reduce motion'],['highContrast','Higher-contrast borders and secondary text'],['explainChecks','Show relevant skills before uncertain choices']]){const l=el('label'),c=el('input');c.type='checkbox';c.checked=state.settings[key];c.addEventListener('change',()=>{state.settings[key]=c.checked;setSettings();persist();});l.append(c,document.createTextNode(text));body.append(l);}});}
function openArchive(){openPanel('Endings you have reached',body=>{const entries=archiveRead();if(!entries.length)body.append(el('p','No endings unlocked yet. Only stories you have reached will appear here.'));for(const entry of entries){const ending=endingVariants.find(e=>e.id===entry.id);if(!ending)continue;const d=el('details');d.append(el('summary',`${'★'.repeat(entry.rating)} · ${entry.title}`));appendBlocks(d,ending.blocks);body.append(d);}});}
function download(text,name){const url=URL.createObjectURL(new Blob([text],{type:'application/json'})),a=el('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function openImport(){openPanel('Import a saved semester',body=>{body.append(el('p','Choose an exported JSON file. It will be checked before you decide whether to replace the current playthrough.'));const input=el('input');input.type='file';input.accept='.json,application/json';input.setAttribute('aria-label','Saved game JSON file');const message=el('p');input.addEventListener('change',async()=>{const file=input.files[0];if(!file)return;if(file.size>2000000){message.textContent='This file is too large to be a game save.';return;}try{const candidate=decode(await file.text(),graph);openPanel('Use this saved semester?',b=>{b.append(el('p',`Week ${candidate.week} · ${graph[candidate.currentNodeId].title}. Import replaces this playthrough; your ending archive is preserved.`),button('Cancel',openMenu),button('Import and continue',()=>{state=candidate;persist();closePanel();render();},'gold-button'));});}catch(e){message.textContent=e.message;}});body.append(input,message);});}
function openDelete(){openPanel('Delete local data?',body=>{body.append(el('p','Deletion cannot be undone. Export your save first if you want a copy.'));body.append(button('Keep my data',closePanel),button('Delete current playthrough',()=>{try{localStorage.removeItem(SAVE_KEY);}catch{}state=null;rawCorrupt=null;closePanel();title();}),button('Delete ending archive only',()=>{try{localStorage.removeItem(ARCHIVE_KEY);}catch{}closePanel();}));});}
function orientation(){const touch=matchMedia('(pointer:coarse)').matches;const phone=touch&&Math.min(screen.width,screen.height)<900;const wrong=phone?innerWidth>innerHeight:innerHeight>innerWidth;const changed=wrong!==blocked;blocked=wrong;syncMode();$('orientation').hidden=!wrong;$('app').inert=wrong;dialog.inert=wrong;$('orientation-title').textContent=phone?'Rotate your device to continue':'Make your browser window wider to continue';if(changed){if(wrong){persist();$('orientation').focus();}else if(dialog.open)$('close-panel').focus();else stage.focus();}}
$('status-button').addEventListener('click',openStatus);$('menu-button').addEventListener('click',openMenu);$('brand').addEventListener('click',e=>{e.preventDefault();openMenu();});$('close-panel').addEventListener('click',closePanel);dialog.addEventListener('cancel',e=>{e.preventDefault();closePanel();});
document.addEventListener('keydown',e=>{if(blocked||dialog.open||!state||state.mode!=='PLAYING'||e.altKey||e.ctrlKey||e.metaKey||e.repeat||/INPUT|SELECT|TEXTAREA/.test(e.target.tagName))return;const bs=[...choices.querySelectorAll('button')];const k=e.key.toLowerCase();let i='abcd'.indexOf(k);if(i<0)i='1234'.indexOf(k);if(i>=0&&bs[i]){e.preventDefault();bs[i].click();}else if(['ArrowDown','ArrowRight','ArrowUp','ArrowLeft'].includes(e.key)){e.preventDefault();const current=bs.indexOf(document.activeElement),delta=['ArrowDown','ArrowRight'].includes(e.key)?1:-1;bs[(current+delta+bs.length)%bs.length]?.focus();}});
window.addEventListener('resize',orientation);document.addEventListener('visibilitychange',()=>{if(document.hidden)persist();else orientation();});window.addEventListener('pagehide',persist);window.addEventListener('popstate',()=>{persist();if(dialog.open)closePanel();else openMenu();});
try{const errors=validateGraph(graph);if(errors.length)throw Error(errors.slice(0,5).join('; '));const restored=load(graph);rawCorrupt=restored.raw&&restored.error?restored.raw:null;if(restored.state){state=restored.state;enter(state,graph,state.currentNodeId);render(false);}else title(restored.error);window.goldenReady=true;orientation();}catch(e){$('load-error').textContent=`Unable to open the story: ${e.message}. Your save is unchanged.`;}
