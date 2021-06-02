<template>
  <header class="header">
      <nav class="navbar navbar-light header-bg">
      <div class="container-fluid justify-content-space-between ">
        <a class="navbar-brand" href="#">
          <img src="@/assets/star-wars.png" alt="" width="150" height="50">
        </a>
        <div>
          <button
            class="btn btn-outline-white me-2 neon"
            type="button"
          >
            <router-link to="/" class="style-link">Álbum</router-link>
          </button>
          <button
            class="btn btn-outline-white me-2 neon"
            type="button"
          >
            <router-link to="/Lamina" class="style-link">Obtener Láminas</router-link>
          </button> 
        </div>
      </div>
      </nav>
  <router-view/>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>

  .header {
    border-bottom: 1px solid white;
    padding: 15px 30px;  
    height: 100px;
    width: 100%;
    
  }

  .header-bg {
    background: #000000;
  }

  .neon{
    box-shadow: 0 0 15px white;
    border: 1px solid white;
  }
  
  .neon:hover {
    position: relative;
    transform: scale(1.05);
  }

  .style-link:link {
    text-decoration: none;
  }

  .style-link:visited {
    color: white;
    text-decoration: none;
  }

  .style-link:hover{
    color: white;
  }
</style>