class PopupWithImage extends Popup {

    open(popupImage, popupText) {
        super.open();
        this._popupElement.querySelector(".popup__preview-image").src = popupImage;
        this._popupElement.querySelector(".popup__preview-image").alt = popupText;
        this._popupElement.querySelector(".popup__preview-caption").textContent = popupText;

    }
}