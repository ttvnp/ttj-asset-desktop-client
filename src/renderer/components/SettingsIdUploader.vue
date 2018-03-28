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
              <h3 class="headline mb-0">{{ $t('profile.uploadIdDocument') }}</h3>
            </div>
          </v-card-title>
          <v-container v-if="errMessage.length > 0">
            <v-alert color="error" icon="warning" value="true">
              {{errMessage}}
            </v-alert>
          </v-container>
          <v-card-text>
            <p>{{ $t('settingsUploader.pleaseUploadPhotoOfTravelDocument') }}</p>
            <p>{{ $t('settingsUploader.theFollowingItemsMustBeClearlyVisible') }}</p>
            <ul class="things-required-id-upload">
              <li>{{ $t('profile.facePhoto') }}</li>
              <li>{{ $t('profile.name') }}</li>
              <li>{{ $t('profile.address') }}</li>
              <li>{{ $t('profile.dob') }}</li>
              <li>{{ $t('profile.doe') }}</li>
            </ul>
          </v-card-text>
          <v-container class="px-4">
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <p>{{ $t('profile.facePhoto') }}</p>
                <div class="image-picker-wrapper">
                  <div>
                    <img class="image-avatar" :src="idDocument1ImageURL">
                  </div>
                  <input class="image-picker" type="file" accept="image/*" v-on:change="onChangeImageId1">
                </div>
              </v-flex>
              <v-flex xs12 sm6>
                <p style="margin-left: 16px">{{ $t('general.sample') }}</p>
                <div>
                  <img class="sample-face-photo" src="@/assets/passport_sample_face.png">
                </div>
              </v-flex>
            </v-layout>
            <ul>
              <li>{{ $t('facePhoto.pointOne') }}</li>
              <li>{{ $t('facePhoto.pointTwo') }}</li>
            </ul>
            <br />
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <p>{{ $t('profile.address') }}</p>
                <div class="image-picker-wrapper">
                  <div>
                    <img class="image-avatar" :src="idDocument2ImageURL">
                  </div>
                  <input class="image-picker" type="file" accept="image/*" v-on:change="onChangeImageId2">
                </div>
              </v-flex>
              <v-flex xs12 sm6>
                <p style="margin-left: 14px">{{ $t('general.sample') }}</p>
                <div>
                  <img class="sample-address-photo" src="@/assets/passport_sample_address.png">
                </div>
              </v-flex>
            </v-layout>
            <ul>
              <li>{{ $t('addressPhoto.pointOne') }}</li>
              <li>{{ $t('addressPhoto.pointTwo') }}</li>
            </ul>
          </v-container>
          <v-container class="px-4">
            <div class="text-xs-center note-id-verified">{{ $t('settingsUploader.onceYouUploadImagesYouWilNotBeAbleToEditYourProfile') }}</div>
          </v-container>
          <v-card-actions class="px-4 pb-4">
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click.stop="submit" :disabled="!valid || isIdentified">SAVE</v-btn>
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
import defaultPickerImage from '@/assets/id_document_attach_button.png'
import router from '@/router'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      errMessage: '',
      valid: true,
      idDocument1ImageURL: '',
      idDocument2ImageURL: '',
      idDocument1ImageFile: null,
      idDocument2ImageFile: null,
      dialog: false,
      dialogDesc: '',
      dialogOnClose: function () { }
    }
  },
  computed: mapGetters({
    currentIdDocument1ImageURL: 'user/idDocument1ImageURL',
    currentIdDocument2ImageURL: 'user/idDocument2ImageURL',
    isIdentified: 'user/isIdentified',
    identificationStatus: 'user/identificationStatus'
  }),
  methods: {
    back () {
      router.go(-1)
    },
    onChangeImageId1 (event) {
      this.idDocumentImageChanged(event, 1)
    },
    onChangeImageId2 (event) {
      this.idDocumentImageChanged(event, 2)
    },
    idDocumentImageChanged (event, index) {
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
      let _this = this
      const fileOnLoad = function () {
        const imageUrl = reader.result
        if (index === 1) {
          _this.idDocument1ImageFile = imageFile
          _this.idDocument1ImageURL = imageUrl
        } else {
          _this.idDocument2ImageFile = imageFile
          _this.idDocument2ImageURL = imageUrl
        }
      }
      reader.onload = fileOnLoad
      reader.readAsDataURL(imageFile)
    },
    submit () {
      if (!this.valid) return
      this.dialog = false
      const self = this
      this.$store.dispatch('app/setLoading', true)
      this.$store.dispatch('user/updateIdDocument', {
        idDocument1: this.idDocument1ImageFile,
        idDocument2: this.idDocument2ImageFile,
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
    }
  },
  mounted () {
    this.$store.dispatch('app/setShowDrawer', true)
    this.$store.dispatch('app/init')
    this.idDocument1ImageURL = defaultPickerImage
    this.idDocument2ImageURL = defaultPickerImage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sample-face-photo {
  width: 130px;
}
.sample-address-photo {
  width: 185px;
  margin-left: -36px;
  margin-top: -36px;
}
.image-avatar {
  display: inline-block;
  width: 120px;
  height: 120px;
}

.image-picker-wrapper {
  position: relative;
}

.image-picker {
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

.things-required-id-upload {
  margin-left: 20px;
}

.note-id-verified {
  color: red;
}
</style>
