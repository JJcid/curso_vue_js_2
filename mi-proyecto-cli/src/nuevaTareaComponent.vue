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
  export default{
    data(){
      return {
        nuevaTarea: ''
      }
    },
    props: ['tareas'],
    methods: {
      agregarTarea() {
        let texto = this.nuevaTarea.trim();
        if(texto){
          this.tareas.push({
            texto: texto,
            finalizada: false
          })
        }
      }
    }
  }
</script>