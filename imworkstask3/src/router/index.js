import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
    path: '/mytasks',
    name: 'MyTasks',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyTasks.vue')
  }
  // {
  //   path: '/popup1',
  //   name: 'Popup1',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Popup1.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
