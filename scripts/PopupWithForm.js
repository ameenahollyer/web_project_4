class PopupWithForm extends Popup {
    constructor(popupSelector, popupOpenClass, addFormSubmitCallback) {
        super(popupSelector, popupOpenClass);
        this._formInputs = this._popupElement.querySelectorAll(".popup__input");

    }

    _getInputValues() {
        const inputData = {}
        this._formInputs.forEach(input => {
            const name = input.name;
            const value = input.value;

            inputData[name] = value;
        });
        console.log(inputData);
        return inputData;
    }

    setEventListeners() {
        // add escape listener
        this._popupElement.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup') ||
                evt.target.classList.contains('popup__close')) {
                this.close();
            }
        })

        //add submit event handler to form
        //add click event listener to close icon

    }

    close() {
        super.close();
        this.reset();

    }
}