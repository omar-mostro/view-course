<!--<!--Server Details-->
<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="index in 5">
            Server #{{ index }}
          </li>
        </ul>
      </div>
      <omar-message></omar-message>
    </div>
    <hr>
  </div>
</template>

<script>
  import ServerDetailMessage from './ServerDetailMessage'

  export default {
    components: {
      'omar-message': ServerDetailMessage
    }
  }
</script>
