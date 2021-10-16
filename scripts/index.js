import FormValidator from "./formValidator.js";
import Card from "./Card.js";

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
/////////////////
const saveBtn = document.querySelector('#saveBtn');

const profileName = document.querySelector('.profile__name');
const profileCaption = document.querySelector('.profile__caption');

const editForm = document.querySelector('.popup__form_type_edit');

const addForm = document.querySelector('.popup__form_type_add');

const editFormModalWindow = document.querySelector('.popup_type_edit');

const addFormModalWindow = document.querySelector('.popup_type_add');

const previewModalWindow = document.querySelector('.popup_type_preview');

const editButton = document.querySelector('.profile__edit-button');

const editPopupClose = document.querySelector('.popup__close_edit');

const addPopupClose = document.querySelector('.popup__close_add');

const previewPopupClose = document.querySelector('.popup__close_type_preview');

const nameInput = editForm.querySelector('#name-input');

const captionInput = editForm.querySelector('#caption-input');

const placeInput = addForm.querySelector('#title-input');

const linkInput = addForm.querySelector('#link-input');

const addButton = document.querySelector('.profile__add-button');

const previewImageElement = previewModalWindow.querySelector('.popup__preview-image');

const previewImageCaption = previewModalWindow.querySelector('.popup__preview-caption');

const popupOverlay = document.querySelector('.popup');



/////////////////
/// Wrappers
/////////////////

const placesWrap = document.querySelector('.elements');



/////////////////
///functions
/////////////////

function handleOverlayClose(e) {
    const modalWindow = document.querySelector('.popup_opened');
    if (e.target.classList.contains('popup')) {
        closeModalWindow(modalWindow);
    }
}

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

function addFormSubmit(evt) {
    evt.preventDefault();
    const newCard = {
        "name": placeInput.value,
        "link": linkInput.value
    }
    const newCardElement = generateCard(newCard);
    renderCard(newCardElement);
    closeModalWindow(addFormModalWindow);
    evt.target.reset();
}


function handleClickLikeButton(evt) {
    evt.target.classList.toggle('elements__button_active');
}

function renderCard(data, wrap) {
    const card = new Card(data, cardTemplate).generateCard();
    wrap.prepend(card);
}


function generateCard(card) {
    const cardElement = cardTemplate.cloneNode(true);

    const likeButton = cardElement.querySelector('.elements__button');

    const deleteButton = cardElement.querySelector('.elements__delete-button');

    deleteButton.addEventListener("click", function() {
        const card = deleteButton.closest(".elements__card");
        card.remove();
    });

    likeButton.addEventListener('click', handleClickLikeButton);

    const imageEl = cardElement.querySelector('.elements__image');
    imageEl.src = card.link;
    imageEl.alt = card.name;
    cardElement.querySelector('.elements__place').textContent = card.name;

    imageEl.addEventListener('click', () => {
        openModalWindow(previewModalWindow);
        previewImageElement.src = card.link;
        previewImageElement.alt = card.name;
        previewImageCaption.textContent = card.name;
    });

    return cardElement;
}

// close by overlay function

function handleEscapeKey(e) {
    const modalWindow = document.querySelector('.popup_opened');
    if (e.key === "Escape") {
        closeModalWindow(modalWindow);
    }
}


/////////////////
///Event Handlers
////////////////

editForm.addEventListener('submit', editFormSubmit);

addForm.addEventListener('submit', addFormSubmit);

editButton.addEventListener('click', openEditForm);

editPopupClose.addEventListener('click', () => closeModalWindow(editFormModalWindow));

addButton.addEventListener('click', () => openModalWindow(addFormModalWindow));

addPopupClose.addEventListener('click', () => closeModalWindow(addFormModalWindow));

previewPopupClose.addEventListener('click', () => closeModalWindow(previewModalWindow));

initialCards.forEach((card => {
    const cardElement = generateCard(card);

    renderCard(cardElement);

}));

/// Validation
const addFormEL = addFormModalWindow.querySelector('.popup__form');
const editFormEL = editFormModalWindow.querySelector('.popup__form');

const formValidationConfig = {
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