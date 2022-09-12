
import HomePage from '@/pages/home.vue';
import Login from '@/pages/login.vue';
import Register from '@/pages/register.vue';
import ProfilePage from '../pages/profile.vue';
import ExibitionPage from '../pages/exibition.vue';
import SingleExibit from '@/pages/exibit.vue';


import NotFoundPage from '@/pages/404.vue';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/profile/',
    component: ProfilePage,
  },
  {
    path: '/exibition/:id',
    component: ExibitionPage,
  },
  {
    path: '/exibit/:id',
    component: SingleExibit,
  },

  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
