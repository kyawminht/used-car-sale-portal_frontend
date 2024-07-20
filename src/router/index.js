import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/components/DefaultLayout.vue';
import AuthLayout from '@/components/AuthLayout.vue';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import CarDetail from '@/views/CarDetail.vue';
import Register from '@/components/Auth/Register.vue';
import Login from '@/components/Auth/Login.vue';
import CarCreate from '../views/CreateCar.vue'
const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: HomeView,
      },
      {
        path: '/about',
        name: 'About',
        component: AboutView,
      },
      {
        path: '/detail/:id',
        name: 'Detail',
        component: CarDetail,
        props: true, 
      },

      {
        path: 'car/create',
        name: 'create',
        component: CarCreate,
      },

    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: 'register',
        name: 'Register',
        component: Register,
      },
      {
        path: 'login',
        name: 'Login',
        component: Login,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
