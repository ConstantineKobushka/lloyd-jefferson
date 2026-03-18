import iziToast from 'izitoast';

import { sendRequests } from './api';
import iziToastErrorIcon from '../img/icons/izitoast-error-icon.svg';

const form = document.querySelector('.work-together-form');
const backdrop = document.querySelector('.work-together-backdrop');
const closeBtn = document.querySelector('.work-together-modal-btn');
const modalTitle = document.querySelector('.work-together-modal-title');
const modaltext = document.querySelector('.work-together-modal-text');

form.addEventListener('submit', onFormSubmit);
backdrop.addEventListener('click', onBackdropClick);
closeBtn.addEventListener('click', onCloseBtnClick);
document.addEventListener('keydown', onDocumentKeyDown);

async function onFormSubmit(event) {
  event.preventDefault();
  const email = form.elements.email.value.toLowerCase().trim();
  const comment = form.elements.comments.value.trim();
  const userData = {
    email,
    comment,
  };

  try {
    const response = await sendRequests(userData);
    renderResponse(response.data);
    openModal();
    form.reset();
  } catch (error) {
    showErrorToast(error.message);
  }
}

const renderResponse = async ({ title, message }) => {
  modalTitle.textContent = title;
  modaltext.textContent = message;
};

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

function onCloseBtnClick() {
  closeModal();
}

function onDocumentKeyDown(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function openModal() {
  backdrop.classList.add('is-open');
  document.body.classList.add('no-scroll');
}

function closeModal() {
  backdrop.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}

function showErrorToast(message) {
  iziToast.error({
    title: 'Error',
    titleColor: '#fafafa',
    message,
    messageColor: '#fafafa',
    maxWidth: '385px',
    iconUrl: iziToastErrorIcon,
    position: 'topRight',
    closeOnEscape: true,
    backgroundColor: '#ef4040',
    progressBarColor: '#b51b1b',
    timeout: 3000,
  });
}
