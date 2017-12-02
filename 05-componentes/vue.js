let data = {
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
 }

Vue.component('titulo', {
    template: '<h2>{{ titulo }}</h2>',
    data: function(){
        return { titulo: '-- Lista de tareas --'}
    }
})

Vue.component('nueva-tarea',{
    template: `<div class="input-group">
                    <input type="text" class="form-control" placeholder="Introduce la tarea" v-model="nuevaTarea" v-on:keyup.enter="agregarTarea"/>
                    <span class="input-group-btn">
                        <button class="btn btn-primary" @click='agregarTarea()'>Agregar tarea</button>
                    </span>
                </div>`,
    data: function(){
        return data;
    },
    methods: {
        agregarTarea: function(){
            var texto = this.nuevaTarea.trim();
            if(texto){
                this.tareas.push({
                        texto: texto,
                        finalizado: false
                })
            }
            this.nuevaTarea = '';
        }
    }
})

Vue.component('lista-de-tareas',{
    template:   `<ul class="list-group">
                    <li class="list-group-item" v-for="(tarea, indice) of tareas" v-bind:class = "{finalizada: tarea.finalizada }"> {{ tarea.texto }}
                        <span class="pull-right">
                            <button class="btn btn-success btn-xs glyphicon glyphicon-ok" @click="tarea.finalizada = !tarea.finalizada"></button>
                            <button class="btn btn-danger btn-xs glyphicon glyphicon-remove" v-on:click="borrar(indice)"></button>
                        </span>
                    </li>
                </ul>`,
    data: function(){
        return data;
    },
    methods: {
        borrar: function(indice){
            this.tareas.splice(indice,1);
        }
    }            
})

var app = new Vue(
    {
      el: '#app',
      data: data,
      methods: {
          
      }
    }
)