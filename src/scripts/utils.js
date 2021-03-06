export const placesWrap = document.querySelector('.elements');

export const addFormModalWindow = document.querySelector('.popup_type_add');

export function openModalWindow(modalWindow) {
    modalWindow.classList.add('popup_opened')
    document.addEventListener('keydown', handleEscapeKey);
    modalWindow.addEventListener('click', handleOverlayClose);
}

export function closeModalWindow(modalWindow) {
    modalWindow.classList.remove('popup_opened')
    document.removeEventListener('keydown', handleEscapeKey);
    modalWindow.removeEventListener('click', handleOverlayClose);
}

export function handleEscapeKey(e) {
    const modalWindow = document.querySelector('.popup_opened');
    if (e.key === "Escape") {
        closeModalWindow(modalWindow);
    }
}

export function handleOverlayClose(e) {
    const modalWindow = document.querySelector('.popup_opened');
    if (e.target.classList.contains('popup')) {
        closeModalWindow(modalWindow);
    }
}