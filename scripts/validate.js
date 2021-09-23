const showInputError = (inputElement) => {

};

const checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(inputElement);
        // if input is invalid, show error message
    } else {
        hideInputError();
    }
    // if it is valid, remove all error messages. enable submit button
};

const setEventListeners = (form, settings) => {
    // grab all inputs
    const inputElements = Array.from(form.querySelectorAll(settings.inputSelector));
    // loop through all inputs
    inputElements.forEach(inputElement => {
        inputElement.addEventListener("input", () => {
            checkInputValidity(inputElement);
            // check validity
        });
    });
};

const enableValidation = (settings) => {
    const formElements = Array.from(document.querySelectorAll(settings.formSelector));
    formElements.forEach(form => {
        form.addEventListener("submit", (evt) => evt.preventDefault());
        setEventListeners(form, settings);
    });
}

enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
});