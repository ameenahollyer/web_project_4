class UserInfo {
    constructor({ userName, userTitle }, profileElement) {
        this._userName = userName;
        this._userTitle = userTitle;
        this._profileElement = document.querySelector(profileElement);
        this._profileInputs = this._profileElement.querySelectorAll(".popup__input");
    }

    getUserInfo() {
        const userInfo = {};
        this._profileInputs.forEach(input => {
            const name = input.name;
            const value = input.value;

            userInfo[name] = value;

            return userInfo;

        })

    }

    setUserInfo() {

    }
}