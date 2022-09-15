import { createStore } from 'framework7/lite';
import api from '@/api'
import _ from '@/js/utils.js'
import {reactive, ref} from 'vue'
// import emitter from '@/js/emmiter.js'

// let useEmitter = emitter()

const store = createStore({
  state: {
    loggedIn: ref(false),
    user: ref({
      name: '',
      lastname: '',
      email: '',
      phone: '',
      address: '',
      password: '',
    }),
    allExibitions: ref([
      {
        id: 1,
        title: 'Exibition 1',
        date: '15.09.2022',
        exibits: [
          {
            id: 1,
            title: 'Exibit 1',
            price: 15,
            timeToView: 15,
            type: "NFT"
          },
          {
            id: 2,
            title: 'Exibit 2',
            price: 10,
            timeToView: 16,
            type: "NFT"
          },
          {
            id: 3,
            title: 'Exibit 3',
            price: 10,
            timeToView: 3,
            type: "NFT"
          },
          {
            id: 4,
            title: 'Exibit 4',
            price: 20,
            timeToView: 10,
            type: "NFT"
          },
        ],
        type: "2D"
      },
      {
        id: 2,
        title: 'Exibition 1',
        date: '15.09.2022',
        exibits: [
          {
            id: 1,
            title: 'Exibit 1',
            price: 15,
            timeToView: 15,
            type: "NFT"
          },
          {
            id: 2,
            title: 'Exibit 2',
            price: 10,
            timeToView: 16,
            type: "NFT"
          },
          {
            id: 3,
            title: 'Exibit 3',
            price: 10,
            timeToView: 3,
            type: "NFT"
          },
          {
            id: 4,
            title: 'Exibit 4',
            price: 20,
            timeToView: 10,
            type: "NFT"
          },
        ],
        type: "2D"
      }
    ]),
    allExibits: ref([
      {
        id: 1,
        title: 'Exibit 1',
        price: 15,
        timeToView: 15,
        type: "NFT",
        country: "USA",
      },
      {
        id: 2,
        title: 'Exibit 2',
        price: 10,
        timeToView: 16,
        type: "NFT",
        country: "Japan",
      },
      {
        id: 3,
        title: 'Exibit 3',
        price: 10,
        timeToView: 3,
        type: "NFT",
        country: "USA",
      },
      {
        id: 4,
        title: 'Exibit 4',
        price: 20,
        timeToView: 10,
        type: "NFT",
        country: "Serbia",
      },
      {
        id: 5,
        title: 'Exibit 5',
        price: 15,
        timeToView: 15,
        type: "Image",
        country: "Estonia",
      },
      {
        id: 6,
        title: 'Exibit 6',
        price: 15,
        timeToView: 15,
        type: "Video",
        country: "Marocco",
      },
      {
        id: 7,
        title: 'Exibit 7',
        price: 15,
        timeToView: 15,
        type: "3D Model",
        country: "Bananaland",
      },
      {
        id: 8,
        title: 'Exibit 8',
        price: 15,
        timeToView: 15,
        type: "3D Model",
        country: "Reddit",
      },
      {
        id: 9,
        title: 'Exibit 9',
        price: 15,
        timeToView: 15,
        type: "Image",
        country: "USA",
      },
      {
        id: 10,
        title: 'Exibit 10',
        price: 15,
        timeToView: 15,
        type: "Video",
        country: "Nicarauga",
      },

    ]),
    allTours: ref([]),
    comments: ref([
      {
        id: 1,
        user: 'Nikola Nikolic',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac arcu ornare, hendrerit nibh id, placerat nisi. Cras feugiat dictum tincidunt. Quisque pulvinar ligula libero.',
        score: 5,
      },
      {
        id: 2,
        user: 'Petar Petrovic',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac arcu ornare, hendrerit nibh id, placerat nisi. Cras feugiat dictum tincidunt. Quisque pulvinar ligula libero.',
        score: 3,
      },
      {
        id: 3,
        user: 'Lazar Lazarevic',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac arcu ornare, hendrerit nibh id, placerat nisi. Cras feugiat dictum tincidunt. Quisque pulvinar ligula libero.',
        score: 4,
      },
      {
        id: 4,
        user: 'Milan Milanovic',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac arcu ornare, hendrerit nibh id, placerat nisi. Cras feugiat dictum tincidunt. Quisque pulvinar ligula libero.',
        score: 5,
      },
    ]),
    exibitTypes: reactive([
      "Image",
      "Video",
      "3D Model",
      "NFT",
    ]),
    exibitionTypes: reactive([
      "2D",
      "3D",
      "VR",
      "AR",
      "MIXED"
    ]),
    filters: reactive({}),
  },
  getters: {
    filters(state) {
      return state.filters
    }
  },
  actions: {
    // async register (store, payload) {
    //   return await _.callApi(api.register, payload);
    // },
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
    addTours({ state }, data) {
      state.allTours.push(data);
    },
  },
})
export default store;
