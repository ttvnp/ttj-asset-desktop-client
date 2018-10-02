<template>
  <div>
    <v-layout>
      <v-flex xs12 sm10>
        <v-card>
          <v-card-title class="primary white--text" primary-title>
            <v-flex sm7>
              <h3 class="headline mb-0">{{ $t('qrCode.qrCodeLabel') }}</h3>
            </v-flex>
            <v-flex sm5>
              <v-select
                :items="sendByItems"
                v-model="sendByItem"
                @change="changeSendBy"
                solo
                ></v-select>
            </v-flex>
          </v-card-title>
          <v-container>
            <div class="text-xs-center mt-5">
              <canvas id="qrcode"></canvas>
            </div>
          </v-container>
          <v-container v-if="!isStellar" class="px-4">
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
          <v-container v-if="isStellar" class="px-4">
            <div class="stellar-text-container">
              <p class="text-str">{{ $t('qrCode.address')}} {{ stellar.strAccountID }}</p>
              <p class="text-str">{{ $t('qrCode.memo')}} {{stellar.strDepositMemoText }}</p>
              <p class="text-note">{{ $t('qrCode.note') }}</p>
            </div>
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
      stellar: {},
      isStellar: false,
      sendByItems: [this.$t('qrCode.byEmail'), this.$t('qrCode.byStellarAddress')],
      sendByItem: this.$t('qrCode.byEmail'),
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
    changeSendBy (item) {
      this.isStellar = this.sendByItems[1] === item
      const self = this
      if (this.isStellar) {
        this.$store.dispatch('app/setLoading', true)
        this.$store.dispatch('user/getStrAccount', {
          onSuccess: function (data) {
            self.stellar = data.data
            self.drawStellar(self.stellar)
            self.$store.dispatch('app/setLoading', false)
          },
          onError: function (code, message, error) {
            self.$store.dispatch('app/setLoading', false)
            if (message) {
              alert(message)
            }
          }
        })
        return
      }
      this.draw()
    },
    draw () {
      const canvas = document.getElementById('qrcode')
      const delimiter = ';'
      const data = '0;' + this.userEmailAddress + delimiter + this.assetCode + delimiter + this.amount
      QRCode.toCanvas(canvas, data, function (error) {
        if (error) console.error(error)
      })
    },
    drawStellar (stellar) {
      const canvas = document.getElementById('qrcode')
      const delimiter = ';'
      const data = '1;' + stellar.strAccountID + delimiter + this.assetCode + delimiter + this.amount
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
  .stellar-text-container {
    text-align: center;
  }

  .stellar-text-container .text-str {
    color: grey;
  }

  .stellar-text-container .text-note {
    color: red;
  }
</style>
