<template>
  <div id="wrapper">
  </div>
</template>

<script>
import util from '@/util'
import router from '@/router'
const langCookieName = 'lang'
export default {
  name: 'index',
  methods: {
  },
  mounted () {
    var lang = 'en'
    const cookieLang = util.getCookie(langCookieName)
    if (cookieLang) {
      lang = cookieLang
    }
    this.$i18n.set(lang)
    const self = this
    this.$store.dispatch('device/init', { callback: function (isDeviceReady) {
      if (isDeviceReady) {
        self.$store.dispatch('app/setShowDrawer', true)
        router.push({ name: 'home' })
      } else {
        router.push({ name: 'signup' })
      }
    }})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
