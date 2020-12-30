import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Logged from '../views/Logged.vue'
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Main from '../components/Main.vue';
import MyGroup from '../components/MyGroup.vue';
import GroupMore from '../components/GroupMore.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/groupmore',
    name: 'GroupMore',
    component: GroupMore
  },
  {
    path: '/mygroup',
    name: 'MyGroup',
    component: MyGroup
  },
  {
    path: '/logged',
    name: 'Logged',
    component: Logged
  },
  {
    path: '/logged',
    name: 'Main',
    component: Main
  },
  {
  
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
