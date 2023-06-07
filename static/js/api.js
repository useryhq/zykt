import {
    request,
  } from "./http.js";
//获取七牛token
export function qnToken() {
	let url = '/common/qiniu-token'
	return new Promise((resolve, reject) => {
	  request(url, 'GET').then(res => {
	    resolve(res.data)
		console.log("====",res)
	  })
	})
}
// 获取热门品牌
export function brandHot() {
	let url = '/brands/hot'
	return new Promise((resolve,reject) => {
		request(url,'GET').then(res => {
			resolve(res.data)
		})
	})
}
// 获取最新求购
export function wantBuy() {
	let url = '/qiu-gou/lists-rec'
	return new Promise((resolve,reject) => {
		request(url,'GET').then(res => {
			resolve(res.data)
		})
	})
}
//首页商品
export function goodsList() {
	let url = '/goods/lists?type=1&priceDesc=1&key=空调'
	return new Promise((resolve,reject) => {
		request(url,'POST').then(res => {
			resolve(res.data)
		})
	})
}
//推荐搜索
export function search(data) {
	let url = '/search/search-goods'
	// console.log("====",data)
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res.data)
		})
	})
}
//求购详情
export function wantBuyDetail(data) {
	let url = '/qiu-gou/info'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res.data)
		})
	})
}
//求购列表
export function wantToBuy(data) {
	let url = '/qiu-gou/lists'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res.data)
		})
	})
}