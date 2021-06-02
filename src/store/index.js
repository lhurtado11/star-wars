import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    people: [],
    film: [],
    starship: [],
    peopleAlbum:[...Array(81).keys()],
    starshipAlbum:[...Array(35).keys()],
    filmAlbum:[...Array(5).keys()],
    error: ''
  },
  mutations: {
    changePeople (state, newPeople) {
      state.people = newPeople;
    },
    changeFilm (state, newFilm) {
      state.film = newFilm;
    },
    changeStarship (state, newStarship) {
      state.starship = newStarship;
    },
    changeError (state, error) {
      state.error = error;
    }
  },
  actions: {
    async getDataPeople ({commit}, payload) {
      const stickers = [];
      for( let i=1; i<=9; i++) {
        const response = await axios.get(`https://swapi.dev/api/people/?page=${i}`).catch((error) => {
          commit('changeError', error)
        })
        stickers.push(response.data.results);
      }
      console.log(stickers.flat())
      commit('changePeople', stickers.flat());
    },
    async getDataFilm ({commit}, payload) {
      const stickers = [];
        const response = await axios.get(`https://swapi.dev/api/films/`).catch((error) => {
          commit('changeError', error)
        })
      stickers.push(response.data.results);
      console.log(stickers.flat())
      commit('changeFilm', stickers.flat());
    },
    async getDataStarship ({commit}, payload) {
      const stickers = [];
      for( let i=1; i<=4; i++) {
        const response = await axios.get(`https://swapi.dev/api/starships/?page=${i}`).catch((error) => {
          commit('changeError', error)
        })
        stickers.push(response.data.results);
      }
      console.log(stickers.flat())
      commit('changeStarship', stickers.flat());
    },
  },
  modules: {
  }
})