const {chromium}=require('playwright');
const fs=require('node:fs');
const assert=require('node:assert/strict');
const base=process.env.GAME_URL||'http://127.0.0.1:8765/pof/';
const withoutTimestamp=raw=>{const s=JSON.parse(raw);delete s.updatedAt;return s;};
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',headless:true,args:['--no-sandbox']});
 const results=[];
 const check=(name,fn)=>fn().then(()=>{results.push({name,status:'PASS'});console.log('PASS',name)});
 const page=await browser.newPage({viewport:{width:1366,height:768}});
 const errors=[],requests=[];page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>requests.push(r.url()));
 await page.goto(base);await page.waitForFunction(()=>window.goldenReady);
 fs.mkdirSync('docs/screenshots',{recursive:true});await page.screenshot({path:'docs/screenshots/title-desktop.png'});
 await check('title, begin, accessible controls and exact refresh',async()=>{
  await page.getByRole('button',{name:'Begin semester →'}).click();await page.getByRole('button',{name:'Continue',exact:true}).click();
  await page.locator('#choices button').first().click();
  const before=await page.evaluate(()=>JSON.parse(localStorage.getItem('golden-semester/save/v1')).payload);
  await page.reload();await page.waitForFunction(()=>window.goldenReady);
  const after=await page.evaluate(()=>JSON.parse(localStorage.getItem('golden-semester/save/v1')).payload);assert.deepEqual(withoutTimestamp(after),withoutTimestamp(before));
 });
 await check('double click resolves once and modal letter shortcuts are blocked',async()=>{
  await page.waitForTimeout(450);const before=await page.evaluate(()=>JSON.parse(JSON.parse(localStorage.getItem('golden-semester/save/v1')).payload).choiceHistory.length);
  await page.locator('#choices button').first().dblclick({delay:20});
  let after=await page.evaluate(()=>JSON.parse(JSON.parse(localStorage.getItem('golden-semester/save/v1')).payload).choiceHistory.length);assert.equal(after,before+1);
  await page.locator('#menu-button').click();await page.keyboard.press('a');
  after=await page.evaluate(()=>JSON.parse(JSON.parse(localStorage.getItem('golden-semester/save/v1')).payload).choiceHistory.length);assert.equal(after,before+1);await page.keyboard.press('Escape');assert.equal(await page.locator('#panel').evaluate(d=>d.open),false);
 });
 let fixtureNumber=0;
 async function fixture(nodeId,patch={}){
  const raw=await page.evaluate(async({nodeId,patch})=>{const{freshState}=await import('./js/state.js'),{enter}=await import('./js/engine.js'),{graph}=await import('./data/story.js'),{encode}=await import('./js/save.js');const s=freshState();Object.assign(s,patch);enter(s,graph,nodeId);return encode(s);},{nodeId,patch});
  await page.addInitScript(({raw,key})=>{if(['http:','https:'].includes(location.protocol)&&!sessionStorage.getItem(key)){localStorage.setItem('golden-semester/save/v1',raw);sessionStorage.setItem(key,'done');}},{raw,key:`fixture-${++fixtureNumber}`});
  await page.reload();await page.waitForFunction(()=>window.goldenReady);
 }
 await check('all eight minigame UIs accept and persist correct interaction',async()=>{
  for(const nodeId of ['w0105','w0402','w0502','w0602','w0702','w1003','w1102','w1404']){
   await fixture(nodeId);console.log('Checking challenge',nodeId);
   const config=await page.evaluate(async()=>{const{challenges}=await import('./data/questions.js'),{graph}=await import('./data/story.js');const s=JSON.parse(JSON.parse(localStorage.getItem('golden-semester/save/v1')).payload);return challenges[graph[s.currentNodeId].minigame];});
   if(['exam','revision'].includes(config.type))for(let i=0;i<config.questions.length;i++){await page.locator('.answers').first().locator('button').nth(config.questions[i].correct).click();if(i<config.questions.length-1)await page.getByRole('button',{name:'Next →'}).click();}
   if(config.type==='planning'){for(const[k,v]of Object.entries({Study:4,Food:2,Work:2,Rest:3,Social:1}))await page.locator(`#plan-${k}`).fill(String(v));}
   if(config.type==='sequence')for(const i of config.correct)await page.locator('.challenge > .answer').nth(i).click();
   if(config.type==='budget'){await page.locator('#select-shifts').selectOption('2');await page.locator('#select-support').selectOption('aid');await page.locator('#select-food').selectOption('pantry');}
   if(config.type==='negotiation'){for(const[k,v]of Object.entries({Collection:'Priya',Analysis:'Sofia',Presentation:'Jonah',resolution:'deadline'}))await page.locator(`#select-${k}`).selectOption(v);}
   if(config.type==='matching'){for(let i=0;i<config.claims.length;i++)await page.locator('.answers').nth(i).locator('button').nth(config.claims[i].correct).click();await page.locator('.answers').last().locator('button').nth(config.qualification.correct).click();}
   if(config.type==='presentation')for(let i=0;i<config.rounds.length;i++){await page.locator('.answers').nth(i*2).locator('button').nth(config.rounds[i].correctMove).click();await page.locator('.answers').nth(i*2+1).locator('button').nth(config.rounds[i].correctEvidence).click();}
   const before=await page.evaluate(()=>JSON.parse(localStorage.getItem('golden-semester/save/v1')).payload);await page.reload();await page.waitForFunction(()=>window.goldenReady);assert.deepEqual(withoutTimestamp(await page.evaluate(()=>JSON.parse(localStorage.getItem('golden-semester/save/v1')).payload)),withoutTimestamp(before));
   await page.getByRole('button',{name:'Submit and record result'}).click();await page.locator('.result').waitFor();
   const result=await page.evaluate(nodeId=>JSON.parse(JSON.parse(localStorage.getItem('golden-semester/save/v1')).payload).challenges[nodeId],nodeId);assert.equal(result.points,result.total,nodeId);
   await page.reload();await page.waitForFunction(()=>window.goldenReady);await page.locator('.result').waitFor();
  }
 });
 await check('all three ending screens, archive preservation and confirmed new game',async()=>{
  const {play}=await import('../tools/simulation.js');
  for(const [style,wrong,stars]of [['balanced',true,1],['balanced',false,2],['romance',false,3]]){
   await fixture('epilogue',play(style,42,wrong));
   assert.equal(await page.locator('.stars').getAttribute('aria-label'),`${stars} out of three stars`);
   await page.getByRole('button',{name:'View epilogue',exact:true}).click();
   assert.equal(await page.locator('#ending-prose').evaluate(e=>document.activeElement===e),true);
  }
  assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('golden-semester/archive/v1')).length),3);
  await page.getByRole('button',{name:'Begin another semester'}).click();await page.getByRole('button',{name:'Keep my place'}).click();assert.equal(await page.locator('.stars').count(),1);
  await page.getByRole('button',{name:'Begin another semester'}).click();await page.getByRole('button',{name:'Start a new semester',exact:true}).click();await page.getByRole('button',{name:'Continue',exact:true}).click();
  assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('golden-semester/archive/v1')).length),3);
 });
 await check('export download, import confirmation and independent delete controls',async()=>{
  await page.locator('#menu-button').click();const downloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:'Export save',exact:true}).click();const download=await downloadPromise;const raw=fs.readFileSync(await download.path(),'utf8');assert.equal(JSON.parse(raw).format,'golden-semester');
  await page.getByRole('button',{name:'Import save',exact:true}).click();await page.getByLabel('Saved game JSON file').setInputFiles({name:'semester.json',mimeType:'application/json',buffer:Buffer.from(raw)});await page.getByRole('button',{name:'Import and continue'}).click();
  assert.deepEqual(withoutTimestamp(await page.evaluate(()=>JSON.parse(localStorage.getItem('golden-semester/save/v1')).payload)),withoutTimestamp(JSON.parse(raw).payload));
  await page.locator('#menu-button').click();await page.getByRole('button',{name:'Delete saved data',exact:true}).click();await page.getByRole('button',{name:'Keep my data'}).click();assert.ok(await page.evaluate(()=>localStorage.getItem('golden-semester/save/v1')));
  await page.locator('#menu-button').click();await page.getByRole('button',{name:'Delete saved data',exact:true}).click();await page.getByRole('button',{name:'Delete current playthrough',exact:true}).click();assert.equal(await page.evaluate(()=>localStorage.getItem('golden-semester/save/v1')),null);assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('golden-semester/archive/v1')).length),3);
 });
 await check('corrupt saves remain exportable and blocked or full storage stays playable',async()=>{
  for(const mode of ['corrupt','blocked','quota']){
   const context=await browser.newContext({viewport:{width:1366,height:768}});
   await context.addInitScript(mode=>{if(mode==='corrupt')localStorage.setItem('golden-semester/save/v1','unreadable-json');if(mode==='blocked')Object.defineProperty(window,'localStorage',{get(){throw new DOMException('Storage denied','SecurityError');}});if(mode==='quota')Storage.prototype.setItem=function(){throw new DOMException('Storage full','QuotaExceededError');};},mode);
   const p=await context.newPage();const faults=[];p.on('pageerror',e=>faults.push(e.message));await p.goto(base);await p.waitForFunction(()=>window.goldenReady);
   if(mode==='corrupt'){await p.getByRole('button',{name:'Export unreadable save'}).waitFor();assert.equal(await p.evaluate(()=>localStorage.getItem('golden-semester/save/v1')),'unreadable-json');}
   await p.getByRole('button',{name:'Begin semester →'}).click();if(mode==='corrupt')await p.getByRole('button',{name:'Start a new semester',exact:true}).click();await p.getByRole('button',{name:'Continue',exact:true}).click();await p.locator('#choices button').first().click();
   if(mode!=='corrupt')assert.match(await p.locator('#save-status').textContent(),/saving unavailable/);assert.deepEqual(faults,[]);await context.close();
  }
 });
 await fixture('w0302');await page.screenshot({path:'docs/screenshots/story-desktop.png'});
 await check('desktop landscape sizes, 200% text and desktop portrait overlay',async()=>{
  for(const[width,height]of [[1024,600],[1366,768],[1920,1080]]){await page.setViewportSize({width,height});assert.equal(await page.locator('#orientation').isVisible(),false);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));}
  await page.evaluate(()=>document.documentElement.style.setProperty('--type','36px'));await page.setViewportSize({width:1024,height:600});assert.ok(await page.locator('#stage').evaluate(e=>e.scrollHeight>e.clientHeight));assert.ok(await page.locator('#choices').evaluate(e=>e.scrollWidth<=e.clientWidth));
  const before=await page.evaluate(()=>JSON.parse(JSON.parse(localStorage.getItem('golden-semester/save/v1')).payload).currentNodeId);await page.setViewportSize({width:600,height:900});await page.locator('#orientation').waitFor();assert.ok(await page.locator('#app').evaluate(e=>e.inert));await page.keyboard.press('a');await page.setViewportSize({width:1366,height:768});assert.equal(await page.evaluate(()=>JSON.parse(JSON.parse(localStorage.getItem('golden-semester/save/v1')).payload).currentNodeId),before);
 });
 await check('phone portrait sizes, long choices, landscape block and resume',async()=>{
  for(const[width,height]of [[320,568],[360,740],[390,844],[430,932]]){
   const context=await browser.newContext({viewport:{width,height},screen:{width,height},isMobile:true,hasTouch:true,deviceScaleFactor:1});const phone=await context.newPage();await phone.goto(base);await phone.waitForFunction(()=>window.goldenReady);
   await phone.getByRole('button',{name:'Begin semester →'}).click();await phone.getByRole('button',{name:'Continue',exact:true}).click();
   assert.ok(await phone.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${width} overflow`);assert.equal(await phone.locator('#orientation').isVisible(),false);assert.equal(await phone.locator('#choices button').count(),4);
   const boxes=await phone.locator('#choices button').evaluateAll(bs=>bs.map(b=>({height:b.getBoundingClientRect().height,width:b.getBoundingClientRect().width})));assert.ok(boxes.every(b=>b.height>=44&&b.width>=44));
   assert.equal(await phone.locator('meta[name=viewport]').getAttribute('content'),'width=device-width, initial-scale=1, viewport-fit=cover');
   if(width===390)await phone.screenshot({path:'docs/screenshots/story-mobile.png'});
   await phone.setViewportSize({width:height,height:width});await phone.locator('#orientation').waitFor();await phone.setViewportSize({width,height});await phone.locator('#orientation').waitFor({state:'hidden'});
   await context.close();
  }
 });
 await check('no runtime errors, third-party requests or audio',async()=>{assert.deepEqual(errors,[]);assert.ok(requests.every(url=>url.startsWith(base)));assert.equal(await page.locator('audio,video').count(),0);});
 await browser.close();fs.writeFileSync('docs/BROWSER_RESULTS.json',JSON.stringify({date:new Date().toISOString(),url:base,results,errors},null,2));
})().catch(e=>{console.error(e);process.exit(1)});
