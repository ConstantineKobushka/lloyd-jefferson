const themeControls = document.querySelector('.theme-controls');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

themeControls.addEventListener('click', onThemeControlsClick);
menuBtn.addEventListener('click', onMenuBtnClick);
document.addEventListener('keydown', onDocumentKeydown);
document.addEventListener('click', onDocumentClick);

init();

function init() {
  const savedColor = JSON.parse(localStorage.getItem('theme'));
  const currentColor = savedColor ? savedColor : 'blue';
  document.documentElement.dataset.theme = currentColor;
  themeControls
    .querySelector('.theme-controls-btn.current-color')
    .classList.remove('current-color');
  themeControls
    .querySelector(`[data-color=${currentColor}]`)
    .classList.add('current-color');
}

function onThemeControlsClick(event) {
  if (!event.target.matches('button')) return;

  themeControls
    .querySelector('.theme-controls-btn.current-color')
    .classList.remove('current-color');

  event.target.classList.add('current-color');

  const currentColor = event.target.dataset.color;
  document.documentElement.dataset.theme = currentColor;
  localStorage.setItem('theme', JSON.stringify(currentColor));
}

function onMenuBtnClick() {
  menu.classList.toggle('show-menu');
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', !expanded);
  menuBtn.blur();
}

function onDocumentKeydown(event) {
  if (event.key === 'Escape') {
    menu.classList.remove('show-menu');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
}

function onDocumentClick(event) {
  if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
    menu.classList.remove('show-menu');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
}
