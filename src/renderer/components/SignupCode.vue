<template>
  <div class="mt-5">
    <v-layout>
      <v-flex xs12 sm8 offset-sm2>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ $t('signUpCode.verifyEmail') }}</h3>
              <div>
                <span>{{ $t('signUpCode.pleaseProvideVerificationCodeWhichWasSentByEmail') }}</span><br />
              </div>
            </div>
          </v-card-title>
          <v-container v-if="message.length > 0">
            <v-alert color="error" icon="warning" value="true">
              {{message}}
            </v-alert>
          </v-container>
          <v-container class="px-4">
            <v-form v-model="valid">
              <v-text-field 
                :label="$t('signUpCode.code')"
                v-model="code"
                :rules="codeRules"
                :hint="$t('signUpCode.verificationCodeWhichWasSentByEmail')"
                type="number"
                required
              ></v-text-field>
              <v-text-field 
                :label="$t('signUpCode.passwordOnImport')"
                v-if="isEmailInUse"
                v-model="passwordOnImport"
                :rules="passwordOnImportRules"
                :hint="$t('signUpCode.passwordWhichWasSentByEmailWhenYouCreatedAnAccountOnTheFirstTime')"
                type="number"
                required
              ></v-text-field>
            </v-form>
          </v-container>
          <v-card-actions class="px-4 pb-4">
            <v-btn block color="primary" @click.stop="submit()" :disabled="!valid">{{ $t('general.send') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import router from '@/router'
export default {
  data () {
    return {
      isEmailInUse: false,
      message: '',
      valid: true,
      code: '',
      codeRules: [
        (v) => !!v || this.$t('require.codeIsRequired')
      ],
      passwordOnImport: '',
      passwordOnImportRules: [
        (v) => (this.isEmailInUse && !!v) || this.$t('require.passwordIsRequired')
      ]
    }
  },
  methods: {
    submit () {
      if (!this.valid) return
      const self = this
      this.$store.dispatch('app/setLoading', true)
      this.$store.dispatch('device/verifyEmail', {
        verificationCode: this.code,
        passwordOnImport: this.passwordOnImport,
        onSuccess: function (user) {
          self.$store.dispatch('app/setLoading', false)
          self.$store.dispatch('user/save', user)
          router.push({ name: 'signup_end' })
        },
        onError: function (code, message, error) {
          self.$store.dispatch('app/setLoading', false)
          self.message = ''
          if (message) {
            self.message = message
          }
        }
      })
    }
  },
  mounted () {
    this.isEmailInUse = this.$route.params.isEmailInUse
    const self = this
    this.$store.dispatch('device/init', { callback: function (isDeviceReady) {
      if (isDeviceReady) {
        self.$store.dispatch('app/setShowDrawer', true)
        router.push({ name: 'home' })
      }
    }})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
