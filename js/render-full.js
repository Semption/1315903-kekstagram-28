import {createCommentItem} from './comment-layout.js';

const clearExistsComments = () => {
  document.querySelector('.social__comments').innerHTML = '';
};

const hiddenCommentCout = () => {
  document.querySelector('.social__comment-count').classList.add('hidden');
};

const hiddenCommentsLoader = () => {
  document.querySelector('.comments-loader').classList.add('hidden');
};

const closeModal = () => {
  document.querySelector('.big-picture').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
};

const fixedBackPage = () => {
  document.querySelector('body').classList.add('modal-open');
};

const renderPopup = (data) => {
  document.querySelector('.big-picture').classList.remove('hidden');
  document.querySelector('.big-picture .big-picture__img img').setAttribute('src', data.url);
  document.querySelector('.big-picture .likes-count').textContent = data.likes;
  document.querySelector('.big-picture .comments-count').textContent = data.comments.length;
  document.querySelector('.big-picture .social__caption').textContent = data.description;
};

const renderComments = (data) => {
  data.comments
    .forEach((comment) => document.querySelector('.social__comments').appendChild(createCommentItem(comment)));
};

const closeFullImage = () => {
  const closeButton = document.querySelector('.big-picture__cancel');
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closeModal();
    }
  });
  closeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    closeModal();
  });
};

const openFullImage = (data) => {
  fixedBackPage();
  hiddenCommentCout();
  hiddenCommentsLoader();
  renderPopup(data);
  clearExistsComments();
  renderComments(data);
  closeFullImage();
};

export {openFullImage};