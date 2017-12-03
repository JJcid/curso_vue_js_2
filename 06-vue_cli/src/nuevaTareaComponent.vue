<template>
  <div class="input-group">
    <input type="text"
           placeholder="Escribe la nueva tarea"
           v-model="nuevaTarea"
           class="form-control"
           v-on:keyup.enter="agregarTarea">
    <span class="input-group-btn">
      <button type="button"
        v-on:click="agregarTarea"
        class="btn btn-primary"> Agregar 
      </button>
    </span>
  </div>
</template>
<script>
  import { bus } from './main.js';
  export default{
    data(){
      return {
        nuevaTarea: ''
      }
    },
    props: ['tareas','actualizarContador'],
    methods: {
      agregarTarea() {
        let texto = this.nuevaTarea.trim();
        if(texto){
          this.tareas.push({
            texto: texto,
            finalizada: false
          })
          bus.actualizarContador(this.tareas.length);
        }
        this.nuevaTarea = ''
        this.$http.post('tareas.json',{
          texto: texto,
          finalizada: false
        }).then(respuesta => {
          console.log(respuesta)
          })
      }
    },
    created(){
        bus.actualizarContador(this.tareas.length);
    }
  }
</script>