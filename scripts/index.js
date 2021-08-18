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

const editForm = document.querySelector('.popup__form_type_edit');

const addForm = document.querySelector('.popup__form_type_add');

const editFormModalWindow = document.querySelector('.popup_type_edit');

const addFormModalWindow = document.querySelector('.popup_type_add');

const editButton = document.querySelector('.profile__edit-button');

const editPopupClose = document.querySelector('.popup__close_edit');

const addPopupClose = document.querySelector('.popup__close_add');

const nameInput = editForm.querySelector('#name');

const captionInput = editForm.querySelector('#caption');

const placeInput = addForm.querySelector('#title');

const linkInput = addForm.querySelector('#link');

const addButton = document.querySelector('.profile__add-button');


//const likeButton = cardTemplate.querySelector('.elements__button');

/////////////////
/// Wrappers
/////////////////

const placesWrap = document.querySelector('.elements');



/////////////////
///functions
/////////////////

function openEditForm() {
    editFormModalWindow.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    captionInput.value = profileCaption.textContent;
}

function openAddForm() {
    addFormModalWindow.classList.add('popup_opened');
}

function closeEditPopup() {
    editFormModalWindow.classList.remove('popup_opened');
}

function closeAddPopup() {
    addFormModalWindow.classList.remove('popup_opened');
}

function editFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileCaption.textContent = captionInput.value;
    closeEditPopup()
}


function activeLikeButton(evt) {
    evt.target.classList.toggle('elements__button_active');
}

function renderCard(cardEl) {
    placesWrap.prepend(cardEl)
}

function generateCard(card) {
    const cardElement = cardTemplate.cloneNode(true);

    const likeButton = cardElement.querySelector('.elements__button');

    const cardName = document.querySelector('.elements__place');

    const cardImage = document.querySelector('.elements__image');

    function addFormSubmit(evt) {
        evt.preventDefault();
        const newCard = {
            "name": placeInput.value,
            "link": linkInput.value
        }
        generateCard(newCard);
        renderCard(newCard);
        closeAddPopup();
    }

    likeButton.addEventListener('click', activeLikeButton);

    addForm.addEventListener('submit', () => submit(card));

    cardElement.querySelector('.elements__image').src = card.link;
    cardElement.querySelector('.elements__place').textContent = card.name;

    return cardElement;
}


/////////////////
///Event Handlers
////////////////

editForm.addEventListener('submit', editFormSubmit);

editButton.addEventListener('click', openEditForm);

addButton.addEventListener('click', openAddForm);

editPopupClose.addEventListener('click', closeEditPopup);

addPopupClose.addEventListener('click', closeAddPopup);

initialCards.forEach((card => {
    const cardElement = generateCard(card);

    renderCard(cardElement);

    //placesWrap.prepend(cardElement);
}));


//addForm.addEventListener('submit', (evt) => addFormSubmit);

//addForm.addEventListener('submit', addFormSubmit);



//likeButton.addEventListener('click', activeLikeButton);