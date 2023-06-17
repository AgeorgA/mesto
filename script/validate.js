const installation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active'
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(installation.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(installation.errorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(installation.inputErrorClass);
  errorElement.classList.remove(installation.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, installation) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, installation);
  } else {
    hideInputError(formElement, inputElement, installation);
  }
};
const hasInvalidInput = inputList => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(installation.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(installation.inactiveButtonClass);
  }
};

const setEventListeners = (formElement, installation) => {
  const inputList = Array.from(formElement.querySelectorAll(installation.inputSelector));
  const buttonElement = formElement.querySelector(installation.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, installation);

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

function enableValidation(installation) {
  const formList = Array.from(document.querySelectorAll(installation.formSelector));
  formList.forEach(formElement => {
    formElement.addEventListener('submit', evt => {
      evt.preventDefault();
    });

    setEventListeners(formElement, installation);
  });
}

enableValidation(installation);
