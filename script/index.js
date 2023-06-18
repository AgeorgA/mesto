const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonOpenPopupMesto = document.querySelector('.profile__add-button');
const buttonProfileSubmit = document.querySelector('.popup__submit');
const buttonCardSubmit = document.querySelector('.popup__submit-card');

const closeButtons = document.querySelectorAll('.popup__close-button');

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
  hideInputError(formCard, cardName);
  hideInputError(formCard, cardImg);
  buttonCardSubmit.classList.add('popup__button_disabled');
  buttonCardSubmit.setAttribute('disabled', true);
});

buttonOpenPopupProfile.addEventListener('click', () => {
  openPopupFunction(popupProfile);
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  hideInputError(formProfile, nameInput);
  hideInputError(formProfile, aboutInput);
  buttonProfileSubmit.classList.remove('popup__button_disabled');
  buttonCardSubmit.removeAttribute('disabled');
});

closeButtons.forEach(button => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopupFunction(popup));
});

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
