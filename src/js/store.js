import { createStore } from 'framework7/lite';
import api from '@/api'
import _ from '@/js/utils.js'
import {ref} from 'vue'
const store = createStore({
  state: {
    loggedIn: ref(null),
    user: ref(null),
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
      state.user.value = data.user;
      state.loggedIn.value = data.sid;
    },
    logout({ state }) {
      state.user.value = null;
      state.loggedIn.value = null;
    },
  },
})
export default store;
