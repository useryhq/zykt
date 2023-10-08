import {
  config
} from "./config.js";
export const baseUrl = config.api_base_url
// let debug = true
let debug = false 
export function request(url, method, data, opt) {
    uni.showLoading({
      title: 'Loading...', //提示的内容,
      mask: true, //显示透明蒙层，防止触摸穿透,
      success: res => {}
    });
  
    if (!opt) {
      url = baseUrl + url
    }
    if (debug) {
      console.log('#######################################################发起请求#########################################################################################')
      console.log(method, url)
      console.log('parms:', data)
    }
    return new Promise((resolve, reject) => {
      uni.request({
        url: url, //开发者服务器接口地址",
        data: data, //请求的参数",
        method: method,
        dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
        success: res => {
          if (debug) {
            console.log('response:', res)
            console.log('###############################################结束请求###########################################################################################')
          }
          if (res.data.code == 200) {
            uni.hideLoading();
            resolve(res.data)
          } else {
            if (res.data.code == 0) {
              uni.hideLoading();
			  resolve(res.data)
              // reject({
              //   'message': '连接服务器失败'
              // })
              if (res.statusCode == 405) {
				  跳转登录
                uni.navigateTo({
                  url: '/pageC/pages/login/login'
                });
              }
            }
  
            uni.hideLoading();
            reject(res.data.msg)
          }
        },
        fail: () => {
  
          uni.hideLoading();
          reject({
            code: 123,
            message: '网络连接失败'
          })
        },
        complete: () => {}
      });
  
    })
  }