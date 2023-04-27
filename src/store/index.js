import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jwttoken: '',
    usertoken: '',
    contacts: [],
    messages: [],
    loggedIn: false,
  },
  getters: {
  },
  mutations: {
    setJwtToken(state, token) {
      state.jwttoken = token;
    },
  },
  actions: {
  },
  modules: {
  },
});
