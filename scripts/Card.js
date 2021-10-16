class Card {
    constructor(data, cardSelector) {
        this._name = data._name;
        this._link = data._link;

        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector(".elements__card").cloneNode.true;
        return cardElement;
    }

    _handleLikeIcon() {

    }

    _handleDeleteCard() {

    }

    _handlePreviewPicture() {

    }

    _setEventListeners() {
        //this is where we set up the events
        console.warn("not done yet")
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        console.log(this._element);


        this._element.querySelector(".elements__image").style.backgroundImage = `url(${this._link})`;
        this._element.querySelector(".elements__caption").textContent = this._name;

        return this._element;
    }


}

export default Card;