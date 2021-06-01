<template>
  <div>
    <h1>Hola soy una lamina</h1>
  </div>
</template>

<script>
  export default {
    name: "Lamina",
    mounted() {
      const people = this.$store.state.people;
      const starship = this.$store.state.starship;
      const film =  this.$store.state.film;

      const arrayPeople = [].concat.apply([],people);
      const arrayFilm = [].concat.apply([],film );
      const arrayStarship = starship.concat.apply([], starship);
      console.log('people ',arrayPeople,'films ',arrayFilm,'starships ', arrayStarship)
    }
  }
</script>

<style scoped>

</style>