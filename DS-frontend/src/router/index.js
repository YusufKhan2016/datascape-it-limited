import { createRouter, createWebHistory } from 'vue-router'
import nProgress from 'nprogress'

import HomeView from '@/views/homeView.vue'
import AboutUsView from '@/views/aboutUsView.vue'
import MdMessageView from '@/views/mdMessageView.vue'
import ServicesView from '@/views/servicesView.vue'
import ProductsView from '@/views/productsView.vue'
import CareerView from '@/views/careerView.vue'
import ContactsView from '@/views/contactsView.vue'
import LayoutView from '@/layout/layoutView.vue' 

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
        path: 'about-us',
        name: 'about-us',
        component: AboutUsView,
      },
      {
        path: 'md-message',
        name: 'md-message',
        component: MdMessageView,
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
})

nProgress.configure({
  showSpinner: false,
  speed: 800,
})

router.beforeEach((to, from, next) => {
  nProgress.start()
  next()
})

router.afterEach(() => {
  nProgress.done()
})


export default router
