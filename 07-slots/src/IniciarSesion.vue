<template>
  <div class="container">
    <div class="jumbotron">
      <formulario>
        <div slot="titulo">
          <h3>Iniciar Sesión</h3>
        </div>
        <div slot="campos">
          <div class="form-group">
            <label for="correo">Correo electrónico</label>
            <input type="email" name="" id="correo" class="form-control" placeholder="Escribe tu email">
          </div>
          <div slot="campos" class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" name="" id="password" class="form-control" placeholder="Contraseña">
          </div>
        </div>
        <div slot="boton">
          <button type="button" class="btn btn-primary">Iniciar sesión</button>
        </div>
      </formulario>
    </div>
  </div>
</template>

<script>
import MostrarFormulario from './MostrarFormulario.vue';
export default {
  components: {
    formulario: MostrarFormulario
  },
  destroyed(){
    console.log('El componente ha sido destruido');
  },
  activated(){
    console.log('el componente fue activado');
  },
  deactivated(){
    console.log('el componente fue desactivado');
  }
}
</script>

<style>

</style>
