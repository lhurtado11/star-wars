<template>
  <div>
    <h1>Este es el album</h1>
    <router-link :to="{ name: 'Lamina' }" class ="btn btn-info">Lamina</router-link>
  </div>
</template>

<script>
  export default {
    name: "Album"
  }
</script>

<style scoped>

</style>