class Body {
    constructor() {
        this.body = {};
    }

    add(key, value) {
        this.body[key] = value;
    }

    update(key, value) {
        this.body[key] = value;
    }

    get() {
        if (this.body != null) {
            return JSON.stringify(this.body);
        }
        else {
            return '';
        }
    }

    remove(key) {
        return delete this.body[key];
    }

    clear() {
        this.body = {};
    }
}

module.exports = Body;
