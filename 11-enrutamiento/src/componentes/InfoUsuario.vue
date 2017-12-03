<template>
  <div>
    <h3>información del usuario</h3>
    <p><strong>Nombre: </strong> {{ nombre }}</p>
    <p><strong>Email: </strong>{{ email }}</p>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        nombre: '',
        email: ''
      }
    },
    watch: {
      $route(){
        let id = this.$route.params.id;
      this.$http.get('https://jsonplaceholder.typicode.com/users/' + id)
                .then(respuesta => {
                  return respuesta.json();
                }).then(usuario => {
                  this.nombre = usuario.name;
                  this.email = usuario.email;
                })
      }
    },
    created(){
      let id = this.$route.params.id;
      this.$http.get('https://jsonplaceholder.typicode.com/users/' + id)
                .then(respuesta => {
                  return respuesta.json();
                }).then(usuario => {
                  this.nombre = usuario.name;
                  this.email = usuario.email;
                })
    }
  }
</script>
