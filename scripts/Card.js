class Card {
    constructor(data, cardSelector) {
        this._name = data._name;
        this._link = data._link;

        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector(".elements__card");
        return cardElement;
    }

    _setEventListeners() {
        //this is where we set up the events
    }

    generateCard() {
        this.element = this._getTemplate();
        console.log('card', this._element);
    }
};

export default Card;