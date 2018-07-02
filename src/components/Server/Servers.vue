<template>
  <div class="col-xs-12 col-sm-6">
      <app-server-status :serversRecived="servers"></app-server-status>
  </div>
</template>

<script>

  import ServerStatus from './ServerStatus';
  export default {
    data: function () {
      return {
        servers:[
          {id: 1, status:'Normal'},
          {id: 2, status:'Critical'},
          {id: 3, status:'Unknown'},
          {id: 4, status:'Normal 4'},
        ]
      }
    },
    components: {
      appServerStatus : ServerStatus
    }
  }


</script>

<style>

</style>
