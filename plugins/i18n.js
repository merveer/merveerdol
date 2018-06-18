import Vue from 'vue'
import VueI18n from 'vue-i18n'

import tr from '../locales/tr.json'
import en from '../locales/en.json'

Vue.use(VueI18n)

export default ({ app, store }) => {
    app.i18n = new VueI18n({
      locale: 'tr',
      messages: {
        tr,
        en
      }
    })
  }