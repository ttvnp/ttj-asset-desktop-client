<template>
  <div id="wrapper">
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
  },
  mounted () {
    this.$store.dispatch('app/setShowDrawer', true)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
