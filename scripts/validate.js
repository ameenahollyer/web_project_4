const showInputError = (inputElement, formElement, settings) => {
    const errorSpan = formElement.querySelector('#' + inputElement.id + '-error');
    errorSpan.textContent = inputElement.validationMessage;
    inputElement.classList.add(settings.inputErrorClass);
    errorSpan.classList.add(settings.errorClass);
    console.log('error');
};

const hideInputError = (inputElement, formElement, settings) => {
    const errorSpan = formElement.querySelector('#' + inputElement.id + '-error');
    errorSpan.textContent = '';
};

const checkInputValidity = (inputElement, formElement, settings) => {
    if (!inputElement.validity.valid) {
        return showInputError(inputElement, formElement, settings);
        // if input is invalid, show error message
    }
    hideInputError(inputElement, formElement, settings);
    // if it is valid, remove all error messages. enable submit button
};

const hasInvalidInput = (inputElements) => {
    return !inputElements.every(inputEl => {
        return inputEl.validity.valid === true;
    })
}

const toggleButtonState = (inputElements, submitButton, settings) => {
    if (hasInvalidInput(inputElements)) {
        //disable button
        submitButton.disabled = true;
        //add error class button
        submitButton.classList.add(settings.inactiveButtonClass);

    } else {
        submitButton.disabled = false;
        submitButton.classList.remove(settings.inactiveButtonClass);
    }
}

const setEventListeners = (formElement, { submitButtonSelector, ...rest }) => {
    // grab submit button
    const submitButton = formElement.querySelector(submitButtonSelector);
    //const submitButton = formElement.querySelector('');
    // grab all inputs
    const inputElements = Array.from(formElement.querySelectorAll(rest.inputSelector));
    // loop through all inputs
    inputElements.forEach(inputElement => {
        inputElement.addEventListener("input", () => {
            // check validity
            checkInputValidity(inputElement, formElement, rest);
            // toggle button
            toggleButtonState(inputElements, submitButton, rest);
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