     let saveBtn = document.querySelector('#saveBtn');

     let profileName = document.querySelector('.profile__name');
     let profileCaption = document.querySelector('.profile__caption');

     let formInput = document.querySelector('.popup__form');

     let formElement = document.querySelector('.popup__form');

     let popup = document.querySelector('.popup');

     let profileSquare = document.querySelector('.profile__square');

     let popupClose = document.querySelector('.popup__close');

     let nameInput = formInput.querySelector('#name');

     let captionInput = formInput.querySelector('#caption');

     function openForm() {
         nameInput.value = profileName.textContent;
         captionInput.value = profileCaption.textContent;
     }


     profileSquare.addEventListener('click', function() {
         document.querySelector('.popup').classList.add('popup_opened');
         openForm();
     })

     popupClose.addEventListener('click', function() {
         document.querySelector('.popup').classList.remove('popup_opened');
     })

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