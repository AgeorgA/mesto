export class Card {
  constructor(
    data,
    templateSelector,
    { handleCardClick },
    { handleTrashClick },
    { handleSetLike },
    { handleSetDislike },
    userId
  ) {
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._handleSetLike = handleSetLike;
    this._handleSetDislike = handleSetDislike;

    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._userId = userId;
    this._ownerId = data.owner._id;
  }
  getId() {
    return this._cardId;
  }

  _getTemplate() {
    const cardEl = document
      .querySelector(this._templateSelector)
      .content.querySelector('.card')
      .cloneNode(true);
    return cardEl;
  }

  likeCounter(data) {
    this._likeCount.textContent = data.likes.length;
  }

  toggleLikeClick() {
    this._likeButton.classList.toggle('card__heart_active');
  }

  createCard() {
    this._element = this._getTemplate();
    // Переменные для класса, чтобы не было поисков в методах
    this._likeButton = this._element.querySelector('.card__heart');
    this._trashboxButton = this._element.querySelector('.card__trashbox');

    this._cardImage = this._element.querySelector('.card__img');
    this._cardName = this._element.querySelector('.card__name');
    this._likeCount = this._element.querySelector('.card__like-count');

    // // Создание карточки
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardName.textContent = this._name;
    this._likeCount.textContent = this._likes.length;

    this._trashboxButtonState();
    this._setEventListeners();
    return this._element;
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  _trashboxButtonState() {
    if (this._ownerId !== this._userId) {
      this._trashboxButton.remove();
      this._trashboxButton = null;
    }
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._likeButton.classList.contains('card__heart_active')
        ? this._handleSetDislike(this)
        : this._handleSetLike(this);
    });

    this._trashboxButton
      ? this._trashboxButton.addEventListener('click', () => {
          this._handleTrashClick(this);
        })
      : null;

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });
  }
}
