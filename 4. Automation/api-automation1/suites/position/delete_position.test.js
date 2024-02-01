const expect = require("chai").expect;
const Headers = require('../../base/headers');
const Body = require('../../base/body');
const Position = require('../../features/position');
const GenerateRandom = require('../../utils/generate_random');

const body = new Body();
const headers = new Headers();

const baseUrl = process.env.BASE_URL;
const path = process.env.CREATE_POSITION_PATH;

const number = GenerateRandom.number();
const name = `position-test-automation-delete-${number}`;

let api, positionId;
let authToken = process.env.AUTH_TOKEN;

const beforeEachTest = async () => {
    body.add('name', name);
    headers.add('Authorization', authToken);
    api = new Position(baseUrl, authToken);
    const responseAdd = await api.create_position(path, headers, body);
    if (responseAdd.statusCode == 201) {
        positionId = responseAdd.body.data.id;
    }
}

const afterEachTest = async () => {
    const getPositionPath = process.env.DETAIL_POSITION_PATH + positionId;
    const responseGetID = await api.get_detail(getPositionPath, headers);
    getListCode = responseGetID.body.code;
    if (getListCode == 200) {
        console.log('Position is still Exist');
    }
}

describe('Delete position', () => {
    beforeEach(beforeEachTest);

    test('with valid id data', async () => {
        const deletePositionPath = process.env.DELETE_POSITION_PATH + positionId;
        const response = await api.delete_position(deletePositionPath, headers);
        expect(response.statusCode).equal(200);
        expect(response.body.status).equal('SUCCESS');
        expect(response.body.message).equal('Delete Base Position With ID ' +positionId+ ' Success');
    }),

    test('with unexisting id data', async () => {
        body.update('name', 'position-test-automation-1');
        const deletePositionPath = process.env.DELETE_POSITION_PATH + positionId + "x00";
        const response = await api.delete_position(deletePositionPath, headers);
        expect(response.statusCode).equal(404);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('id must be valid format UUID');
    }),

    test('without input id data', async () => {
        const deletePositionPath = process.env.DELETE_POSITION_PATH + ":id";
        const response = await api.delete_position(deletePositionPath, headers);
        expect(response.statusCode).equal(404);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal("id can't be blank");
    }),

    test('with invalid token', async () => {
        authToken = 'invalidToken';
        headers.update('Authorization', authToken);
        api = new Position(baseUrl, authToken);
        const deletePositionPath = process.env.DELETE_POSITION_PATH + positionId;
        const response = await api.delete_position(deletePositionPath, headers);
        expect(response.statusCode).equal(401);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('authentication failed');
    }),

    test('with expired token', async () => {
        authToken = 'eyJhbGciOiJSUzUxMiIsImtpZCI6InZSODBUMWo5M2gxUXp5a1hvMlVQQ3h4bTZ4aVlDVDFld0syX0lyUWRkZzQifQ.eyJpc3MiOiJQcml2eUlEIFByb3ZpZGVyIiwic3ViIjoiUHJpdnlJRCBQcm92aWRlciIsImlhdCI6MTY4OTg1NTMzMywiZXhwIjoxNjg5ODYyNTMzLCJqdGkiOiJjNTgxNTRiZC01YmVjLTQwYjQtYWFmMC1lNTg4MTNiNmYxZTkiLCJ1aWQiOiJHQUEzMTA3IiwidXNlciI6eyJwcml2eUlkIjoiR0FBMzEwNyIsInV1aWQiOiI1ZGJkNGE5Yi03ZjdkLTQzZmEtYmRmNy0wOWNiMDhiODVhYmMifSwiY2xhaW1zIjpbInB1YmxpYyJdfQ.xqmmAoIuRwySFaY6Yr_3S1bC9F3stckkINzNZHzwt0GCdPapELscHvlTRWIfXlQ7M_Ly0KYEW3TepKUdNGAUdpUX5AqzuHD9DInDQt8XBlhyOBtHG7Az28r9JToQ9vRRe6Io9uL_WfhrFkXNQWhmxiSsVELAtBPfLPrS2citAHL1n2iq178FwjU-9xR6_Lpwod-xD65lDNOY9TRlOt7lhOI5X1RAnP2hTCsujSO8Chljrqs3zZglwUqaqkT52Gq01cqT07bEhfyIhHLvkjxzzZmSCQfYsBMHW3ZCE4w1-5aJCf1e54NNX900HIjIJB_wBKn9inye4BKVQSlI-uzD4g';
        headers.update('Authorization', authToken);
        api = new Position(baseUrl, authToken);
        const deletePositionPath = process.env.DELETE_POSITION_PATH + positionId;
        const response = await api.delete_position(deletePositionPath, headers);
        expect(response.statusCode).equal(401);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('authentication failed');
    }),

    afterEach(afterEachTest);
});
