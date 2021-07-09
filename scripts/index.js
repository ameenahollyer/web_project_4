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

     function openForm() {
         popup.classList.add('popup_opened');
         nameInput.value = profileName.textContent;
         captionInput.value = profileCaption.textContent;
     }


     profileSquare.addEventListener('click', openForm);

     popupClose.addEventListener('click', closePopup);

     function closePopup() {
         popup.classList.remove('popup_opened');
     }

     function handleFormSubmit(evt) {
         evt.preventDefault();
         profileName.textContent = nameInput.value;
         profileCaption.textContent = captionInput.value;
         closePopup()
     }

     formElement.addEventListener('submit', handleFormSubmit);