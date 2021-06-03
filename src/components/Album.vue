<template>
  <div class="main">
    <h1>Mi Álbum</h1>
    <div class="album-categories">
      <div class="category-people">
        <button class="btn btn-outline-danger me-2 neon" type="button" @click="toggleShowFilm">Peliculas</button>   
      </div>
      <div class="category-starship">
        <button class="btn btn-outline-danger me-2 neon" type="button" @click="toggleShowPeople">Personajes</button>
      </div>
      <div class="category-film">
        <button class="btn btn-outline-danger me-2 neon" type="button" @click="toggleShowStarship">Naves Espaciales</button>
      </div>
    </div>

      <div  class="categories"  >
        <div class="container-main" v-show="showFilm">            
            <h2>Peliculas</h2>
            <div class="container-category"  >
              <div class="category">
                <div class="category-album"  v-for="(elem, index) in dataAlbum.filmAlbum" :key="index"  >
                  <h5 >{{elem.num || elem + 1}}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">hola</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
        </div>
      
        <div class="container-main" v-show="showPeople">
            <h2>Personajes</h2>
            <div class="container-category">
              <div class="category">
                <div class="category-album" v-for="(elem, index) in dataAlbum.peopleAlbum" :key="index" >
                  <h5>{{elem + 1}}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
        </div>
       
        <div class="container-main" v-show="showStarship" >
            <h2>Naves Espaciales</h2>
            <div class="container-category">
              <div class="category" >
                <div class="category-album" v-for="(elem, index) in dataAlbum.starshipAlbum" :key="index" >
                  <h5> {{elem + 1}} </h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
        </div>
      </div>  
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
  export default {
    name: "Album",
     
    computed: {
      ...mapState(['dataAlbum', 'showFilm', 'showPeople', 'showStarship']),  
    },
    methods: {
      ...mapMutations(['showContainer', 'showContainerFilm', 'showContainerPeople', 'showContainerStarship']),
      toggleShowFilm () {
        this.showContainerFilm();
      console.log(this.showPeople)
      // this.$emit('change-color',this.showPrices ? 'FF96C8' : '3D3D3D')
      },
      toggleShowPeople () {
        this.showContainerPeople();
      
      },
      toggleShowStarship () {
        this.showContainerStarship();
          
      }

    }
  }
</script>

<style scoped>
  
  .main {
    padding-top: 30px;
  }
  
  .main h1 {
    color: white;
  }

  .album-categories{
    width: 80%;
    padding: 30px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f31818;
  }

  .neon-special {
    box-shadow: 0 0 15px #02b5eb;
    transition: all 0.3s ease 0s;
    font-size: 20px;
  }

  .neon-special:hover {
    position: relative;
    transform: scale(1.05);
    color: #000000;
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

  .categories {
    width: 90%;
    margin: auto; 
    margin-bottom: 70%;
  }


  .categories .container-main {
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
   
  }
  .categories .container-main h2 {
    color: white;
    text-shadow: 0 0 30px #fff;
  }
  .categories .container-main p {
    font-size: 14px;
  }

  .categories .container-category {
    width:100%;
    padding: 20px 0;
    overflow: auto;
    display: flex;
  }

  .container-category::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  .container-category::-webkit-scrollbar:horizontal {
    width:10px;
  }
  .container-category::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 20px;
    border: 1px solid #f1f2f3;
    box-shadow: 0 0 10px #f1f2f3;
  }

  .categories .container-category .category {
    display: flex;
    
    flex-wrap: nowrap;
  }

  .categories .container-category .category .category-album {
    width: 200px;
    height: 250px;
     padding: 20px;
    transition: .3s ease all;
    box-shadow: 0 0 15px #02b5eb;
    margin: 20px;
    transition: all 0.3s ease 0s;
  }

  .category-album:hover {
    position: relative;
    transform: scale(1.05);
  }
</style>