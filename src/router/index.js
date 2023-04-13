import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeMenu from '../views/HomeMenuView.vue';
import AddMenu from '../views/AddMenu.vue';

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
    path: '/HomeMenu',
    name: 'HomeMenu',

    component: HomeMenu,
  },
  {
    path: '/add',
    name: 'addMenu',

    component: AddMenu,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
