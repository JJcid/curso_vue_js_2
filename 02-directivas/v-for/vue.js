var app = new Vue({
    el: '#vue',
    data: {
        paises: ['España', 'México', 'Colombia'],
        nombres: [{nombre: 'Pedro', apellido: 'Rojas'},
                {nombre: 'Manolo', apellido: 'Carreño'}],
        empleado: {
            nombre: 'José Javier',
            edad: '32 años',
            profesion: 'Desarrollador',
            nacionalidad: 'Española',
            empresa: 'Google',
            telefono: '123456789'
        }
    }
})