var app = new Vue({
    el: '#vue',
    data: {
        primero: 0,
        segundo: 0,
        tercero: 0,
        cuarto: 0
    },
    computed: {
        total: function(){
            return this.primero +
                   this.segundo +
                   this.tercero + 
                   this.cuarto;
        }
    }
})