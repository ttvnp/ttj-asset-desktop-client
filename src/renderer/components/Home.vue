<template>
  <v-layout>
    <v-flex xs12 sm8>
      <v-card>
        <v-card-title class="primary white--text" primary-title>
          <div>
            <h3 class="headline mb-0">Balances</h3>
          </div>
        </v-card-title>
        <v-container>
          <user-balance :forceRefresh="!loadBalances" v-on:loaded="onUserBalanceLoaded"></user-balance>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import UserBalance from '@/components/UserBalance'
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  components: {
    UserBalance: UserBalance
  },
  computed: mapGetters({
    loadBalances: 'app/loadBalances'
  }),
  methods: {
    onUserBalanceLoaded () {
      this.$store.dispatch('app/setBalancesLoaded')
    }
  },
  mounted () {
    this.$store.dispatch('app/setShowDrawer', true)
    this.$store.dispatch('app/init')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
