     let saveBtn = document.querySelector('#saveBtn');

     let profileName = document.querySelector('.profile__name');
     let profileCaption = document.querySelector('.profile__caption');

     let formInput = document.querySelector('.popup__field');

     let formElement = document.querySelector('.popup__form');

     document.querySelector('.profile__square').addEventListener('click', function() {
         document.querySelector('.popup').classList.add('popup_opened');
     })

     document.querySelector('.popup__close').addEventListener('click', function() {
         document.querySelector('.popup').classList.remove('popup_opened');
     })

     function closePopup() {
         popup.classList.remove('popup_opened');
     }

     function handleFormSubmit(evt) {
         evt.preventDefault();
         let nameInput = formInput.querySelector('#name');
         let captionInput = formInput.querySelector('#caption');
         profileName.textContent = nameInput.value;
         profileCaption.textContent = captionInput.value;
         closePopup()
     }

     formElement.addEventListener('submit', handleFormSubmit);