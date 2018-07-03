<template>
  <div class="col-12 mt-4">
    <h5>Quotes Added</h5>
    <div class="progress" style="height: 25px;">
      <div class="progress-bar" role="progressbar" :style="{width : (numberQuotes * 100 / maxQuotes)+'%'}" aria-valuenow="10"
           aria-valuemin="0"
           aria-valuemax="100">{{numberQuotes}} / {{maxQuotes}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props : ['numberQuotes', 'maxQuotes']
  }
</script>

<style scoped>

</style>
