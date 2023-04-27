/* eslint-disable class-methods-use-this */
import axios from 'axios';

class BackendService {
  login(username, password) {
    return axios.post('https://api-meat.siefke.org/api/auth/login', {
      username,
      password, // 'password' : '<value password>'
    });
  }
}

export default new BackendService();
