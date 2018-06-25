<template>
  <div>
    <world-status-loop v-for="status in 5"></world-status-loop>
  </div>
</template>

<script>
  import Status from './Status.vue'

  export default {
    components: {
      //creando componentes locales
      'world-status-loop': Status
    }
  }
</script>

<style scoped>

</style>
