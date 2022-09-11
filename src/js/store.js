import { createStore } from 'framework7/lite';
import api from '@/api'

const store = createStore({
  state: {
    loggedIn: false,
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
    async login ({ state }, user) {
      try {
        let data = await api.login(user)
        console.log(data);
      } catch (error) {
        
      }
    },
    addUser({ state }, user) {
      state.user = user;
      state.loggedIn = true;
    },
    logout({ state }) {
      state.user = null;
      state.loggedIn = false;
    },
  },
})
export default store;
