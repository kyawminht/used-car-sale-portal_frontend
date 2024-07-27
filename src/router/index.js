import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/components/DefaultLayout.vue';
import AuthLayout from '@/components/AuthLayout.vue';
import AdminLayout from '@/components/AdminLayout.vue';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import CarDetail from '@/views/CarDetail.vue';
import Register from '@/components/Auth/Register.vue';
import Login from '@/components/Auth/Login.vue';
import CarCreate from '@/views/CreateCar.vue';
import UserList from '@/views/admin/UserList.vue';
import CarManagement from '@/views/admin/CarManagement.vue';
import UpdateCar from '@/views/admin/UpdateCar.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView,
      },
      {
        path: 'about',
        name: 'About',
        component: AboutView,
      },
      {
        path: 'detail/:id',
        name: 'Detail',
        component: CarDetail,
        props: true,
      },
      {
        path: 'car/create',
        name: 'CreateCar',
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
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: 'users',
        name: 'UserList',
        component: UserList,
      },
      {
        path: 'cars',
        name: 'CarManagement',
        component: CarManagement,
      },
      {
        path: 'car/update/:id',
        name: 'UpdateCar',
        component: UpdateCar,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
