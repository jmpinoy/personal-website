import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // scrollBehavior(to) {
  //   if (to.hash) {
  //     return { 
  //       el: to.hash, behavior: 'smooth',
  //       top: 60
  //     }
  //   }
  // },
  routes: [
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutMeView.vue')
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('@/views/ExperienceView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue')
    },
  ]
})

export default router
