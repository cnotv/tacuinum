import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import router from './router'
import * as Sentry from '@sentry/browser'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './registerServiceWorker'

Vue.config.productionTip = false

Sentry.init({
  dsn: 'https://22553bd0e4cf47d487248ac2547e8047@sentry.io/1379644',
  integrations: [new Sentry.Integrations.Vue({ Vue })]
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
