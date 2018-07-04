<template xmlns:v-local-osmon="http://www.w3.org/1999/xhtml">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 style="background-color: darkslategray; color: #fff"
            v-local-osmon:click="hola"
            v-local-osmon:mouseenter="mouseenter"
            v-local-osmon:mouseleave="mouseleve">Hola como estas </h1>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12">
        <ul>
          <li v-for="message in messages">
            {{message}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        messages : [],
      }
    },
    directives: {
      'local-osmon': {
        bind(el, ref) {

          const type = ref.arg;
          const fn = ref.value;

          el.addEventListener(type, fn);

        }
      }
    },
    methods:{
      hola(){
        alert('hola')
      },
      mouseenter(){
        this.messages.push('mouse adentro');
      },
      mouseleve(){
        this.messages.push('mouse fuera');
      },
    }
  }
</script>

<style>
</style>
