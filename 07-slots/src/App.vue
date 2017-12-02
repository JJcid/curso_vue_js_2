<template>
  <div class="container">
    <div class="jumbotron">
      <button type="button" class="btn btn-primary"
              @click="componenteSeleccionado = 'iniciarSesion'"  
      >Iniciar sesión</button>
      <button type="button" class="btn btn-primary"
              @click="componenteSeleccionado = 'cambiarClave'"  
      >Cambiar contraseña</button>
      <keep-alive> <!-- No destruye el componente y mantiene los datos introducidos -->
        <component :is="componenteSeleccionado"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import MostrarFormulario from './MostrarFormulario.vue';
import IniciarSesion from './IniciarSesion.vue';
import CambiarClave from './CambiarClave.vue';
export default {
  components: {
    formulario: MostrarFormulario,
    iniciarSesion: IniciarSesion,
    cambiarClave: CambiarClave
  },
  data() {
    return{
      componenteSeleccionado: 'iniciarSesion'
    }
  }
}
</script>

<style>

</style>
