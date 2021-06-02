<template>
  <div>
    <h1>Hola soy una lamina</h1>
    
  </div>
</template>

<script>
import { mapState } from 'vuex';
  export default {
    name: "Lamina",
    computed: {
      ...mapState(['people','film','starship'])
    },
  }
</script>

<style scoped>

</style>