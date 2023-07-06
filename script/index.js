import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards, installation } from './constants.js';

// Кнопки
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonOpenPopupMesto = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close-button');

// Попапы
const popupProfile = document.querySelector('#popup_edit-fio');
const popupMesto = document.querySelector('#popup_add-card');
const popupZoomImg = document.querySelector('#popup-image');

// Форма для редактирования профиля
const formProfile = document.querySelector('#popup__form_fio');
const nameInput = formProfile.querySelector('#name-input');
const aboutInput = formProfile.querySelector('#about-input');

// Начальные значения для редактирования профиля
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about-self');

// Форма для создания карточки
const formCard = document.querySelector('#popup__form_card');
const cardName = formCard.querySelector('#card-name-input');
const cardImg = formCard.querySelector('#card-img-input');

// Переменные для открытия увеличенной картинки
const zoomImage = document.querySelector('.popup__image');
const zoomName = document.querySelector('.popup__name-image');

// Переменная секции карточек для создания массива
const cards = document.querySelector('.cards');

const profileFormValidator = new FormValidator(installation, formProfile);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(installation, formCard);
cardFormValidator.enableValidation();

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.body.addEventListener('keydown', closePopupByEsc);
  popup.addEventListener('click', closePopupByOverlay);
}
function closePopup(popup) {
  document.body.removeEventListener('keydown', closePopupByEsc);
  popup.removeEventListener('click', closePopupByOverlay);
  popup.classList.remove('popup_opened');
}
function closePopupByOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.target);
  }
}
function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}
// Открытие попапа с увеличенной картинкой
const openZoomingPopup = (link, name) => {
  zoomImage.src = link;
  zoomName.textContent = name;
  zoomImage.alt = name;

  openPopup(popupZoomImg);
};

buttonOpenPopupMesto.addEventListener('click', () => {
  formCard.reset();
  openPopup(popupMesto);
  cardFormValidator.resetErrors();
  cardFormValidator.activateButton();
});

buttonOpenPopupProfile.addEventListener('click', () => {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  profileFormValidator.resetErrors();
  profileFormValidator.deactivateButton();
});

closeButtons.forEach(button => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

const createCard = (values, templateSelector, openZoomingPopup) => {
  const newCard = new Card(values, templateSelector, openZoomingPopup);
  return newCard.createCard();
};

initialCards.forEach(item => {
  const cardEl = createCard(item, '#card-template', openZoomingPopup);
  cards.append(cardEl);
});

formCard.addEventListener('submit', function (event) {
  event.preventDefault();
  const values = {
    nameCard: cardName.value,
    linkCard: cardImg.value
  };

  const cardEl = createCard(values, '#card-template', openZoomingPopup);
  cards.prepend(cardEl);

  closePopup(popupMesto);
});

formProfile.addEventListener('submit', function (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  closePopup(popupProfile);
});
