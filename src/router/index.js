import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Work from '../views/Work.vue'
import Gallery from '../views/Gallery.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({

  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/About.vue')
      component: About
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]

  
})

export default router
