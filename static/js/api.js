import {
    request,
  } from "./http.js";
  //首页
//获取七牛token
export function qnToken() {
	let url = '/common/qiniu-token'
	return new Promise((resolve, reject) => {
	  request(url, 'GET').then(res => {
	    resolve(res.data)
		// console.log("====",res)
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
//首页商品列表
export function indexGoodsList(data) {
	let url = '/goods/page-lists'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res.data)
		})
	})
}
//跟经纬度获取城市
export function getCity(data) {
	let url = '/common/get-city-id'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res.data)
		})
	})
}
//获取市列表
export function getCityList() {
	let url = '/provinces/city'
	return new Promise((resolve,reject) => {
		request(url,'GET').then(res => {
			resolve(res.data)
		})
	})
}
//添加地址
// 获取城市三级分类
export function cityList() {
	let url = '/common/city-data'
	return new Promise((resolve,reject) => {
		request(url,'GET').then(res => {
			resolve(res.data)
		})
	})
}
//搜索页面
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
export function searchRec() {
	let url = '/search/recommand'
	return new Promise((resolve,reject) => {
		request(url,'GET').then(res => {
			resolve(res.data)
		})
	})
}
//求购
//求购详情
export function wantBuyDetail(data) {
	let url = '/qiu-gou/info'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res.data)
			// console.log('data',data)
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
//品牌分类
//获取品牌列表
export function brandList() {
	let url = '/brands/all'
	return new Promise((resolve,reject) => {
		request(url,'GET').then(res => {
			resolve(res.data)
		})
	})
}
//获取品牌二级列表
export function brandTwo(data) {
	let url = '/brands/select'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res.data)
		})
	})
}
//获取品牌详情
export function brandThree(data) {
	let url = '/brands/show'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res.data)
		})
	})
}
//商品列表
export function goodsList(data) {
	let url = '/goods/lists'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res.data)
		})
	})
}
//二手门店
export function twoHand(data) {
	let url = '/shop/near-by'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res.data)
		})
	})
}
// 热门分类三级分类
export function category() {
	let url = '/category/all'
	return new Promise((resolve,reject) => {
		request(url,'GET').then(res => {
			resolve(res.data)
		})
	})
}
// 商家商品详情
export function productDetail(data) {
	let url = '/goods/shop-goods-info'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res.data)
		})
	})
}