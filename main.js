(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r){var n=e.data,o=e.handleCardClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._templateSelector=r,this._name=n.cardName,this._link=n.cardLink,this._handleCardClick=o}var r,n;return r=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".card__heart"),this._trashboxButton=this._element.querySelector(".card__trashbox"),this._cardImage=this._element.querySelector(".card__img"),this._cardName=this._element.querySelector(".card__name"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardName.textContent=this._name,this._setEventListeners(),this._element}},{key:"_handleLikeClick",value:function(){this._likeButton.classList.toggle("card__heart_active")}},{key:"_deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){t._handleLikeClick()})),this._trashboxButton.addEventListener("click",(function(){t._deleteCard()})),this._cardImage.addEventListener("click",(function(){t._handleCardClick()}))}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._formElement=r,this._inputList=Array.from(this._formElement.querySelectorAll(e.inputSelector)),this._buttonElement=this._formElement.querySelector(e.submitButtonSelector)}var e,r;return e=t,(r=[{key:"_showInputError",value:function(t,e){var r=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._config.inputErrorClass),r.textContent=e,r.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._config.inputErrorClass),e.classList.remove(this._config.errorClass),e.textContent=""}},{key:"deactivateButton",value:function(){this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"activateButton",value:function(){this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.deactivateButton():this.activateButton()}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetErrors",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)}))}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,c(n.key),n)}}function c(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}var l=function(){function t(e){var r,n,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){"Escape"===t.key&&i.close()},(n=c(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=document.querySelector(e)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.body.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.body.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){t.close()})),this._popup.addEventListener("click",(function(e){e.currentTarget===e.target&&t.close()}))}}])&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===s(o)?o:String(o)),n)}var o}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},p.apply(this,arguments)}function y(t,e){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},y(t,e)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(n);if(o){var r=m(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._zoomImage=e._popup.querySelector(".popup__image"),e._zoomName=e._popup.querySelector(".popup__name-image"),e}return e=u,(r=[{key:"open",value:function(t){p(m(u.prototype),"open",this).call(this),this._zoomImage.src=t.cardLink,this._zoomName.textContent=t.cardName,this._zoomImage.alt=t.cardName}}])&&f(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(l);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===v(o)?o:String(o)),n)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},h.apply(this,arguments)}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(n);if(o){var r=S(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r,n=e.formSubmitCallback;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._formSubmitCallback=n,r._inputList=r._popup.querySelectorAll(".popup__input"),r._form=r._popup.querySelector(".popup__form"),r}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;h(S(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._formSubmitCallback(t._getInputValues())}))}},{key:"close",value:function(){h(S(u.prototype),"close",this).call(this),this._form.reset()}}])&&b(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(l);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===k(o)?o:String(o)),n)}var o}var E=function(){function t(e,r){var n=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._initialArray=n,this._renderer=o,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderItems",value:function(){var t=this;this._initialArray.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&w(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}var C=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(e.fio),this._about=document.querySelector(e.about)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return this._data={fio:this._name.textContent,about:this._about.textContent},this._data}},{key:"setUserInfo",value:function(t){this._name.textContent=t.fio,this._about.textContent=t.about}}])&&O(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),P={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_active"},L=document.querySelector(".profile__edit-button"),I=document.querySelector(".profile__add-button"),q=document.querySelector("#popup__form_fio"),B=q.querySelector("#name-input"),x=q.querySelector("#about-input"),T=document.querySelector("#popup__form_card"),R=new C({fio:".profile__name",about:".profile__about-self"}),N=function(t){return new r({data:t,handleCardClick:function(){V.open(t)}},"#card-template")},V=new d("#popup-image");V.setEventListeners();var z=new i(P,q);z.enableValidation();var A=new i(P,T);A.enableValidation();var D=new E({items:[{cardName:"Архыз",cardLink:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{cardName:"Челябинская область",cardLink:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{cardName:"Иваново",cardLink:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{cardName:"Камчатка",cardLink:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{cardName:"Холмогорский район",cardLink:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{cardName:"Байкал",cardLink:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(t){var e=N(t).createCard();D.addItem(e)}},".cards");D.renderItems();var U=new g("#popup_edit-fio",{formSubmitCallback:function(t){R.setUserInfo(t),U.close()}});U.setEventListeners();var M=new g("#popup_add-card",{formSubmitCallback:function(t){var e=N(t).createCard();D.addItem(e),M.close()}});M.setEventListeners(),I.addEventListener("click",(function(){T.reset(),M.open(),A.resetErrors(),A.deactivateButton()})),L.addEventListener("click",(function(){U.open();var t=R.getUserInfo();B.value=t.fio,x.value=t.about,z.resetErrors(),z.activateButton()}))})();