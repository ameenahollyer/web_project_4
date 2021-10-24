import FormValidator from "./formValidator.js";
import Card from "./Card.js";
import { openModalWindow, closeModalWindow, addFormSubmit } from "./utils.js";

const initialCards = [{
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg",
    },
    {
        name: "Vanoise National Park",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg",
    }
];

////////////////
//Templates
///////////////

const cardTemplate = document.querySelector('#card-template').content;


//////////////////
//Elements
////////////////

const profileName = document.querySelector('.profile__name');
const profileCaption = document.querySelector('.profile__caption');

const editForm = document.querySelector('.popup__form_type_edit');

const editFormModalWindow = document.querySelector('.popup_type_edit');

const addFormModalWindow = document.querySelector('.popup_type_add');

const editButton = document.querySelector('.profile__edit-button');

const editPopupClose = document.querySelector('.popup__close_edit');

const addPopupClose = document.querySelector('.popup__close_add');

const previewPopupClose = document.querySelector('.popup__close_type_preview');

const nameInput = editForm.querySelector('#name-input');

const captionInput = editForm.querySelector('#caption-input');

const addButton = document.querySelector('.profile__add-button');

const previewModalWindow = document.querySelector('.popup_type_preview');

const addForm = document.querySelector('.popup__form_type_add');



/////////////////
/// Wrappers
/////////////////

const placesWrap = document.querySelector('.elements');



/////////////////
///functions
/////////////////


function openEditForm() {
    openModalWindow(editFormModalWindow);
    nameInput.value = profileName.textContent;
    captionInput.value = profileCaption.textContent;
}


function editFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileCaption.textContent = captionInput.value;
    closeModalWindow(editFormModalWindow);
}

export function renderCard(data, wrap) {
    const card = new Card(data, '#card-template').generateCard();
    wrap.prepend(card)

}



/////////////////
///Event Handlers
////////////////

editForm.addEventListener('submit', editFormSubmit);

editButton.addEventListener('click', openEditForm);

editPopupClose.addEventListener('click', () => closeModalWindow(editFormModalWindow));

addButton.addEventListener('click', () => openModalWindow(addFormModalWindow));

addForm.addEventListener('submit', addFormSubmit);

addPopupClose.addEventListener('click', () => closeModalWindow(addFormModalWindow));

previewPopupClose.addEventListener('click', () => closeModalWindow(previewModalWindow));

initialCards.forEach((cardElement => {
    renderCard(cardElement, placesWrap);
}));



/// Validation
const addFormEL = addFormModalWindow.querySelector('.popup__form');
const editFormEL = editFormModalWindow.querySelector('.popup__form');

export const formValidationConfig = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
}

const addFormValidator = new FormValidator(formValidationConfig, addFormEL);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(formValidationConfig, editFormEL);
editFormValidator.enableValidation();