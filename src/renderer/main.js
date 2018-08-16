import Vue from 'vue'
import Vuetify from 'vuetify'
import axios from 'axios'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'

import App from './App'
import router from './router'
import store from './store'

import('vuetify/dist/vuetify.min.css')

// for English
const en = {
  language: {
    english: 'English',
    japanese: 'Japanese',
    vietnamese: 'Vietnamese'
  },
  validate: {
    emailMustBeValid: 'Email address must be valid.',
    amountMustBeValid: 'Amount must be valid',
    editProfileUnderReview: 'When ID was approved or under review, you can change only the avatar image.',
    newPasswordValid: 'Password should be more than 6 characters or numbers.',
    passwordsAreNotMatched: 'New passwords are not matched.'
  },
  require: {
    itemIsRequired: 'Item is required',
    passwordIsRequired: 'Password is required.',
    codeIsRequired: 'Code is required.',
    emailIsRequired: 'Email Address is required.',
    oldPasswordIsRequired: 'Please input old password.',
    newPasswordIsRequired: 'Please input new password.',
    retypePasswordIsRequired: 'Please input retype password.'
  },
  facePhoto: {
    pointOne: 'Please submit the page containing your photograph.',
    pointTwo: 'Ensure that all documents are clear and readable.'
  },
  addressPhoto: {
    pointOne: 'Please submit the page containing your address information (your home address).',
    pointTwo: 'Ensure that all documents are clear and readable.'
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
    iAgressWith: 'I agree with ',
    termOfServices: 'terms of services.'
  },
  signUpEnd: {
    accountActivated: 'Account activated',
    yourAccountHasBeenActivatedPleaseEnjoy: 'Your account has been activated. Please enjoy!'
  },
  home: {
    balanceLabel: 'Balances',
    paymentHistory: 'Payment History'
  },
  menu: {
    home: 'Home',
    qrCode: 'QR Code',
    send: 'Send',
    settings: 'Settings'
  },
  qrCode: {
    qrCodeLabel: 'QR Code',
    assetCode: 'Asset Code',
    amount: 'Amount',
    enterHowMuchYouWantToBeReceived: 'Enter how much you want to be received.',
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
    areYouSureYouWantToSend: 'Are you sure you want to send {amount} {assetCode} to {email}?',
    enterHowMuchYouWantToSend: 'Enter how much you want to send.'
  },
  settings: {
    language: 'Languages',
    profile: 'Profile',
    notification: 'Notification',
    emailNotification: 'Email Notification',
    idDocument: 'ID Document',
    termOfService: 'Term of Service',
    privacyPolicy: 'Privacy Policy',
    logout: 'Logout',
    messageLogout: 'Are you sure you want to log off?'
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
    idDocumentApproved: 'ID Document was approved',
    idDocumentUnderReview: 'Under review for ID Document'
  },
  changePassword: {
    changePasswordLabel: 'Change Password',
    oldPassword: 'Old Password',
    newPassword: 'New Password',
    retypePassword: 'Retype Password',
    passwordIsNotCorrect: 'Password is not correct.'
  },
  general: {
    sample: 'Sample',
    noData: 'No Data',
    start: 'START',
    ok: 'OK',
    cancel: 'CANCEL',
    send: 'SEND',
    yes: 'Yes',
    no: 'No',
    save: 'save'
  }
}

