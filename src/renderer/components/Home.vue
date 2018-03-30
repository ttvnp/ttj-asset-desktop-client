<template>
  <div>
    <v-layout>
      <v-flex xs12 sm8>
        <v-card>
          <v-card-title class="primary white--text" primary-title>
            <div>
              <h3 class="headline mb-0">{{ $t('home.balanceLabel') }}</h3>
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
              <h3 class="headline mb-0">{{ $t('home.paymentHistory') }}</h3>
            </div>
          </v-card-title>
          <v-container>
            <user-transactions :transactionData="transactionData"
                               v-on:changePage="onChangePage"></user-transactions>
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
    data () {
      return {
        transactionData: {
          userTransactions: [],
          totalCnt: 0,
          totalPageNum: 0,
          currentPageNum: 1
        }
      }
    },
    methods: {
      onUserBalanceLoaded () {
        this.$store.dispatch('app/setBalancesLoaded')
      },
      onChangePage (from, to) {
        this.transactionData.currentPageNum = to
        this.loadUserTransactions(to)
      },
      loadUserTransactions (pageNum) {
        const self = this
        this.$store.dispatch('app/setLoading', true)

        this.$store.dispatch('user/getTransactions', {
          forceRefresh: true,
          pageNum: pageNum > 0 ? pageNum : 1,
          onSuccess: function ({ userTransactions, totalCnt, totalPageNum, currentPageNum }) {
            self.transactionData.userTransactions = userTransactions
            self.transactionData.totalCnt = totalCnt
            self.transactionData.totalPageNum = totalPageNum
            self.$store.dispatch('app/setPaymentHistoryLoaded')
            self.$store.dispatch('app/setLoading', false)
            window.scrollTo(0, 0)
          },
          onError: function (error) {
            console.log(error)
          }
        })
      }
    },
    mounted () {
      this.$store.dispatch('app/setShowDrawer', true)
      this.$store.dispatch('app/init')

      const self = this
      this.$store.dispatch('app/setLoading', true)
      this.$store.dispatch('user/getUser', {
        onSuccess: function (data) {
        },
        onError: function (code, message, error) {
          self.$store.dispatch('app/setLoading', false)
          if (message) {
            alert(message)
          }
        }
      })
      this.loadUserTransactions(this.transactionData.currentPageNum)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
