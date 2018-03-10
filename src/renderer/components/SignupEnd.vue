<template>
  <div class="mt-5">
    <v-layout>
      <v-flex xs12 sm8 offset-sm2>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ $t('signUpEnd.accountActivated') }}</h3>
              <div>
                <span>{{ $t('signUpEnd.yourAccountHasBeenActivatedPleaseEnjoy') }}</span><br />
              </div>
            </div>
          </v-card-title>
          <v-card-actions class="pa-4">
            <v-btn block color="primary" @click.stop="start()">{{ $t('general.start') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import router from '@/router'
export default {
  methods: {
    start () {
      router.push({ name: 'home' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
