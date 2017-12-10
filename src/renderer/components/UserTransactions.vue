<template>
  <div>
    <v-list three-line>
      <template v-for="item, idx in userTransactions">
        <v-divider v-if="idx > 0"></v-divider>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img v-bind:src="getAvatarImageURL(item)"/>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="getTitle(item)"></v-list-tile-title>
            <v-list-tile-sub-title v-html="getSubTitle(item)"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
    <div class="text-xs-center" v-if="totalPageNum > 1">
      <v-pagination :length="totalPageNum" v-model="currentPageNum" :total-visible="7"></v-pagination>
    </div>
  </div>
</template>

<script>
import defaultProfileImage from '@/assets/user_default_profile_grey.png'
export default {
  props: {
    forceRefresh: Boolean
  },
  data () {
    return {
      userTransactions: [],
      totalCnt: 0,
      totalPageNum: 0,
      currentPageNum: 1
    }
  },
  methods: {
    getAvatarImageURL (userTransaction) {
      return userTransaction.targetUserProfileImageURL.length > 0 ? userTransaction.targetUserProfileImageURL : defaultProfileImage
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
      return userTransaction.amount + ' ' + userTransaction.assetType + '<br />(' + userTransaction.loggedAt + ')'
    },
    loadUserTransactions (pageNum) {
      const self = this
      this.$store.dispatch('user/getTransactions', {
        forceRefresh: this.forceRefresh,
        pageNum: pageNum > 0 ? pageNum : 1,
        onSuccess: function ({ userTransactions, totalCnt, totalPageNum, currentPageNum }) {
          self.userTransactions = userTransactions
          self.totalCnt = totalCnt
          self.totalPageNum = totalPageNum
          if (self.forceRefresh) {
            self.$emit('loaded')
          }
        },
        onError: function (error) {
          console.log(error)
        }
      })
    }
  },
  watch: {
    'currentPageNum': function (to, from) {
      if (to !== from) {
        this.loadUserTransactions(to)
      }
    }
  },
  mounted () {
    this.loadUserTransactions(1)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
