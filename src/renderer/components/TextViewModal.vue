<template>
  <div>
    <v-dialog
      v-model="isShow"
      fullscreen
      transition="dialog-bottom-transition"
      :overlay=false
      scrollable
    >
      <v-card>
        <v-toolbar style="flex: 0 0 auto;" dark class="primary">
          <v-btn icon @click.native="isShow = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text v-html="body"></v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isShow: false
      }
    },
    props: ['title', 'body'],
    methods: {
      open () {
        this.isShow = true
      },

      close () {
        this.isShow = false
        this.$emit('modal-close')
      },

      doNothing () {
      }
    },

    components: {}
  }
</script>

<style scoped>
</style>
