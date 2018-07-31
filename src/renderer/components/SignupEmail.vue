<template>
  <div class="mt-5">
    <v-layout>
      <v-flex xs12 sm8 offset-sm2>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ $t('signUpEmail.registerEmail') }}</h3>
              <div>
                <span>{{ $t('signUpEmail.pleaseProvideYourEmailAddresToActivateYourAccount') }}</span><br/>
                <span>{{ $t('signUpEmail.onceYouSubmitThisFormThenWeWillSendYouAConfirmationEmail') }}</span>
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
                            :label="$t('profile.emailAddress')"
                            v-model="email"
                            :rules="emailRules"
                            required
              ></v-text-field>
            </v-form>
          </v-container>
          <v-container class="px-4 pb-4">
            <v-btn block color="primary" @click.stop="submit()" :disabled="!isValidSignup">{{ $t('general.send') }}</v-btn>
            <div class="terms-container">
              <input type="checkbox" name="terms" v-model="isCheckedTerms"/>
              <span>{{ $t('signUpEmail.iAgressWith') }}<a @click="openTermsAndConditions()"> {{ $t('settings.termOfService') }}</a></span>
            </div>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import router from '@/router'
  import util from '@/util'
  import textViewModal from '@/components/TextViewModal'

  export default {
    components: {
      textViewModal
    },
    computed: {
      isValidSignup: function () {
        return this.valid && this.isCheckedTerms
      }
    },
    data () {
      return {
        message: '',
        isCheckedTerms: false,
        valid: true,
        email: '',
        emailRules: [
          (v) => !!v || this.$t('require.emailIsRequired'),
          (v) => util.isValidEmailAddress(v) || this.$t('validate.emailMustBeValid')
        ]
      }
    },
    methods: {
      submit () {
        if (!this.valid) return
        const self = this
        this.$store.dispatch('app/setLoading', true)
        this.$store.dispatch('device/registerEmail', {
          emailAddress: this.email,
          onSuccess: function (isEmailInUse) {
            self.$store.dispatch('app/setLoading', false)
            router.push({ name: 'signup_code', params: { isEmailInUse: isEmailInUse } })
          },
          onError: function (code, message, error) {
            self.$store.dispatch('app/setLoading', false)
            self.message = ''
            if (message) {
              self.message = message
            }
          }
        })
      },
      openTermsAndConditions () {
        if (this.$i18n.locale() === 'ja') {
          router.push({ name: 'settingsJaTermsOfService' })
          return
        }
        if (this.$i18n.locale() === 'vi') {
          router.push({ name: 'settingsVnTermsOfService' })
          return
        }
        router.push({ name: 'settingsTermsOfService' })
      }
    },
    mounted () {
      const self = this
      this.$store.dispatch('device/init', {
        callback: function (isDeviceReady) {
          if (isDeviceReady) {
            self.$store.dispatch('app/setShowDrawer', true)
            router.push({ name: 'home' })
          }
        }
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .terms-container {
    width: 100%;
    margin: 0 4px;
  }
</style>
