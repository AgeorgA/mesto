const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonOpenPopupMesto = document.querySelector('.profile__add-button');

const buttonClosePopupProfile = document.querySelector('#close-fio');
const buttonClosePopupMesto = document.querySelector('#close-card');
const buttonClosePopupZooming = document.querySelector('#close-big-image');

const popupProfile = document.querySelector('#popup_edit-fio');
const popupMesto = document.querySelector('#popup_add-card');
const popupImage = document.querySelector('#popup-image');

const formProfile = document.querySelector('#popup__form_fio');
const nameInput = formProfile.querySelector('#name-input');
const aboutInput = formProfile.querySelector('#about-input');

const formCard = document.querySelector('#popup__form_card');
const cardName = formCard.querySelector('#card-name-input');
const cardImg = formCard.querySelector('#card-img-input');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about-self');

const template = document.querySelector('#card-template');
const templateContent = template.content;
const card = templateContent.querySelector('.card');
const cards = document.querySelector('.cards');

const zoomingImg = document.querySelector('.popup__image');
const zoomingName = document.querySelector('.popup__name-image');

const initialCards = [
  {
    nameCard: 'Архыз',
    linkCard: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    nameCard: 'Челябинская область',
    linkCard:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    nameCard: 'Иваново',
    linkCard: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    nameCard: 'Камчатка',
    linkCard: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    nameCard: 'Холмогорский район',
    linkCard:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    nameCard: 'Байкал',
    linkCard: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(function (item) {
  const newCard = createCard(item.nameCard, item.linkCard);
  cards.prepend(newCard);
});

function createCard(nameCard, linkCard) {
  const newCard = card.cloneNode(true);
  const heart = newCard.querySelector('.card__heart');
  const deleteButton = newCard.querySelector('.card__trashbox');
  const cardName = newCard.querySelector('.card__name');
  const imgEL = newCard.querySelector('.card__img');

  cardName.textContent = nameCard;
  imgEL.src = linkCard;
  imgEL.alt = nameCard;

  deleteButton.addEventListener('click', () => cards.removeChild(newCard));

  heart.addEventListener('click', () => heart.classList.toggle('card__heart_active'));

  imgEL.addEventListener('click', () => {
    openPopupFunction(popupImage);

    zoomingImg.src = imgEL.src;
    zoomingImg.alt = imgEL.alt;

    zoomingName.textContent = cardName.textContent;
  });

  return newCard;
}

function openPopupFunction(popup) {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

function closePopupFunction(popup) {
  popup.classList.remove('popup_opened');
}

buttonOpenPopupMesto.addEventListener('click', () => openPopupFunction(popupMesto));
buttonOpenPopupProfile.addEventListener('click', () => openPopupFunction(popupProfile));
buttonClosePopupMesto.addEventListener('click', () => closePopupFunction(popupMesto));
buttonClosePopupProfile.addEventListener('click', () => closePopupFunction(popupProfile));
buttonClosePopupZooming.addEventListener('click', () => closePopupFunction(popupImage));

formCard.addEventListener('submit', function (event) {
  event.preventDefault();

  const valueName = cardName.value;
  const valueImg = cardImg.value;
  const newCard = createCard(valueName, valueImg);

  cards.prepend(newCard);

  closePopupFunction(popupMesto);
});

formProfile.addEventListener('submit', function (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  closePopupFunction(popupProfile);
});
