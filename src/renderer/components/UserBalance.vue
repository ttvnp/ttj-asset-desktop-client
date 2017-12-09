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
export default {
  props: {
    forceRefresh: Boolean
  },
  data () {
    return {
      headers: [
        { text: 'SNC', align: 'center', value: 'snc', sortable: false },
        { text: 'SNP', align: 'center', value: 'snp', sortable: false }
      ],
      balances: [ { snc: '', snp: '' } ]
    }
  },
  mounted () {
    const self = this
    this.$store.dispatch('user/getBalances', {
      forceRefresh: this.forceRefresh,
      callback: function (balances) {
        const item = {
          snc: '',
          snp: ''
        }
        for (let i = 0; i < balances.length; i++) {
          const b = balances[i]
          switch (b.assetType) {
            case 'SNC':
              item.snc = b.amount
              break
            case 'SNP':
              item.snp = b.amount
              break
          }
        }
        self.balances = [ item ]
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
