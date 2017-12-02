<template>
  <div class="container">
    <div class="jumbotron">
      <span v-decorar:grande.bold.italic="{familia: 'times new roman', color: 'red'}">Aprende Vue.js</span>
      <hr>
      <span v-decorar-local:pequeno="{familia: 'sheriff', color: 'green'}">Aprende Vue.js</span>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    'decorar-local' : {
      bind(el, binding, vnode) {
        el.style.fontFamily = binding.value.familia;
        el.style.color = binding.value.color;

        if(binding.arg == 'grande'){
          el.style.fontSize = '50px';
        }
        if(binding.arg == 'pequeno'){
          el.style.fontSize = '15px';
        }
        if(binding.modifiers['bold']){
          el.style.fontWeight = 'bold';
        }
        if(binding.modifiers['italic']){
          el.style.fontStyle = 'italic';
        }
      }
    }
  }
}
</script>

<style>

</style>
