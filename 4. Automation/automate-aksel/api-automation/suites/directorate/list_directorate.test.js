const expect = require("chai").expect;
const Headers = require('../../base/headers');
const Body = require('../../base/body');
const Directorate = require('../../features/directorate');

// const body = new Body();
const headers = new Headers();

const baseUrl = process.env.BASE_URL;
const path = process.env.GET_LIST_DIRECTORATE_PATH;


let api;
let authToken = process.env.AUTH_TOKEN;
let entToken = process.env.ENT_TOKEN;

const beforeEachTest = async () => {
    headers.add('Authorization', authToken);
    headers.add('Enterprise-Token', entToken);
    api = new Directorate(baseUrl, authToken);
}


describe('List Directorate', () => {
    beforeEach(beforeEachTest);
    test('with valid data', async () => {
        const response = await api.get_list(path, headers);
        expect(response.statusCode).equal(200);
        // expect(response.body.status).equal('OK');
        expect(response.body.message).equal('Success')
    })
});
