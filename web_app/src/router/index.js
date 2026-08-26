import { createRouter, createWebHistory } from 'vue-router'

import Admin from '@/components/Admin.vue'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import ProductDetails from '@/components/ProductDetails.vue'
import Products from '@/components/Products.vue'
import Profile from '@/components/Profile.vue'
import SellerView from '@/components/SellerView.vue'
import SignUp from '@/components/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home 
    },
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/product_details',
      component: ProductDetails
    },
    {
      path: '/products',
      component: Products
    },
    {
      path: '/profile',
      component: Profile
    },{
      path: '/sellerview',
      component: SellerView
    },{
      path: '/signup',
      component: SignUp
    }
  ],
})

export default router
