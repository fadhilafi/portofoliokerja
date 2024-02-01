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
const getDetailPath = process.env.GET_DETAIL_ROLE_PATH;

beforeAll(async () => {
    const createPath = process.env.CREATE_ROLE_PATH;
    body.add('role_name', name);
    headers.add('Authorization', authToken);
    api = new Role(baseUrl, authToken);
    const createRole = await api.create_role(createPath, headers, body);
    roleId = createRole.body.data.id;
});

const afterEachTest = async () => {
    if (roleId != null) {
        const deleteRolePath = process.env.DELETE_ROLE_PATH + roleId;
        await api.delete_role(deleteRolePath, headers);
    } else {
        console.log('Role is Not Exist');
    }
}

describe('Get Detail', () => {
    test('with valid role id', async () => {
        const response = await api.get_detail(`${getDetailPath}${roleId}`, headers);
        expect(response.statusCode).equal(200);
        expect(response.body.status).equal('SUCCESS');
        expect(response.body.message).equal('Get Detail Role Success');
        expect(response.body.data.id).equal(roleId);
        expect(response.body.data.role_name).not.equal(null);
        expect(response.body.data.created_at).not.equal(null);
        expect(response.body.data.updated_at).not.equal(null);
    }),
    test('with not exist role id', async () => {
        roleId = '1cd42db3-7b74-41ab-97f5-6b466d291ba4';
        const response = await api.get_detail(`${getDetailPath}${roleId}`, headers);
        expect(response.statusCode).equal(422);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('role.not_found');
    }),
    test('with empty role id', async () => {
        roleId = ':id';
        const response = await api.get_detail(`${getDetailPath}${roleId}`, headers);
        expect(response.statusCode).equal(404);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal("id can't be blank");
    }),
    test('with invalid role id using alphabeth', async () => {
        roleId = 'abcd';
        const response = await api.get_detail(`${getDetailPath}${roleId}`, headers);
        expect(response.statusCode).equal(404);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('id must be valid format UUID');
    }),
    test('with expired token', async () => {
        expiredAuthToken = 'eyJhbGciOiJSUzUxMiIsImtpZCI6InZSODBUMWo5M2gxUXp5a1hvMlVQQ3h4bTZ4aVlDVDFld0syX0lyUWRkZzQifQ.eyJpc3MiOiJQcml2eUlEIFByb3ZpZGVyIiwic3ViIjoiUHJpdnlJRCBQcm92aWRlciIsImlhdCI6MTY4OTg1NTMzMywiZXhwIjoxNjg5ODYyNTMzLCJqdGkiOiJjNTgxNTRiZC01YmVjLTQwYjQtYWFmMC1lNTg4MTNiNmYxZTkiLCJ1aWQiOiJHQUEzMTA3IiwidXNlciI6eyJwcml2eUlkIjoiR0FBMzEwNyIsInV1aWQiOiI1ZGJkNGE5Yi03ZjdkLTQzZmEtYmRmNy0wOWNiMDhiODVhYmMifSwiY2xhaW1zIjpbInB1YmxpYyJdfQ.xqmmAoIuRwySFaY6Yr_3S1bC9F3stckkINzNZHzwt0GCdPapELscHvlTRWIfXlQ7M_Ly0KYEW3TepKUdNGAUdpUX5AqzuHD9DInDQt8XBlhyOBtHG7Az28r9JToQ9vRRe6Io9uL_WfhrFkXNQWhmxiSsVELAtBPfLPrS2citAHL1n2iq178FwjU-9xR6_Lpwod-xD65lDNOY9TRlOt7lhOI5X1RAnP2hTCsujSO8Chljrqs3zZglwUqaqkT52Gq01cqT07bEhfyIhHLvkjxzzZmSCQfYsBMHW3ZCE4w1-5aJCf1e54NNX900HIjIJB_wBKn9inye4BKVQSlI-uzD4g';
        headers.update('Authorization', expiredAuthToken);
        api = new Role(baseUrl, expiredAuthToken);
        const response = await api.get_detail(`${getDetailPath}${roleId}`, headers);
        expect(response.statusCode).equal(401);
        expect(response.body.status).equal('ERROR');
        expect(response.body.message).equal('authentication failed');
    }),
    afterEach(afterEachTest);
});
