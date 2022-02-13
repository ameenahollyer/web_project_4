class Section {
    constructor({ items, renderer }, containerSelector) {
        this._initialArray = items;
        this._renderer = renderer;


        this._container = document.querySelector(containerSelector);
    }

    renderer() {
        //use this._renderer to create the elements for rendering
        this._initialArray.forEach(data => {
            this._renderer(data);
        });
    }


    addItem(item) {
        this._container.append(item);
    }
}