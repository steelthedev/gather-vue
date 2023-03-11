import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/Auth/SignUpView.vue'
import LoginView from '../views/Auth/LoginView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
    {
      path:'/signup',
      name:'signup',
      component:SignUpView,
    },

    {
      path:'/login',
      name:'login',
      component:LoginView,
    },
  ]
})

export default router
