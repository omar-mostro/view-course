<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button @click="colorDiv = 'app-blue',text='blue' " class="btn btn-primary">Load Blue Template</button>
        <button @click="colorDiv = 'app-green',text='green'" class="btn btn-success">Load Green Template</button>
        <button @click="colorDiv = 'app-red',text='red'" class="btn btn-danger">Load Red Template</button>
        <p>{{text}}</p>
        <hr>
        <component :is="colorDiv">
          <p>contenido test</p>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
  import Blue from './components/Blue.vue';
  import Green from './components/Green.vue';
  import Red from './components/Red.vue';

  export default {

    data() {
      return {
        colorDiv: 'app-blue',
        text:'blue'
      }
    },
    components: {
      appBlue: Blue,
      appGreen: Green,
      appRed: Red
    }
  }
</script>

<style>
</style>
