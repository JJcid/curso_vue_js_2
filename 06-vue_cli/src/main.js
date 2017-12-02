import Vue from 'vue'
import App from './App.vue'

export let bus = new Vue({
  methods: {
    actualizarContador(numTareas){
      this.$emit('actualizarContador', numTareas);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
