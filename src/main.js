import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    changeStatus(server) {
      this.$emit('statusWasEdited', server);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
