var app = new Vue({
    el: '#app',
    data: {
       titulo: 'Lista de tareas',
       tareas: [
           {
               texto: 'Aprender Vue.js',
               finalizada: false
           },
           {
               texto: 'Aprender Angular 5',
               finalizada: false
           },
           {
               texto: 'Aprender Sass',
               finalizada: false
           },
           {
               texto: 'Aprender Ionic 3',
               finalizada: false
           },
           {
               texto: 'Aprender Bootstrap',
               finalizada: false
           }
       ],
       nuevaTarea: ''
    },
    methods: {
        agregarTarea: function(){
            var texto = this.nuevaTarea.trim();
            if(texto){
                this.tareas.push({
                        texto: texto,
                        finalizado: false
                });
                this.nuevaTarea = '';
            }
        },
        borrar: function(indice){
            this.tareas.splice(indice,1);
        }
    }
})