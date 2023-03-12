import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/Auth/SignUpView.vue'
import LoginView from '../views/Auth/LoginView.vue'
import DashboardView  from '../views/Dashboard/DashboardView.vue'
import JoinView from '../views/JoinView.vue'
import RoomView from '../views/Room/RoomView.vue'

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

    {
      path:'/dashboard',
      name:'dashboad',
      component:DashboardView
    },
    {
      path:'/join-meeting',
      name: 'join-meeting',
      component:JoinView
    },
    {
      path:'/room/:id',
      name: 'room',
      component:RoomView
    }
  ]
})

export default router
