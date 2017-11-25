var app = new Vue({
    el: '#vue',
    data: {
        mensaje: 'Aprende vue.js Fácilmente',
        src: 'https://vuejs.org/images/logo.png'
    }, methods: {
        mostrarMensajeA: function(){
            return 'Esto es un método de vue.js';
        },
        mostrarMensajeB: function(){
            return 'Esto es un método más llamando al mensaje: ' + this.mensaje;
        }
    }
})