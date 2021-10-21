const previewModalWindow = document.querySelector('.popup_type_preview');
const previewImageElement = previewModalWindow.querySelector('.popup__preview-image');

const previewImageCaption = previewModalWindow.querySelector('.popup__preview-caption');


function openModalWindow(modalWindow) {
    modalWindow.classList.add('popup_opened')
    document.addEventListener('keydown', handleEscapeKey);
    modalWindow.addEventListener('click', handleOverlayClose);
}

function closeModalWindow(modalWindow) {
    modalWindow.classList.remove('popup_opened')
    document.removeEventListener('keydown', handleEscapeKey);
    modalWindow.removeEventListener('click', handleOverlayClose);
}

function handleEscapeKey(e) {
    const modalWindow = document.querySelector('.popup_opened');
    if (e.key === "Escape") {
        closeModalWindow(modalWindow);
    }
}

class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;

        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector(".elements__card").cloneNode(true);
        return cardElement;
    }

    _handleLikeIcon() {
        this._element.querySelector(".elements__button").classList.toggle("elements__button_active");
    }

    _handleDeleteCard() {
        this._element.remove();
    }

    _handlePreviewPicture() {
        openModalWindow(previewModalWindow);
        previewImageElement.src = this._data.link;
        previewImageElement.alt = this._data.name;
        previewImageCaption.textContent = this._data.name;

    }

    _setEventListeners() {

        this._element.querySelector(".elements__button").addEventListener("click", () => { this._handleLikeIcon() });

        this._element.querySelector(".elements__delete-button").addEventListener("click", () => { this._handleDeleteCard() });

        this._element.querySelector(".elements__image").addEventListener("click", () => { this._handlePreviewPicture() });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        console.log(this._element);


        this._element.querySelector(".elements__image").src = this._link;
        this._element.querySelector(".elements__place").textContent = this._name;

        return this._element;
    }


}

export default Card;