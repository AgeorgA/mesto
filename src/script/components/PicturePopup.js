import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._zoomImage = this._popup.querySelector('.popup__image');
    this._zoomName = this._popup.querySelector('.popup__name-image');
  }

  open(data) {
    super.open();
    this._zoomImage.src = data.link;
    this._zoomName.textContent = data.name;
    this._zoomImage.alt = data.name;
  }
}
