<template>
<div >
    <nav class="navbar navbar-light header-bg">
    <div class="container-fluid justify-content-space-between header">
      <a class="navbar-brand" href="#">
        <img src="@/assets/star-wars.png" alt="" width="80" height="50">
      </a>
      <div>
        <button class="btn btn-outline-danger me-2 neon" type="button"><router-link to="/" class="style-link">Álbum</router-link></button>
        <button class="btn btn-outline-danger me-2 neon" type="button"><router-link to="/Lamina" class="style-link">Lámina</router-link></button> 
      </div>
    </div>
    </nav>
<router-view/>
</div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>
  .header-bg {
    background: #000000;
  }

  .neon{
    box-shadow: 0 0 15px #f31818;
    transition: all 0.3s ease 0s;
  }
  
  .neon:hover {
    position: relative;
    transform: scale(1.05);
  }

  .style-link:link {
    text-decoration: none;
  }

  .style-link:visited {
    color: #dc3545;
    text-decoration: none;
  }

  .style-link:hover{
    color: #000000;
  }
</style>