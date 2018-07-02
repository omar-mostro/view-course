<template>
  <div>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="server in serversRecived">
        Server status {{ server.status }}
        <button @click="changeStatus(server)">Cambiar status</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import {eventBus} from '../../main';

  export default {
    props: ['serversRecived'],
    methods: {
      changeStatus(server) {
        eventBus.changeStatus(server);
      }
    }

  }
</script>

<style scoped>

</style>
