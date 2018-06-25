<template>
  <div>
    <h1>Status</h1>
    <p>World status {{message}}</p>
    <button @click="change">Cambiar</button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        message : 'Vue js'
      }
    },
    methods: {

      change(){

        this.message = 'Cambiado';

      }
    }
  }
</script>
