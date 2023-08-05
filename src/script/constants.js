export const initialCards = [
  {
    cardName: 'Архыз',
    cardLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    cardName: 'Челябинская область',
    cardLink:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    cardName: 'Иваново',
    cardLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    cardName: 'Камчатка',
    cardLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    cardName: 'Холмогорский район',
    cardLink:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    cardName: 'Байкал',
    cardLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active'
};

// Кнопки
export const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
export const buttonOpenPopupMesto = document.querySelector('.profile__add-button');
export const buttonOpenPopupEditAvatar = document.querySelector('.profile__edit-avatar-button');

// Форма для редактирования профиля
export const formProfile = document.querySelector('#popup__form_fio');
export const nameInput = formProfile.querySelector('#name-input');
export const aboutInput = formProfile.querySelector('#about-input');

// Форма для создания карточки
export const formCard = document.querySelector('#popup__form_card');
export const formEditAvatar = document.querySelector('#popup__form_edit-avatar');
// const cardName = formCard.querySelector('#card-name-input');
// const cardImg = formCard.querySelector('#card-img-input');

// Переменная секции карточек для создания массива
export const cardsContainerSelector = '.cards';
