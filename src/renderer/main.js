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
    passwordsAreNotMatched: 'New passwords are not matched.',
    addressMustBeValid: 'The address is invalid. Please input the correct address.',
    insufficientTrustLimit: 'Trustline must be set at receiving account.'
  },
  require: {
    itemIsRequired: 'Item is required',
    passwordIsRequired: 'Password is required.',
    codeIsRequired: 'Code is required.',
    emailIsRequired: 'Email Address is required.',
    oldPasswordIsRequired: 'Please input old password.',
    newPasswordIsRequired: 'Please input new password.',
    retypePasswordIsRequired: 'Please input retype password.',
    addressIsRequired: 'Please input address.',
    memoIsRequired: 'Memo is required for this address.'
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
    pleaseProvideVerificationCodeWhichWasSentByEmail: 'Please provide confirmation code sent by email.',
    code: 'Code',
    verificationCodeWhichWasSentByEmail: 'Confirmation code sent by email.',
    passwordOnImport: 'Password',
    passwordWhichWasSentByEmailWhenYouCreatedAnAccountOnTheFirstTime: 'Password which was set by yourself or sent by email when you registered at the first time.'
  },
  signUpEmail: {
    registerEmail: 'Register Email',
    pleaseProvideYourEmailAddressToActivateYourAccount: 'Please provide your email address to activate your account.',
    onceYouSubmitThisFormThenWeWillSendYouAConfirmationEmail: 'Once you submit this form, then we will send you a confirmation email.',
    agreeWith: 'I agree with ',
    termOfServices: 'terms of services.'
  },
  signUpEnd: {
    accountActivated: 'Account activated',
    yourAccountHasBeenActivatedPleaseEnjoy: 'Your account has been activated. Please enjoy!'
  },
  home: {
    balanceLabel: 'Balances',
    paymentHistory: 'Payment History',
    accountIdAddress: 'AccountID (SNC Address): '
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
    AmountMustBeValid: 'Amount must be valid',
    address: 'SNC Address:',
    note: `Note: Don't send any asset except "SNC" and "SNP"`,
    byEmail: 'By Email',
    byStellarAddress: 'By SNC Address',
    memo: 'Memo:'
  },
  send: {
    memo_optional: 'Memo (Optional)',
    password: 'Password',
    balances: 'Balances',
    sendLabel: 'Send',
    emailAddress: 'Email address',
    assetCode: 'Asset code',
    amount: 'Amount',
    address: 'AccountID (SNC Address)',
    youCannotUseThisFunctionUntilYourIdIsVerified: 'You cannot use this function until your ID is verified.',
    youCannotSendToYourSelf: 'You cannot send to yourself',
    amountMustBeLessThanTotal: 'You can not send that much.',
    areYouSureYouWantToSend: 'Are you sure you want to send {amount} {assetCode} to {email}?',
    areYouSureYouWantToSendToStellar: 'Are you sure you want to send {amount} {assetCode} to stellar account?<br/>Account ID(Address) {address}',
    enterHowMuchYouWantToSend: 'Enter how much you want to send.',
    paymentSuccess: 'The payment has been submitted.\nPlease wait a moment until the transaction be processed.',
    confirmMessageSNC: 'Please make sure to input SNC address correctly and tap SEND button.<br/><br/><span style="color:red">*You can not send any assets to XLM address.</span>'
  },
  settings: {
    language: 'Languages',
    profile: 'Profile',
    security: 'Security',
    requirePasswordOnSendingAssets: 'Require password to send assets',
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
    onceYouUploadImagesYouWilNotBeAbleToEditYourProfile: 'Once you upload images, you will not be able to edit your profile.',
    hasAllNecessaryInfo: 'Please input all the profile information before sending ID document.'
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
    passwordsAreNotMatched: '新しいパスワードが一致しません',
    addressMustBeValid: 'アドレスの形式が正しくありません',
    insufficientTrustLimit: '送信先のアカウントのTrustlineが正しく設定されていません'
  },
  require: {
    itemIsRequired: '必須項目',
    passwordIsRequired: 'パスワードを入力してください',
    codeIsRequired: '認証コードを入力してください',
    emailIsRequired: 'メールアドレスを入力してください',
    oldPasswordIsRequired: '現在のパスワードを入力してください',
    newPasswordIsRequired: '新しいパスワードを入力してください',
    retypePasswordIsRequired: '新しいパスワード（確認）を入力してください',
    addressIsRequired: 'アカウントID (SNCアドレス)を入力してください。',
    memoIsRequired: 'このアドレスに送信する場合はメモを入力してください。'
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
    pleaseProvideVerificationCodeWhichWasSentByEmail: 'メールに記載されたConfirmation code（認証コード）を入力してください',
    code: 'コード',
    verificationCodeWhichWasSentByEmail: 'Confirmation code（認証コード）',
    passwordOnImport: 'パスワード',
    passwordWhichWasSentByEmailWhenYouCreatedAnAccountOnTheFirstTime: 'パスワードを入力してください'
  },
  signUpEmail: {
    registerEmail: 'メールアドレスを登録する',
    pleaseProvideYourEmailAddressToActivateYourAccount: '登録されるメールアドレスを入力してください',
    onceYouSubmitThisFormThenWeWillSendYouAConfirmationEmail: '入力フォームを送信されましたらメールをお送りいたします',
    agreeWith: '同意する',
    termOfServices: '利用規約に '
  },
  signUpEnd: {
    accountActivated: 'アカウントが有効になりました。',
    yourAccountHasBeenActivatedPleaseEnjoy: 'サービスをご利用ください。'
  },
  home: {
    balanceLabel: '残高',
    paymentHistory: '支払い履歴',
    accountIdAddress: 'アカウントID (SNCアドレス): '
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
    AmountMustBeValid: 'Point/Coinを入力して下さい',
    address: 'アカウントID (SNCアドレス):',
    note: '備考: SNCとSNP以外は送信しないでください。',
    byEmail: 'メールアドレス',
    byStellarAddress: 'SNCアドレス',
    memo: 'メモ:'
  },
  send: {
    memo_optional: 'メモ（オプション)',
    password: 'パスワード',
    balances: '残高',
    sendLabel: '送信',
    emailAddress: 'メールアドレス',
    assetCode: 'アセットコード',
    amount: '数量',
    address: 'アカウントID (SNCアドレス)',
    youCannotUseThisFunctionUntilYourIdIsVerified: 'ご本人確認(ID)が承認されるまでこのサービスは利用できません。プロフィールページからご本人確認(ID)を申請してください。',
    youCannotSendToYourSelf: '自身のアカウントには送信できません',
    amountMustBeLessThanTotal: '保有量の範囲内で設定してください',
    areYouSureYouWantToSend: '{amount} {assetCode}を{email}に送信してもよろしいですか？',
    areYouSureYouWantToSendToStellar: '{amount} {assetCode} を以下のStellarアカウントに送信しますか? <br/><br/>アカウントID (SNCアドレス): {address}',
    enterHowMuchYouWantToSend: '送信額を入力してください',
    paymentSuccess: '送信が完了しました。\n取引が反映されるまで少々時間が掛かりますので、暫く経ってから再度ご確認ください。',
    confirmMessageSNC: 'SNCアドレスが正しく入力されていることを確認した上で、送信ボタンを押してください。<br/><br/><span style="color:red">※XMLアドレスには送信できません。</span>'
  },
  settings: {
    language: '言語設定 - Language',
    profile: 'プロフィール',
    security: 'セキュリティ',
    requirePasswordOnSendingAssets: 'ポイント・コイン送信時にパスワードを入力する',
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
    onceYouUploadImagesYouWilNotBeAbleToEditYourProfile: 'ご本人確認を申請されますとプロフィールは変更できません。',
    hasAllNecessaryInfo: 'ご本人確認資料(ID)を送信される前に全てのプロフィール情報を入力してください。'
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
    passwordsAreNotMatched: 'Mật khẩu mới không đồng nhất.',
    addressMustBeValid: 'Địa chỉ Stellar address không đúng.',
    insufficientTrustLimit: 'Trustline must be set at receiving account.'
  },
  require: {
    itemIsRequired: 'Mục bắt buộc',
    passwordIsRequired: 'Hãy nhập mật khẩu',
    codeIsRequired: 'Hãy nhập mã xác nhận.',
    emailIsRequired: 'Hãy nhập địa chỉ email.',
    oldPasswordIsRequired: 'Vui lòng nhập mật khẩu hiện tại.',
    newPasswordIsRequired: 'Vui lòng nhập mật khẩu mới.',
    retypePasswordIsRequired: 'Vui lòng nhập lại mật khẩu.',
    addressIsRequired: 'Hãy nhập địa chỉ.',
    memoIsRequired: 'Vui lòng nhập Memo cho địa chỉ này.'
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
    passwordOnImport: 'Mật khẩu',
    passwordWhichWasSentByEmailWhenYouCreatedAnAccountOnTheFirstTime: 'Vui lòng nhập mật khẩu.'
  },
  signUpEmail: {
    registerEmail: 'Email đăng ký',
    pleaseProvideYourEmailAddressToActivateYourAccount: 'Vui lòng cung cấp địa chỉ email của bạn để kích hoạt tài khoản.',
    onceYouSubmitThisFormThenWeWillSendYouAConfirmationEmail: 'Sau khi bạn gửi mẫu đơn này, sau đó chúng tôi sẽ gửi cho bạn email xác nhận.',
    agreeWith: 'Tôi đồng ý.',
    termOfServices: 'điều khoản dịch vụ.'
  },
  signUpEnd: {
    accountActivated: 'Đã kích hoạt tài khoản',
    yourAccountHasBeenActivatedPleaseEnjoy: 'Tài khoản của bạn đã được kích hoạt. Hãy sử dụng!'
  },
  home: {
    balanceLabel: 'Số dư tài khoản.',
    paymentHistory: 'Lịch sử thanh toán.',
    accountIdAddress: 'Mã Tài Khoản(Địa chỉ): '
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
    AmountMustBeValid: 'Số lượng ko đúng.',
    address: 'Địa chỉ:',
    note: 'Chú ý: không gửi bất kỳ cái gì trừ "SNC" vả "SNP".',
    byEmail: 'Bằng Email',
    byStellarAddress: 'Bằng Địa chỉ SNC',
    memo: 'Ghi chú:'
  },
  send: {
    memo_optional: 'Ghi chú (không bắt buộc)',
    password: 'Mật khẩu',
    balances: 'Số dư',
    sendLabel: 'Gửi',
    emailAddress: 'Địa chỉ email',
    assetCode: 'Mã tài khoản',
    amount: 'Số lượng',
    address: 'Địa chỉ',
    youCannotUseThisFunctionUntilYourIdIsVerified: 'Bạn không thể sử dụng chức năng này cho đến khi ID của bạn được xác minh.',
    youCannotSendToYourSelf: 'Bạn không thể gửi cho chính mình.',
    amountMustBeLessThanTotal: 'Số tiền phải nhỏ hơn tổng.',
    areYouSureYouWantToSend: 'Bạn có chắc chắn bạn muốn gửi.',
    areYouSureYouWantToSendToStellar: 'Bạn có chắc chắn muốn gửi {amount} {assetCode} tới tài khoản Stellar này không? <br/>Mã Tài Khoản (Địa chỉ): {address}',
    enterHowMuchYouWantToSend: '',
    paymentSuccess: 'Gửi xong\n',
    confirmMessageSNC: 'Vui lòng kiểm tra lại địa chỉ SNC đã chính xác chưa và bấm Gửi.<br/><br/><span style="color:red">*Bạn không thể gửi vào địa chỉ XLM.</span>'
  },
  settings: {
    language: 'Ngôn ngữ - Language',
    profile: 'Hồ sơ',
    security: 'Bảo mật',
    requirePasswordOnSendingAssets: 'Nhập mật khẩu để gửi điểm hoặc Coin',
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
    onceYouUploadImagesYouWilNotBeAbleToEditYourProfile: 'Khi bạn tải ảnh lên, bạn sẽ không thể chỉnh sửa hồ sơ của mình.',
    hasAllNecessaryInfo: 'Vui lòng nhập toàn bộ thông tin profile trước khi gửi tài liệu ID'
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
