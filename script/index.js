import { Card } from './Card.js';
import { initialCards } from './cards.js';

import { FormValidator, installation } from './FormValidator.js';

const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonOpenPopupMesto = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close-button');

const popupProfile = document.querySelector('#popup_edit-fio');
const popupMesto = document.querySelector('#popup_add-card');

const formProfile = document.querySelector('#popup__form_fio');
const nameInput = formProfile.querySelector('#name-input');
const aboutInput = formProfile.querySelector('#about-input');

const formCard = document.querySelector('#popup__form_card');
const cardName = formCard.querySelector('#card-name-input');
const cardImg = formCard.querySelector('#card-img-input');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about-self');

const cards = document.querySelector('.cards');

const profileFormValidate = new FormValidator(installation, formProfile);
profileFormValidate.enableValidation();
const cardFormValidate = new FormValidator(installation, formCard);
cardFormValidate.enableValidation();
export function openPopupFunction(popup) {
  popup.classList.add('popup_opened');
  document.body.addEventListener('keydown', closePopupEsc);
  popup.addEventListener('click', closePopupOverlay);
}
function closePopupFunction(popup) {
  document.body.removeEventListener('keydown', closePopupEsc);
  popup.removeEventListener('click', closePopupOverlay);
  popup.classList.remove('popup_opened');
}
function closePopupOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    closePopupFunction(evt.target);
  }
}
function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    closePopupFunction(document.querySelector('.popup_opened'));
  }
}

buttonOpenPopupMesto.addEventListener('click', () => {
  formCard.reset();
  openPopupFunction(popupMesto);
  cardFormValidate.resetError();
  cardFormValidate.activateButton();
});

buttonOpenPopupProfile.addEventListener('click', () => {
  openPopupFunction(popupProfile);
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  profileFormValidate.resetError();
  profileFormValidate.deactivateButton();
});

closeButtons.forEach(button => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopupFunction(popup));
});

initialCards.forEach(item => {
  const card = new Card(item, '#card-template');
  const cardEl = card.createCard();
  cards.append(cardEl);
});

formCard.addEventListener('submit', function (event) {
  event.preventDefault();
  const values = {};
  values.nameCard = cardName.value;
  values.alt = cardName.value;
  values.linkCard = cardImg.value;

  const card = new Card(values, '#card-template');
  const cardEl = card.createCard();
  cards.prepend(cardEl);

  closePopupFunction(popupMesto);
});

formProfile.addEventListener('submit', function (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  closePopupFunction(popupProfile);
});
