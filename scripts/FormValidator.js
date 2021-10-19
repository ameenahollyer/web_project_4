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
        if (!inputElement.validity.valid) {
            return this._showInputError(inputElement);
            // if input is invalid, show error message
        }
        this._hideInputError(inputElement);
        // if it is valid, remove all error messages. enable submit button
    }

    _hasInvalidInput(inputList) {
        return !inputList.every(inputEl => {
            return inputEl.validity.valid === true;
        })
    }

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            //disable button
            buttonElement.disabled = true;
            //add error class button
            buttonElement.classList.add(this._inactiveButtonClass);

        } else {
            buttonElement.disabled = false;
            buttonElement.classList.remove(this._inactiveButtonClass);
        }
    }

    _setEventListeners(inputElements) {
        inputElements.this._inputSelector(inputElement => {
            inputElement.addEventListener("input", () => {
                // check validity
                checkInputValidity(inputElement);
                // toggle button
                toggleButtonState(inputElements);
            });
        });
    }

    enableValidation() {
        this._formElement.addEventListener("submit", (evt) => evt.preventDefault());

        this._setEventListeners();
    }
};

export default FormValidator;

//const formValidationConfig = {
//inputSelector: ".popup__input",
// submitButtonSelector: ".popup__button",
//inactiveButtonClass: "popup__button_disabled",
//inputErrorClass: "popup__input_type_error",
////errorClass: "popup__error_visible"
//}

//const addFormValidator = new FormValidator(formValidationConfig);
//addFormValidator.enableValidation();