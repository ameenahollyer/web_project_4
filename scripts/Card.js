class Card {
    constructor(data, cardSelector) {
        this._name = data._name;
        this._link = data._link;

        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector(".elements__card").cloneNode(true);
        return cardElement;
    }

    _setEventListeners() {
        //this is where we set up the events
        console.warn("not done yet")
    }

    generateCard() {
        this.element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector(".elements__image")
    }
};

export default Card;