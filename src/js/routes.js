
import HomePage from '@/pages/home.vue';
import Login from '@/pages/login.vue';
import Register from '@/pages/register.vue';


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
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
