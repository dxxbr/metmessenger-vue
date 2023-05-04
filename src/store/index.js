import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // this.$store.state.[variable]
    // this.$store.commit('setVarible', 'new value')
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
    setUserToken(state, token) {
      state.usertoken = token;
    },
    setLoggedIn(state, bool) {
      state.loggedIn = bool;
    }
  },
  actions: {
  },
  modules: {
  },
});
