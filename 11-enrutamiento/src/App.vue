<template>
  <div class="container">
    <encabezado></encabezado>
    <div class="jumbotron">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Encabezado from './componentes/Encabezado.vue';
export default {
  components: {
    encabezado: Encabezado
  }
}
</script>

<style>

</style>
