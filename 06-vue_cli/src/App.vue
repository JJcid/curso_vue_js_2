<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :titulo="titulo"></titulo>
      <nueva-tarea :tareas="tareas"
                   :actualizarContador="actualizarContador"
      >
      </nueva-tarea>
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
      tareas: []
    }
  },
  methods: {
    actualizarContador() {
      this.numTareas += 1;
    }
  },
  created(){
      this.$http.get('tareas.json')
                .then(respuesta => {
                  return respuesta.json();
                }).then(respuestaJson => {
                    for(let id in respuestaJson){
                      let tarea = {
                        id: id,
                        texto: respuestaJson[id].texto,
                        finalizada: respuestaJson[id].finalizada
                      }
                      this.tareas.push(tarea);
                      this.numTareas += 1;
                  }
                });
    }
}
</script>

<style>

</style>
