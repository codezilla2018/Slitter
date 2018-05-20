import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Slideshow from '@/components/Slideshow'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/slideshow',
      name: 'Slideshow',
      component: Slideshow
    }
  ]
})
