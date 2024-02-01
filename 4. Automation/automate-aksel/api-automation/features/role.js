const Api = require('../base/api');

class Role extends Api {
  constructor(baseUrl, auth) {
    super(baseUrl, auth);
  }

  async get_profile(path, headers, body) {
    const response = await this.post(path, headers, body);
    return response;
  }

  async get_enterprise(path, headers) {
    const response = await this.get(path, headers);
    return response;
  }

  async get_role(path, headers) {
    const response = await this.get(path, headers);
    return response;
  }

  async get_list(path, headers) {
    const response = await this.get(path, headers);
    return response;
  }
  async get_eenterprise(path, headers) {
    const response = await this.get(path, headers);
    return response;
  }

  async delete_role(path, headers) {
    const response = await this.delete(path, headers);
    return response;
  }

}

module.exports = Role;
