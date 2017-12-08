<template>
  <div class="v-center">
    <v-layout>
      <v-flex xs12 sm8 offset-sm2>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Welcome</h3>
              <div>Please set up your wallet first.</div>
            </div>
          </v-card-title>
          <v-container v-if="message.length > 0">
            <v-alert color="error" icon="warning" value="true">
              {{message}}
            </v-alert>
          </v-container>
          <v-container>
            <v-form>
            </v-form>
          </v-container>
          <v-card-actions class="pa-4">
            <v-btn block color="primary" @click.stop="start()">START</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// import router from '@/router'
export default {
  name: 'signup',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    start () {
      const self = this
      this.$store.dispatch('app/setLoading', true)
      this.$store.dispatch('device/register', {
        onSuccess: function () {
          self.$store.dispatch('app/setLoading', false)
        },
        onError: function (code, message, error) {
          self.$store.dispatch('app/setLoading', false)
          self.message = ''
          if (message) {
            self.message = message
          }
        }
      })
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.v-center {
  display: table-cell;
  vertical-align: middle;
  width: 100vw;
  height: 80vh;
}
</style>
