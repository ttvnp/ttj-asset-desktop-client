<template>
  <v-app id="app" standalone>
    <v-navigation-drawer fixed v-model="drawer" app v-if="settings.showDrawer">
      <drawer-menu></drawer-menu>
    </v-navigation-drawer>
    <v-toolbar class="primary" fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" v-if="settings.showDrawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">TTJ Desktop Wallet</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer :absolute="false">
      <span>&copy; {{ new Date().getFullYear() }} TTVNP Co,.Ltd. All Rights Reserved.</span>
    </v-footer>
    <spinner></spinner>
  </v-app>
</template>

<script>
import Menu from '@/components/Menu'
import Spinner from '@/components/Spinner'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  data: () => ({
    drawer: null
  }),
  computed: mapGetters({
    settings: 'app/settings'
  }),
  components: {
    DrawerMenu: Menu,
    Spinner: Spinner
  },
  methods: {
  },
  created () {
  }
}
</script>

<!-- global css settings -->
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
</style>
