const openPopupFio = document.querySelector('.profile__edit-button');
const openPopupMesto = document.querySelector('.profile__add-button');

// const closePopup = document.querySelector('.popup__close-button');
const closePopupFio = document.querySelector('#close-fio');
const closePopupMesto = document.querySelector('#close-card');

// const editPopup = document.querySelector('.popup');
const popupEditFio = document.querySelector('#popup_edit-fio');
const popupAdd = document.querySelector('#popup_add-card');

const buttonName = document.querySelector('.popup__button');
const popupName = document.querySelector('.popup__title');

const formFio = document.querySelector('#popup__form_fio');
const nameInput = formFio.querySelector('#name-input');
const aboutInput = formFio.querySelector('#about-input');

const formCard = document.querySelector('#popup__form_card');
const CardNameInput = formCard.querySelector('#card-name-input');
const CardImgInput = formCard.querySelector('#card-img-input');

const pageTitle = document.querySelector('.profile__name');
const pageAbout = document.querySelector('.profile__about-self');

const template = document.querySelector('#card-template');
const templateContent = template.content;
const card = templateContent.querySelector('.card');
const cards = document.querySelector('.cards');

const bigImagePlace = document.querySelector('#popup-image');
const closeBigImageButton = document.querySelector('.popup-image__close');

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
  const CardName = newCard.querySelector('.card__name');
  const imgEL = newCard.querySelector('.card__img');

  CardName.textContent = nameCard;
  imgEL.src = linkCard;
  imgEL.alt = nameCard;

  deleteButton.addEventListener('click', () => cards.removeChild(newCard));

  heart.addEventListener('click', () => heart.classList.toggle('card__heart_active'));

  imgEL.addEventListener('click', () => {
    bigImagePlace.classList.add('popup_opened');
    const bigImageImg = document.querySelector('.popup-image__image');
    const bigImageName = document.querySelector('.popup-image__name');

    bigImageImg.src = imgEL.src;
    bigImageImg.alt = imgEL.alt;
    bigImageName.textContent = CardName.textContent;
  });

  return newCard;
}

function closeBigImagePlace(popup) {
  popup.classList.remove('popup_opened');
}

function openPopupAdd(popup) {
  popup.classList.add('popup_opened');
  CardNameInput.value = null;
  CardImgInput.value = null;
}

function openPopupFunction(popup) {
  popup.classList.add('popup_opened');
  nameInput.value = pageTitle.textContent;
  aboutInput.value = pageAbout.textContent;
}

function closePopupFunction(popup) {
  popup.classList.remove('popup_opened');
}

function closePopupAdd(popup) {
  popup.classList.remove('popup_opened');
}

openPopupMesto.addEventListener('click', () => openPopupAdd(popupAdd));
openPopupFio.addEventListener('click', () => openPopupFunction(popupEditFio));
closePopupMesto.addEventListener('click', () => closePopupAdd(popupAdd));
closePopupFio.addEventListener('click', () => closePopupFunction(popupEditFio));
closeBigImageButton.addEventListener('click', () => closeBigImagePlace(bigImagePlace));

formCard.addEventListener('submit', function (event) {
  event.preventDefault();

  const valueName = CardNameInput.value;
  const valueImg = CardImgInput.value;
  const newCard = createCard(valueName, valueImg);

  cards.prepend(newCard);

  closePopupAdd(popupAdd);
});

formFio.addEventListener('submit', function (evt) {
  evt.preventDefault();

  pageTitle.textContent = nameInput.value;
  pageAbout.textContent = aboutInput.value;

  closePopupFunction(popupEditFio);
});
