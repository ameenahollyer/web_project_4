export default class Popup {
    constructor(popupSelector, popupOpenClass) {
        // popupSelector: String '.add_card_popup'
        // document.querySelector('.add_card_popup')
        this._popupElement = document.querySelector(popupSelector);
        this._popupClass = popupOpenClass;
    }

    open() {
        // this._popupElement we want to add open class
        this._popupElement.classList.add(this._popupOpenClass);
        //add handleEscKey evt listener 
    }

    close() {
        // this._popupElement we want to remove open class
        this._popupElement.classList.remove(this._popupOpenClass);
        //remove handleEscKey
    }

    _handleEscClose() {
        if (e.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        // add escape listener
        this._popupElement.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup') ||
                evt.target.classList.contains('popup__close')) {
                this.close();
            }
        })

    }
}