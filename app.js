const isRussian = document.documentElement.lang === 'ru';
const assetBase = isRussian ? '' : '../';
const ui = isRussian ? {
  contribution: 'Мой вклад', explore: 'Посмотреть остров ↗', trailer: 'Смотреть трейлер ↗',
  copy: 'Скопировать код ⧉', copied: 'Скопировано ✓',
  source: 'Открытая статистика Fortnite.GG, октябрь 2026.',
  count: count => `Показано проектов: ${count}`,
  artwork: title => `Арт игры ${title}`, open: title => `Открыть проект ${title}`
} : {
  contribution: 'My contribution', explore: 'Explore the island ↗', trailer: 'Watch trailer ↗',
  copy: 'Copy island code ⧉', copied: 'Copied ✓',
  source: 'Public playtime figures from Fortnite.GG, checked October 2026.',
  count: count => `Showing ${count} projects`,
  artwork: title => `${title} game artwork`, open: title => `Open featured ${title} case study`
};
const projects = {
  nights: { title: '99 Nights Survival', image: 'nights', eyebrow: 'SOLO DEVELOPMENT / UEFN / 2025–ONGOING', description: 'A long-term survival game inspired by 99 Nights in the Forest. Players face progressively harder enemy waves, explore for weapons, collect trophies, and take on bosses.', stats: [['13.3M', 'minutes played'], ['37.2K', 'favorites'], ['Solo', 'development']], contribution: ['Built and maintained the game as a solo developer.', 'Developed gameplay systems, enemy waves, bosses, and trophy collection.', 'Implemented persistent player progression and versioned statistics.', 'Continued development through updates and ongoing improvements.'], url: 'https://fortnite.gg/island/2856-4330-2747', code: '2856-4330-2747' },
  sprite: { title: 'Sprite Swap', image: 'sprite', eyebrow: 'TEAM PROJECT / UEFN / 2026', description: 'A social collection and trading experience for up to 16 players. Players chat, view collections, and negotiate trades to complete their sprite collection.', stats: [['13.6M', 'minutes played'], ['21.5K', 'favorites'], ['UI + systems', 'my responsibility']], contribution: ['Developed all user interfaces for the project.', 'Implemented the game systems within a team production.', 'Connected the player-facing interface to the underlying gameplay experience.'], url: 'https://fortnite.gg/island/8359-5244-2189', code: '8359-5244-2189' },
  summer: { title: 'Summer Pool Wars', image: 'summer', eyebrow: 'TWO-PERSON TEAM / FORTNITE CREATIVE / 2023', description: 'A competitive summer party game for 2–16 players. Teams score by jumping into the opposing pool and unlock upgrades that benefit the whole team. Released May 26, 2023.', stats: [['3.6M', 'minutes played'], ['743', 'peak concurrent players'], ["Epic’s Picks", 'featured selection']], contribution: ['Led the core ideas and design decisions in a two-person team.', 'Took responsibility for architecture and the main development work.', 'Collaborated with a second builder to bring the experience to release.', 'Selected for Epic’s Picks and a summer contest.'], url: 'https://fortnite.gg/island/9260-9077-7492', code: '9260-9077-7492', video: 'https://www.youtube.com/watch?v=6Bhp5_bbsbU' },
  hospital: { title: 'Animal Hospital Survival', image: 'hospital', eyebrow: 'SOLO DEVELOPMENT / UEFN / 2026', description: 'A survival experience set in an unsettling animal hospital. Explore sectors, discover upgrades and secrets, and survive the creatures roaming the halls.', stats: [['Solo', 'development'], ['Audio', 'and atmosphere'], ['Gameplay', 'and game feel']], contribution: ['Developed the game as a solo project.', 'Paid particular attention to atmosphere and the audio experience.', 'Designed gameplay to support the survival setting and sense of tension.'], url: 'https://fortnite.gg/island/9973-6898-1230', code: '9973-6898-1230' }
};

const russianProjects = {
  nights: { ...projects.nights, eyebrow: 'СОЛО-РАЗРАБОТКА / UEFN / 2025 — ПО НАСТОЯЩЕЕ ВРЕМЯ',
    description: 'Долгосрочная игра на выживание, вдохновлённая 99 Nights in the Forest. Игроки отбиваются от всё более сложных волн врагов, исследуют карту в поисках оружия, собирают трофеи и сражаются с боссами.',
    stats: [['13,3 млн', 'минут в игре'], ['37,2 тыс.', 'добавлений в избранное'], ['Соло', 'разработка']],
    contribution: ['Самостоятельно разработал игру и продолжаю её поддерживать.', 'Реализовал игровые системы, волны врагов, боссов и коллекцию трофеев.', 'Разработал сохранение прогресса и версионированную статистику игроков.', 'Выпускаю обновления и развиваю проект после релиза.'] },
  sprite: { ...projects.sprite, eyebrow: 'КОМАНДНЫЙ ПРОЕКТ / UEFN / 2026',
    description: 'Игра о коллекционировании и обмене для компании до 16 игроков. Участники общаются, изучают коллекции друг друга и договариваются об обменах, чтобы собрать всех спрайтов.',
    stats: [['13,6 млн', 'минут в игре'], ['21,5 тыс.', 'добавлений в избранное'], ['UI и системы', 'моя зона ответственности']],
    contribution: ['Разработал все пользовательские интерфейсы проекта.', 'Реализовал игровые системы в составе команды.', 'Связал интерфейсы с логикой игры и действиями игроков.'] },
  summer: { ...projects.summer, eyebrow: 'КОМАНДА ИЗ ДВУХ ЧЕЛОВЕК / FORTNITE CREATIVE / 2023',
    description: 'Летняя соревновательная игра для 2–16 участников. Команды получают очки за прыжки в бассейн соперника и открывают улучшения для всей команды. Релиз — 26 мая 2023 года.',
    stats: [['3,6 млн', 'минут в игре'], ['743', 'пиковый онлайн'], ['Epic’s Picks', 'в подборке Epic Games']],
    contribution: ['Отвечал за основные идеи и геймдизайнерские решения в команде из двух человек.', 'Взял на себя архитектуру и основную работу по разработке.', 'Совместно со вторым билдером довёл игру до релиза.', 'Проект вошёл в Epic’s Picks и был отобран для летнего конкурса.'] },
  hospital: { ...projects.hospital, eyebrow: 'СОЛО-РАЗРАБОТКА / UEFN / 2026',
    description: 'Игра на выживание в зловещей ветеринарной больнице. Игроки исследуют секторы, находят улучшения и секреты и пытаются пережить встречи с существами в коридорах.',
    stats: [['Соло', 'разработка'], ['Звук', 'и атмосфера'], ['Механики', 'и ощущения от игры']],
    contribution: ['Самостоятельно разработал игру.', 'Уделил особое внимание атмосфере и звуковому оформлению.', 'Спроектировал механики, которые поддерживают напряжение и ощущение выживания.'] }
};
const contentProjects = isRussian ? russianProjects : projects;

