<template>
  <div id="wrapper">
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'index',
  methods: {
  },
  mounted () {
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
