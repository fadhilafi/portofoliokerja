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
        expect(response.statusCode).equal(200);
        expect(response.body.status).equal('SUCCESS');
        expect(response.body.message).equal('Get List Role Success');
        expect(response.body.meta.per_page).equal(10);
        expect(response.body.meta.page).equal(1);
        expect(response.body.meta.order_by).equal('created_at');
        expect(response.body.meta.order_type).equal('asc');

        for (let i = 0; i <= response.body.meta.per_page - 1; i++) {
            expect(response.body.data[i].id).not.equal(null);
            expect(response.body.data[i].role_name).not.equal(null);
            expect(response.body.data[i].created_at).not.equal(null);
            expect(response.body.data[i].updated_at).not.equal(null);
        };
    }),
        test('with specific order_by (created at)', async () => {
            order_by = 'created_at';
            const response = await api.get_list(`${getListPath}?order_by=${order_by}`, headers);
            expect(response.statusCode).equal(200);
            expect(response.body.status).equal('SUCCESS');
            expect(response.body.message).equal('Get List Role Success');
            expect(response.body.meta.per_page).equal(10);
            expect(response.body.meta.page).equal(1);
            expect(response.body.meta.order_by).equal('created_at');
            expect(response.body.meta.order_type).equal('asc');

            const data = response.body.data;
            const createdDates = data.map(item => item.created_at);

            for (let i = 0; i < createdDates.length - 1; i++) {
                const currentDate = new Date(createdDates[i]);
                const nextDate = new Date(createdDates[i + 1]);
                expect(currentDate <= nextDate).equal(true);
            }
        }),
        test('with specific order_by (updated at)', async () => {
            order_by = 'updated_at';
            const response = await api.get_list(`${getListPath}?order_by=${order_by}`, headers);
            expect(response.statusCode).equal(200);
            expect(response.body.status).equal('SUCCESS');
            expect(response.body.message).equal('Get List Role Success');
            expect(response.body.meta.per_page).equal(10);
            expect(response.body.meta.page).equal(1);
            expect(response.body.meta.order_by).equal('updated_at');
            expect(response.body.meta.order_type).equal('asc');

            const data = response.body.data;
            const updatedDates = data.map(item => item.updated_at);

            for (let i = 0; i < updatedDates.length - 1; i++) {
                const currentDate = new Date(updatedDates[i]);
                const nextDate = new Date(updatedDates[i + 1]);
                expect(currentDate <= nextDate).equal(true);
            }
        }),
        test('with specific page', async () => {
            page = 2;
            const response = await api.get_list(`${getListPath}?page=${page}`, headers);
            expect(response.statusCode).equal(200);
            expect(response.body.status).equal('SUCCESS');
            expect(response.body.message).equal('Get List Role Success');
            expect(response.body.meta.per_page).equal(10);
            expect(response.body.meta.page).equal(page);
            expect(response.body.meta.order_by).equal('created_at');
            expect(response.body.meta.order_type).equal('asc');

            for (let i = 0; i <= response.body.meta.per_page - 1; i++) {
                expect(response.body.data[i].id).not.equal(null);
                expect(response.body.data[i].role_name).not.equal(null);
                expect(response.body.data[i].created_at).not.equal(null);
                expect(response.body.data[i].updated_at).not.equal(null);
            };
        }),
        test('with specific page using minus', async () => {
            page = -2;
            const response = await api.get_list(`${getListPath}?page=${page}`, headers);
            expect(response.statusCode).equal(200);
            expect(response.body.status).equal('SUCCESS');
            expect(response.body.message).equal('Get List Role Success');
            expect(response.body.meta.per_page).equal(10);
            expect(response.body.meta.page).equal(1);
            expect(response.body.meta.order_by).equal('created_at');
            expect(response.body.meta.order_type).equal('asc');

            for (let i = 0; i <= response.body.meta.per_page - 1; i++) {
                expect(response.body.data[i].id).not.equal(null);
                expect(response.body.data[i].role_name).not.equal(null);
                expect(response.body.data[i].created_at).not.equal(null);
                expect(response.body.data[i].updated_at).not.equal(null);
            };
        }),
        test('with specific page using alphanumerik', async () => {
            page = '3a';
            const response = await api.get_list(`${getListPath}?page=${page}`, headers);
            expect(response.statusCode).equal(200);
            expect(response.body.status).equal('SUCCESS');
            expect(response.body.message).equal('Get List Role Success');
            expect(response.body.meta.per_page).equal(10);
            expect(response.body.meta.page).equal(1);
            expect(response.body.meta.order_by).equal('created_at');
            expect(response.body.meta.order_type).equal('asc');

            for (let i = 0; i <= response.body.meta.per_page - 1; i++) {
                expect(response.body.data[i].id).not.equal(null);
                expect(response.body.data[i].role_name).not.equal(null);
                expect(response.body.data[i].created_at).not.equal(null);
                expect(response.body.data[i].updated_at).not.equal(null);
            };
        }),
        test('with with specific page over maximum page', async () => {
            page = 50;
            const response = await api.get_list(`${getListPath}?page=${page}`, headers);
            expect(response.statusCode).equal(200);
            expect(response.body.status).equal('SUCCESS');
            expect(response.body.message).equal('Get List Role Success');
            expect(response.body.meta.per_page).equal(10);
            expect(response.body.meta.page).equal(50);
            expect(response.body.meta.order_by).equal('created_at');
            expect(response.body.meta.order_type).equal('asc');
            expect(response.body.data.length).equal(0);
        }),
        test('with asc order type', async () => {
            order_type = 'asc';
            const response = await api.get_list(`${getListPath}?order_type=${order_type}`, headers);
            expect(response.statusCode).equal(200);
            expect(response.body.status).equal('SUCCESS');
            expect(response.body.message).equal('Get List Role Success');
            expect(response.body.meta.per_page).equal(10);
            expect(response.body.meta.page).equal(1);
            expect(response.body.meta.order_by).equal('created_at');
            expect(response.body.meta.order_type).equal('asc');

            const data = response.body.data;
            const createdDates = data.map(item => item.created_at);

            for (let i = 0; i < createdDates.length - 1; i++) {
                const currentDate = new Date(createdDates[i]);
                const nextDate = new Date(createdDates[i + 1]);
                expect(currentDate <= nextDate).equal(true);
            }
        }),
        test('with desc order type', async () => {
            order_type = 'desc';
            const response = await api.get_list(`${getListPath}?order_type=${order_type}`, headers);
            expect(response.statusCode).equal(200);
            expect(response.body.status).equal('SUCCESS');
            expect(response.body.message).equal('Get List Role Success');
            expect(response.body.meta.per_page).equal(10);
            expect(response.body.meta.page).equal(1);
            expect(response.body.meta.order_by).equal('created_at');
            expect(response.body.meta.order_type).equal('desc');

            const data = response.body.data;
            const createdDates = data.map(item => item.created_at);

            for (let i = 0; i < createdDates.length - 1; i++) {
                const currentDate = new Date(createdDates[i]);
                const nextDate = new Date(createdDates[i + 1]);
                expect(nextDate <= currentDate).equal(true);
            }
        }),
        test('with invalid token', async () => {
            authToken = 'invalidToken';
            headers.update('Authorization', authToken);
            api = new Role(baseUrl, authToken);
            const response = await api.get_list(getListPath, headers);
            expect(response.statusCode).equal(401);
            expect(response.body.status).equal('ERROR');
            expect(response.body.message).equal('authentication failed');
        }),
        test('with expired token', async () => {
            authToken = 'eyJhbGciOiJSUzUxMiIsImtpZCI6InZSODBUMWo5M2gxUXp5a1hvMlVQQ3h4bTZ4aVlDVDFld0syX0lyUWRkZzQifQ.eyJpc3MiOiJQcml2eUlEIFByb3ZpZGVyIiwic3ViIjoiUHJpdnlJRCBQcm92aWRlciIsImlhdCI6MTY4OTg1NTMzMywiZXhwIjoxNjg5ODYyNTMzLCJqdGkiOiJjNTgxNTRiZC01YmVjLTQwYjQtYWFmMC1lNTg4MTNiNmYxZTkiLCJ1aWQiOiJHQUEzMTA3IiwidXNlciI6eyJwcml2eUlkIjoiR0FBMzEwNyIsInV1aWQiOiI1ZGJkNGE5Yi03ZjdkLTQzZmEtYmRmNy0wOWNiMDhiODVhYmMifSwiY2xhaW1zIjpbInB1YmxpYyJdfQ.xqmmAoIuRwySFaY6Yr_3S1bC9F3stckkINzNZHzwt0GCdPapELscHvlTRWIfXlQ7M_Ly0KYEW3TepKUdNGAUdpUX5AqzuHD9DInDQt8XBlhyOBtHG7Az28r9JToQ9vRRe6Io9uL_WfhrFkXNQWhmxiSsVELAtBPfLPrS2citAHL1n2iq178FwjU-9xR6_Lpwod-xD65lDNOY9TRlOt7lhOI5X1RAnP2hTCsujSO8Chljrqs3zZglwUqaqkT52Gq01cqT07bEhfyIhHLvkjxzzZmSCQfYsBMHW3ZCE4w1-5aJCf1e54NNX900HIjIJB_wBKn9inye4BKVQSlI-uzD4g';
            headers.update('Authorization', authToken);
            api = new Role(baseUrl, authToken);
            const response = await api.get_list(getListPath, headers);
            expect(response.statusCode).equal(401);
            expect(response.body.status).equal('ERROR');
            expect(response.body.message).equal('authentication failed');
        })
});
