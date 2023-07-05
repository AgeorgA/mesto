import { openPopupFunction } from './index.js';

export class Card {
  constructor(data, templateSelector) {
    this._templateSelector = templateSelector;
    this._nameCard = data.nameCard;
    this._linkCard = data.linkCard;
  }
  _getTemplate() {
    const cardEl = document
      .querySelector(this._templateSelector)
      .content.querySelector('.card')
      .cloneNode(true);
    return cardEl;
  }

  createCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.card__img').src = this._linkCard;
    this._element.querySelector('.card__img').alt = this._nameCard;
    this._element.querySelector('.card__name').textContent = this._nameCard;

    this._setEventListeners();
    return this._element;
  }

  _heartCard() {
    this._element.querySelector('.card__heart').classList.toggle('card__heart_active');
  }

  _deleteCard() {
    this._element.remove();
  }

  _openZoomingImg() {
    openPopupFunction(document.querySelector('#popup-image'));
    document.querySelector('.popup__image').src = this._linkCard;
    document.querySelector('.popup__image').alt = this._nameCard;
    document.querySelector('.popup__name-image').textContent = this._nameCard;
  }

  _setEventListeners() {
    this._element.querySelector('.card__heart').addEventListener('click', () => {
      this._heartCard();
    });

    this._element.querySelector('.card__trashbox').addEventListener('click', () => {
      this._deleteCard();
    });

    this._element.querySelector('.card__img').addEventListener('click', () => {
      this._openZoomingImg();
    });
  }
}
