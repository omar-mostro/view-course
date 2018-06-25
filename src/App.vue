<template>
  <div class="container">

    <omar-header></omar-header>

    <omar-server-details></omar-server-details>

    <omar-footer></omar-footer>

  </div>
</template>

<script>
  import Header from './Header.vue'
  import ServerDatails from './ServerDetails.vue'


  export default {
    components: {
      //creando componentes locales
      'omar-header': Header,
      'omar-server-details': ServerDatails
    }
  }
</script>

<style>

</style>
