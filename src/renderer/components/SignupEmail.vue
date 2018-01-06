<template>
  <div class="mt-5">
    <v-layout>
      <v-flex xs12 sm8 offset-sm2>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Register Email</h3>
              <div>
                <span>Please provide your email address to activate your account.</span><br/>
                <span>Once you submit this form, then we will send you a confirmation email.</span>
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
              <v-text-field label="Email Address"
                            v-model="email"
                            :rules="emailRules"
                            required
              ></v-text-field>
            </v-form>
          </v-container>
          <v-container class="px-4 pb-4">
            <v-btn block color="primary" @click.stop="submit()" :disabled="!isValidSignup">SEND</v-btn>
            <div class="terms-container">
              <input type="checkbox" name="terms" v-model="isCheckedTerms"/>
              <span>I agree with <a @click="openTermsAndConditions()">terms and conditions</a></span>
            </div>
          </v-container>
          <textViewModal ref="refTextViewModal" :title="'Terms Of Conditions'"
                         :body="termsOfConditions"></textViewModal>
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
          (v) => !!v || 'Email Address is required',
          (v) => util.isValidEmailAddress(v) || 'Email Address must be valid'
        ],
        termsOfConditions: '<p>The software you are about to use functions as a free, and open source.</p>' +
        '<p>While the software has undergone beta testing and continues to be improved by feedback from the open-source user and developer community, we cannot guarantee that there will be no bugs in the software. You acknowledge that your use of this software is at your own discretion and in compliance with all applicable laws. You are responsible for safekeeping your passwords, and any other codes you use to access the software.\n</p>' +
        '<p>To the fullest extent permitted by law, this software is provided as is and no representations or warranties can be made of any kind, express or implied, including but not limited to the warranties of merchantability, fitness or a particular purpose and noninfringement. You assume any and all risks associated with the use of the software. In no event shall the authors of the software, employees and affiliates of Truong Thanh JAPAN, copyright holders, or Truong Thanh JAPAN, Co,.Ltd. be held liable for any claim, damages or other liability, whether in an action of contract, tort, or otherwise, arising from, out of or in connection with the software. We reserve the right to modify this disclaimer from time to time.</p>'
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
        this.$refs.refTextViewModal.open()
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
