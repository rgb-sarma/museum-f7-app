
import HomePage from '@/pages/home.vue';
import Login from '@/pages/login.vue';
import Register from '@/pages/register.vue';
import ProfilePage from '../pages/profile.vue';


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
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
