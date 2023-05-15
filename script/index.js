let openPopup = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__close-button');
let editPopup = document.querySelector('.popup');

let formElement = document.querySelector('.popup__form'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector('#name-input'); // Воспользуйтесь инструментом .querySelector()
let aboutInput = formElement.querySelector('#about-input'); // Воспользуйтесь инструментом .querySelector()

let pageTitle = document.querySelector('.profile__name');
let pageAbout = document.querySelector('.profile__about-self');

// Находим форму в DOM

function handleFormSubmit(evt) {
  evt.preventDefault();

  pageTitle.textContent = nameInput.value;
  pageAbout.textContent = aboutInput.value;
  closePopupFunction(editPopup);
}

function openPopupFunction(popup) {
  popup.classList.add('popup_opened');
  nameInput.value = pageTitle.textContent;
  aboutInput.value = pageAbout.textContent;
}

function closePopupFunction(popup) {
  popup.classList.remove('popup_opened');
}

openPopup.addEventListener('click', function () {
  openPopupFunction(editPopup);
});

closePopup.addEventListener('click', function () {
  closePopupFunction(editPopup);
});

formElement.addEventListener('submit', handleFormSubmit);
