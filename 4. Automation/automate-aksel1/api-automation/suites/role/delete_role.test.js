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
    })
   
});
