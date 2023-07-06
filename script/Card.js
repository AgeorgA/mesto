export class Card {
  constructor(data, templateSelector, popupZoomImg) {
    this._templateSelector = templateSelector;
    this._nameCard = data.nameCard;
    this._linkCard = data.linkCard;
    this._popupZoomImg = popupZoomImg;
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
    // Переменные для класса, чтобы не было поисков в методах
    this._likeButton = this._element.querySelector('.card__heart');
    this._trashboxButton = this._element.querySelector('.card__trashbox');
    this._cardImage = this._element.querySelector('.card__img');
    this._cardName = this._element.querySelector('.card__name');
    // Создание карточки
    this._cardImage.src = this._linkCard;
    this._cardImage.alt = this._nameCard;
    this._cardName.textContent = this._nameCard;

    this._setEventListeners();
    return this._element;
  }

  _heartCard() {
    this._likeButton.classList.toggle('card__heart_active');
  }

  _deleteCard() {
    this._element.remove();
  }

  _handleOpenPopup() {
    this._popupZoomImg(this._linkCard, this._nameCard);
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._heartCard();
    });

    this._trashboxButton.addEventListener('click', () => {
      this._deleteCard();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleOpenPopup();
    });
  }
}
