import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/leagues',
    name: 'Leagues',
    component: () => import('../views/LeagueView.vue'),
  },
  {
    path: '/news/:id',
    name: 'News',
    component: () => import('../components/HomePage/Newsletter_section/detailedNews.component.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
