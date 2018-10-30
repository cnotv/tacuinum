import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: "#00ACC1",
    secondary: "#00ACC1",
    accent: "#388E3C",
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#2196f3",
    success: "#4caf50"
  },
  customProperties: true,
  iconfont: 'fa',
})
