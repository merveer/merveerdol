<template lang="pug">
    div
        span(v-if="$t('lang') === 'tr'" @click.stop.prevent="set('en')") English
        span(v-if="$t('lang') === 'en'" @click.stop.prevent="set('tr')") Türkçe
        nuxt
</template>

<script>
import { mapActions } from 'vuex'

export default {
    layout: 'main',
    data () {
      return {
      }
    },
    methods: mapActions('i18n', ['set'])
}
</script>

<style scoped>
.button {
  background-color: green;
  color: white;
  margin-left: 20px
}
</style>

