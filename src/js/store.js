import { createStore } from 'framework7/lite';
import api from '@/api'
import _ from '@/js/utils.js'

const store = createStore({
  state: {
    loggedIn: null,
    user: {xd: 1},
  },
  getters: {
    loggedIn(state) {
      return state.loggedIn;
    },
    user(state) {
      return state.user;
    }
  },
  actions: {
    async register (store, payload) {
      return await _.callApi(api.register, payload);
    },
    async login (store, payload) {
      return await _.callApi(api.login, payload);
    },
    addUser({ state }, data) {
      state.user = data.user;
      state.loggedIn = data.sid;
    },
    logout({ state }) {
      state.user = null;
      state.loggedIn = null;
    },
  },
})
export default store;
