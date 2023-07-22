import './index.css';

import { Card } from '../script/components/Card.js';
import { FormValidator } from '../script/components/FormValidator.js';
import { PopupWithImage } from '../script/components/PopupWithImage.js';
import { PopupWithForm } from '../script/components/PopupWithForm.js';
import { Section } from '../script/components/Section.js';
import { UserInfo } from '../script/components/UserInfo.js';
import {
  initialCards,
  validationConfig,
  buttonOpenPopupProfile,
  buttonOpenPopupMesto,
  formProfile,
  nameInput,
  aboutInput,
  formCard,
  cardsContainerSelector
} from '../script/constants.js';

const userInfo = new UserInfo({ fio: '.profile__name', about: '.profile__about-self' });

const createCard = data => {
  const newCard = new Card(
    {
      data: data,
      handleCardClick: () => {
        imagePopup.open(data);
      }
    },
    '#card-template'
  );
  return newCard;
};

const imagePopup = new PopupWithImage('#popup-image');
imagePopup.setEventListeners();

const profileFormValidator = new FormValidator(validationConfig, formProfile);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(validationConfig, formCard);
cardFormValidator.enableValidation();

const cardsSection = new Section(
  {
    items: initialCards,
    renderer: initialCard => {
      const card = createCard(initialCard);
      const cardEl = card.createCard();
      cardsSection.addItem(cardEl);
    }
  },
  cardsContainerSelector
);

cardsSection.renderItems();

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
    cardsSection.addItem(cardEl);
    popupMesto.close();
  }
});
popupMesto.setEventListeners();

buttonOpenPopupMesto.addEventListener('click', () => {
  formCard.reset();
  popupMesto.open();
  cardFormValidator.resetErrors();
  cardFormValidator.deactivateButton();
});

buttonOpenPopupProfile.addEventListener('click', () => {
  popupProfile.open();
  const profileData = userInfo.getUserInfo();
  nameInput.value = profileData.fio;
  aboutInput.value = profileData.about;
  profileFormValidator.resetErrors();
  profileFormValidator.activateButton();
});
