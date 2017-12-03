import InicioComponent from './componentes/Inicio.vue';
//import Usuarios from './componentes/Usuarios.vue';
import InfoUsuario from './componentes/InfoUsuario.vue';


//Lazy-loading, solo carga los componentes cuando sean requeridos y no cargará todos..
//..al inicio de la aplicación en el build.js
const Usuarios = resolve => {
  require.ensure(['./componentes/Usuarios.vue'], () => {
    resolve(require('./componentes/Usuarios.vue'));
  });
};

export const rutas = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: '/usuarios',
    component: Usuarios,
    name: 'usuarios'
  },
  {
    path: '/usuarios/:id',
    component: InfoUsuario,
    name: 'infoUsuario'
  },
  {
    path: '/users',
    redirect: '/usuarios'
  },
  {
    path: '*',
    redirect: '/'
  }
]