<template>
  <div class="mt-5">
    <v-layout>
      <v-flex xs12 sm8 offset-sm2>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Welcome</h3>
              <div>Please set up your wallet first.</div>
            </div>
          </v-card-title>
          <v-container v-if="message.length > 0">
            <v-alert color="error" icon="warning" value="true">
              {{message}}
            </v-alert>
          </v-container>
          <v-container>
            <v-form>
              <div id="recaptcha"></div>
            </v-form>
          </v-container>
          <v-card-actions class="pa-4">
            <v-btn block color="primary" @click.stop="start()" :disabled="recaptchaToken.length === 0">START</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// import router from '@/router'
import config from '@/config'
import request from 'request'
import vm from 'vm'
export default {
  name: 'signup',
  data () {
    return {
      message: '',
      recaptchaToken: ''
    }
  },
  methods: {
    setRecaptchaToken (recaptchaToken) {
      this.recaptchaToken = recaptchaToken
    },
    start () {
      const self = this
      this.$store.dispatch('app/setLoading', true)
      this.$store.dispatch('device/register', {
        recaptchaToken: this.recaptchaToken,
        onSuccess: function () {
          self.$store.dispatch('app/setLoading', false)
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
    const self = this
    if (typeof window.onloadCallback === 'undefined') {
      window.onloadCallback = function () {
        window.grecaptcha.render('recaptcha', {
          'sitekey': config.recaptchaApiSiteKey,
          'callback': self.setRecaptchaToken
        })
      }
      const url = 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit'
      request(url, (err, res, body) => {
        if (!err && res.statusCode === 200) {
          vm.runInThisContext(body, url)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
