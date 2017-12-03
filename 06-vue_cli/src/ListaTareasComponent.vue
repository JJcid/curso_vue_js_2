<template>
  <ul class="list-group">
      <li class="list-group-item" v-for="(tarea, indice) of tareas" v-bind:class = "{finalizada: tarea.finalizada }"> {{ tarea.texto }}
          <span class="pull-right">
              <button class="btn btn-success btn-xs glyphicon glyphicon-ok" @click="estado(indice)"></button>
              <button class="btn btn-danger btn-xs glyphicon glyphicon-remove" v-on:click="borrar(indice)"></button>
          </span>
      </li>
  </ul>
</template>

<script>
import { bus } from './main.js';
  export default {
    props: ['tareas'],
    methods: {
      borrar(indice){
        this.tareas.splice(indice,1);
        let id = this.tareas[indice].id;
        this.$http.delete('tareas/' + id + '.json').then(respuesta => {console.log(respuesta)})
        bus.$emit('actualizarContador',this.tareas.length);
      },
      estado(indice){
        let finalizada = this.tareas[indice].finalizada = !this.tareas[indice].finalizada;
        let id = this.tareas[indice].id;
        this.$http.patch('tareas/' + id + '.json', {
          finalizada: finalizada
        }).then( respuesta => { 
            console.log(respuesta);
          })
      }
    }
  }
</script>

<style scoped>
  .finalizada{
    color: gray;
    text-decoration: line-through;
  }
</style>