<template>
  <div>
    <v-layout>
      <v-flex xs12 sm8>
        <v-card>
          <v-card-title class="primary white--text" primary-title>
            <div>
              <h3 class="headline mb-0">{{ $t('send.balances') }}</h3>
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
            <v-flex sm7>
              <h3 class="headline mb-0">{{ $t('send.sendLabel') }}</h3>
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
          <v-container v-if="!isStellar" class="px-4">
            <v-form v-model="valid">
              <v-text-field
                 :label="$t('profile.emailAddress')"
                v-model="email"
                :rules="emailRules"
                required
                :disabled="!isIdentified"
              ></v-text-field>
              <v-select
                :label="$t('send.assetCode')"
                v-model="assetCode"
                :items="assetCodes"
                :rules="[v => !!v || $t('require.itemIsRequired')]"
                required
                :disabled="!isIdentified"
              ></v-select>
              <v-text-field :label="$t('send.amount')"
                v-model="amount"
                :hint="$t('send.enterHowMuchYouWantToSend')"
                type="number"
                :rules="amountRules"
                required
                :disabled="!isIdentified"
              ></v-text-field>
            </v-form>
            <p class="text-xs-center note-id-verified" v-show="!isIdentified">{{ $t('send.youCannotUseThisFunctionUntilYourIdIsVerified') }}</p>
          </v-container>
          <!-- send by stellar address -->
          <v-container v-if="isStellar">
            <v-form v-model="valid">
              <v-text-field
                 :label="$t('send.address')"
                v-model="strAccountId"
                 :rules="strAccountRules"
                required
                :disabled="!isIdentified"
              ></v-text-field>
              <v-text-field
                :label="$t('send.memo_optional')"
                v-model="strMemoText"
                :disabled="!isIdentified"
              ></v-text-field>
              <v-select
                :label="$t('send.assetCode')"
                v-model="assetCode"
                :items="assetCodes"
                :rules="[v => !!v || $t('require.itemIsRequired')]"
                required
                :disabled="!isIdentified"
              ></v-select>
              <v-text-field :label="$t('send.amount')"
                v-model="amount"
                :hint="$t('send.enterHowMuchYouWantToSend')"
                type="number"
                :rules="amountRules"
                required
                :disabled="!isIdentified"
              ></v-text-field>
            </v-form>
          </v-container>
          <v-card-actions class="px-4 pb-4">
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click.stop="isStellar ? showConfirmSNC() : confirm()" :disabled="!valid || !isIdentified">{{ $t('send.sendLabel') }}</v-btn>
          </v-card-actions>
        </v-card>
        <v-dialog 
          v-model="dialogSNC"
          max-width="290">
          <v-card>
            <v-card-text class="dialog-wrap" v-html="$t('send.confirmMessageSNC')"></v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="darken-1" flat="flat" @click.native="dialogSNC = false">{{ $t('general.cancel') }}</v-btn>
              <v-btn color="primary" flat="flat" @click.native="confirmSNC()">{{ $t('general.send') }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-text class="dialog-wrap" v-html="this.dialogDesc"></v-card-text>
            <div v-if="requirePasswordOnSend === true">
              <div>
                <v-text-field
                style="width: 248px; margin-left: 16px; margin-right: 16px"
                :label="$t('send.password')"
                :rules="passwordRule"
                v-model="password"
                type="password"
                @keypress.13="submit()"
                />
              </div>
            </div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="darken-1" flat="flat" @click.native="dialog = false">{{ $t('general.cancel') }}</v-btn>
              <v-btn color="primary" flat="flat" @click.native="submit()">{{ $t('general.send') }}</v-btn>
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
import config from '@/config'
export default {
  data () {
    return {
      isStellar: false,
      valid: false,
      email: '',
      emailRules: [
        (v) => !!v || this.$t('require.emailIsRequired'),
        (v) => util.isValidEmailAddress(v) || this.$t('validate.emailMustBeValid'),
        (v) => v !== this.userEmailAddress || this.$t('send.youCannotSendToYourSelf')
      ],
      strAccountId: '',
      strAccountRules: [
        (v) => !!v || this.$t('require.addressIsRequired'),
        (v) => util.isValidStellarAccountID(v) || this.$t('validate.addressMustBeValid')
      ],
      strMemoText: '',
      sendByItems: [this.$t('qrCode.byEmail'), this.$t('qrCode.byStellarAddress')],
      sendByItem: this.$t('qrCode.byEmail'),
      assetCode: '',
      assetCodes: ['SNP', 'SNC'],
      amount: '',
      amountRules: [
        (v) => util.isValidAmountFormat(v) || this.$t('validate.amountMustBeValid'),
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
          return limit.compare(amnt) >= 0 || this.$t('send.amountMustBeLessThanTotal')
        }
      ],
      password: '',
      passwordRule: [
        (v) => !!v || this.$t('require.passwordIsRequired')
      ],
      infoMessage: '',
      errMessage: '',
      dialog: false,
      dialogSNC: false,
      dialogTitle: '',
      dialogDesc: ''
    }
  },
  computed: mapGetters({
    loadBalances: 'app/loadBalances',
    isIdentified: 'user/isIdentified',
    balances: 'user/balances',
    userEmailAddress: 'user/emailAddress',
    requirePasswordOnSend: 'user/requirePasswordOnSend'
  }),
  components: {
    UserBalance: UserBalance
  },
  methods: {
    changeSendBy (item) {
      this.isStellar = item === this.sendByItems[1]
    },
    onUserBalanceLoaded () {
      this.$store.dispatch('app/setBalancesLoaded')
    },
    showConfirmSNC () {
      if (this.strMemoText === '' && (this.strAccountId === config.sencoinAddress || this.strAccountId === config.sencoinexAddress)) {
        this.errMessage = this.$t('require.memoIsRequired')
        return
      }
      this.dialogSNC = true
    },
    confirmSNC () {
      this.dialogSNC = false
      this.confirm()
    },
    confirm () {
      this.errMessage = ''
      if (!this.valid || !this.isIdentified) return
      const self = this
      if (!this.isStellar) {
        this.$store.dispatch('app/setLoading', true)
        this.$store.dispatch('user/getTargetUser', {
          emailAddress: this.email,
          onSuccess: function () {
            self.$store.dispatch('app/setLoading', false)
            self.dialogDesc = self.$t('send.areYouSureYouWantToSend', {
              amount: self.amount,
              assetCode: self.assetCode,
              email: self.email
            })
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
        return
      }
      this.dialog = true
      let address = this.strAccountId + `<br/>${this.$t('qrCode.memo')} ${this.strMemoText}`
      if (this.strMemoText === '') {
        address = this.strAccountId
      }
      this.dialogDesc = self.$t('send.areYouSureYouWantToSendToStellar', {
        amount: this.amount,
        assetCode: this.assetCode,
        address: address
      })
    },
    submit () {
      if (!this.valid || !this.isIdentified) return
      if (this.requirePasswordOnSend) {
        if (this.password === '') return
      }
      this.dialog = false
      const self = this
      this.$store.dispatch('app/setLoading', true)
      if (!this.isStellar) {
        this.$store.dispatch('user/createTransaction', {
          emailAddress: this.email,
          assetType: this.assetCode,
          amount: this.amount,
          password: this.password,
          onSuccess: function () {
            self.$store.dispatch('app/setLoading', false)
            self.password = ''
            self.errMessage = ''
            self.infoMessage = self.$t('send.paymentSuccess')
          },
          onError: function (code, message, error) {
            self.$store.dispatch('app/setLoading', false)
            self.errMessage = ''
            self.password = ''
            if (message) {
              self.errMessage = message
              if (code === 119) {
                self.errMessage = self.$t('changePassword.passwordIsNotCorrect')
              }
            }
          }
        })
        return
      }
      this.$store.dispatch('user/createExternalTransaction', {
        strAccountId: this.strAccountId,
        strMemoText: this.strMemoText,
        assetType: this.assetCode,
        amount: this.amount,
        password: this.password,
        onSuccess: function () {
          self.$store.dispatch('app/setLoading', false)
          self.password = ''
          self.errMessage = ''
          self.infoMessage = self.$t('send.paymentSuccess')
        },
        onError: function (code, message, error) {
          self.$store.dispatch('app/setLoading', false)
          self.errMessage = ''
          self.password = ''
          if (message) {
            self.errMessage = message
            if (code === 119) {
              self.errMessage = self.$t('changePassword.passwordIsNotCorrect')
            }
          } else {
            self.errMessage = self.$t(error.message)
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
  .note-id-verified {
    color: red;
  }
  .dialog-wrap {
    overflow-wrap: break-word;
    padding-right: 16px;
    padding-left: 16px;
  }
</style>
