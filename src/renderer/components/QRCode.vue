<template>
  <div>
    <v-layout>
      <v-flex xs12 sm10>
        <v-card>
          <v-card-title class="primary white--text" primary-title>
            <div>
              <h3 class="headline mb-0">{{ $t('qrCode.qrCodeLabel') }}</h3>
            </div>
          </v-card-title>
          <v-container>
            <div class="text-xs-center mt-5">
              <canvas id="qrcode"></canvas>
            </div>
          </v-container>
          <v-container class="px-4">
            <v-form>
              <v-select
                :label="$t('qrCode.assetCode')"
                v-model="assetCode"
                :items="assetCodes"
                required
              ></v-select>
              <v-text-field
                :label="$t('qrCode.amount')"
                v-model="amount"
                :hint="$t('qrCode.enterHowMuchYouWantToBeReceived')"
                type="number"
                :rules="amountRules"
                required
              ></v-text-field>
            </v-form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import util from '@/util'
import QRCode from 'qrcode'
export default {
  data () {
    return {
      assetCode: 'SNP',
      assetCodes: ['SNP', 'SNC'],
      amount: '0',
      amountRules: [
        (v) => util.isValidAmountFormat(v) || this.$t('qrCode.AmountMustBeValid')
      ]
    }
  },
  computed: mapGetters({
    userEmailAddress: 'user/emailAddress'
  }),
  methods: {
    draw () {
      const canvas = document.getElementById('qrcode')
      const delimiter = ';'
      const data = this.userEmailAddress + delimiter + this.assetCode + delimiter + this.amount
      QRCode.toCanvas(canvas, data, function (error) {
        if (error) console.error(error)
      })
    }
  },
  watch: {
    'assetCode': function (to, from) {
      this.draw()
    },
    'amount': function (to, from) {
      this.draw()
    }
  },
  mounted () {
    this.$store.dispatch('app/setShowDrawer', true)
    this.$store.dispatch('app/init')
    this.draw()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
