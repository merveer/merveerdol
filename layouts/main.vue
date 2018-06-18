<template lang="pug">
    Header 
      nuxt
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Header from '../components/Header.vue'

  export default {
    created () {
      this.$i18n.locale = this.$store.getters['i18n/locale']
    },
    watch: {
      locale () {
        this.$i18n.locale = this.locale
      }
    },
    computed: {
      ...mapGetters('i18n', ['locale'])
    },
    methods: {
      ...mapActions('i18n', ['set'])
    },
    components: {
      Header
    }
  }
</script>