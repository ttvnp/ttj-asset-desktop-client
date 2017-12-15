<template>
  <div>
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
    <v-layout class="mt-4">
      <v-flex xs12 sm10>
        <v-card>
          <v-card-title class="primary white--text" primary-title>
            <div>
              <h3 class="headline mb-0">Payment History</h3>
            </div>
          </v-card-title>
          <v-container>
            <user-transactions :forceRefresh="!loadPaymentHistory" v-on:loaded="onPaymentHistoryLoaded"></user-transactions>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserBalance from '@/components/UserBalance'
import UserTransactions from '@/components/UserTransactions'
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  components: {
    UserBalance: UserBalance,
    UserTransactions: UserTransactions
  },
  computed: mapGetters({
    loadBalances: 'app/loadBalances',
    loadPaymentHistory: 'app/loadPaymentHistory'
  }),
  methods: {
    onUserBalanceLoaded () {
      this.$store.dispatch('app/setBalancesLoaded')
    },
    onPaymentHistoryLoaded () {
      this.$store.dispatch('app/setPaymentHistoryLoaded')
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
