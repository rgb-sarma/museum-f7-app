import { createStore } from 'framework7/lite';
import api from '@/api'
import _ from '@/js/utils.js'
import {reactive, ref} from 'vue'
import emitter from '@/js/emmiter.js'

let useEmitter = emitter()

const store = createStore({
  state: {
    loggedIn: ref(null),
    user: ref(null),
    allExibitions: ref([]),
    exibitTypes: reactive([]),
    exibitionTypes: reactive([]),
    filters: reactive({}),
  },
  getters: {
    filters(state) {
      return state.filters
    }
  },
  actions: {
    async register (store, payload) {
      return await _.callApi(api.register, payload);
    },
    async login (store, payload) {
      return await _.callApi(api.login, payload);
    },
    async fetchTypes (store) {
      return await _.callApi(api.fetchTypes);
    },
    async fetchExhibitions (store) {
      return await _.callApi(api.fetchExhibitions);
    },
    async test (store) {
      return await _.callApi(api.test);
    },
    addUser({ state }, data) {
      state.user.value = data.user;
      state.loggedIn.value = data.sid;
    },
    logout({ state }) {
      state.user.value = null;
      state.loggedIn.value = null;
    },
    addTypes({ state }, data) {
      state.exibitTypes.value = data.exibit_types;
      state.exibitionTypes.value = data.exibition_types;
    },
    addTypes({ state }, data) {
      state.exibitTypes.value = data.exibit_types;
      state.exibitionTypes.value = data.exibition_types;
    },
    addExhibitions({ state }, data) {
      state.allExibitions.value = data;
    },
    changeFilters({ state }, data) {
      state.filters.value = data;
      useEmitter.emitter.emit('changedFilters')
    }
  },
})
export default store;
