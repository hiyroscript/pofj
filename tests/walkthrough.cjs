const {chromium}=require('playwright');
const fs=require('node:fs');
const assert=require('node:assert/strict');
(async()=>{
 const {play}=await import('../tools/simulation.js');
 const {freshState,rating}=await import('../js/state.js');
 const {encode}=await import('../js/save.js');
 const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',headless:true,args:['--no-sandbox']});
 const results=await Promise.all([['balanced',true],['balanced',false],['romance',false]].map(async([style,wrong])=>{
  const expected=play(style,42,wrong),stars=rating(expected);
  const context=await browser.newContext({viewport:{width:1366,height:768}});
  await context.addInitScript(raw=>localStorage.setItem('golden-semester/save/v1',raw),encode(freshState(42)));
  const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(process.env.GAME_URL||'http://127.0.0.1:8765/pof/');await page.waitForFunction(()=>window.goldenReady);
  for(const [i,record]of expected.choiceHistory.entries()){
   const current=await page.evaluate(async()=>{const{graph}=await import('./data/story.js'),{challenges}=await import('./data/questions.js'),{choicesFor}=await import('./js/engine.js');const s=JSON.parse(JSON.parse(localStorage.getItem('golden-semester/save/v1')).payload),n=graph[s.currentNodeId];return{id:n.id,mode:s.mode,config:challenges[n.minigame],choices:choicesFor(s,n).map(c=>c.id)};});
   assert.equal(current.id,record.nodeId,`${stars}-star step ${i}`);
   if(current.mode==='MINIGAME'){
    const config=current.config;
   if(['exam','revision'].includes(config.type))for(let i=0;i<config.questions.length;i++){await page.locator('.answers').first().locator('button').nth((wrong?(config.questions[i].correct+1)%config.questions[i].options.length:config.questions[i].correct)).click();if(i<config.questions.length-1)await page.getByRole('button',{name:'Next →'}).click();}
   if(config.type==='planning'){for(const[k,v]of Object.entries({Study:4,Food:2,Work:2,Rest:3,Social:1}))await page.locator(`#plan-${k}`).fill(String(v));}
   if(config.type==='sequence')for(const i of config.correct)await page.locator('.challenge > .answer').nth(i).click();
   if(config.type==='budget'){await page.locator('#select-shifts').selectOption('2');await page.locator('#select-support').selectOption('aid');await page.locator('#select-food').selectOption('pantry');}
   if(config.type==='negotiation'){for(const[k,v]of Object.entries({Collection:'Priya',Analysis:'Sofia',Presentation:'Jonah',resolution:'deadline'}))await page.locator(`#select-${k}`).selectOption(v);}
   if(config.type==='matching'){for(let i=0;i<config.claims.length;i++)await page.locator('.answers').nth(i).locator('button').nth(config.claims[i].correct).click();await page.locator('.answers').last().locator('button').nth(config.qualification.correct).click();}
   if(config.type==='presentation')for(let i=0;i<config.rounds.length;i++){await page.locator('.answers').nth(i*2).locator('button').nth((wrong?(config.rounds[i].correctMove+1)%3:config.rounds[i].correctMove)).click();await page.locator('.answers').nth(i*2+1).locator('button').nth((wrong?(config.rounds[i].correctEvidence+1)%3:config.rounds[i].correctEvidence)).click();}

    await page.waitForTimeout(430);await page.getByRole('button',{name:'Submit and record result'}).click();await page.locator('.result').waitFor();
   }
   await page.waitForTimeout(430);
   await page.locator('#choices button').nth(current.choices.indexOf(record.choiceId)).click();
   if(i%100===0)console.log(`${stars}-star: ${i}/${expected.choiceHistory.length} decisions`);
  }
  assert.equal(await page.locator('.stars').getAttribute('aria-label'),`${stars} out of three stars`);
  const actual=await page.evaluate(()=>JSON.parse(JSON.parse(localStorage.getItem('golden-semester/save/v1')).payload));
  assert.deepEqual(actual.choiceHistory,expected.choiceHistory);assert.deepEqual(actual.grades,expected.grades);assert.deepEqual(errors,[]);
  await page.screenshot({path:`docs/screenshots/ending-${stars}-star.png`});await context.close();
  return{stars,decisions:actual.choiceHistory.length,status:'PASS',errors};
 }));
 await browser.close();fs.writeFileSync('docs/WALKTHROUGH_RESULTS.json',JSON.stringify({date:new Date().toISOString(),method:'Scripted full browser routes with real choice and assessment controls',results},null,2)+'\n');
})().catch(e=>{console.error(e);process.exit(1)});
