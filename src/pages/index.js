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
  cardsContainerSelector,
  buttonOpenPopupEditAvatar,
  formEditAvatar
} from '../script/constants.js';
import { Api } from '../script/components/Api';
import { PopupWithConfirm } from '../script/components/PopupWithConfirm';

const addUserInfo = new UserInfo({
  name: '.profile__name',
  about: '.profile__about-self',
  avatar: '.profile__avatar'
});

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-72/',
  headers: {
    authorization: 'fee7f70a-8ae2-4599-898e-afe7e7150d3b',
    'Content-Type': 'application/json'
  }
});

let userId = '';

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userInfo, initialCards]) => {
    userId = userInfo._id;
    addUserInfo.setUserInfo(userInfo);
    cardsSection.renderItems(initialCards);
  })
  .catch(err => {
    console.log(err);
  });

const createCard = cardData => {
  const newCard = new Card(
    cardData,
    '#card-template',
    {
      handleCardClick: (link, name) => {
        imagePopup.open(link, name);
      }
    },
    {
      handleTrashClick: cardEl => {
        popupConfirm.open(cardEl);
      }
    },
    {
      handleSetLike: cardEl => {
        api
          .setLike(cardEl.getId())
          .then(data => {
            cardEl.toggleLikeClick();
            cardEl.likeCounter(data);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    {
      handleSetDislike: cardEl => {
        api
          .removeLike(cardEl.getId())
          .then(data => {
            cardEl.toggleLikeClick();
            cardEl.likeCounter(data);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    userId
  );
  return newCard.createCard();
};

function renderCards(cardData) {
  cardsSection.addItem(createCard(cardData));
}

const cardsSection = new Section(renderCards, cardsContainerSelector);

const imagePopup = new PopupWithImage('#popup-image');
imagePopup.setEventListeners();

const popupProfile = new PopupWithForm('#popup_edit-fio', data => {
  popupProfile.renderSavingText(true);
  api
    .setUserInfo(data)
    .then(userInfo => {
      addUserInfo.setUserInfo(userInfo);
      popupProfile.close();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      popupProfile.renderSavingText(false);
    });
});

popupProfile.setEventListeners();

const popupMesto = new PopupWithForm('#popup_add-card', data => {
  popupMesto.renderSavingText(true);
  api
    .setInitialCards(data)
    .then(res => {
      cardsSection.addItem(createCard(res));
      popupMesto.close();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      popupMesto.renderSavingText(false);
    });
});
popupMesto.setEventListeners();

const popupEditAvatar = new PopupWithForm('#popup_edit-avatar', data => {
  popupEditAvatar.renderSavingText(true);
  api
    .setUserAvatar(data)
    .then(userInfo => {
      addUserInfo.setUserInfo(userInfo);
      popupEditAvatar.close();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      popupEditAvatar.renderSavingText(false);
    });
});
popupEditAvatar.setEventListeners();

const popupConfirm = new PopupWithConfirm('#popup_confirm', {
  handleCardDelete: cardEl => {
    api
      .removeCard(cardEl.id())
      .then(() => {
        popupConfirm.close(cardEl);
        cardEl.removeCard();
      })
      .catch(err => {
        console.log(err);
      });
  }
});
popupConfirm.setEventListeners();

const profileFormValidator = new FormValidator(validationConfig, formProfile);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(validationConfig, formCard);
cardFormValidator.enableValidation();

const editAvatarFormValidator = new FormValidator(validationConfig, formEditAvatar);
editAvatarFormValidator.enableValidation();

buttonOpenPopupMesto.addEventListener('click', () => {
  popupMesto.open();
  cardFormValidator.resetErrors();
  cardFormValidator.deactivateButton();
});

buttonOpenPopupProfile.addEventListener('click', () => {
  popupProfile.open();
  popupProfile.setInputValues(addUserInfo.getUserInfo());
  // const profileData = addUserInfo.getUserInfo();
  // nameInput.value = profileData.name;
  // aboutInput.value = profileData.about;
  profileFormValidator.resetErrors();
  profileFormValidator.activateButton();
});

buttonOpenPopupEditAvatar.addEventListener('click', () => {
  popupEditAvatar.open();
  editAvatarFormValidator.resetErrors();
  editAvatarFormValidator.activateButton();
});
