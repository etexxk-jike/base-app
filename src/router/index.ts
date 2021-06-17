// createWebHistory,
import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'
import Home from '../views/Home.vue'
const Child1App = () => import('../views/child1-vue.vue')
const Child1App1 = () => import('../views/child2-vue.vue')
const Child1App12 = () => import('../views/child-1-2-vue.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/vue',
    name: 'Vue',
    component: Child1App
  },
  {
    path: '/vue/about',
    name: 'VueAbout',
    component: Child1App
  },
  {
    path: '/vue/prop-of-main',
    name: 'VuePropOfMain',
    component: Child1App
  },
  // Uncaught Error: application 'vueApp' died in status NOT_MOUNTED: [qiankun] Target container with #vue-app not existed while vueApp mounting!
  // 原因: 没有配置应用2 的入口路径
  {
    path: '/app1',
    name: 'VueApp1Home',
    component: Child1App1
  },
  {
    path: '/app1/about',
    name: 'VueApp1About',
    component: Child1App1
  },
  {
    path: '/combone12',
    name: 'VueApp1Combone12',
    component: Child1App12
  }
]

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes
})

export default router