// for Japanese
const ja = {
  language: {
    english: '英語 - English',
    japanese: '日本語 - Japanese',
    vietnamese: 'ベトナム語 - Vietnamese'
  },
  validate: {
    emailMustBeValid: 'メールアドレスの形式が正しくありません',
    amountMustBeValid: 'Point/Coinが正しくありません',
    editProfileUnderReview: 'ご本人確認資料(ID)が承認済あるいは審査中は、プロフィール画像のみ変更できます',
    newPasswordValid: 'パスワードは6文字以上の英数字で設定してください。',
    passwordsAreNotMatched: '新しいパスワードが一致しません。'
  },
  require: {
    itemIsRequired: '必須項目',
    passwordIsRequired: 'パスワードを入力してください',
    codeIsRequired: '認証コードを入力してください',
    emailIsRequired: 'メールアドレスを入力してください',
    oldPasswordIsRequired: '現在のパスワードを入力してください。',
    newPasswordIsRequired: '新しいパスワードを入力してください。',
    retypePasswordIsRequired: '新しいパスワード（確認）を入力してください。'
  },
  facePhoto: {
    pointOne: '顔写真が確認できるページをアップロードしてください。',
    pointTwo: '資料全面が鮮明に写るようにしてください。'
  },
  addressPhoto: {
    pointOne: '住所が確認できるページをアップロードしてください。',
    pointTwo: '資料全面が鮮明に写るようにしてください。'
  },
  signUp: {
    pleaseSetUpYourWalletFirst: 'ウォレットを有効にしてください'
  },
  signUpCode: {
    verifyEmail: 'メールアドレスを有効にする',
    pleaseProvideVerificationCodeWhichWasSentByEmail: 'メールに記載されたVerification code（認証コード）を入力してください',
    code: 'コード',
    verificationCodeWhichWasSentByEmail: 'Verification code（認証コード）.',
    passwordOnImport: 'Password on import',
    passwordWhichWasSentByEmailWhenYouCreatedAnAccountOnTheFirstTime: '登録時に送付されたメールに記載されているパスワードを入力してください'
  },
  signUpEmail: {
    registerEmail: 'メールアドレスを登録する',
    pleaseProvideYourEmailAddresToActivateYourAccount: '登録されるメールアドレスを入力してください',
    onceYouSubmitThisFormThenWeWillSendYouAConfirmationEmail: '入力フォームを送信されましたらメールをお送りいたします',
    iAgressWith: '同意する',
    termOfServices: '利用規約に '
  },
  signUpEnd: {
    accountActivated: 'アカウントが有効になりました。',
    yourAccountHasBeenActivatedPleaseEnjoy: 'サービスをご利用ください。'
  },
  home: {
    balanceLabel: '残高',
    paymentHistory: '支払い履歴'
  },
  menu: {
    home: 'Home',
    qrCode: 'QRコード',
    send: '送信',
    settings: '設定'
  },
  qrCode: {
    qrCodeLabel: 'QRコード',
    assetCode: 'アセットコード',
    amount: '数量',
    enterHowMuchYouWantToBeReceived: '受取額を入力して下さい',
    AmountMustBeValid: 'Point/Coinを入力して下さい'
  },
  send: {
    balances: '残高',
    sendLabel: '送信',
    emailAdress: 'メールアドレス',
    assetCode: 'アセットコード',
    amount: '数量',
    youCannotUseThisFunctionUntilYourIdIsVerified: 'ご本人確認(ID)が承認されるまでこのサービスは利用できません。プロフィールページからご本人確認(ID)を申請してください。',
    youCannotSendToYourSelf: '自身のアカウントには送信できません',
    amountMustBeLessThanTotal: '保有量の範囲内で設定してください',
    areYouSureYouWantToSend: '{amount} {assetCode}を{email}に送信してもよろしいですか？',
    enterHowMuchYouWantTosend: '送信額を入力してください'
  },
  settings: {
    language: '言語設定 - Language',
    profile: 'プロフィール',
    notification: '通知設定',
    emailNotification: 'メール通知',
    idDocument: 'ご本人確認資料',
    termOfService: '利用規約',
    privacyPolicy: 'プライバシーポリシー',
    logout: 'ログアウト',
    messageLogout: 'ログアウトしてもよろしいですか？'
  },
  settingsUploader: {
    pleaseUploadPhotoOfTravelDocument: 'ご本人確認書類をアップロードしてください。',
    theFollowingItemsMustBeClearlyVisible: '以下の項目が確認できるようにしてください。',
    onceYouUploadImagesYouWilNotBeAbleToEditYourProfile: 'ご本人確認を申請されますとプロフィールは変更できません。'
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
    idDocumentApproved: 'ご本人確認資料(ID)承認済',
    idDocumentUnderReview: 'ご本人確認資料(ID)審査中'
  },
  changePassword: {
    changePasswordLabel: 'パスワード変更',
    oldPassword: '現在のパスワード',
    newPassword: '新しいパスワード',
    retypePassword: '新しいパスワード（確認）',
    passwordIsNotCorrect: '現在のパスワードが正しくありません。'
  },
  general: {
    sample: '例',
    noData: 'データが存在しません',
    start: '始める',
    ok: 'OK',
    cancel: 'キャンセル',
    send: '送信',
    yes: 'Yes',
    no: 'No',
    save: '保存'
  }
}

