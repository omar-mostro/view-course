import Vue from 'vue'
import App from './App.vue'

Vue.filter('lengthWord', function (value) {
  value = value.toString();
  return value+'('+ value.split("").length +')';
});

new Vue({
  el: '#app',
  render: h => h(App)
});
