<template>
  <div>
    <p>lista de usuarios</p>
    <ul class="list-group">
      <router-link tag="li" 
                   :to="{name:'infoUsuario', params: { id: usuario.id }}" 
                   v-for="(usuario, index) in usuarios" 
                   :key="index" 
                   class="list-group-item">{{ usuario.name }}
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        id: this.$route.params.id,
        usuarios: {}
      }
    },
    created(){
      this.$http.get('https://jsonplaceholder.typicode.com/users/')
                .then(respuesta => {
                  return respuesta.json()
                }).then(usuarios => {
                  this.usuarios = usuarios
                })
    }
  }
</script>
