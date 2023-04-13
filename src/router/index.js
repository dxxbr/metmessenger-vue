import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeMenue from '../views/HomeMenueView.vue';
import AddMenue from '../views/AddMenue.vue';

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
    path: '/HomeMenue',
    name: 'HomeMenue',

    component: HomeMenue,
  },
  {
    path: '/add',
    name: 'addMenue',

    component: AddMenue,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
