const expect = require("chai").expect;
const Headers = require('../../base/headers');
const Body = require('../../base/body');
const Stack = require('../../features/stack');
const GenerateRandom = require('../../utils/generate_random');

const body = new Body();
const headers = new Headers();

const baseUrl = process.env.BASE_URL;
const path = process.env.CREATE_STACK_PATH;

const number = GenerateRandom.number();
const name = `stack-test-automation-${number}`;

let api, stackId;
let authToken = process.env.AUTH_TOKEN;

const beforeEachTest = async () => {
    body.add('name', name);
    headers.add('Authorization', authToken);
    api = new Stack(baseUrl, authToken);
}

const afterEachTest = async () => {
    if (stackId != null) {
        const deleteStackPath = process.env.DELETE_STACK_PATH + stackId;
        await api.delete_stack(deleteStackPath, headers);
    } else {
        console.log('Stack is Not Exist');
    }
}

describe('Create stack', () => {
    beforeEach(beforeEachTest);
    test('with valid data', async () => {
        const response = await api.create_stack(path, headers, body);
        expect(response.statusCode).equal(201);
        expect(response.body.status).equal('SUCCESS');
        expect(response.body.message).equal('Create Base Stack Success');
        expect(response.body.data.id).not.equal(null);
        expect(response.body.data.name).not.equal(null);
        expect(response.body.data.is_active).not.equal(null);
        expect(response.body.data.created_at).not.equal(null);
        expect(response.body.data.updated_at).not.equal(null);

        stackId = response.body.data.id;
    }),

    test('with existing data', async () => {
        body.update('name', 'stack-test-automation-1');
        const response = await api.create_stack(path, headers, body);
        expect(response.statusCode).equal(422);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('stack.already_exist');
    }),
    
    test('without input stack data', async () => {
        body.update('name', '');
        const response = await api.create_stack(path, headers, body);
        expect(response.statusCode).equal(422);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('data malformed');
        expect(response.body.errors[0].field).equal('name');
        expect(response.body.errors[0].error).equal('cannot be blank');
    }),
    
    test('with symbols', async () => {
        body.update('name', 'test^%');
        const response = await api.create_stack(path, headers, body);
        expect(response.statusCode).equal(422);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('data malformed');
        expect(response.body.errors[0].field).equal('name');
        expect(response.body.errors[0].error).equal('must be among or combination these characters (a-z, A-Z, 0-9, space, enter, tab, comma(,), dot(.), question mark(?), exclamation mark(!), underscore(_), plus and minus(-+))');
    }),

    test('with emojis', async () => {
        body.update('name', 'test🙂');
        const response = await api.create_stack(path, headers, body);
        expect(response.statusCode).equal(422);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('data malformed');
        expect(response.body.errors[0].field).equal('name');
        expect(response.body.errors[0].error).equal('must be among or combination these characters (a-z, A-Z, 0-9, space, enter, tab, comma(,), dot(.), question mark(?), exclamation mark(!), underscore(_), plus and minus(-+))');
    }),

    test('with HTML script data', async () => {
        body.update('name', '<script></script>');
        const response = await api.create_stack(path, headers, body);
        expect(response.statusCode).equal(422);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('data malformed');
        expect(response.body.errors[0].field).equal('name');
        expect(response.body.errors[0].error).equal('must be among or combination these characters (a-z, A-Z, 0-9, space, enter, tab, comma(,), dot(.), question mark(?), exclamation mark(!), underscore(_), plus and minus(-+))');
    }),

    test('with invalid token', async () => {
        authToken = 'invalidToken';
        headers.update('Authorization', authToken);
        api = new Stack(baseUrl, authToken);
        const response = await api.create_stack(path, headers, body);
        expect(response.statusCode).equal(401);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('authentication failed');
    }),

    test('with expired token', async () => {
        authToken = 'eyJhbGciOiJSUzUxMiIsImtpZCI6InZSODBUMWo5M2gxUXp5a1hvMlVQQ3h4bTZ4aVlDVDFld0syX0lyUWRkZzQifQ.eyJpc3MiOiJQcml2eUlEIFByb3ZpZGVyIiwic3ViIjoiUHJpdnlJRCBQcm92aWRlciIsImlhdCI6MTY4OTg1NTMzMywiZXhwIjoxNjg5ODYyNTMzLCJqdGkiOiJjNTgxNTRiZC01YmVjLTQwYjQtYWFmMC1lNTg4MTNiNmYxZTkiLCJ1aWQiOiJHQUEzMTA3IiwidXNlciI6eyJwcml2eUlkIjoiR0FBMzEwNyIsInV1aWQiOiI1ZGJkNGE5Yi03ZjdkLTQzZmEtYmRmNy0wOWNiMDhiODVhYmMifSwiY2xhaW1zIjpbInB1YmxpYyJdfQ.xqmmAoIuRwySFaY6Yr_3S1bC9F3stckkINzNZHzwt0GCdPapELscHvlTRWIfXlQ7M_Ly0KYEW3TepKUdNGAUdpUX5AqzuHD9DInDQt8XBlhyOBtHG7Az28r9JToQ9vRRe6Io9uL_WfhrFkXNQWhmxiSsVELAtBPfLPrS2citAHL1n2iq178FwjU-9xR6_Lpwod-xD65lDNOY9TRlOt7lhOI5X1RAnP2hTCsujSO8Chljrqs3zZglwUqaqkT52Gq01cqT07bEhfyIhHLvkjxzzZmSCQfYsBMHW3ZCE4w1-5aJCf1e54NNX900HIjIJB_wBKn9inye4BKVQSlI-uzD4g';
        headers.update('Authorization', authToken);
        api = new Stack(baseUrl, authToken);
        const response = await api.create_stack(path, headers, body);
        expect(response.statusCode).equal(401);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('authentication failed');
    }),

    afterEach(afterEachTest);
});
