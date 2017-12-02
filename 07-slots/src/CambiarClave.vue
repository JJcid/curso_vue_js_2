<template>
  <div class="container">
    <div class="jumbotron">
      <formulario>
        <div slot="titulo">
          <h3>Cambiar contraseña</h3>
        </div>
        <div slot="campos">
          <div slot="campos" class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" name="" id="password" class="form-control" placeholder="Nueva contraseña">
          </div>
        </div>
        <div slot="boton">
          <button type="button" class="btn btn-primary">Cambiar contraseña</button>
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
  }
}
</script>

<style>

</style>
