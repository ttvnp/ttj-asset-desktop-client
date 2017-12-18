import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/components/Index').default
    },
    {
      path: '/signup',
      name: 'signup',
      component: require('@/components/Signup').default
    },
    {
      path: '/signup_email',
      name: 'signup_email',
      component: require('@/components/SignupEmail').default
    },
    {
      path: '/signup_code/:isEmailInUse',
      name: 'signup_code',
      component: require('@/components/SignupCode').default
    },
    {
      path: '/signup_end',
      name: 'signup_end',
      component: require('@/components/SignupEnd').default
    },
    {
      path: '/home',
      name: 'home',
      component: require('@/components/Home').default
    },
    {
      path: '/send',
      name: 'send',
      component: require('@/components/Send').default
    },
    {
      path: '/settings',
      name: 'settings',
      component: require('@/components/Settings').default
    },
    {
      path: '/settings/profile_edit',
      name: 'settingsProfileEdit',
      component: require('@/components/SettingsProfileEdit').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
