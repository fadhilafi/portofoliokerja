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
const name = `position-test-automation-${number}`;

let api, positionId;
let authToken = process.env.AUTH_TOKEN;

const beforeEachTest = async () => {
    body.add('name', name);
    headers.add('Authorization', authToken);
    api = new Position(baseUrl, authToken);
}

const afterEachTest = async () => {
    if (positionId != null) {
        const deletePositionPath = process.env.DELETE_POSITION_PATH + positionId;
        await api.delete_position(deletePositionPath, headers);
    } else {
        console.log('Position is Not Exist');
    }
}

describe('Create position', () => {
    beforeEach(beforeEachTest);
    test('with valid data', async () => {
        const response = await api.create_position(path, headers, body);
        expect(response.statusCode).equal(201);
        expect(response.body.status).equal('SUCCESS');
        expect(response.body.message).equal('Create Base Position Success');
        expect(response.body.data.id).not.equal(null);
        expect(response.body.data.name).not.equal(null);
        expect(response.body.data.is_active).not.equal(null);
        expect(response.body.data.created_at).not.equal(null);
        expect(response.body.data.updated_at).not.equal(null);

        positionId = response.body.data.id;
    }),

    test('with existing data', async () => {
        body.update('name', 'position-test-automation-1');
        const response = await api.create_position(path, headers, body);
        expect(response.statusCode).equal(422);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('position.already_exist');
    }),
    
    test('without input position data', async () => {
        body.update('name', '');
        const response = await api.create_position(path, headers, body);
        expect(response.statusCode).equal(422);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('data malformed');
        expect(response.body.errors[0].field).equal('name');
        expect(response.body.errors[0].error).equal('cannot be blank');
    }),
    
    test('with symbols', async () => {
        body.update('name', 'test^%');
        const response = await api.create_position(path, headers, body);
        expect(response.statusCode).equal(422);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('data malformed');
        expect(response.body.errors[0].field).equal('name');
        expect(response.body.errors[0].error).equal('must be among or combination these characters (a-z, A-Z, 0-9, space, enter, tab, comma(,), dot(.), question mark(?), exclamation mark(!), underscore(_), plus and minus(-+))');
    }),

    test('with emojis', async () => {
        body.update('name', 'test🙂');
        const response = await api.create_position(path, headers, body);
        expect(response.statusCode).equal(422);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('data malformed');
        expect(response.body.errors[0].field).equal('name');
        expect(response.body.errors[0].error).equal('must be among or combination these characters (a-z, A-Z, 0-9, space, enter, tab, comma(,), dot(.), question mark(?), exclamation mark(!), underscore(_), plus and minus(-+))');
    }),

    test('with HTML script data', async () => {
        body.update('name', '<script></script>');
        const response = await api.create_position(path, headers, body);
        expect(response.statusCode).equal(422);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('data malformed');
        expect(response.body.errors[0].field).equal('name');
        expect(response.body.errors[0].error).equal('must be among or combination these characters (a-z, A-Z, 0-9, space, enter, tab, comma(,), dot(.), question mark(?), exclamation mark(!), underscore(_), plus and minus(-+))');
    }),

    test('with invalid token', async () => {
        authToken = authToken+"invalidToken";
        headers.update('Authorization', authToken);
        api = new Position(baseUrl, authToken);
        const response = await api.create_position(path, headers, body);
        expect(response.statusCode).equal(401);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('error request with response from GET https://stg-oauth-aksel.privy.id/api/v1/profile');
    }),

    test('with expired token', async () => {
        authToken = 'Bearer eyJhbGciOiJSUzUxMiIsImtpZCI6InZSODBUMWo5M2gxUXp5a1hvMlVQQ3h4bTZ4aVlDVDFld0syX0lyUWRkZzQifQ.eyJpc3MiOiJQcml2eUlEIFByb3ZpZGVyIiwic3ViIjoiUHJpdnlJRCBQcm92aWRlciIsImlhdCI6MTY4OTg1NTMzMywiZXhwIjoxNjg5ODYyNTMzLCJqdGkiOiJjNTgxNTRiZC01YmVjLTQwYjQtYWFmMC1lNTg4MTNiNmYxZTkiLCJ1aWQiOiJHQUEzMTA3IiwidXNlciI6eyJwcml2eUlkIjoiR0FBMzEwNyIsInV1aWQiOiI1ZGJkNGE5Yi03ZjdkLTQzZmEtYmRmNy0wOWNiMDhiODVhYmMifSwiY2xhaW1zIjpbInB1YmxpYyJdfQ.xqmmAoIuRwySFaY6Yr_3S1bC9F3stckkINzNZHzwt0GCdPapELscHvlTRWIfXlQ7M_Ly0KYEW3TepKUdNGAUdpUX5AqzuHD9DInDQt8XBlhyOBtHG7Az28r9JToQ9vRRe6Io9uL_WfhrFkXNQWhmxiSsVELAtBPfLPrS2citAHL1n2iq178FwjU-9xR6_Lpwod-xD65lDNOY9TRlOt7lhOI5X1RAnP2hTCsujSO8Chljrqs3zZglwUqaqkT52Gq01cqT07bEhfyIhHLvkjxzzZmSCQfYsBMHW3ZCE4w1-5aJCf1e54NNX900HIjIJB_wBKn9inye4BKVQSlI-uzD4g';
        headers.update('Authorization', authToken);
        api = new Position(baseUrl, authToken);
        const response = await api.create_position(path, headers, body);
        expect(response.statusCode).equal(401);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('authentication failed: error checking time expired');
     }),

     test('with invalid method auth', async () => {
        authToken = 'Basic Auth eyJhbGciOiJSUzUxMiIsImtpZCI6InZSODBUMWo5M2gxUXp5a1hvMlVQQ3h4bTZ4aVlDVDFld0syX0lyUWRkZzQifQ.eyJpc3MiOiJQcml2eUlEIFByb3ZpZGVyIiwic3ViIjoiUHJpdnlJRCBQcm92aWRlciIsImlhdCI6MTY4OTg1NTMzMywiZXhwIjoxNjg5ODYyNTMzLCJqdGkiOiJjNTgxNTRiZC01YmVjLTQwYjQtYWFmMC1lNTg4MTNiNmYxZTkiLCJ1aWQiOiJHQUEzMTA3IiwidXNlciI6eyJwcml2eUlkIjoiR0FBMzEwNyIsInV1aWQiOiI1ZGJkNGE5Yi03ZjdkLTQzZmEtYmRmNy0wOWNiMDhiODVhYmMifSwiY2xhaW1zIjpbInB1YmxpYyJdfQ.xqmmAoIuRwySFaY6Yr_3S1bC9F3stckkINzNZHzwt0GCdPapELscHvlTRWIfXlQ7M_Ly0KYEW3TepKUdNGAUdpUX5AqzuHD9DInDQt8XBlhyOBtHG7Az28r9JToQ9vRRe6Io9uL_WfhrFkXNQWhmxiSsVELAtBPfLPrS2citAHL1n2iq178FwjU-9xR6_Lpwod-xD65lDNOY9TRlOt7lhOI5X1RAnP2hTCsujSO8Chljrqs3zZglwUqaqkT52Gq01cqT07bEhfyIhHLvkjxzzZmSCQfYsBMHW3ZCE4w1-5aJCf1e54NNX900HIjIJB_wBKn9inye4BKVQSlI-uzD4g';
        headers.update('Authorization', authToken);
        api = new Position(baseUrl, authToken);
        const response = await api.create_position(path, headers, body);
        expect(response.statusCode).equal(401);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('authentication failed');
    }),

    afterEach(afterEachTest);
});
