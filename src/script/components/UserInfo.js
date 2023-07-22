export class UserInfo {
  constructor(selectors) {
    this._name = document.querySelector(selectors.fio);
    this._about = document.querySelector(selectors.about);
  }

  getUserInfo() {
    this._data = {
      fio: this._name.textContent,
      about: this._about.textContent
    };

    return this._data;
  }

  setUserInfo(data) {
    this._name.textContent = data.fio;
    this._about.textContent = data.about;
  }
}