const projectDialog = document.querySelector('#project-dialog');
const resumeDialog = document.querySelector('#resume-dialog');
let returnFocus = null;

const previews = {
  nights: { index: '01', role: 'SOLO DEVELOPMENT · UEFN', note: '13.3M minutes played. One long-term project.' },
  sprite: { index: '02', role: 'TEAM PROJECT · UI & SYSTEMS', note: '13.6M minutes played. All UI and systems by me.' },
  summer: { index: '03', role: 'TWO-PERSON TEAM · FORTNITE CREATIVE', note: '3.6M minutes played. Featured in Epic’s Picks.' },
  hospital: { index: '04', role: 'SOLO DEVELOPMENT · UEFN', note: 'Atmosphere, audio, and gameplay built together.' }
};
const russianPreviews = {
  nights: { index: '01', role: 'СОЛО-РАЗРАБОТКА · UEFN', note: '13,3 млн минут в игре. Долгосрочный соло-проект.' },
  sprite: { index: '02', role: 'КОМАНДА · ИНТЕРФЕЙСЫ И СИСТЕМЫ', note: '13,6 млн минут в игре. Все UI и системы — моя работа.' },
  summer: { index: '03', role: 'КОМАНДА ИЗ ДВУХ · FORTNITE CREATIVE', note: '3,6 млн минут в игре. Проект в подборке Epic’s Picks.' },
  hospital: { index: '04', role: 'СОЛО-РАЗРАБОТКА · UEFN', note: 'Атмосфера, звук и механики работают вместе.' }
};
const contentPreviews = isRussian ? russianPreviews : previews;
document.querySelectorAll('[data-preview]').forEach(button => {
  button.addEventListener('click', () => {
    const key = button.dataset.preview;
    const p = contentProjects[key];
    const preview = contentPreviews[key];
    document.querySelector('#preview-image').src = `${assetBase}assets/${p.image}.jpg`;
    document.querySelector('#preview-image').alt = ui.artwork(p.title);
    document.querySelector('#preview-index').textContent = `${preview.index} / 04`;
    document.querySelector('#preview-role').textContent = preview.role;
    document.querySelector('#preview-title').textContent = p.title;
    document.querySelector('#preview-note').textContent = preview.note;
    const open = document.querySelector('#preview-open');
    open.dataset.project = key;
    open.setAttribute('aria-label', ui.open(p.title));
    document.querySelectorAll('[data-preview]').forEach(b => {
      b.classList.toggle('active', b === button);
      b.setAttribute('aria-pressed', String(b === button));
    });
  });
});

function openDialog(dialog, trigger) {
  returnFocus = trigger;
  dialog.showModal();
  dialog.scrollTop = 0;
}

document.querySelector('#resume-open').addEventListener('click', event => openDialog(resumeDialog, event.currentTarget));
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    }
  });
  dialog.addEventListener('close', () => returnFocus?.focus({ preventScroll: true }));
});

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const kind = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b => {
      b.classList.toggle('active', b === button);
      b.setAttribute('aria-pressed', String(b === button));
    });
    let count = 0;
    document.querySelectorAll('.project').forEach(project => {
      project.hidden = kind !== 'all' && project.dataset.kind !== kind;
      if (!project.hidden) count++;
    });
    document.querySelector('.work-count').textContent = ui.count(count);
  });
});

projectDialog.addEventListener('click', async event => {
  const button = event.target.closest('.copy-code');
  if (!button) return;
  try {
    await navigator.clipboard.writeText(button.dataset.code);
    button.textContent = ui.copied;
    setTimeout(() => { if (button.isConnected) button.textContent = ui.copy; }, 2200);
  } catch {
    button.textContent = button.dataset.code;
  }
});

function preserveLanguageSection() {
  document.querySelectorAll('[data-language-path]').forEach(link => {
    link.href = link.dataset.languagePath + window.location.hash;
  });
}
preserveLanguageSection();
window.addEventListener('hashchange', preserveLanguageSection);
