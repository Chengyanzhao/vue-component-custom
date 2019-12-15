import Vue from 'vue'
import VueRouter from 'vue-router'
import docRoutes from './docRoutes'
import demoRoutes from './demoRoutes'
import Layout from '../components/layout.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/components',
    component: Layout,
    props: route => {
      const name = route.path.split('/components/')[1].split('/')[0]
      return { name, showDemo: true }
    },
    children: demoRoutes,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    component: Layout,
    props: route => {
      const name = route.path.split('/docs/')[1].split('/')[0]
      return { name, showApi: true }
    },
    children: docRoutes,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
