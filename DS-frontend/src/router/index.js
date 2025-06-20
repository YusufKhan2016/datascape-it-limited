import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/homeView.vue'
import AboutView from '@/views/aboutView.vue'
import ServicesView from '@/views/servicesView.vue'
import ProductsView from '@/views/productsView.vue'
import CareerView from '@/views/careerView.vue'
import ContactsView from '@/views/contactsView.vue'
import LayoutView from '@/Layout/layoutView.vue'

const routes = [
  {
    path: '/',
    component: LayoutView,
    children: [

      {
        path: '',
        name: 'home',
        component: HomeView,
      },
      {
        path: 'about',
        name: 'about',
        component: AboutView,
      },
      {
        path: 'services',
        name: 'services',
        component: ServicesView,
      },
      {
        path: 'products',
        name: 'products',
        component: ProductsView,
      },
      {
        path: 'career',
        name: 'career',
        component: CareerView,
      },
      {
        path: 'contacts',
        name: 'contacts',
        component: ContactsView,
      },

    ]
  }
]

const router = createRouter({

  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) return savedPosition
    return { top: 0 }
  }
  
})


export default router
