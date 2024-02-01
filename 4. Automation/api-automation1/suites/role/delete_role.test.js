const expect = require("chai").expect;
const Headers = require('../../base/headers');
const Body = require('../../base/body');
const Role = require('../../features/role');
const GenerateRandom = require('../../utils/generate_random');

const body = new Body();
const headers = new Headers();

const number = GenerateRandom.number();
const name = `role-test-automation-${number}`;

let api, roleId;
let authToken = process.env.AUTH_TOKEN;

const baseUrl = process.env.BASE_URL;
const deleteRolePath = process.env.DELETE_ROLE_PATH;

beforeAll(async () => {
    const createPath = process.env.CREATE_ROLE_PATH;
    body.add('role_name', name);
    headers.add('Authorization', authToken);
    api = new Role(baseUrl, authToken);
    const createRole = await api.create_role(createPath, headers, body);
    roleId = createRole.body.data.id;
});

describe('Delete Role', () => {
    test('with valid data', async () => {
        const response = await api.delete_role(`${deleteRolePath}${roleId}`, headers);
        expect(response.statusCode).equal(200);
        expect(response.body.status).equal('SUCCESS');
        expect(response.body.message).equal(`Delete Role With ID ${roleId} Success`);
    }),
    test('with invalid role id', async () => {
        const invalidRoleId = 'invalidrole';
        const response = await api.delete_role(`${deleteRolePath}${invalidRoleId}`, headers);
        expect(response.statusCode).equal(404);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('id must be valid format UUID');
    }),
    test('with invalid id using minus', async () => {
        const invalidRoleId = -1;
        const response = await api.delete_role(`${deleteRolePath}${invalidRoleId}`, headers);
        expect(response.statusCode).equal(404);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('id must be valid format UUID');
    }),
    test('with invalid using alphanumeric id', async () => {
        const invalidRoleId = 'abc123';
        const response = await api.delete_role(`${deleteRolePath}${invalidRoleId}`, headers);
        expect(response.statusCode).equal(404);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('id must be valid format UUID');
    }),
    test('with empty id', async () => {
        const emptyParam = ':id';
        const response = await api.delete_role(`${deleteRolePath}${emptyParam}`, headers);
        expect(response.statusCode).equal(404);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal("id can't be blank");
    }),
    test('with invalid token', async () => {
        authToken = 'eyJhbGciOiJSUzUxMiIsImtpZCI6InZSODBUMWo5M2gxUXp5a1hvMlVQQ3h4bTZ4aVlDVDFld0syX0lyUWRkZzQifQ.eyJpc3MiOiJQcml2eUlEIFByb3ZpZGVyIiwic3ViIjoiUHJpdnlJRCBQcm92aWRlciIsImlhdCI6MTY4OTg1NTMzMywiZXhwIjoxNjg5ODYyNTMzLCJqdGkiOiJjNTgxNTRiZC01YmVjLTQwYjQtYWFmMC1lNTg4MTNiNmYxZTkiLCJ1aWQiOiJHQUEzMTA3IiwidXNlciI6eyJwcml2eUlkIjoiR0FBMzEwNyIsInV1aWQiOiI1ZGJkNGE5Yi03ZjdkLTQzZmEtYmRmNy0wOWNiMDhiODVhYmMifSwiY2xhaW1zIjpbInB1YmxpYyJdfQ.xqmmAoIuRwySFaY6Yr_3S1bC9F3stckkINzNZHzwt0GCdPapELscHvlTRWIfXlQ7M_Ly0KYEW3TepKUdNGAUdpUX5AqzuHD9DInDQt8XBlhyOBtHG7Az28r9JToQ9vRRe6Io9uL_WfhrFkXNQWhmxiSsVELAtBPfLPrS2citAHL1n2iq178FwjU-9xR6_Lpwod-xD65lDNOY9TRlOt7lhOI5X1RAnP2hTCsujSO8Chljrqs3zZglwUqaqkT52Gq01cqT07bEhfyIhHLvkjxzzZmSCQfYsBMHW3ZCE4w1-5aJCf1e54NNX900HIjIJB_wBKn9inye4BKVQSlI-uzD4g';
        headers.update('Authorization', authToken);
        api = new Role(baseUrl, authToken);
        const response = await api.delete_role(`${deleteRolePath}${roleId}`, headers);
        expect(response.statusCode).equal(401);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('authentication failed');
    })
});
