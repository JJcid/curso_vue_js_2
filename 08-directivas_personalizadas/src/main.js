import Vue from 'vue'
import App from './App.vue'

Vue.directive('decorar',{
  bind(el, binding, vnode) {
    el.style.fontFamily = binding.value.familia;
    el.style.color = binding.value.color;

    if(binding.arg == 'grande'){
      el.style.fontSize = '50px';
    }
    if(binding.modifiers['bold']){
      el.style.fontWeight = 'bold';
    }
    if(binding.modifiers['italic']){
      el.style.fontStyle = 'italic';
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
