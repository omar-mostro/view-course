<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">'Click a status button server'</p>
    <p v-else>{{server.status}}</p>

    <hr>
    <button @click="backToNormal">back to normal</button>
  </div>

</template>

<script>

  import {eventBus} from '../../main';

  export default {
    data() {
      return {
        server: null
      }
    },
    methods: {
      backToNormal() {
        this.server.status = 'Omar';
      }
    },
    created() {
      eventBus.$on('statusWasEdited', (server) => {
        //Con los 3 puntos pasamos el arreglo no por referencia o apuntador
        this.server ={...server};
      })
    }
  }

</script>

<style>

</style>
