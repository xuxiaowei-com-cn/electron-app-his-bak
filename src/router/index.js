import Vue from 'vue';
import VueRouter from 'vue-router';

import homeRoutes from './home';
import aboutRoutes from './about';
import loginRoutes from './login';

Vue.use(VueRouter);

const routes = [
  homeRoutes,
  aboutRoutes,
  loginRoutes,
];

const router = new VueRouter({
  routes,
});

export default router;
