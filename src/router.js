import { createRouter, createWebHistory } from 'vue-router';
import Login from './views/Login.vue';
import Forget from './views/Forget.vue'; // Убедитесь в правильности регистра
import Dashboard from './views/Dashboard.vue';
import Mail from './views/Mail.vue';

const routes = [
  { path: '/login', component: Login, alias: '/' }, // Алиас для '/'
  { path: '/forget', component: Forget },
  { path: '/dashboard', component: Dashboard },
  { path: '/mail', component: Mail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


