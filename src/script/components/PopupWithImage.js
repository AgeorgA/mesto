import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._zoomImage = this._popup.querySelector('.popup__image');
    this._zoomName = this._popup.querySelector('.popup__name-image');
  }

  open(link, name) {
    super.open();
    this._zoomImage.src = link;
    this._zoomName.textContent = name;
    this._zoomImage.alt = name;
  }
}
