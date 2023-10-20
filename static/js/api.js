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
//分类跳转商品列表
export function fGoodsList(data) {
	let url = '/goods/goods-lists-by-cate'
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
// 商家商品详情留言提交
export function sendMessage(data) {
	let url = '/user/send-messages'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res)
		})
	})
}
//获取小程序openID
export function getOpenID(data) {
	let url = '/common/get-openid'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res.data)
		})
	})
}
//小程序加密数据解密
export function getData(data) {
	let url = '/common/get-encrypted-info'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res.data)
		})
	})
}
//微信登录
export function wechatLogin(data) {
	let url = '/login/wechat-login'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res.data)
		})
	})
}
//获取手机登录验证码
export function telCode(data) {
	let url = '/common/send-message'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res)
		})
	})
}
//获取注册协议
export function registrationAgreement() {
	let url = '/common/protocal'
	return new Promise((resolve,reject) => {
		request(url,'GET').then(res => {
			resolve(res.data)
		})
	})
}
//手机号登录
export function telLogin(data) {
	let url = '/login/login'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res)
		})
	})
}
//个人中心信息
export function my(data) {
	let url = '/user/my'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res.data)
		})
	})
}
//个人发布求购
export function releaseWantBuy(data) {
	let url = '/user/qiugou-publish'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res)
		})
	})
}
//退货原因、快速、单位
export function other() {
	let url = '/common/other'
	return new Promise((resolve,reject) => {
		request(url,'GET').then(res => {
			resolve(res.data)
		})
	})
}
//商品对比数据
export function pk(data) {
	let url = '/goods/pk'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res.data)
		})
	})
}
//个人商品详情
export function productDetailH(data) {
	let url = '/goods/personal-goods-info'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res.data)
		})
	})
}
//点击收藏
export function collect(data) {
	let url = '/collect/add'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res)
		})
	})
}
//收藏店铺列表
export function collectShop(data) {
	let url = '/collect/shops'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res.data)
		})
	})
}
//收藏商品列表
export function collectGood(data) {
	let url = '/collect/goods'
	return new Promise((resolve,reject) => {
		request(url,'POST',data).then(res => {
			resolve(res.data)
		})
	})
}