const expect = require("chai").expect;
const Headers = require('../../base/headers');
const Body = require('../../base/body');
const Budget = require('../../features/budget');
const GenerateRandom = require('../../utils/generate_random');

const body = new Body();
const headers = new Headers();

const baseUrl = process.env.BASE_URL;
const path = process.env.CREATE_FUNC_BUDGET_PATH;

const randomIndex = GenerateRandom.number();
const name = `budget${randomIndex}`;
const function_id = `CORE${randomIndex}`;

let api, budgetId;
let authToken = process.env.AUTH_TOKEN;
let entToken = process.env.ENT_TOKEN;

const beforeEachTest = async () => {
    body.add('name', name);
    body.add('function_id', function_id);
    headers.add('Authorization', authToken);
    api = new Budget(baseUrl, authToken);
    const responseAdd = await api.create_func_budget(path, headers, body);
    if (responseAdd.statusCode == 200) {
        positionId = responseAdd.body.data.id;
    }
}

const afterEachTest = async () => {
    if (budgetId != null) {
        const deleteBudgetPath = process.env.DELETE_FUNC_BUDGET_PATH + budgetId;
        await api.delete_Budget(deleteBudgetPath, headers);
    } else {
        console.log('Function Budget is Not Exist');
    }
}

describe('Update Budget', () => {
    beforeEach(beforeEachTest);

    test.only('with valid data', async () => {
        body.update('name', name+"-update");
        const updateBudgetPath = process.env.UPDATE_FUNC_BUDGET_PATH + budgetId;
        const response = await api.update_func_budget(updateBudgetPath, headers, body);
        expect(response.statusCode).equal(200);
        expect(response.body.status).equal('OK');
        expect(response.body.message).equal('Update Function Budget Success');
        // expect(response.body.data.id).not.equal(null);
        // expect(response.body.data.name).not.equal(null);
        // expect(response.body.data.is_active).not.equal(null);
        // expect(response.body.data.created_at).not.equal(null);
        // expect(response.body.data.updated_at).not.equal(null);

        // positionId = response.body.data.id;
    }),

    test('with existing data', async () => {
        body.update('name', 'position-test-automation-1');
        const updatePositionPath = process.env.UPDATE_POSITION_PATH + positionId;
        const response = await api.update_position(updatePositionPath, headers, body);
        expect(response.statusCode).equal(422);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('position.already_exist');
    }),
    
    test('without input position data', async () => {
        body.update('name', '');
        const updatePositionPath = process.env.UPDATE_POSITION_PATH + positionId;
        const response = await api.update_position(updatePositionPath, headers, body);
        expect(response.statusCode).equal(422);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('data malformed');
        expect(response.body.errors[0].field).equal('name');
        expect(response.body.errors[0].error).equal('cannot be blank');
    }),
    
    test('with symbols', async () => {
        body.update('name', 'test^%');
        const updatePositionPath = process.env.UPDATE_POSITION_PATH + positionId;
        const response = await api.update_position(updatePositionPath, headers, body);
        expect(response.statusCode).equal(422);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('data malformed');
        expect(response.body.errors[0].field).equal('name');
        expect(response.body.errors[0].error).equal('must be among or combination these characters (a-z, A-Z, 0-9, space, enter, tab, comma(,), dot(.), question mark(?), exclamation mark(!), underscore(_), plus and minus(-+))');
    }),

    test('with emojis', async () => {
        body.update('name', 'test🙂');
        const updatePositionPath = process.env.UPDATE_POSITION_PATH + positionId;
        const response = await api.update_position(updatePositionPath, headers, body);
        expect(response.statusCode).equal(422);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('data malformed');
        expect(response.body.errors[0].field).equal('name');
        expect(response.body.errors[0].error).equal('must be among or combination these characters (a-z, A-Z, 0-9, space, enter, tab, comma(,), dot(.), question mark(?), exclamation mark(!), underscore(_), plus and minus(-+))');
    }),

    test('with HTML script data', async () => {
        body.update('name', '<script></script>');
        const updatePositionPath = process.env.UPDATE_POSITION_PATH + positionId;
        const response = await api.update_position(updatePositionPath, headers, body);
        expect(response.statusCode).equal(422);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('data malformed');
        expect(response.body.errors[0].field).equal('name');
        expect(response.body.errors[0].error).equal('must be among or combination these characters (a-z, A-Z, 0-9, space, enter, tab, comma(,), dot(.), question mark(?), exclamation mark(!), underscore(_), plus and minus(-+))');
    }),

    test('with invalid token', async () => {
        authToken = 'invalidToken';
        headers.update('Authorization', authToken);
        api = new Position(baseUrl, authToken);
        const updatePositionPath = process.env.UPDATE_POSITION_PATH + positionId;
        const response = await api.update_position(updatePositionPath, headers, body);
        expect(response.statusCode).equal(401);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('authentication failed');
    }),

    test('with expired token', async () => {
        authToken = 'eyJhbGciOiJSUzUxMiIsImtpZCI6InZSODBUMWo5M2gxUXp5a1hvMlVQQ3h4bTZ4aVlDVDFld0syX0lyUWRkZzQifQ.eyJpc3MiOiJQcml2eUlEIFByb3ZpZGVyIiwic3ViIjoiUHJpdnlJRCBQcm92aWRlciIsImlhdCI6MTY4OTg1NTMzMywiZXhwIjoxNjg5ODYyNTMzLCJqdGkiOiJjNTgxNTRiZC01YmVjLTQwYjQtYWFmMC1lNTg4MTNiNmYxZTkiLCJ1aWQiOiJHQUEzMTA3IiwidXNlciI6eyJwcml2eUlkIjoiR0FBMzEwNyIsInV1aWQiOiI1ZGJkNGE5Yi03ZjdkLTQzZmEtYmRmNy0wOWNiMDhiODVhYmMifSwiY2xhaW1zIjpbInB1YmxpYyJdfQ.xqmmAoIuRwySFaY6Yr_3S1bC9F3stckkINzNZHzwt0GCdPapELscHvlTRWIfXlQ7M_Ly0KYEW3TepKUdNGAUdpUX5AqzuHD9DInDQt8XBlhyOBtHG7Az28r9JToQ9vRRe6Io9uL_WfhrFkXNQWhmxiSsVELAtBPfLPrS2citAHL1n2iq178FwjU-9xR6_Lpwod-xD65lDNOY9TRlOt7lhOI5X1RAnP2hTCsujSO8Chljrqs3zZglwUqaqkT52Gq01cqT07bEhfyIhHLvkjxzzZmSCQfYsBMHW3ZCE4w1-5aJCf1e54NNX900HIjIJB_wBKn9inye4BKVQSlI-uzD4g';
        headers.update('Authorization', authToken);
        api = new Position(baseUrl, authToken);
        const updatePositionPath = process.env.UPDATE_POSITION_PATH + positionId;
        const response = await api.update_position(updatePositionPath, headers, body);
        expect(response.statusCode).equal(401);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('authentication failed');
    }),

    afterEach(afterEachTest);
});
