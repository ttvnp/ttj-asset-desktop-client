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
              <h3 class="headline mb-0">Send</h3>
            </div>
          </v-card-title>
          <v-container v-if="infoMessage.length > 0">
            <v-alert color="success" icon="check_circle" value="true">
              {{infoMessage}}
            </v-alert>
          </v-container>
          <v-container v-if="errMessage.length > 0">
            <v-alert color="error" icon="warning" value="true">
              {{errMessage}}
            </v-alert>
          </v-container>
          <v-container class="px-4">
            <v-form v-model="valid">
              <v-text-field label="Email Address"
                v-model="email"
                :rules="emailRules"
                required
              ></v-text-field>
              <v-select
                label="Asset Code"
                v-model="assetCode"
                :items="assetCodes"
                :rules="[v => !!v || 'Item is required']"
                required
              ></v-select>
              <v-text-field label="Amount"
                v-model="amount"
                hint="enter how much you want to send."
                type="number"
                :rules="amountRules"
                required
              ></v-text-field>
            </v-form>
          </v-container>
          <v-card-actions class="px-4 pb-4">
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click.stop="confirm()" :disabled="!valid">SEND</v-btn>
          </v-card-actions>
        </v-card>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-text>{{dialogDesc}}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="darken-1" flat="flat" @click.native="dialog = false">CANCEL</v-btn>
              <v-btn color="primary" flat="flat" @click.native="submit()">OK</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserBalance from '@/components/UserBalance'
import { mapGetters } from 'vuex'
import util from '@/util'
import bigInt from 'big-integer'
export default {
  data () {
    return {
      valid: true,
      email: '',
      emailRules: [
        (v) => !!v || 'Email Address is required',
        (v) => util.isValidEmailAddress(v) || 'Email Address must be valid',
        (v) => v !== this.userEmailAddress || 'You cannot send to yourself'
      ],
      assetCode: '',
      assetCodes: ['SNP', 'SNC'],
      amount: '',
      amountRules: [
        (v) => util.isValidAmountFormat(v) || 'Amount must be valid',
        (v) => {
          const amnt = bigInt(v)
          let limit = bigInt(0)
          if (this.balances.length > 0) {
            for (let i = 0; i < this.balances.length; i++) {
              if (this.balances[i].assetType === this.assetCode) {
                limit = bigInt(this.balances[i].amount)
              }
            }
          }
          return limit.compare(amnt) >= 0 || 'Amount must be less than total'
        }
      ],
      infoMessage: '',
      errMessage: '',
      dialog: false,
      dialogTitle: '',
      dialogDesc: ''
    }
  },
  computed: mapGetters({
    loadBalances: 'app/loadBalances',
    balances: 'user/balances',
    userEmailAddress: 'user/emailAddress'
  }),
  components: {
    UserBalance: UserBalance
  },
  methods: {
    onUserBalanceLoaded () {
      this.$store.dispatch('app/setBalancesLoaded')
    },
    confirm () {
      if (!this.valid) return
      const self = this
      this.$store.dispatch('app/setLoading', true)
      this.$store.dispatch('user/getTargetUser', {
        emailAddress: this.email,
        onSuccess: function () {
          self.$store.dispatch('app/setLoading', false)
          self.dialogDesc = 'Are you sure you want to send ' + self.amount + self.assetCode + ' to ' + self.email + '?'
          self.dialog = true
        },
        onError: function (code, message, error) {
          self.$store.dispatch('app/setLoading', false)
          self.errMessage = ''
          if (message) {
            self.errMessage = message
          }
        }
      })
    },
    submit () {
      if (!this.valid) return
      this.dialog = false
      const self = this
      this.$store.dispatch('app/setLoading', true)
      this.$store.dispatch('user/createTransaction', {
        emailAddress: this.email,
        assetType: this.assetCode,
        amount: this.amount,
        onSuccess: function () {
          self.$store.dispatch('app/setLoading', false)
        },
        onError: function (code, message, error) {
          self.$store.dispatch('app/setLoading', false)
          self.errMessage = ''
          if (message) {
            self.errMessage = message
          }
        }
      })
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
