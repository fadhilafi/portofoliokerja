const Api = require('../base/api');

class Departement extends Api {
  constructor(baseUrl, auth) {
    super(baseUrl, auth);
  }

  async create_directorate(path, headers, body) {
    const response = await this.post(path, headers, body);
    return response;
  }

  async get_detail(path, headers) {
    const response = await this.get(path, headers);
    return response;
  }

  async get_list(path, headers) {
    const response = await this.get(path, headers);
    return response;
  }

  async update_directorate(path, headers, body) {
    const response = await this.put(path, headers, body);
    return response;
  }

  async delete_directorate(path, headers) {
    const response = await this.delete(path, headers);
    return response;
  }

}

module.exports = Departement;
