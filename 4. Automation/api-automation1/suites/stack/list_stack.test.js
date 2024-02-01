const expect = require("chai").expect;
const Headers = require('../../base/headers');
const Body = require('../../base/body');
const Stack = require('../../features/stack');

const body = new Body();
const headers = new Headers();

const baseUrl = process.env.BASE_URL;
const path = process.env.LIST_STACK_PATH;

let api;
let authToken = process.env.AUTH_TOKEN;

const beforeEachTest = async () => {
    headers.add('Authorization', authToken);
    api = new Stack(baseUrl, authToken);
}


describe('List stack', () => {
    beforeEach(beforeEachTest);
    test('with valid data', async () => {
        const response = await api.get_list(path, headers);
        expect(response.statusCode).equal(200);
        expect(response.body.status).equal('SUCCESS');
        expect(response.body.message).equal('Get List Base Stack Success');

        expect(response.body.meta.per_page).not.equal(null);
        expect(response.body.meta.page).not.equal(null);
        expect(response.body.meta.total).not.equal(null);
        expect(response.body.meta.order_by).not.equal(null);
        expect(response.body.meta.order_type).not.equal(null);

        expect(response.body.data.id).not.equal(null);
        expect(response.body.data.name).not.equal(null);
        expect(response.body.data.is_active).not.equal(null);
        expect(response.body.data.created_at).not.equal(null);
        expect(response.body.data.updated_at).not.equal(null);
    }),

    test('with specific per_page', async () => {
        const response = await api.get_list(path+"?per_page=5", headers);
        expect(response.statusCode).equal(200);
        expect(response.body.status).equal('SUCCESS');
        expect(response.body.message).equal('Get List Base Stack Success');

        expect(response.body.meta.per_page).equal(5);
        expect(response.body.meta.page).not.equal(null);
        expect(response.body.meta.total).not.equal(null);
        expect(response.body.meta.order_by).not.equal(null);
        expect(response.body.meta.order_type).not.equal(null);

        expect(response.body.data.id).not.equal(null);
        expect(response.body.data.name).not.equal(null);
        expect(response.body.data.is_active).not.equal(null);
        expect(response.body.data.created_at).not.equal(null);
        expect(response.body.data.updated_at).not.equal(null);
    }),

    test('with specific page', async () => {
        const response = await api.get_list(path+"?page=2", headers);
        expect(response.statusCode).equal(200);
        expect(response.body.status).equal('SUCCESS');
        expect(response.body.message).equal('Get List Base Stack Success');

        expect(response.body.meta.per_page).not.equal(null);
        expect(response.body.meta.page).equal(2);
        expect(response.body.meta.total).not.equal(null);
        expect(response.body.meta.order_by).not.equal(null);
        expect(response.body.meta.order_type).not.equal(null);

        expect(response.body.data.id).not.equal(null);
        expect(response.body.data.name).not.equal(null);
        expect(response.body.data.is_active).not.equal(null);
        expect(response.body.data.created_at).not.equal(null);
        expect(response.body.data.updated_at).not.equal(null);
    }),

    test('with specific order_by', async () => {
        const response = await api.get_list(path+"?order_by=updated_at", headers);
        expect(response.statusCode).equal(200);
        expect(response.body.status).equal('SUCCESS');
        expect(response.body.message).equal('Get List Base Stack Success');

        expect(response.body.meta.per_page).not.equal(null);
        expect(response.body.meta.page).not.equal(null);
        expect(response.body.meta.total).not.equal(null);
        expect(response.body.meta.order_by).equal('updated_at');
        expect(response.body.meta.order_type).not.equal(null);

        expect(response.body.data.id).not.equal(null);
        expect(response.body.data.name).not.equal(null);
        expect(response.body.data.is_active).not.equal(null);
        expect(response.body.data.created_at).not.equal(null);
        expect(response.body.data.updated_at).not.equal(null);
    }),

    test('with specific order_type', async () => {
        const response = await api.get_list(path+"?order_type=desc", headers);
        expect(response.statusCode).equal(200);
        expect(response.body.status).equal('SUCCESS');
        expect(response.body.message).equal('Get List Base Stack Success');

        expect(response.body.meta.per_page).not.equal(null);
        expect(response.body.meta.page).not.equal(null);
        expect(response.body.meta.total).not.equal(null);
        expect(response.body.meta.order_by).not.equal(null);
        expect(response.body.meta.order_type).equal('desc');

        expect(response.body.data.id).not.equal(null);
        expect(response.body.data.name).not.equal(null);
        expect(response.body.data.is_active).not.equal(null);
        expect(response.body.data.created_at).not.equal(null);
        expect(response.body.data.updated_at).not.equal(null);
    }),

    test('with specific combination per_page, page, order_by, order_type', async () => {
        const response = await api.get_list(path+"?per_page=5&page=2&order_by=updated_at&order_type=desc", headers);
        expect(response.statusCode).equal(200);
        expect(response.body.status).equal('SUCCESS');
        expect(response.body.message).equal('Get List Base Stack Success');

        expect(response.body.meta.per_page).equal(5);
        expect(response.body.meta.page).equal(2);
        expect(response.body.meta.total).not.equal(null);
        expect(response.body.meta.order_by).equal('updated_at');
        expect(response.body.meta.order_type).equal('desc');

        expect(response.body.data.id).not.equal(null);
        expect(response.body.data.name).not.equal(null);
        expect(response.body.data.is_active).not.equal(null);
        expect(response.body.data.created_at).not.equal(null);
        expect(response.body.data.updated_at).not.equal(null);
    }),

    test('with invalid token', async () => {
        authToken = 'invalidToken';
        headers.update('Authorization', authToken);
        api = new Stack(baseUrl, authToken);
        const response = await api.get_list(path, headers);
        expect(response.statusCode).equal(401);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('authentication failed');
    }),

    test('with expired token', async () => {
        authToken = 'eyJhbGciOiJSUzUxMiIsImtpZCI6InZSODBUMWo5M2gxUXp5a1hvMlVQQ3h4bTZ4aVlDVDFld0syX0lyUWRkZzQifQ.eyJpc3MiOiJQcml2eUlEIFByb3ZpZGVyIiwic3ViIjoiUHJpdnlJRCBQcm92aWRlciIsImlhdCI6MTY4OTg1NTMzMywiZXhwIjoxNjg5ODYyNTMzLCJqdGkiOiJjNTgxNTRiZC01YmVjLTQwYjQtYWFmMC1lNTg4MTNiNmYxZTkiLCJ1aWQiOiJHQUEzMTA3IiwidXNlciI6eyJwcml2eUlkIjoiR0FBMzEwNyIsInV1aWQiOiI1ZGJkNGE5Yi03ZjdkLTQzZmEtYmRmNy0wOWNiMDhiODVhYmMifSwiY2xhaW1zIjpbInB1YmxpYyJdfQ.xqmmAoIuRwySFaY6Yr_3S1bC9F3stckkINzNZHzwt0GCdPapELscHvlTRWIfXlQ7M_Ly0KYEW3TepKUdNGAUdpUX5AqzuHD9DInDQt8XBlhyOBtHG7Az28r9JToQ9vRRe6Io9uL_WfhrFkXNQWhmxiSsVELAtBPfLPrS2citAHL1n2iq178FwjU-9xR6_Lpwod-xD65lDNOY9TRlOt7lhOI5X1RAnP2hTCsujSO8Chljrqs3zZglwUqaqkT52Gq01cqT07bEhfyIhHLvkjxzzZmSCQfYsBMHW3ZCE4w1-5aJCf1e54NNX900HIjIJB_wBKn9inye4BKVQSlI-uzD4g';
        headers.update('Authorization', authToken);
        api = new Stack(baseUrl, authToken);
        const response = await api.get_list(path, headers);
        expect(response.statusCode).equal(401);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('authentication failed');
    })

});
