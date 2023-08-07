import App from './App'
import {imgUrl,upImgUrl} from 'static/js/config.js'
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$imgUrl = imgUrl;
Vue.prototype.$upImgUrl = upImgUrl;
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