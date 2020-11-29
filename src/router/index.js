import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import i18n from '../i18n'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/:lang',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: 'about-us',
        name: 'Page',
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about-us" */ '../views/Page.vue')
      },
      {
        path: 'business-units',
        name: 'Page',
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "business-units" */ '../views/Page.vue')
      },
      {
        path: 'projects',
        name: 'Page',
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "projects" */ '../views/Page.vue')
      },
      {
        path: 'partners',
        name: 'Page',
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "partners" */ '../views/Page.vue')
      },
      {
        path: 'media-events',
        name: 'Page',
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "media-events" */ '../views/Page.vue')
      },
      {
        path: 'contacts',
        name: 'Page',
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "contacts" */ '../views/Page.vue')
      },
      {
        path: 'careers',
        name: 'Page',
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "careers" */ '../views/Page.vue')
      },
      {
        path: 'events',
        name: 'Page',
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "events" */ '../views/Page.vue')
      },
      {
        path: 'news',
        name: 'Page',
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "news" */ '../views/Page.vue')
      },
      {
        path: 'contact',
        name: 'Page',
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "contact" */ '../views/Page.vue')
      },
      {
        path: 'alshalalat',
        name: 'Page',
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "alshalalat" */ '../views/Page.vue')
      },
      {
        path: 'semouha',
        name: 'Page',
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "semouha" */ '../views/Page.vue')
      },
      {
        path: 'antoniades',
        name: 'Page',
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "antoniades" */ '../views/Page.vue')
      },
      {
        path: 'maadi',
        name: 'Page',
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "maadi" */ '../views/Page.vue')
      },
      {
        path: 'hai-elgamaa',
        name: 'Page',
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "hai-elgamaa" */ '../views/Page.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
