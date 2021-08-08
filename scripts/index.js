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

const cardTemplate = document.querySelector('#card-template').content.querySelector('.elements__card');

//////////////////
//Declarations
/////////////////
const saveBtn = document.querySelector('#saveBtn');

const profileName = document.querySelector('.profile__name');
const profileCaption = document.querySelector('.profile__caption');

const formInput = document.querySelector('.popup__form');

const formElement = document.querySelector('.popup__form');

const popup = document.querySelector('.popup');

const profileSquare = document.querySelector('.profile__edit-button');

const popupClose = document.querySelector('.popup__close');

const nameInput = formInput.querySelector('#name');

const captionInput = formInput.querySelector('#caption');

/////////////////
/// Wrappers
/////////////////

const placesWrap = document.querySelector('.elements__card');



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

initialCards.forEach((data => {
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.elements__image').style.backgroundImage = `url($[data.link])`;
    cardElement.querySelector('.elements__place').textContent = data.name;

    placesWrap.prepend(cardElement);
}));