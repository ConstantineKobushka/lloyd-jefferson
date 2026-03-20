const mobileBackdrop = document.querySelector('.mobile-menu-backdrop');
const burgerMenuBtn = document.querySelector('.burger-menu-btn');

burgerMenuBtn.addEventListener('click', onBurgerMenuBtnClick);
mobileBackdrop.addEventListener('click', onMobileBackdropClick);

function onMobileBackdropClick(event) {
  if (event.target.closest('.mobile-menu-modal-btn')) {
    closeMobileMenu();
  }
  if (event.target.closest('.mobile-menu-link')) {
    closeMobileMenu();
  }
  if (event.target.closest('.mobile-menu-order-link')) {
    closeMobileMenu();
  }
}

function onBurgerMenuBtnClick() {
  mobileBackdrop.classList.add('is-open');
  document.body.classList.add('no-scroll');
}

function closeMobileMenu() {
  mobileBackdrop.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}
