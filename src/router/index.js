import Vue from 'vue'
import Router from 'vue-router'
import DoodleHome from '@/components/DoodleHome'
import DoodleBrowse from '@/components/DoodleBrowse'
import DoodleFullscreen from '@/components/DoodleFullscreen'
import DoodleOffline from '@/components/DoodleOffline'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: DoodleHome
    },
    {
      path: '/browse/',
      component: DoodleBrowse
    },
    {
      path: '/browse/:year',
      component: DoodleBrowse
    },
    {
      path: '/browse/:year/:slug',
      name: 'DoodleFullscreen',
      component: DoodleFullscreen,
      props: { default: false, url: 'default' }
    },
    {
      path: '/offline-games/',
      component: DoodleOffline
    }
  ]
})
