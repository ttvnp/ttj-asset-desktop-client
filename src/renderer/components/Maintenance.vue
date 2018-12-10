<template>
  <div class="maintenance_container">
    <div class="maintenance">
      <img src="static/ic_maintenance.png"/>
      <br/><br/>
      <p>We are currently undergoing maintenance. This will not take long :)</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('app/setLoading', false)
    this.$store.dispatch('app/setShowDrawer', false)
  }
}
</script>

<style scoped>
div.maintenance_container {
  width: 100%;
  height: 100vh;
  background-color: #03a9f4;
  display: table;
}
div.maintenance {
  display: table-cell;
  vertical-align: middle;
}
img {
  display: block;
  margin: auto;
}
p {
  color: white;
  text-align: center;
  margin: auto auto;
  font-size: 18px;
}
</style>
