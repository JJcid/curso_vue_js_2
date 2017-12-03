import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { rutas } from './rutas.js'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(VueRouter);

const enrutador = new VueRouter({
  routes: rutas,
  mode: 'history' //evita que aparezca el hash en la ruta del navegador
})

new Vue({
  el: '#app',
  router: enrutador,
  render: h => h(App)
})
