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
              <h3 class="headline mb-0">{{ $t('profile.profileLabel') }}</h3>
            </div>
          </v-card-title>
          <v-container v-if="errMessage.length > 0">
            <v-alert color="error" icon="warning" value="true">
              {{errMessage}}
            </v-alert>
          </v-container>
          <v-container class="px-4">
            <div class="ma-3 image-picker-wrapper">
              <div>
                <img class="image-avatar" :src="profileImageURL">
              </div>
              <input class="image-picker" type="file" accept="image/*" v-on:change="profileImageChanged">
            </div>
            <v-form v-model="valid">
              <v-text-field label="First Name"
                v-model="firstName"
                :rules="firstNameRules"
                counter="200"
                :disabled="isUnderReview"
                @focus="onUnderReview"></v-text-field>
              <v-text-field label="Middle Name"
                v-model="middleName"
                :rules="middleNameRules"
                counter="200"
                :disabled="isUnderReview"
                @focus="onUnderReview"></v-text-field>
              <v-text-field label="Last Name"
                v-model="lastName"
                :rules="lastNameRules"
                counter="200"
                :disabled="isUnderReview"
                @focus="onUnderReview"></v-text-field>
              <v-text-field
                label="Address"
                v-model="address"
                :rules="addressRules"
                counter="1000"
                multi-line
                :disabled="isUnderReview"
                @focus="onUnderReview"></v-text-field>
              <v-select
                label="Gender"
                v-model="genderType"
                :items="genderTypes"
                :disabled="isUnderReview"></v-select>
              <v-flex xs12 sm6>
                <v-menu
                  lazy
                  :close-on-content-click="false"
                  v-model="menu"
                  transition="scale-transition"
                  offset-y
                  full-width
                  :nudge-right="40"
                  max-width="290px"
                  min-width="290px"
                  :disabled="isUnderReview"
                >
                  <v-text-field
                    slot="activator"
                    label="Date of birth"
                    v-model="dateOfBirth"
                    :rules="dateOfBirthRules"
                    :disabled="isUnderReview"
                  ></v-text-field>
                  <v-date-picker v-model="date" @input="dateOfBirth = formatDate($event)" no-title scrollable actions>
                    <template slot-scope="{ save, cancel }">
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                        <v-btn flat color="primary" @click="save">OK</v-btn>
                      </v-card-actions>
                    </template>
                  </v-date-picker>
                </v-menu>
              </v-flex>
              <v-layout row wrap>
                <v-flex xs12 sm4>
                  <v-select
                    v-bind:items="[{ text: '84 (Vietnam)', value: '84' }, { text: '81 (Japan)', value: '81' }]"
                    v-model="cellphoneNumberNationalCode"
                    :rules="cellphoneNumberNationalCodeRules"
                    prepend-icon="phone"
                    label="Country"
                    :disabled="isUnderReview"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm8>
                  <v-text-field
                    label="Phone number"
                    v-model="cellphoneNumber"
                    :rules="cellphoneNumberRules"
                    single-line
                    :disabled="isUnderReview"
                    @focus="onUnderReview"></v-text-field>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
          <v-card-actions class="px-4 pb-4">
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click.stop="submit" :disabled="(!isIdentified && identificationStatus === 1) ? submitEnable : !valid">SAVE</v-btn>
          </v-card-actions>
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
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      submitEnable: false,
      isUnderReview: false,
      errMessage: '',
      valid: true,
      profileImageURL: '',
      profileImageFile: null,
      firstName: '',
      firstNameRules: [
        (v) => (!v || v.length <= 200) || 'First name must be less than 200 characters'
      ],
      middleName: '',
      middleNameRules: [
        (v) => (!v || v.length <= 200) || 'Middle name must be less than 200 characters'
      ],
      lastName: '',
      lastNameRules: [
        (v) => (!v || v.length <= 200) || 'Last name must be less than 200 characters'
      ],
      address: '',
      addressRules: [
        (v) => (!v || v.length <= 1000) || 'Address must be less than 1000 characters'
      ],
      genderType: '',
      genderTypes: [
        { text: 'Female', value: 1 },
        { text: 'Male', value: 2 }
      ],
      date: null,
      menu: false,
      dateOfBirth: '',
      dateOfBirthRules: [
        (v) => (!v || v.length <= 11) || 'Date of birth is incorrect format'
      ],
      cellphoneNumberNationalCode: '',
      cellphoneNumberNationalCodeRules: [
        (v) => (!v || !isNaN(v)) || 'National code of cellphone must include only digit',
        (v) => (!v || v === '81' || v === '84') || 'National code of cellphone you chosen is incorrect'
      ],
      cellphoneNumber: '',
      cellphoneNumberRules: [
        (v) => (!v || v.length <= 12) || 'Cellphone number must be less than 12 characters',
        (v) => (!v || !isNaN(v)) || 'Cellphone number must include only digit'
      ],
      dialog: false,
      dialogDesc: '',
      dialogOnClose: function () { }
    }
  },
  computed: mapGetters({
    currentProfileImageURL: 'user/profileImageURL',
    currentFirstName: 'user/firstName',
    currentMiddleName: 'user/middleName',
    currentLastName: 'user/lastName',
    currentAddress: 'user/address',
    currentGenderType: 'user/genderType',
    currentDateOfBirth: 'user/dateOfBirth',
    currentCellphoneNumberNationalCode: 'user/cellphoneNumberNationalCode',
    currentCellphoneNumber: 'user/cellphoneNumber',
    identificationStatus: 'user/identificationStatus',
    isIdentified: 'user/isIdentified'
  }),
  methods: {
    back () {
      router.go(-1)
    },
    onUnderReview () {
      if (this.identificationStatus === 1) {
        this.isUnderReview = true
        this.errMessage = this.$t('validate.editProfileUnderReview')
      }
    },
    profileImageChanged (event) {
      let imageFile = null
      let files = event.target.files
      if (files.length > 0) {
        imageFile = files[0]
      }
      const self = this
      if (!imageFile.type.match('image/jpeg') && !imageFile.type.match('image/jpg') && !imageFile.type.match('image/png')) {
        this.dialogDesc = 'Please select jpeg, jpg or png file.'
        this.dialogOnClose = function () {
          self.dialog = false
        }
        this.dialog = true
        return
      }
      const reader = new FileReader()
      if (imageFile == null) {
        return
      }
      const fileOnLoad = function () {
        const imageUrl = reader.result
        self.profileImageFile = imageFile
        self.profileImageURL = imageUrl
      }
      reader.onload = fileOnLoad
      reader.readAsDataURL(imageFile)
    },
    submit () {
      if (!this.valid) return
      this.dialog = false
      const self = this
      this.$store.dispatch('app/setLoading', true)
      this.$store.dispatch('user/update', {
        profileImageFile: this.profileImageFile,
        firstName: this.firstName,
        middleName: this.middleName,
        lastName: this.lastName,
        address: this.address,
        genderType: this.genderType,
        dateOfBirth: this.dateOfBirth,
        cellphoneNumberNationalCode: this.cellphoneNumberNationalCode,
        cellphoneNumber: this.cellphoneNumber,
        onSuccess: function () {
          self.$store.dispatch('app/setLoading', false)
          self.dialogDesc = 'Saved!'
          self.dialogOnClose = function () {
            self.dialog = false
            router.push({ name: 'settings' })
          }
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
    },
    formatDate (date) {
      if (!date) { return null }

      const [year, month, day] = date.split('-')
      if (month === null) { return '' }

      let monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ]

      let parsedDate = new Date(date + ' UTC')
      let shortMonth = monthNames[parsedDate.getMonth()]

      return `${day}/${shortMonth}/${year}`
    },
    parseDate (date) {
      if (!date) { return null }

      let parsedDate = Date.parse(date + 'UTC')

      let year = parsedDate.getFullYear()
      let month = parsedDate.getMonth() + 1
      let day = parsedDate.getDate()
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
  },
  mounted () {
    this.$store.dispatch('app/setShowDrawer', true)
    this.$store.dispatch('app/init')
    this.profileImageURL = this.currentProfileImageURL
    this.firstName = this.currentFirstName
    this.middleName = this.currentMiddleName
    this.lastName = this.currentLastName
    this.address = this.currentAddress
    this.genderType = this.currentGenderType
    this.dateOfBirth = this.currentDateOfBirth
    this.cellphoneNumberNationalCode = this.currentCellphoneNumberNationalCode
    this.cellphoneNumber = this.currentCellphoneNumber
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img.image-avatar {
  display: inline-block;
  border-radius: 50%;
  width: 120px;
  height: 120px;
}

.image-picker-wrapper {
  position: relative;
}

input.image-picker {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
}
</style>
