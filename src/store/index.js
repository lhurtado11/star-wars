import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { open, discard } from '../methods/openPackage';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
    people: [],
    film: [],
    starship: [],
    },
    dataAlbum: {
      peopleAlbum:[...Array(82).keys()],
      starshipAlbum:[...Array(36).keys()],
      filmAlbum:[...Array(6).keys()],
    },    
    error: '',
    showFilm: false,
    showPeople: false,
    showStarship: false,
    showStickers: true,
    envelopes: 4,
    openEnvelopes: [],
    counting: false,
    timeLeft: 60,
    loading: false,
  },

  mutations: {
    initLoading (state, status) {
      state.loading = status
    },

    finishLoading (state, status) {
      state.loading = status
    },

    changePeople (state, newData) {
      state.data.people = newData;
    },
    changeFilm (state, newData) {
      state.data.film = newData;
    },
    changeStarship (state, newData) {
      state.data.starship = newData;
    },
    changeError (state, error) {
      state.error = error;
    },
    addAlbum (state, elem) {
      if(elem.type === 'film'){
        state.dataAlbum.filmAlbum.splice(elem.num-1,1,elem)
      } else if (elem.type === 'people') {
        state.dataAlbum.peopleAlbum.splice(elem.num-1,1,elem)
      } else {
        state.dataAlbum.starshipAlbum.splice(elem.num-1,1,elem)
      } 
    },
    showContainerFilm (state) {
      state.showFilm = !state.showFilm
    },
    showContainerPeople (state) {
      state.showPeople = !state.showPeople
    },
    showContainerStarship (state) {
      state.showStarship = !state.showStarship
    },
    showEnvelopes (state) {
      state.showStickers = true
    },
    envelopesIsOpen(state) {
      state.envelopes= state.envelopes - 1;
        if(state.envelopes === 0){
          state.envelopes = 4;
        };
    },
    openEnvelope(state) {
     state.openEnvelopes = open(state.data);
    },
    startCountdown(state) {
      state.counting = true;
    },
    
    getTime(state){
      setTimeout(() => {
        state.counting = false;
      }, 60000);

      setInterval(() => {
        state.timeLeft--;
        if(state.timeLeft === 0){
          state.timeLeft = 60
        }
      },1000)
    },
  },
  actions: {
    async getDataPeople ({commit}) {
      const stickers = [];
      commit('initLoading', true);
      try{
        for( let i=1; i<=9; i++) {
          const response = await axios.get(`https://swapi.dev/api/people/?page=${i}`).catch((error) => {
            commit('changeError', error)
          })
          stickers.push(response.data.results);
        }
        commit('changePeople', stickers.flat());        
      } finally {
          commit('finishLoading', false);
      }
    },
    async getDataFilm ({commit}) {
      const stickers = [];
        const response = await axios.get(`https://swapi.dev/api/films/`).catch((error) => {
          commit('changeError', error)
        })
      stickers.push(response.data.results);      
      commit('changeFilm', stickers.flat());
    },
    async getDataStarship ({commit}) {
      const stickers = [];
        for( let i=1; i<=4; i++) {
          const response = await axios.get(`https://swapi.dev/api/starships/?page=${i}`).catch((error) => {
            commit('changeError', error)
          })
          stickers.push(response.data.results);
        }
        commit('changeStarship', stickers.flat());
    }
  },
  modules: {
  }
})