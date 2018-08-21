<template>
  <div>
    <v-layout>
      <v-flex xs12 sm10>
        <v-card>
          <v-card-title class="primary white--text" primary-title>
            <v-btn dark icon @click="back">
                <v-icon>chevron_left</v-icon>
            </v-btn>
            <div>
                <h3 class="headline mb-0">{{ $t('changePassword.changePasswordLabel') }}</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <v-form v-model="valid" style="margin-top: 8px;">
              <v-text-field 
                :label="$t('changePassword.oldPassword')"
                v-model="oldPassword"
                :rules="oldPasswordRules"
                type="password" />
              <v-text-field 
                :label="$t('changePassword.newPassword')"
                v-model="newPassword"
                :rules="newPasswordRules"
                type="password" />
              <v-text-field 
                :label="$t('changePassword.retypePassword')"
                v-model="retypePassword"
                :rules="retypePasswordRules"
                type="password" />
            </v-form>
            <v-card-actions class="px-4 pb-4">
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click.stop="save" :disabled="!valid">{{ $t('general.save') }}</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-text>{{dialogDesc}}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click.native="dialogOnClose">OK</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import router from '@/router'
export default {
  data () {
    return {
      valid: true,
      dialog: false,
      errMessage: '',
      dialogDesc: '',
      oldPassword: '',
      oldPasswordRules: [
        v => !!v || this.$t('require.oldPasswordIsRequired')
      ],
      newPassword: '',
      newPasswordRules: [
        v => !!v || this.$t('require.newPasswordIsRequired'),
        v => (v.length > 5) || this.$t('validate.newPasswordValid')
      ],
      retypePassword: '',
      retypePasswordRules: [
        v => !!v || this.$t('require.retypePasswordIsRequired')
      ]
    }
  },
  methods: {
    back () {
      router.go(-1)
    },
    save () {
      if (this.newPassword !== this.retypePassword) {
        this.dialog = true
        this.dialogDesc = this.$t('validate.passwordsAreNotMatched')
        return
      }
      if (!this.valid) return
      const self = this
      this.$store.dispatch('app/setLoading', true)
      this.$store.dispatch('user/changePassword', {
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
        retypePassword: this.retypePassword,
        onSuccess: function () {
          self.$store.dispatch('app/setLoading', false)
          router.go(-1)
        },
        onError: function (code, message, error) {
          self.$store.dispatch('app/setLoading', false)
          self.errMessage = ''
          if (message) {
            self.errMessage = message
            if (code === 119) {
              self.errMessage = self.$t('changePassword.passwordIsNotCorrect')
            }
          }
          self.dialog = true
          self.dialogDesc = self.errMessage
        }
      })
    },
    dialogOnClose () {
      this.dialog = false
    }
  }
}
</script>

