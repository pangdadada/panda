import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
      redirect: '/IndexViewCont',
      children:[
        {
          path: 'IndexViewCont',
          name:'IndexViewCont',
          component: () => import('../views/IndexViewCont.vue')
        },
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue'),
      children:[
        {
          path: 'Main',
          name:'main',
          component: () => import('../views/admin/Main.vue')
        },
      ]
    },
    {
      path: '/home',
      name:'home',
      component: () => import('../views/HomeView.vue'),
      children:[
        {
          path: 'FileCreate',
          name:'file_create',
          component: () => import('../views/office/FileCreate.vue')
        },
        {
          path: 'FileComm',
          name:'file_comm',
          component: () => import('../views/office/FileComm.vue')
        },
        {
          path: 'ReportRead',
          name:'report_read',
          component: () => import('../views/office/ReportRead.vue')
        },
      ]
    },
    
  ]
})

export default router
