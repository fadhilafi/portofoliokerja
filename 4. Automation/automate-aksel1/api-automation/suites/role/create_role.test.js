const expect = require("chai").expect;
const Headers = require('../../base/headers');
const Body = require('../../base/body');
const Role = require('../../features/role');
const GenerateRandom = require('../../utils/generate_random');

const body = new Body();
const headers = new Headers();

const baseUrl = process.env.BASE_URL;
const path = process.env.CREATE_ROLE_PATH;

const number = GenerateRandom.number();
const name = `role-test-automation-${number}`;

let api, roleId;
let authToken = process.env.AUTH_TOKEN;

const beforeEachTest = async () => {
    body.add('role_name', name);
    headers.add('Authorization', authToken);
    api = new Role(baseUrl, authToken);
}

const afterEachTest = async () => {
    if (roleId != null) {
        const deleteRolePath = process.env.DELETE_ROLE_PATH + roleId;
        await api.delete_role(deleteRolePath, headers);
    } else {
        console.log('Role is Not Exist');
    }
}

describe('Create role', () => {
    beforeEach(beforeEachTest);
    test('with valid data', async () => {
        const response = await api.create_role(path, headers, body);
        expect(response.statusCode).equal(201);
        expect(response.body.status).equal('SUCCESS');
        expect(response.body.message).equal('Create Role Success');
        expect(response.body.data.id).not.equal(null);
        expect(response.body.data.role_name).not.equal(null);
        expect(response.body.data.created_at).not.equal(null);
        expect(response.body.data.updated_at).not.equal(null);

        roleId = response.body.data.id;
    }),
    test('with existing data', async () => {
        body.update('role_name', 'role-test-automation-1');
        const response = await api.create_role(path, headers, body);
        expect(response.statusCode).equal(422);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('role.already_exist');
    }),
    test('with symbols', async () => {
        body.update('role_name', 'test^%');
        const response = await api.create_role(path, headers, body);
        expect(response.statusCode).equal(422);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('data malformed');
        expect(response.body.errors[0].field).equal('role_name');
        expect(response.body.errors[0].error).equal('must be among or combination these characters (a-z, A-Z, 0-9, space, enter, tab, comma(,), dot(.), question mark(?), exclamation mark(!), underscore(_), plus and minus(-+))');
    }),
    test('without input role data', async () => {
        body.update('role_name', '');
        const response = await api.create_role(path, headers, body);
        expect(response.statusCode).equal(422);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('data malformed');
        expect(response.body.errors[0].field).equal('role_name');
        expect(response.body.errors[0].error).equal('cannot be blank');
    }),
    test('with emojis', async () => {
        body.update('role_name', 'test🙂');
        const response = await api.create_role(path, headers, body);
        expect(response.statusCode).equal(422);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('data malformed');
        expect(response.body.errors[0].field).equal('role_name');
        expect(response.body.errors[0].error).equal('must be among or combination these characters (a-z, A-Z, 0-9, space, enter, tab, comma(,), dot(.), question mark(?), exclamation mark(!), underscore(_), plus and minus(-+))');
    }),
    test.skip('with add payload status', async () => {
        body.add('status', 'admin');
        const response = await api.create_role(path, headers, body);
        expect(response.statusCode).equal(422);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('data malformed');
        expect(response.body.errors[0].field).equal('role_name');
        expect(response.body.errors[0].error).equal('cannot be blank');
    }),
    test('with HTML script data', async () => {
        body.update('role_name', '<script></script>');
        const response = await api.create_role(path, headers, body);
        expect(response.statusCode).equal(422);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('data malformed');
        expect(response.body.errors[0].field).equal('role_name');
        expect(response.body.errors[0].error).equal('must be among or combination these characters (a-z, A-Z, 0-9, space, enter, tab, comma(,), dot(.), question mark(?), exclamation mark(!), underscore(_), plus and minus(-+))');
    }),
        test('with invalid token', async () => {
            authToken = 'invalidToken';
            headers.update('Authorization', authToken);
            api = new Role(baseUrl, authToken);
            const response = await api.create_role(path, headers, body);
            expect(response.statusCode).equal(401);
            expect(response.body.status).equal('ERROR');
            expect(response.body.message).equal('authentication failed');
        }),
        test('with expired token', async () => {
            authToken = 'eyJhbGciOiJSUzUxMiIsImtpZCI6InZSODBUMWo5M2gxUXp5a1hvMlVQQ3h4bTZ4aVlDVDFld0syX0lyUWRkZzQifQ.eyJpc3MiOiJQcml2eUlEIFByb3ZpZGVyIiwic3ViIjoiUHJpdnlJRCBQcm92aWRlciIsImlhdCI6MTY4OTg1NTMzMywiZXhwIjoxNjg5ODYyNTMzLCJqdGkiOiJjNTgxNTRiZC01YmVjLTQwYjQtYWFmMC1lNTg4MTNiNmYxZTkiLCJ1aWQiOiJHQUEzMTA3IiwidXNlciI6eyJwcml2eUlkIjoiR0FBMzEwNyIsInV1aWQiOiI1ZGJkNGE5Yi03ZjdkLTQzZmEtYmRmNy0wOWNiMDhiODVhYmMifSwiY2xhaW1zIjpbInB1YmxpYyJdfQ.xqmmAoIuRwySFaY6Yr_3S1bC9F3stckkINzNZHzwt0GCdPapELscHvlTRWIfXlQ7M_Ly0KYEW3TepKUdNGAUdpUX5AqzuHD9DInDQt8XBlhyOBtHG7Az28r9JToQ9vRRe6Io9uL_WfhrFkXNQWhmxiSsVELAtBPfLPrS2citAHL1n2iq178FwjU-9xR6_Lpwod-xD65lDNOY9TRlOt7lhOI5X1RAnP2hTCsujSO8Chljrqs3zZglwUqaqkT52Gq01cqT07bEhfyIhHLvkjxzzZmSCQfYsBMHW3ZCE4w1-5aJCf1e54NNX900HIjIJB_wBKn9inye4BKVQSlI-uzD4g';
            headers.update('Authorization', authToken);
            api = new Role(baseUrl, authToken);
            const response = await api.create_role(path, headers, body);
            expect(response.statusCode).equal(401);
            expect(response.body.status).equal('ERROR');
            expect(response.body.message).equal('authentication failed');
        }),
    afterEach(afterEachTest);
});
