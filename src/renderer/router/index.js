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
      path: '/maintenance',
      name: 'maintenance',
      component: require('@/components/Maintenance').default
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
      path: '/qrcode',
      name: 'qrcode',
      component: require('@/components/QRCode').default
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
      path: '/settings/id_document_upload',
      name: 'settingsIdUploader',
      component: require('@/components/SettingsIdUploader').default
    },
    {
      path: '/settings/terms_of_service',
      name: 'settingsTermsOfService',
      component: require('@/components/SettingsTermsOfService').default
    },
    {
      path: '/settings/ja_terms_of_service',
      name: 'settingsJaTermsOfService',
      component: require('@/components/SettingsJaTermsOfService').default
    },
    {
      path: '/settings/vn_terms_of_service',
      name: 'settingsVnTermsOfService',
      component: require('@/components/SettingsVnTermsOfService').default
    },
    {
      path: '/settings/privacy_policy',
      name: 'settingsPrivacyPolicy',
      component: require('@/components/SettingsPrivacyPolicy').default
    },
    {
      path: '/settings/ja_privacy_policy',
      name: 'settingsJaPrivacyPolicy',
      component: require('@/components/SettingsJaPrivacyPolicy').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
