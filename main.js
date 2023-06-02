import App from './App'
import iphonex from 'static/js/iphoneX.js'
import {imgUrl} from 'static/js/config.js'
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$iphonex = iphonex;
Vue.prototype.$imgUrl = imgUrl;
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif