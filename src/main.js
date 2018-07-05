import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-http-7b718.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
//interceting request
  if (request.method === 'POST') {
    request.method = 'PUT';
  }
  //intercepting responses
  next(response => {
    response.json = () => {
      return {messas: response.body}
    }
  })
});
new Vue({
  el: '#app',
  render: h => h(App)
})
