import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(selector, formSubmitCallback) {
    super(selector);
    this._formSubmitCallback = formSubmitCallback;
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._form = this._popup.querySelector('.popup__form');
    this._buttonElement = this._form.querySelector('.popup__button');
    this._buttonElement_Default = this._buttonElement.textContent;
  }

  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach(input => {
      if (data[input.name]) {
        input.value = data[input.name];
      }
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this._formSubmitCallback(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  renderSavingText(saving) {
    if (saving) {
      this._buttonElement.textContent = 'Сохранение...';
    } else {
      this._buttonElement.textContent = this._buttonElement_Default;
    }
  }
}
