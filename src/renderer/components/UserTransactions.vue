<template>
  <div>
    <v-list three-line v-if="transactionData.userTransactions.length > 0">
      <template v-for="item, idx in transactionData.userTransactions">
        <v-divider v-if="idx > 0"></v-divider>
        <v-list-tile avatar :class="'transaction-status-' + item.transactionStatus">
          <v-list-tile-avatar>
            <img v-bind:src="getAvatarImageURL(item)"/>
          </v-list-tile-avatar>
          <v-list-tile-avatar>
            <img v-bind:src="getTransactionTypeImageURL(item)"/>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="getTitle(item)"></v-list-tile-title>
            <v-list-tile-sub-title v-html="getSubTitle(item)"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
    <v-alert outline color="info" icon="info" value="true" v-else>
      No data.
    </v-alert>
    <div class="text-xs-center" v-if="transactionData.totalPageNum > 0">
      <v-pagination :length="transactionData.totalPageNum" v-model="currentPageNum" :total-visible="20"></v-pagination>
    </div>
  </div>
</template>

<script>
import defaultProfileImage from '@/assets/user_default_profile_grey.png'
import receiveIconImage from '@/assets/ic_receive_arrow.png'
import sendIconImage from '@/assets/ic_send_arrow.png'
import util from '@/util'
export default {
  props: {
    transactionData: Object
  },
  data () {
    return {
      currentPageNum: this.transactionData.currentPageNum
    }
  },
  watch: {
    'currentPageNum': function (to, from) {
      if (to !== from) {
        this.$emit('changePage', from, to)
      }
    }
  },
  methods: {
    getAvatarImageURL (userTransaction) {
      return userTransaction.targetUserProfileImageURL.length > 0 ? userTransaction.targetUserProfileImageURL : defaultProfileImage
    },
    getTransactionTypeImageURL (userTransaction) {
      return userTransaction.transactionType === 1 ? sendIconImage : receiveIconImage
    },
    getTitle (userTransaction) {
      let name = ''
      if (userTransaction.targetUserFirstName) {
        name += userTransaction.targetUserFirstName
      }
      if (userTransaction.targetUserMiddleName) {
        if (name.length > 0) name += ' '
        name += userTransaction.targetUserMiddleName
      }
      if (userTransaction.targetUserLastName) {
        if (name.length > 0) name += ' '
        name += userTransaction.targetUserLastName
      }
      if (name.length === 0) {
        name = userTransaction.targetUserEmailAddress
      }
      return name
    },
    getSubTitle (userTransaction) {
      return userTransaction.amount + ' ' + userTransaction.assetType + '<br />(' + util.toLocaleString(util.toDate(userTransaction.loggedAt)) + ')'
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li.transaction-status-0 {
  background-color: #FFF9C4;
}
li.transaction-status-2 {
  background-color: #E0E0E0;
}
</style>
