import './index.css';

import { Card } from '../script/components/Card.js';
import { FormValidator } from '../script/components/FormValidator.js';
import { PopupWithImage } from '../script/components/PicturePopup.js';
import { PopupWithForm } from '../script/components/PopupWithForm.js';
import { Section } from '../script/components/Section.js';
import { UserInfo } from '../script/components/UserInfo.js';
import { initialCards, installation } from '../script/constants.js';

// Кнопки
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonOpenPopupMesto = document.querySelector('.profile__add-button');

// Форма для редактирования профиля
const formProfile = document.querySelector('#popup__form_fio');
const nameInput = formProfile.querySelector('#name-input');
const aboutInput = formProfile.querySelector('#about-input');

// Форма для создания карточки
const formCard = document.querySelector('#popup__form_card');
// const cardName = formCard.querySelector('#card-name-input');
// const cardImg = formCard.querySelector('#card-img-input');

// Переменная секции карточек для создания массива
const cards = '.cards';

const userInfo = new UserInfo({ fio: '.profile__name', about: '.profile__about-self' });

const createCard = data => {
  const newCard = new Card(
    {
      data: data,
      handleCardClick: () => {
        openZoomingPopup.open(data);
      }
    },
    '#card-template'
  );
  return newCard;
};

const openZoomingPopup = new PopupWithImage('#popup-image');
openZoomingPopup.setEventListeners();

const profileFormValidator = new FormValidator(installation, formProfile);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(installation, formCard);
cardFormValidator.enableValidation();

const cardList = new Section(
  {
    items: initialCards,
    renderer: initialCard => {
      const card = createCard(initialCard);
      const cardEl = card.createCard();
      cardList.addItem(cardEl);
    }
  },
  cards
);

cardList.renderItems();

const popupProfile = new PopupWithForm('#popup_edit-fio', {
  formSubmitCallback: formData => {
    userInfo.setUserInfo(formData);
    popupProfile.close();
  }
});
popupProfile.setEventListeners();

const popupMesto = new PopupWithForm('#popup_add-card', {
  formSubmitCallback: formData => {
    const card = createCard(formData);
    const cardEl = card.createCard();
    cardList.addItem(cardEl);
    popupMesto.close();
  }
});
popupMesto.setEventListeners();

buttonOpenPopupMesto.addEventListener('click', () => {
  formCard.reset();
  popupMesto.open();
  cardFormValidator.resetErrors();
  cardFormValidator.activateButton();
});

buttonOpenPopupProfile.addEventListener('click', () => {
  popupProfile.open();
  const profileData = userInfo.getUserInfo();
  nameInput.value = profileData.fio;
  aboutInput.value = profileData.about;
  profileFormValidator.resetErrors();
  profileFormValidator.deactivateButton();
});
