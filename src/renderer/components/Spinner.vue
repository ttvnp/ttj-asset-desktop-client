<template>
  <div v-if="loading === true" class="spinner-container">
    <v-progress-circular indeterminate v-bind:size="100" v-bind:width="7" color="primary"></v-progress-circular>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters({
    loading: 'app/loading'
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.spinner-container {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1000;
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
  border: none;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: wait;
  opacity: .6;
  transition: opacity .4s;
}
.spinner-container > div {
  position: absolute;
  z-index: 1001;
  margin: 0;
  padding: 0;
  height: 40px;
  top: 50%;
  left: 50%;
  text-align: center;
  line-height: 40px;
  transform: translateX(-50%) translateY(-50%);
}
</style>
