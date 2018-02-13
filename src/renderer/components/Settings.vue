<template>
  <div>
    <v-layout>
      <v-flex xs12 sm10>
        <v-card>
          <v-card-title class="primary white--text" primary-title>
            <div>
              <h3 class="headline mb-0">Profile</h3>
            </div>
            <v-spacer></v-spacer>
            <v-btn dark icon @click="toEdit" :disabled="isIdentified">
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
                  <v-list-tile-sub-title>email address</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="">
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{firstName}}</v-list-tile-title>
                  <v-list-tile-sub-title>first name</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="">
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{middleName}}</v-list-tile-title>
                  <v-list-tile-sub-title>middle name</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="">
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{lastName}}</v-list-tile-title>
                  <v-list-tile-sub-title>last name</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="">
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{address}}</v-list-tile-title>
                  <v-list-tile-sub-title>address</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="">
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{genderType}}</v-list-tile-title>
                  <v-list-tile-sub-title>genderType</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="">
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{dateOfBirth}}</v-list-tile-title>
                  <v-list-tile-sub-title>dateOfBirth</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="">
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{cellphoneNumber}}</v-list-tile-title>
                  <v-list-tile-sub-title>cellphoneNumber</v-list-tile-sub-title>
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
              <h3 class="headline mb-0">Notification</h3>
            </div>
          </v-card-title>
          <v-container class="px-4">
            <v-list two-line>
              <v-list-tile @click="">
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Email Notification</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-switch v-model="grantEmailNotification"></v-switch>
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
              <h3 class="headline mb-0">ID Document</h3>
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
                  <v-list-tile-title>Terms of Service</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-icon>keyboard_arrow_right</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-list-tile @click="toPrivacyPolicy" ripple>
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Privacy Policy</v-list-tile-title>
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
  </div>
</template>

<script>
import router from '@/router'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      grantEmailNotification: false,
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
    device: 'device/device'
  }),
  methods: {
    toEdit () {
      router.push({ name: 'settingsProfileEdit' })
    },
    toIdUploader () {
      if (this.identificationStatus !== 0) { return }
      router.push({ name: 'settingsIdUploader' })
    },
    toTermsOfService () {
      router.push({ name: 'settingsTermsOfService' })
    },
    toPrivacyPolicy () {
      router.push({ name: 'settingsPrivacyPolicy' })
    }
  },
  watch: {
    'grantEmailNotification': function (to, from) {
      const newVal = this.grantEmailNotification
      if (newVal === this.device.grantEmailNotification) return
      const self = this
      this.$store.dispatch('app/setLoading', true)
      this.$store.dispatch('device/updateNotificationSettings', {
        grantPushNotification: this.device.grantPushNotification,
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
    }
  },
  mounted () {
    this.$store.dispatch('app/setShowDrawer', true)
    this.$store.dispatch('app/init')
    const self = this
    this.$store.dispatch('device/init', { callback: function (isDeviceReady) {
      if (isDeviceReady) {
        self.grantEmailNotification = self.device.grantEmailNotification
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

    console.log(this.identificationStatus)
    switch (this.identificationStatus) {
      case 1:
        this.textIdDocument = 'Under review for ID Document'
        break
      case 2:
        this.textIdDocument = 'ID Document was approved'
        break
      default:
        this.textIdDocument = 'Upload Your ID Document'
        break
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
