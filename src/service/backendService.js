/* eslint-disable class-methods-use-this */
import axios from 'axios';

class BackendService {
  login(username, password) {
    return axios.post('https://api-meat.siefke.org/api/auth/login', {
      username,
      password, // 'password' : '<value password>'
    });
  }

  register(username, password) {
    return axios.post('https://api-meat.siefke.org/api/auth/register', {
      username,
      password, // hallo
    });
  }

  // BackendService.getUserInfo(this.$store.state.jwtToken);
  getUserInfo(jwt) {
    return axios.get('https://api-meat.siefke.org/api/auth/getUserInfo', {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  }
}

export default new BackendService();
