<template>
  <div>
    <v-layout>
      <v-flex xs12 sm10>
        <v-card>
          <v-card-title class="primary white--text" primary-title>
            <div>
              <h3 class="headline mb-0">{{ $t('settings.profile') }}</h3>
            </div>
            <v-spacer></v-spacer>
            <v-btn dark icon @click="toEdit">
              <v-icon>edit</v-icon>
            </v-btn>
          </v-card-title>
          <v-container class="px-4">
            <v-list two-line>
              <v-list-tile avatar @click="">
                <v-list-tile-avatar>
                  <img :src="profileImageURL">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{emailAddress}}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ $t('profile.emailAddress') }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="">
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{firstName}}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ $t('profile.firstName') }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="">
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{middleName}}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ $t('profile.middleName') }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="">
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{lastName}}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ $t('profile.lastName') }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="">
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{address}}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ $t('profile.address') }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="">
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{genderType}}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ $t('profile.genderType') }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="">
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{dateOfBirth}}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ $t('profile.dob') }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="">
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{cellphoneNumber}}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ $t('profile.cellPhone') }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
     <v-layout class="mt-4">
      <v-flex xs12 sm10>
        <v-card>
          <v-card-title class="primary white--text" primary-title>
            <div>
              <h3 class="headline mb-0">{{ $t('settings.security') }}</h3>
            </div>
          </v-card-title>
          <v-container class="px-4">
            <v-list two-line>
              <v-list-tile @click="">
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ $t('settings.requirePasswordOnSendingAssets') }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-switch v-model="newRequirePasswordOnSend"></v-switch>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout class="mt-4">
      <v-flex xs12 sm10>
        <v-card>
          <v-card-title class="primary white--text" primary-title>
            <div>
              <h3 class="headline mb-0">{{ $t('settings.notification') }}</h3>
            </div>
          </v-card-title>
          <v-container class="px-4">
            <v-list two-line>
              <v-list-tile @click="">
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ $t('settings.emailNotification') }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-switch v-model="newGrantEmailNotification"></v-switch>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
      <v-layout class="mt-4">
        <v-flex xs12 sm10>
          <v-card>
            <v-card-title class="primary white--text" primary-title>
              <div>
                <h3 class="headline mb-0">{{ $t('settings.language') }}</h3>
              </div>
            </v-card-title>
            <v-container class="px-4">
              <v-list two-line>
                <v-list-tile @click="toEnglish">
                  <v-list-tile-action></v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ $t('language.english') }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="toJapanese">
                  <v-list-tile-action></v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ $t('language.japanese') }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="toVietnamese">
                  <v-list-tile-action></v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ $t('language.vietnamese') }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-container>
          </v-card>
        </v-flex>
    </v-layout>
    <v-layout class="mt-4">
      <v-flex xs12 sm10>
        <v-card>
          <v-card-title class="primary white--text" primary-title>
            <div>
              <h3 class="headline mb-0">{{ $t('settings.idDocument') }}</h3>
            </div>
          </v-card-title>
          <v-container class="px-4">
            <v-list two-line>
              <v-list-tile @click="toIdUploader" :ripple="identificationStatus === 0">
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ textIdDocument }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-icon v-show="identificationStatus === 0">keyboard_arrow_right</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout class="mt-4">
      <v-flex xs12 sm10>
        <v-card>
          <v-container class="px-4">
            <v-list two-line>
              <v-list-tile @click="toTermsOfService" ripple>
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ $t('settings.termOfService') }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-icon>keyboard_arrow_right</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-list-tile @click="toPrivacyPolicy" ripple>
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ $t('settings.privacyPolicy') }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-icon>keyboard_arrow_right</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-list-tile @click="toChangePassword" ripple>
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ $t('changePassword.changePasswordLabel') }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-icon>keyboard_arrow_right</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-list-tile @click="dialog=true" ripple>
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ $t('settings.logout') }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-icon>keyboard_arrow_right</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-dialog
        v-model="dialog"
        max-width="460"
      >
        <v-card>
          <v-card-title class="headline">{{ $t('settings.logout') }}</v-card-title>
          <v-card-text>
            {{ $t('settings.messageLogout') }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary darken-1"
              flat="flat"
              @click="dialog = false"
            >
              {{ $t('general.no') }}
            </v-btn>
            <v-btn
              color="red darken-1"
              flat="flat"
              @click="toLogout()"
            >
              {{ $t('general.yes') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
import router from '@/router'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      dialog: false,
      newRequirePasswordOnSend: false,
      newGrantEmailNotification: false,
      textIdDocument: 'Upload Your ID Document'
    }
  },
  computed: mapGetters({
    profileImageURL: 'user/profileImageURL',
    emailAddress: 'user/emailAddress',
    firstName: 'user/firstName',
    middleName: 'user/middleName',
    lastName: 'user/lastName',
    address: 'user/address',
    genderType: 'user/genderTypeText',
    dateOfBirth: 'user/dateOfBirth',
    cellphoneNumber: 'user/cellphoneFullNumber',
    isIdentified: 'user/isIdentified',
    identificationStatus: 'user/identificationStatus',
    grantEmailNotification: 'user/grantEmailNotification',
    requirePasswordOnSend: 'user/requirePasswordOnSend',
    device: 'device/device'
  }),
  methods: {
    changeTextButtonIdDocument () {
      switch (this.identificationStatus) {
        case 1:
          this.textIdDocument = this.$t('profile.idDocumentUnderReview')
          break
        case 2:
          this.textIdDocument = this.$t('profile.idDocumentApproved')
          break
        default:
          this.textIdDocument = this.$t('profile.uploadIdDocument')
          break
      }
    },
    changeLang (lang) {
      const newLanguage = {
        lang: lang
      }
      this.$store.dispatch('device/changeLanguage', {
        language: newLanguage
      })
    },
    toEnglish () {
      this.$i18n.set('en')
      this.changeLang('en')
      this.changeTextButtonIdDocument()
    },
    toJapanese () {
      this.$i18n.set('ja')
      this.changeLang('ja')
      this.changeTextButtonIdDocument()
    },
    toVietnamese () {
      this.$i18n.set('vi')
      this.changeLang('vi')
      this.changeTextButtonIdDocument()
    },
    toEdit () {
      router.push({ name: 'settingsProfileEdit' })
    },
    toIdUploader () {
      if (this.identificationStatus !== 0) { return }
      router.push({ name: 'settingsIdUploader' })
    },
    toTermsOfService () {
      if (this.$i18n.locale() === 'ja') {
        router.push({ name: 'settingsJaTermsOfService' })
        return
      }
      if (this.$i18n.locale() === 'vi') {
        router.push({ name: 'settingsVnTermsOfService' })
        return
      }
      router.push({ name: 'settingsTermsOfService' })
    },
    toPrivacyPolicy () {
      if (this.$i18n.locale() === 'ja') {
        router.push({ name: 'settingsJaPrivacyPolicy' })
        return
      }
      if (this.$i18n.locale() === 'vi') {
        router.push({ name: 'settingsVnPrivacyPolicy' })
        return
      }
      router.push({ name: 'settingsPrivacyPolicy' })
    },
    toChangePassword () {
      router.push({ name: 'settingsChangePassword' })
    },
    toLogout () {
      const self = this
      this.$store.dispatch('app/setLoading', true)
      this.$store.dispatch('device/logout', {
        onSuccess: function () {
          const app = {
            loadBalances: false,
            loadPaymentHistory: false
          }
          self.dialog = false
          window.onloadCallback = undefined
          self.$store.dispatch('app/setApp', app)
          self.$store.dispatch('app/setLoading', false)
          router.push({ name: 'signup' })
        },
        onError: function (code, message, error) {
          self.$store.dispatch('app/setLoading', false)
          if (message) {
            alert(message)
          }
        }
      })
    }
  },
  watch: {
    'newGrantEmailNotification': function (to, from) {
      const newVal = this.newGrantEmailNotification
      if (newVal === this.grantEmailNotification) return
      const self = this
      this.$store.dispatch('app/setLoading', true)
      this.$store.dispatch('user/updateNotificationSettings', {
        grantEmailNotification: newVal,
        onSuccess: function () {
          self.$store.dispatch('app/setLoading', false)
        },
        onError: function (code, message, error) {
          self.$store.dispatch('app/setLoading', false)
          if (message) {
            alert(message)
          }
        }
      })
    },
    'newRequirePasswordOnSend': function (to, from) {
      const newVal = this.newRequirePasswordOnSend
      if (newVal === this.requirePasswordOnSend) return
      const self = this
      this.$store.dispatch('app/setLoading', true)
      this.$store.dispatch('user/updateSecuritySettings', {
        requirePasswordOnSend: newVal,
        onSuccess: function () {
          self.$store.dispatch('app/setLoading', false)
        },
        onError: function (code, message, error) {
          self.$store.dispatch('app/setLoading', false)
          if (message) {
            alert(message)
          }
        }
      })
    }
  },
  mounted () {
    this.$store.dispatch('app/setShowDrawer', true)
    this.$store.dispatch('app/init')
    const self = this
    this.$store.dispatch('device/init', { callback: function (isDeviceReady) {
      if (isDeviceReady) {
        self.newGrantEmailNotification = self.grantEmailNotification
        self.newRequirePasswordOnSend = self.requirePasswordOnSend
      }
    }})

    this.$store.dispatch('app/setLoading', true)
    this.$store.dispatch('user/getUser', {
      onSuccess: function (data) {
        self.$store.dispatch('app/setLoading', false)
      },
      onError: function (code, message, error) {
        self.$store.dispatch('app/setLoading', false)
        if (message) {
          alert(message)
        }
      }
    })

    this.changeTextButtonIdDocument()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
