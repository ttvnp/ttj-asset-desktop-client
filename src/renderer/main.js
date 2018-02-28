import Vue from 'vue'
import Vuetify from 'vuetify'
import axios from 'axios'
import VueI18n from 'vue-i18n'

import App from './App'
import router from './router'
import store from './store'

import('vuetify/dist/vuetify.min.css')

var locales = {
  // for English
  en: {
    validate: {
      emailMustBeValid: 'Email address must be valid.',
      amountMustBeValid: 'Amount must be valid'
    },
    require: {
      itemIsRequired: 'Item is required',
      passwordIsRequired: 'Password is required.',
      codeIsRequired: 'Code is required.',
      emailIsRequired: 'Email Address is required'
    },
    signUp: {
      pleaseSetUpYourWalletFirst: 'Please set up your wallet first.'
    },
    signUpCode: {
      verifyEmail: 'Verify Email',
      pleaseProvideVerificationCodeWhichWasSentByEmail: 'Please provide verification code which was sent by email.',
      code: 'Code',
      verificationCodeWhichWasSentByEmail: 'Verification code which was sent by email.',
      passwordOnImport: 'Password on import',
      passwordWhichWasSentByEmailWhenYouCreatedAnAccountOnTheFirstTime: 'Password which was sent by email when you created an account on the first time.'
    },
    signUpEmail: {
      registerEmail: 'Register Email',
      pleaseProvideYourEmailAddresToActivateYourAccount: 'Please provide your email address to activate your account.',
      onceYouSubmitThisFormThenWeWillSendYouAConfirmationEmail: 'Once you submit this form, then we will send you a confirmation email.',
      iAgressWith: 'I agress with ',
      termOfServices: 'terms of services.'
    },
    signUpEnd: {
      accountActivated: 'Account activated',
      yourAccountHasBeenActivatedPleaseEnjoy: 'Your account has been activated.Please enjoy!'
    },
    home: {
      balanceLabel: 'Balances',
      paymentHistory: 'Payment History'
    },
    main: {
      home: 'Home',
      qrCode: 'QR Code',
      send: 'Send',
      settings: 'Settings'
    },
    qrCode: {
      qrCodeLabel: 'QR Code',
      assetCode: 'Asset Code',
      amount: 'Amount',
      enterHowMuchYouWantToBeReceived: 'enter how much you want to be received.',
      AmountMustBeValid: 'Amount must be valid'
    },
    send: {
      balances: 'Balances',
      sendLabel: 'Send',
      emailAdress: 'Email address',
      assetCode: 'Asset code',
      amount: 'Amount',
      youCannotUseThisFunctionUntilYourIdIsVerified: 'You cannot use this function until your ID is verified.',
      youCannotSendToYourSelf: 'You cannot send to yourself',
      amountMustBeLessThanTotal: 'Amount must be less than total',
      areYouSureYouWantToSend: 'Are you sure you want to send '
    },
    settings: {
      language: 'Languages',
      profile: 'Profile',
      notification: 'Notification',
      emailNotification: 'Email Notification',
      idDocument: 'ID Document',
      termOfService: 'Term of Service',
      privacyPolicy: 'Privacy Policy'
    },
    settingsUploader: {
      pleaseUploadPhotoOfTravelDocument: 'Please upload photo of your travel document.',
      theFollowingItemsMustBeClearlyVisible: 'The following items must be clearly visible.',
      onceYouUploadImagesYouWilNotBeAbleToEditYourProfile: 'Once you upload images, you will not be able to edit your profile.'
    },
    profile: {
      profileLabel: 'Profile',
      emailAddress: 'Email address',
      name: 'Name',
      firstName: 'First name',
      middleName: 'Middle name',
      lastName: 'Last name',
      address: 'Address',
      genderType: 'Gender type',
      dob: 'Date of birth',
      doe: 'Date of expiry',
      cellPhone: 'Cell phone number',
      facePhoto: 'Face photo',
      uploadIdDocument: 'Upload Your ID Document',
      idDoucmentApproved: 'ID Document was approved',
      idDocumentUnderReview: 'Under review for ID Document'
    },
    general: {
      noData: 'No Data',
      start: 'START',
      ok: 'OK',
      cancel: 'CANCEL',
      send: 'SEND'
    }
  },
  // for Japanese
  ja: {
    validate: {
      emailMustBeValid: 'Email address must be valid.',
      amountMustBeValid: 'Amount must be valid'
    },
    require: {
      itemIsRequired: 'Item is required',
      passwordIsRequired: 'Password is required.',
      codeIsRequired: 'Code is required.',
      emailIsRequired: 'Email Address is required'
    },
    signUp: {
      pleaseSetUpYourWalletFirst: 'Please set up your wallet first.'
    },
    signUpCode: {
      verifyEmail: 'Verify Email',
      pleaseProvideVerificationCodeWhichWasSentByEmail: 'Please provide verification code which was sent by email.',
      code: 'Code',
      verificationCodeWhichWasSentByEmail: 'Verification code which was sent by email.',
      passwordOnImport: 'Password on import',
      passwordWhichWasSentByEmailWhenYouCreatedAnAccountOnTheFirstTime: 'Password which was sent by email when you created an account on the first time.'
    },
    signUpEmail: {
      registerEmail: 'Register Email',
      pleaseProvideYourEmailAddresToActivateYourAccount: 'Please provide your email address to activate your account.',
      onceYouSubmitThisFormThenWeWillSendYouAConfirmationEmail: 'Once you submit this form, then we will send you a confirmation email.',
      iAgressWith: 'I agress with ',
      termOfServices: 'terms of services.'
    },
    signUpEnd: {
      accountActivated: 'Account activated',
      yourAccountHasBeenActivatedPleaseEnjoy: 'Your account has been activated.Please enjoy!'
    },
    home: {
      balanceLabel: '残高',
      paymentHistory: '支払い履歴'
    },
    main: {
      home: 'Home',
      qrCode: 'QRコード',
      send: '送信',
      settings: '設定'
    },
    qrCode: {
      qrCodeLabel: 'QRコード',
      assetCode: 'アセットコード',
      amount: '量',
      enterHowMuchYouWantToBeReceived: '受取額を入力して下さい',
      AmountMustBeValid: '受取額を入力して下さい'
    },
    send: {
      balances: '残高',
      sendLabel: '送信',
      emailAdress: 'メールアドレス',
      assetCode: 'アセットコード',
      amount: '量',
      youCannotUseThisFunctionUntilYourIdIsVerified: 'IDが承認されるまでこのサービスは利用できません。/nプロフィールページからIDを申請してください。',
      enterHowMuchYouWantTosend: 'enter how much you want to send.'
    },
    settings: {
      language: '',
      profile: 'プロフィール',
      notification: '通知設定',
      emailNotification: 'メール通知',
      idDocument: 'ID Document',
      termOfService: '利用規約',
      privacyPolicy: 'プライバシーポリシー'
    },
    settingsUploader: {
      pleaseUploadPhotoOfTravelDocument: 'ご本人確認書類をアップロードしてください。',
      theFollowingItemsMustBeClearlyVisible: '以下の項目が確認できるようにしてください。',
      onceYouUploadImagesYouWilNotBeAbleToEditYourProfile: 'IDを申請されますとプロフィールは変更できません。'
    },
    profile: {
      profileLabel: 'プロフィール',
      emailAddress: 'メールアドレス',
      name: '名',
      firstName: '名',
      middleName: 'ミドルネーム',
      lastName: '姓',
      address: '住所',
      genderType: '性別',
      dob: '生年月日',
      doe: '有効期限',
      cellPhone: '電話番号',
      facePhoto: '顔写真',
      uploadIdDocument: '本人確認書類(ID)のアップロード',
      idDoucmentApproved: 'ID審査中',
      idDocumentUnderReview: 'ID承認済'
    },
    general: {
      noData: 'データが存在しません',
      start: 'START',
      ok: 'OK',
      cancel: 'CANCEL'
    }
  }
}

// install plugin
Vue.use(VueI18n)

// set lang
Vue.config.lang = 'en'

// set locales
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: '#03A9F4',
    secondary: '#B3E5FC'
  }
})

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
