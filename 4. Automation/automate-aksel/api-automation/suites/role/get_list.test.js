const expect = require("chai").expect;
const Headers = require('../../base/headers');
const Role = require('../../features/role');

const headers = new Headers();

let api, order_type, order_by, page;
let authToken = process.env.AUTH_TOKEN;

const baseUrl = process.env.BASE_URL;
const getListPath = process.env.GET_LIST_ROLE_PATH;

const beforeEachTest = async () => {
    headers.add('Authorization', authToken);
    api = new Role(baseUrl, authToken);
}

describe('Get List', () => {
    beforeEach(beforeEachTest);
    test('with all users data', async () => {
        const response = await api.get_list(getListPath, headers);
        console.log('hai sayangg');
        // expect(response.statusCode).equal(200);
        // expect(response.body.status).equal('SUCCESS');
        // expect(response.body.message).equal('Get List Role Success');
        // expect(response.body.meta.per_page).equal(10);
        // expect(response.body.meta.page).equal(1);
        // expect(response.body.meta.order_by).equal('created_at');
        // expect(response.body.meta.order_type).equal('asc');

        
    })

});
