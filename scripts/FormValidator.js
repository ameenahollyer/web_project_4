class FormValidator {
    constructor(config, formElement) {
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config._inputErrorClass;
        this._errorClass = config.errorClass;

        this._formElement = formElement;
    }

    _showInputError(inputElement) {
        const errorSpan = this._formElement.querySelector('#' + inputElement.id + '-error');
        inputElement.classList.add(this._inputErrorClass);
        errorSpan.classList.add(this._errorClass);
        errorSpan.textContent = inputElement.validationMessage;

    }

    _hideInputError(inputElement) {
        const errorSpan = this._formElement.querySelector('#' + inputElement.id + '-error');
        inputElement.classList.remove(this._inputErrorClass);
        errorSpan.textContent = '';
        errorSpan.classList.remove(this._errorClass);
    }

    _checkInputValidity(inputElement) {

    }

    _toggleButtonState(inputList, buttonElement) {

    }

    _hasInvalidInput(inputList) {

    }

    _setEventListeners() {
        console.log("why");
    }

    enableValidation() {
        this._formElement.addEventListener("submit", (evt) => evt.preventDefault());

        this._setEventListeners();
    }
}

//const formValidationConfig = {
//inputSelector: ".popup__input",
// submitButtonSelector: ".popup__button",
//inactiveButtonClass: "popup__button_disabled",
//inputErrorClass: "popup__input_type_error",
////errorClass: "popup__error_visible"
//}

//const addFormValidator = new FormValidator(formValidationConfig);
//addFormValidator.enableValidation();

export default FormValidator;