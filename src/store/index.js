import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: [],
    film: [],
    starship: [],
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
    getDataPeople ({commit}, payload) {
      const stickers = [];
      for( let i=1; i<=9; i++) {
        axios.get(`https://swapi.dev/api/people/?page=${i}`).then((response) => {
          stickers.push(response.data.results);
        }).catch((error) => {
          commit('changeError', error)
        })
      }
      commit('changePeople', stickers);
    },
    getDataFilm ({commit}, payload) {
      const stickers = [];
        axios.get(`https://swapi.dev/api/films/`).then((response) => {
          stickers.push(response.data.results);
        }).catch((error) => {
          commit('changeError', error)
        })
      commit('changeFilm', stickers);
    },
    getDataStarship ({commit}, payload) {
      const stickers = [];
      for( let i=1; i<=4; i++) {
        axios.get(`https://swapi.dev/api/starships/?page=${i}`).then((response) => {
          stickers.push(response.data.results);
        }).catch((error) => {
          commit('changeError', error)
        })
      }
      commit('changeStarship', stickers);
    },

  },
  modules: {
  }
})
