import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'Open Data COVID-19 Puerto Rico',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
        },
        {
          path: '/taskforce',
          name: 'Task Force Dashboard',
          component: () => import(/* webpackChunkName: "demo" */ './views/DeptDeSalud.vue')
        },
        {
          path: '/google',
          name: 'Google Mobility Report',
          component: () => import(/* webpackChunkName: "demo" */ './views/GoogleMobilityReport.vue')
        },
        {
          path: '/prpht',
          name: 'PR Public Health Trust Dashboard',
          component: () => import(/* webpackChunkName: "demo" */ './views/PublicHealthTrust.vue')
        }
      ]
    },
    {
      path: '/dashboard',
      redirect: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'Open Data COVID-19 Puerto Rico',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
        },
        {
          path: '/taskforce',
          name: 'Task Force Dashboard',
          component: () => import(/* webpackChunkName: "demo" */ './views/DeptDeSalud.vue')
        },
        {
          path: '/google',
          name: 'Google Mobility Report',
          component: () => import(/* webpackChunkName: "demo" */ './views/GoogleMobilityReport.vue')
        },
        {
          path: '/prpht',
          name: 'PR Public Health Trust Dashboard',
          component: () => import(/* webpackChunkName: "demo" */ './views/PublicHealthTrust.vue')
        }
      ]
    },
    
  ]
})
