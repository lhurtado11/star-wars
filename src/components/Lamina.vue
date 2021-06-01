<template>
  <div>
    <h1>Hola soy una lamina</h1>
    
    <router-link :to="{ name: 'Album' }" class ="btn btn-info">Album</router-link>
  </div>
</template>

<script>
  export default {
    name: "Lamina",
    mounted() {
      const arrayPeople = this.$store.state.people.concat.apply([], this.$store.state.people);
      const arrayFilm = this.$store.state.film;
      const arrayStarship = this.$store.state.starship.concat.apply([], this.$store.state.starship);
      console.log('people ',arrayPeople,'films ',arrayFilm,'starships ', arrayStarship)
    }
  }
</script>

<style scoped>

</style>