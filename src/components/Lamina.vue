<template>
  <div>
    <h1 v-if="data.length === 0">...Cargando</h1>
    <div class="contain-envelopes">
      <button @click="toggleShowStickers" v-for="n in envelopes" :key="n" >Sobre </button>
      
    </div>
    <div class="contain-stickers" v-if="showStickers">
        <p v-for="(elem, index) in openEnvelopes" :key="index">
          {{ elem.type === "film" ? elem.info.title : elem.info.name }} - {{elem.num}} - {{elem.category}} - {{elem.type}}
          <button type="buttom" @click="add(elem, index)" >Agregar al Album</button>
          <button type="buttom"  >Descartar</button>
        </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import {  } from '@fortawesome/free-solid-svg-icons';
// import {  } from '@fortawesome/vue-fontawesome'

import { open } from '../methods/openPackage';
  export default {
    name: "Lamina",
    data() {
      return {
        showStickers: false,
        envelopes: 4,
        openEnvelopes: [],                     
      }
    },
    mounted() {
    this.$store.dispatch('getDataPeople');
    this.$store.dispatch('getDataFilm');
    this.$store.dispatch('getDataStarship');
  },
    computed: {
      ...mapState(['data', 'dataAlbum', 'discardElement']),
      
    },
    methods: {
      ...mapMutations(['addAlbum', 'discard']),
      toggleShowStickers() {
        this.showStickers = !this.showStickers;
        // this.envelopes--;
        if(this.envelopes === 0){
          this.envelopes = 4;
        };
        
        if(this.showStickers){
          this.openEnvelopes = open(this.data);
          console.log(this.openEnvelopes)
        }
      },
      add(elem, index,) {
        this.addAlbum(elem);
        // this.openEnvelopes = this.openEnvelopes.filter((el, i) => i!== index)
        console.log(this.openEnvelopes);
        
        // console.log(this.discard(elem))
        
      },

      // discardSticker(elem) {
      //   this.discardElement = discard(this.dataAlbum,elem);
      // }


      // handleOpen() {
      //   console.log(this.data);
      // },

    }
  }
</script>

<style scoped>

</style>