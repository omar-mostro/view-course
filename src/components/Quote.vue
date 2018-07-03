<template>
  <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
    <div  class="card card-default">
        <slot></slot>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .card{
    font-family: 'Galada', cursive;
    font-size: 24px;
    color: #6e6e6e;
  }

  .card{
    cursor: pointer;
  }

  .card:hover{
    background-color: #ffe2e2;
  }
</style>
