import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

//global component
Vue.component('world-status', Home);

new Vue({
  el: '#app',
  render: h => h(App)
});
