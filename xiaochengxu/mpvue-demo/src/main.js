import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

// wx.cloud.init({
//   env:  'j44-v0rvx'
// })

const app = new Vue(App)
app.$mount()
