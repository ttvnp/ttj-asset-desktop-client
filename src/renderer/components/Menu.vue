<template>
  <div>
    <v-list two-line>
      <v-list-tile avatar @click="">
        <v-list-tile-avatar>
          <img :src="profileImageURL">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-html="name"></v-list-tile-title>
          <v-list-tile-sub-title v-html="emailAddress"></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list dense>
      <v-list-tile @click="navTo('home')">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
import router from '@/router'
import { mapGetters } from 'vuex'
export default {
  name: 'menu',
  computed: mapGetters({
    name: 'user/name',
    emailAddress: 'user/emailAddress',
    profileImageURL: 'user/profileImageURL'
  }),
  methods: {
    navTo (name) {
      router.push({ name: name })
    },
    onPathChange (routeName) {
      this.$store.dispatch('device/init', function (isDeviceReady) {
        switch (routeName) {
          case 'index':
          case 'signup':
            if (isDeviceReady) router.push({ name: 'home' })
            break
          default:
            if (!isDeviceReady) router.push({ name: 'signup' })
            break
        }
      })
      this.$store.dispatch('user/init')
      switch (routeName) {
        case 'index':
        case 'signup':
          this.$store.dispatch('app/setShowDrawer', false)
          break
        default:
          this.$store.dispatch('app/setShowDrawer', true)
          break
      }
    }
  },
  watch: {
    '$route': function (to, from) {
      this.onPathChange(to.name)
    }
  },
  mounted () {
    this.onPathChange(this.$route.name)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