// for Vietnamese
const vi = {
  language: {
    english: 'Tiếng Anh - English',
    japanese: 'Tiếng Nhật - Japanese',
    vietnamese: 'Tiếng Việt - Vietnamese'
  },
  validate: {
    emailMustBeValid: 'Địa chỉ email không đúng.',
    amountMustBeValid: 'Số điểm không đúng.',
    editProfileUnderReview: 'Khi ID xác minh chủ tài khoản đã được xác nhận hoặc đang trong khi xét duyệt, thì bạn chỉ có thể thay đổi ảnh đại diện.',
    newPasswordValid: 'Mật khẩu nên được cài đặt 6 ký tự hoặc số.',
    passwordsAreNotMatched: 'Mật khẩu mới không đồng nhất.'
  },
  require: {
    itemIsRequired: 'Mục bắt buộc',
    passwordIsRequired: 'Hãy nhập mật khẩu',
    codeIsRequired: 'Hãy nhập mã xác nhận.',
    emailIsRequired: 'Hãy nhập địa chỉ email.',
    oldPasswordIsRequired: 'Vui lòng nhập mật khẩu hiện tại.',
    newPasswordIsRequired: 'Vui lòng nhập mật khẩu mới.',
    retypePasswordIsRequired: 'Vui lòng nhập lại mật khẩu.'
  },
  facePhoto: {
    pointOne: 'Vui lòng gửi tài liệu có kèm ảnh của bạn.',
    pointTwo: 'EĐảm bảo rằng tất cả các tài liệu đều rõ ràng và dễ đọc.'
  },
  addressPhoto: {
    pointOne: 'Vui lòng gửi tài liệu có kèm thông tin địa chỉ của bạn (địa chỉ nhà).',
    pointTwo: 'Đảm bảo rằng tất cả các tài liệu đều rõ ràng và dễ đọc.'
  },
  signUp: {
    pleaseSetUpYourWalletFirst: 'Hãy tạo ví tiền có giá trị'
  },
  signUpCode: {
    verifyEmail: 'Hãy tạo email có giá trị',
    pleaseProvideVerificationCodeWhichWasSentByEmail: 'Hãy nhập mã xác nhận đã được ghi trong email.',
    code: 'Mã xác nhận',
    verificationCodeWhichWasSentByEmail: 'Mã xác nhận đã được gửi bằng email.',
    passwordOnImport: 'Mật khẩu khi nhập',
    passwordWhichWasSentByEmailWhenYouCreatedAnAccountOnTheFirstTime: 'Mật khẩu đã được gửi bằng email khi bạn tạo một tài khoản vào lần đầu tiên.'
  },
  signUpEmail: {
    registerEmail: 'Email đăng ký',
    pleaseProvideYourEmailAddresToActivateYourAccount: 'Vui lòng cung cấp địa chỉ email của bạn để kích hoạt tài khoản.',
    onceYouSubmitThisFormThenWeWillSendYouAConfirmationEmail: 'Sau khi bạn gửi mẫu đơn này, sau đó chúng tôi sẽ gửi cho bạn email xác nhận.',
    iAgressWith: 'Tôi đồng ý.',
    termOfServices: 'điều khoản dịch vụ.'
  },
  signUpEnd: {
    accountActivated: 'Đã kích hoạt tài khoản',
    yourAccountHasBeenActivatedPleaseEnjoy: 'Tài khoản của bạn đã được kích hoạt. Hãy sử dụng!'
  },
  home: {
    balanceLabel: 'Số dư tài khoản.',
    paymentHistory: 'Lịch sử thanh toán.'
  },
  menu: {
    home: 'Home',
    qrCode: 'Mã QR',
    send: 'Gửi',
    settings: 'Cài đặt'
  },
  qrCode: {
    qrCodeLabel: ' Mã QR',
    assetCode: 'Mã tài sản',
    amount: 'Số lượng',
    enterHowMuchYouWantToBeReceived: 'Nhập số tiền bạn muốn nhận được.',
    AmountMustBeValid: 'Số lượng ko đúng.'
  },
  send: {
    balances: 'Số dư',
    sendLabel: 'Gửi',
    emailAdress: 'Địa chỉ email',
    assetCode: 'Mã tài khoản',
    amount: 'Số lượng',
    youCannotUseThisFunctionUntilYourIdIsVerified: 'Bạn không thể sử dụng chức năng này cho đến khi ID của bạn được xác minh.',
    youCannotSendToYourSelf: 'Bạn không thể gửi cho chính mình.',
    amountMustBeLessThanTotal: 'Số tiền phải nhỏ hơn tổng.',
    areYouSureYouWantToSend: 'Bạn có chắc chắn bạn muốn gửi.',
    enterHowMuchYouWantToSend: ''
  },
  settings: {
    language: 'Ngôn ngữ - Language',
    profile: 'Hồ sơ',
    notification: 'Thông báo',
    emailNotification: 'Thông báo email',
    idDocument: 'Tài liệu ID',
    termOfService: 'Điều khoản Dịch vụ',
    privacyPolicy: 'Chính sách Bảo mật',
    logout: 'Đăng xuất',
    messageLogout: 'Bạn có chắc chắn muốn đăng xuất không?'
  },
  settingsUploader: {
    pleaseUploadPhotoOfTravelDocument: 'Xin vui lòng tải ảnh đại diện của bạn lên.',
    theFollowingItemsMustBeClearlyVisible: 'Các mục sau đây phải được rõ ràng.',
    onceYouUploadImagesYouWilNotBeAbleToEditYourProfile: 'Khi bạn tải ảnh lên, bạn sẽ không thể chỉnh sửa hồ sơ của mình.'
  },
  profile: {
    profileLabel: 'Hồ sơ',
    emailAddress: 'Địa chỉ email',
    name: 'Tên',
    firstName: 'Họ',
    middleName: 'Tên đệm',
    lastName: 'Tên',
    address: 'Địa chỉ',
    genderType: 'Giới tính',
    dob: 'Ngày tháng năm sinh',
    doe: 'Ngày hết hạn',
    cellPhone: 'Số điện thoại di động',
    facePhoto: 'Ảnh đại diện',
    uploadIdDocument: 'Tải dữ liệu ID của bạn lên',
    idDocumentApproved: 'Dữ liệu ID đã được phê duyệt',
    idDocumentUnderReview: 'Đang xem xét dữ liệu ID'
  },
  changePassword: {
    changePasswordLabel: 'Thay đổi mật khẩu',
    oldPassword: 'Mật khẩu hiện nay',
    newPassword: 'Mật khẩu mới',
    retypePassword: 'Nhập lại mật khẩu',
    passwordIsNotCorrect: 'Mật khẩu hiện tại không chính xác.'
  },
  general: {
    sample: 'Mẫu vật',
    noData: 'Không có dữ liệu',
    start: 'Bắt đầu',
    ok: 'OK',
    cancel: 'Hủy',
    send: 'Gửi',
    yes: 'Yes',
    no: 'No',
    save: 'Lưu'
  }
}

// install plugin
Vue.use(Vuex)
const storeVuex = new Vuex.Store()
Vue.use(vuexI18n.plugin, storeVuex)

Vue.i18n.add('en', en)
Vue.i18n.add('ja', ja)
Vue.i18n.add('vi', vi)

Vue.i18n.set('en')

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
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
