import InicioComponent from './componentes/Inicio.vue';
import Usuarios from './componentes/Usuarios.vue';
import InfoUsuario from './componentes/InfoUsuario.vue';

export const rutas = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: '/usuarios',
    component: Usuarios,
    children: [
      {
        path: ':id',
        component: InfoUsuario,
        name: 'infoUsuario'
      }
    ]
  }
]