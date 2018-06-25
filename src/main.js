import Vue from 'vue'
import App from './App.vue'
import Footer from './Footer.vue'


//global component
Vue.component('omar-footer', Footer);

new Vue({
  el: '#app',
  render: h => h(App)
});
