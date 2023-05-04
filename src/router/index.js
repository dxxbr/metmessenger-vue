import Vue from 'vue';
import VueRouter from 'vue-router';
import ChatMenu from '../views/ChatMenuView.vue';
import AddMenu from '../views/AddMenu.vue';
import LoginPage from '../views/LoginPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/ChatMenu',
    name: 'ChatMenu',

    component: ChatMenu,
  },
  {
    path: '/add',
    name: 'addMenu',

    component: AddMenu,
  },
  {
    path: '/login',
    name: 'LogIn',

    component: LoginPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
