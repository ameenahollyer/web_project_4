    document.querySelector('.profile__square').addEventListener('click', function() {
        document.querySelector('.popup').classList.add('popup_opened');
    })

    document.querySelector('.popup__close').addEventListener('click', function() {
        document.querySelector('.popup').classList.remove('popup_opened');
    })