<template>
  <div class="container">
    <div class="jumbotron">
      <span> {{ mensaje | mayusculas }} </span> <!-- | indicativo que vamos a aplicar un filtro -->
      <hr>
      <span> {{ mensaje | suspensivos }} </span> <!-- filtro global en main.js -->
      <hr>
      <span> {{ mensaje | suspensivos | mayusculas }} </span> <!-- ambos filtros -->
      <hr>
      <span> {{ mensaje }} </span> <!-- sin filtro -->
      <hr>
      <span> {{ temperatura }} Cº</span>
      <hr>
      <span> {{ temperatura | aFahrenheit }} F </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensaje: 'Aprende vue.js',
      temperatura: 30
    }
  },
  filters: {
    mayusculas(mensaje) {
      return mensaje.toUpperCase();
    },
    aFahrenheit(temperatura){
      return (9/5 * temperatura) + 32;
    }
  }
}
</script>

<style>

</style>
