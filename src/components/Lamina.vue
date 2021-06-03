<template>
  <div>
    <div class="contain-envelopes">
      <button @click="toggleShowStickers" v-for="n in envelopes" :key="n" >
        <h3>Abreme</h3>
        <font-awesome-icon icon="envelope" class="envelopes" ></font-awesome-icon>
        </button>  
    </div>
    <div class="contain-stickers" v-if="showStickers">
      <div class="container-main" >            
        <div class="container-sticker"  >
          <div class="sticker">
            <div :class="elem.category === 'Especial' ? 'sticker-content especial-sticker' : 'sticker-content'"  v-for="(elem, index) in openEnvelopes" :key="index">
                <div class="content-description">
                  <h4>
                    {{ elem.type === "film" ? elem.info.title : elem.info.name }}
                  </h4>             
                  <h5 class="num">
                    {{elem.num}}
                  </h5>                  
                  <h5 :class="elem.category === 'Especial' ? 'especial-category' : null">
                     {{elem.category}}
                  </h5>                  
                  <h5>
                    {{elem.type}}
                  </h5>                  
                </div>
                <div class="sticker-button">
                  <button class="btn btn-outline-danger me-2 neon" type="button" @click="add(elem, index)">
                    <font-awesome-icon icon="plus"></font-awesome-icon>
                  </button>                
                  <button class="btn btn-outline-danger me-2 neon" type="button" @click="deleteSticker(index)">
                    <font-awesome-icon icon="trash-alt">Descartar</font-awesome-icon>
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
      
        
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { discard } from '../methods/openPackage';
  export default {
    name: "Lamina",
    data() {
      return {
        repeat: false,                     
      }
    },
    mounted() {
      this.$store.dispatch('getDataPeople');
      this.$store.dispatch('getDataFilm');
      this.$store.dispatch('getDataStarship')
    },
    computed: {
      ...mapState(['data', 'dataAlbum', 'showStickers', 'envelopes', 'openEnvelopes']),
      
    },
    methods: {
      ...mapMutations(['addAlbum','showEnvelopes', 'envelopesIsOpen', 'openEnvelope']),

      toggleShowStickers() {
        this.showEnvelopes();
        console.log(this.show)
        this.envelopesIsOpen();
        
        if(this.showStickers){
          this.openEnvelope();
          console.log(this.openEnvelope());
        }
      },
      add(elem, index,) {
        this.addAlbum(elem);
        this.$store.state.openEnvelopes = this.$store.state.openEnvelopes.filter((el, i) => i!== index)
        console.log(this.openEnvelopes);
        // this.discardSticker(elem);
        // console.log('discard',this.discardSticker(elem))
      },

      // discardSticker(elem) {
      //   this.repeat = discard(this.dataAlbum,elem);
      //   // console.log(this.repeat)
      // },

      deleteSticker(index) {
        this.$store.state.openEnvelopes = this.$store.state.openEnvelopes.filter((el, i) => i!== index)
        alert('Sticker eliminado')
      },
    }
  }
</script>

<style scoped>

  .contain-envelopes {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
  }

  .contain-envelopes button {
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     margin: 20px;
     background: none;
     color: #ffffff;
     border: none;
     outline: none;
  }

  .contain-envelopes button h3 {
    color: #f3181898;
    text-shadow: 0 0 30px #fff;
  }

  .envelopes {
    width: 150px;
    height: 150px;
  }

  .neon{
    box-shadow: 0 0 15px #f31818;
    transition: all 0.3s ease 0s;
    font-size: 20px;
  }
  
  .neon:hover {
    position: relative;
    transform: scale(1.05);
    color: #000000;
  }
  .contain-stickers {
    width: 90%;
    margin: auto; 
    margin-bottom: 70%;
    border-top: 1px solid white;;
  }

  .contain-stickers .container-main {
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
  }

  .contain-stickers .container-sticker {
    width:100%;
    padding: 20px 0;
    overflow: auto;
    display: flex;
  }

  .contain-stickers .container-sticker .sticker {
    display: flex;
    flex-wrap: nowrap;
  }

  .container-sticker::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  .container-sticker::-webkit-scrollbar:horizontal {
    width:10px;
  }
  .container-sticker::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 20px;
    border: 1px solid #f1f2f3;
    box-shadow: 0 0 10px #f1f2f3;
  }

  .sticker-content {
    width: 200px;
    height: 250px;
    padding: 20px;
    transition: .3s ease all;
    box-shadow: 0 0 15px #02b5eb;
    margin: 20px;
    transition: all 0.3s ease 0s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .sticker-content:hover {
    position: relative;
    transform: scale(1.05);
  }

  .num {
    color: #f3ef18;
    font-size: 22px;
  }

  .especial-sticker {
    background: #26e43030;
    box-shadow: 0 0 30px #26e430;
  }

  .especial-category {
    color: #26e430;
    font-size: 24px;
    border-radius: 16px;
    font-weight: bolder;
  }
    
  .sticker-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 160px;
  }

  .content-description h4 {
    height: 60px;
    font-weight: 900;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; 
    overflow: hidden; 
    font-weight: bolder;
  }
</style>