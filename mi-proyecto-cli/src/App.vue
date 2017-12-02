<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :titulo="titulo"></titulo>
      <nueva-tarea :tareas="tareas"></nueva-tarea>
      <lista-tareas :tareas="tareas"></lista-tareas>
    </div>
  </div>
</template>
  
<script>
import Titulo from './TituloComponent.vue';
import NuevaTarea from './NuevaTareaComponent.vue';
import ListaTareas from './ListaTareasComponent.vue';
export default {
  components: {
    Titulo,
    NuevaTarea,
    ListaTareas
  },
  data(){
    return {
      titulo: 'Mi Lista de tareas',
      tareas: [
        {
            texto: 'Aprender Vue.js',
            finalizada: false
        },
        {
            texto: 'Aprender Angular 5',
            finalizada: false
        },
        {
            texto: 'Aprender Sass',
            finalizada: false
        },
        {
            texto: 'Aprender Ionic 3',
            finalizada: false
        },
        {
            texto: 'Aprender Bootstrap',
            finalizada: false
        }
      ]
    }
  }
}
</script>

<style>

</style>
