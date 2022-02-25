class PopupWithForm extends Popup {
    constructor({ popupSelector, popupOpenClass, addFormSubmitCallback }) {
        super(popupSelector, popupOpenClass);
        this._formInputs = this._popupElement.querySelectorAll(".popup__input");
        this._addFormSubmitCallback = addFormSubmitCallback;

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
        super.setEventListeners();

        //add submit event handler to form
        this._popupElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._addFormSubmitCallback(this._getInputValues());
        })


        //add click event listener to close icon
        this._popupElement.addEventListener("click", () => {
            this._close();
        })

    }

    close() {
        super.close();
        this._popupElement.reset();

    }
}