import { Popup } from './Popup.js';

export class PopupWithConfirm extends Popup {
  constructor(popupSelector, { handleCardDelete }) {
    super(popupSelector);
    this._handleCardDelete = handleCardDelete;
    this._form = this._popup.querySelector('.popup__form');
  }

  open(cardEl) {
    super.open();
    this._cardEl = cardEl;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this._handleCardDelete(this._cardEl);
    });
  }
}
