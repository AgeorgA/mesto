export class Card {
  constructor({ data, handleCardClick }, templateSelector) {
    this._templateSelector = templateSelector;
    this._name = data.cardName;
    this._link = data.cardLink;
    this._handleCardClick = handleCardClick;
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
    // // Создание карточки
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardName.textContent = this._name;

    this._setEventListeners();
    return this._element;
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle('card__heart_active');
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._trashboxButton.addEventListener('click', () => {
      this._deleteCard();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick();
    });
  }
}
