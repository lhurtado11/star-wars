import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
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
    error: ''
  },

  mutations: {
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
    }
  },
  
  modules: {
  }
})