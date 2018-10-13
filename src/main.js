import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import content from './locale'

Vue.config.productionTip = false
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'ru', // set locale
  messages: content // set locale content
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
