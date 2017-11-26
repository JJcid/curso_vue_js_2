var app = new Vue({
    el: '#vue',
    data: {
        mensaje: 'Aprende vue.js Fácilmente'
    }, beforeCreate: function(){
        console.log('llamando a beforeCreate');
    }, created: function(){
        console.log('llamando a Created');
    }, beforeMount: function(){
        console.log('llamando beforeMount');
    }, mounted: function(){
        console.log('llamando a mounted');
    }, beforeUpdate: function(){
        console.log('llamando a beforeUpdate');
    }, updated: function(){
        console.log('llamando a updated');
    }, beforeDestroy: function(){
        console.log('llamando a beforeDetroy');
    }, destroyed: function(){
        console.log('llamando a destroyed');
    }, methods: {
        destruir: function(){
            this.$destroy();
        }
    }
})