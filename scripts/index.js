     let saveBtn = document.querySelector('#saveBtn');

     let profileName = document.querySelector('.profile__name');
     let profileCaption = document.querySelector('.profile__caption');

     let formInput = document.querySelector(".popup__field");
     let nameInput = formInput.querySelector("#name");
     let captionInput = formInput.querySelector("#caption");

     document.querySelector('.profile__square').addEventListener('click', function() {
         document.querySelector('.popup').classList.add('popup_opened');
     })

     document.querySelector('.popup__close').addEventListener('click', function() {
         document.querySelector('.popup').classList.remove('popup_opened');
     })

     saveBtn.addEventListener('click', function() {
         profileName.textContent = nameInput.value;
         profileCaption.textContent = captionInput.value;
         closeModal();
     })