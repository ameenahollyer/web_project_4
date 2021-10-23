import { openModalWindow, closeModalWindow } from "./utils.js";
import { formValidationConfig } from "./index.js";

const previewModalWindow = document.querySelector('.popup_type_preview');
const previewImageElement = previewModalWindow.querySelector('.popup__preview-image');

const previewImageCaption = previewModalWindow.querySelector('.popup__preview-caption');

const addForm = document.querySelector('.popup__form_type_add');

const placeInput = addForm.querySelector('#title-input');

const linkInput = addForm.querySelector('#link-input');

const addFormEL = document.querySelector('.popup__form');


function addFormSubmit(evt) {
    evt.preventDefault();
    //const newCard = {
    // "name": placeInput.value,
    // "link": linkInput.value
    //}

    const newCard = new Card(formValidationConfig, addFormEL);
    const newCardElement = newCard.generateCard();
    renderCard(newCardElement, placesWrap);
    closeModalWindow(addFormModalWindow);
    evt.target.reset();
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
        previewImageElement.src = this._link;
        previewImageElement.alt = this._name;
        previewImageCaption.textContent = this.name;

    }

    _setEventListeners() {

        this._element.querySelector(".elements__button").addEventListener("click", () => { this._handleLikeIcon() });

        this._element.querySelector(".elements__delete-button").addEventListener("click", () => { this._handleDeleteCard() });

        this._element.querySelector(".elements__image").addEventListener("click", () => { this._handlePreviewPicture() });

        addForm.addEventListener('submit', addFormSubmit);
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        console.log(this._element);


        this._element.querySelector(".elements__image").src = this._link;
        this._element.querySelector(".elements__place").textContent = this._name;
        this._element.querySelector(".elements__place").alt = this._name;

        return this._element;
    }


}

export default Card;