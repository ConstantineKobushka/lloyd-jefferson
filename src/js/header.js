const themeControls = document.querySelector('.theme-controls');
const body = document.querySelector('body');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

themeControls.addEventListener('click', onThemeControlsClick);
menuBtn.addEventListener('click', onMenuBtnClick);

function onThemeControlsClick(event) {
  if (!event.target.matches('button')) return;

  Array.from(event.currentTarget.children).forEach(function (item) {
    item.classList.remove('active');
  });

  event.target.classList.add('active');

  const currentColor = event.target.dataset.color;
  body.id = currentColor;
}

function onMenuBtnClick() {
  menu.classList.toggle('active');
}
