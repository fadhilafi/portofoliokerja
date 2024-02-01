const supertest = require('supertest');

class Api {
    constructor(baseUrl, auth) {
        this.baseUrl = baseUrl;
        this.auth = auth;
        this.request = supertest(baseUrl);
    }

    async get(path, headers) {
        const response = await this.request.get(path)
            .set(headers.get())
            .set('Authorization', this.auth)
        
        return response;
    }

    async post(path, headers, body) {
        if (body != null) {
            body = body.get();
        } else {
            body = null;
        }
        const response = await this.request.post(path)
            .set(headers.get())
            .set('Authorization', this.auth)
            .send(body);
        
        return response;
    }

    async put(path, headers, body) {
        const response = await this.request.put(path)
            .set(headers.get())
            .set('Authorization', this.auth)
            .send(body.get());

        return response;
    }

    async delete(path, headers) {
        const response = await this.request.delete(path)
            .set(headers.get())
            .set('Authorization', this.auth);

        return response;
    }
}

module.exports = Api;
