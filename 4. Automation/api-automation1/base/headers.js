class Headers {
    constructor() {
        this.headers = new Map();
    }

    add(key, value) {
        this.headers.set(key, value);
    }

    update(key, value) {
        this.headers.set(key, value);
    }

    get() {
        return Object.fromEntries(this.headers);
    }

    remove(key) {
        return this.headers.delete(key);
    }

    clear() {
        this.headers.clear();
    }
}

module.exports = Headers;
