const initialCards = [{
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanoise National Park",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];

////////////////
//Templates
///////////////

const cardTemplate = document.querySelector('#card-template').content;


//////////////////
//Declarations
/////////////////
const saveBtn = document.querySelector('#saveBtn');

const profileName = document.querySelector('.profile__name');
const profileCaption = document.querySelector('.profile__caption');

//const formElement = document.querySelector('.popup__form');

const editFormInput = document.querySelector('.popup__form_edit');

const addFormInput = document.querySelector('.popup__form_add');

const editFormModalWindow = document.querySelector('.popup_type_edit');

const addFormModalWindow = document.querySelector('.popup_type_add');

const profileSquare = document.querySelector('.profile__edit-button');

const popupClose = document.querySelector('.popup__close');

const nameInput = editFormInput.querySelector('#name');

const captionInput = editFormInput.querySelector('#caption');

const placeInput = addFormInput.querySelector('#title');

const linkInput = addFormInput.querySelector('#link');

const addButton = document.querySelector('.profile__add-button');

//const likeButton = cardTemplate.querySelector('.elements__button');

/////////////////
/// Wrappers
/////////////////

const placesWrap = document.querySelector('.elements');



/////////////////
///functions
/////////////////

function openForm() {
    editFormModalWindow.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    captionInput.value = profileCaption.textContent;
}

function closePopup() {
    editFormModalWindow.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileCaption.textContent = captionInput.value;
    closePopup()
}

function activeLikeButton(evt) {
    evt.target.classList.toggle('elements__button_active');
}


/////////////////
///Event Handlers
////////////////

editFormInput.addEventListener('submit', handleFormSubmit);

profileSquare.addEventListener('click', openForm);

addButton.addEventListener('click', openForm);

popupClose.addEventListener('click', closePopup);

initialCards.forEach((data => {
    const cardElement = cardTemplate.cloneNode(true);

    const likeButton = cardElement.querySelector('.elements__button');

    likeButton.addEventListener('click', activeLikeButton);

    cardElement.querySelector('.elements__image').src = data.link;
    cardElement.querySelector('.elements__place').textContent = data.name;

    placesWrap.prepend(cardElement);
}));

//likeButton.addEventListener('click', activeLikeButton);