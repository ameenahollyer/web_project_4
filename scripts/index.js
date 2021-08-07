////////////////
//Templates
///////////////

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

//////////////////
//Declarations
/////////////////
let saveBtn = document.querySelector('#saveBtn');

let profileName = document.querySelector('.profile__name');
let profileCaption = document.querySelector('.profile__caption');

let formInput = document.querySelector('.popup__form');

let formElement = document.querySelector('.popup__form');

let popup = document.querySelector('.popup');

let profileSquare = document.querySelector('.profile__edit-button');

let popupClose = document.querySelector('.popup__close');

let nameInput = formInput.querySelector('#name');

let captionInput = formInput.querySelector('#caption');



/////////////////
///functions
/////////////////

function openForm() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    captionInput.value = profileCaption.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileCaption.textContent = captionInput.value;
    closePopup()
}


/////////////////
///Event Handlers
////////////////

formElement.addEventListener('submit', handleFormSubmit);

profileSquare.addEventListener('click', openForm);

popupClose.addEventListener('click', closePopup);