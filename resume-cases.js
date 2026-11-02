const caseLang = isRussian ? 0 : 1;
const caseText = (ru,en) => isRussian ? ru : en;
const casePath = path => assetBase + path;
const caseTitle = p => !isRussian && p.enTitle ? p.enTitle : p.title;
const caseMedia = p => p.video
  ? `<video class="case-video" controls playsinline preload="metadata" poster="${casePath(p.poster||p.image)}"><source src="${casePath(p.video)}" type="video/mp4"></video>`
  : p.youtube
    ? `<iframe class="case-video" src="https://www.youtube-nocookie.com/embed/${p.youtube}" title="${caseTitle(p)} — ${caseText('игровое видео','game video')}" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`
    : `<img class="case-cover" src="${casePath(p.image)}" alt="${caseTitle(p)}">`;

document.querySelectorAll('.project-open[data-project]').forEach(button => {
  const p = window.PORTFOLIO_CASES[button.dataset.project];
  if (!p) return;
  const block = document.createElement('div');
  block.className='content-preview';
  block.innerHTML=`<span class="content-label">${caseText('В ПРОЕКТЕ','PROJECT CONTENT')}</span><div>${p.features.slice(0,3).map(f=>`<span>${f[caseLang?2:0]}</span>`).join('')}</div><p class="card-results">${p.results.slice(0,2).map(r=>`${r[caseLang?2:0]} ${r[caseLang?3:1]}`).join(' · ')}</p>`;
  button.append(block);
});

const extraKeys=['replicats','finny','euklida','nightmare'];
document.querySelectorAll('.other-project').forEach((el,index)=>{
  const key=extraKeys[index],p=window.PORTFOLIO_CASES[key];
  if(!p)return;
  el.querySelector('h3').textContent=caseTitle(p);
  el.querySelector('.other-role').textContent=p.role[caseLang];
  el.querySelector('.other-body').innerHTML=`<p>${p.summary[caseLang]}</p>${p.video?caseMedia(p):`<img class="extra-preview" src="${casePath(p.image)}" alt="${caseTitle(p)}" loading="lazy">`}<button class="button button-blue extra-case-button" data-project="${key}">${caseText('Содержание, вклад и результат','Content, contribution & results')} ↗</button>`;
});

function renderCase(key){
 const p=window.PORTFOLIO_CASES[key];if(!p)return;
 document.querySelector('#dialog-content').innerHTML=`<div class="case-heading"><p class="eyebrow">${p.year} / ${p.role[caseLang]}</p><h2 id="dialog-title">${caseTitle(p)}</h2><p>${p.summary[caseLang]}</p></div>
 <div class="case-results">${p.results.map(r=>`<div><strong>${r[caseLang?2:0]}</strong><span>${r[caseLang?3:1]}</span></div>`).join('')}</div>
 <div class="case-main-media">${caseMedia(p)}<p class="media-caption">${p.mediaCaption?p.mediaCaption[caseLang]:p.video?caseText('Запись игрового процесса','Recorded gameplay'):p.youtube?caseText('Видео проекта','Project video'):caseText('Материал проекта','Project material')}</p></div>
 <div class="case-body"><h3>${caseText('Что реализовано в проекте','What is in the project')}</h3><div class="case-feature-grid">${p.features.map(f=>`<article><h4>${f[caseLang?2:0]}</h4><p>${f[caseLang?3:1]}</p></article>`).join('')}</div>
 <div class="case-contribution"><h3>${caseText('Мой вклад','My contribution')}</h3><ul>${p.contribution[caseLang].map(t=>`<li>${t}</li>`).join('')}</ul></div>
 ${p.gallery?`<h3>${caseText('Материалы и детали','Materials & details')}</h3><div class="case-gallery">${p.gallery.map(g=>`<a href="${casePath(g[0])}" target="_blank" rel="noopener"><img src="${casePath(g[0])}" alt="${g[caseLang?2:1]}" loading="lazy"><span>${g[caseLang?2:1]} ↗</span></a>`).join('')}</div>`:''}
 ${p.code?`<div class="case-code"><span>${caseText('Код выпущенного острова','Released island code')}: <strong>${p.code}</strong></span><button class="text-link copy-code" data-code="${p.code}" style="background:none">${ui.copy}</button></div><p class="dialog-source">${caseText('Публичная статистика Fortnite.GG: срез октября 2026. Для командных работ показан результат всего проекта.','Public Fortnite.GG statistics: October 2026 snapshot. Team-project figures describe the whole project.')}</p>`:''}</div>`;
}
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('video').forEach(v=>v.pause());renderCase(button.dataset.project);openDialog(projectDialog,button);}));
projectDialog.addEventListener('close',()=>{projectDialog.querySelectorAll('video').forEach(v=>v.pause());projectDialog.querySelectorAll('iframe').forEach(f=>f.remove());});
document.querySelectorAll('details').forEach(details=>details.addEventListener('toggle',()=>{if(!details.open)details.querySelectorAll('video').forEach(v=>v.pause());}));
