import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import content from './locale'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages: content // set locale content
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
