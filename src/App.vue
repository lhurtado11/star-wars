<template>
  <div id="app">
    <Header/>
    
  </div>
</template>

<script>
import Header from './components/Header.vue'


export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

body {
  margin: 0;
  background: linear-gradient(rgba(0,0,0, .80) 0%, rgba(0,0,0, .80) 100%), url('https://cdn.wallpapersafari.com/64/54/Iyerp9.jpg');
  /* background-image: url(''); */
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: 'PT Sans Narrow', sans-serif;
}
</style>
