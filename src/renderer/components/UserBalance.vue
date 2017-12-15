<template>
  <v-data-table
    :headers="headers"
    :items="balances"
    hide-actions
    class="elevation-1">
    <template slot="items" slot-scope="props">
      <td class="text-xs-center">{{ props.item.snc }}</td>
      <td class="text-xs-center">{{ props.item.snp }}</td>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    forceRefresh: Boolean
  },
  data () {
    return {
      headers: [
        { text: 'SNC', align: 'center', value: 'snc', sortable: false },
        { text: 'SNP', align: 'center', value: 'snp', sortable: false }
      ]
    }
  },
  computed: mapGetters({
    balances: 'user/balances4table'
  }),
  mounted () {
    const self = this
    this.$store.dispatch('user/loadBalances', {
      forceRefresh: this.forceRefresh,
      callback: function () {
        if (self.forceRefresh) {
          self.$emit('loaded')
        }
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
