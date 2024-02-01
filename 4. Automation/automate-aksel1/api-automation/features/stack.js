const Api = require('../base/api');

class Stack extends Api {
  constructor(baseUrl, auth) {
    super(baseUrl, auth);
  }

  async create_stack(path, headers, body) {
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

  async update_stack(path, headers, body) {
    const response = await this.put(path, headers, body);
    return response;
  }

  async delete_stack(path, headers) {
    const response = await this.delete(path, headers);
    return response;
  }

}

module.exports = Stack;
