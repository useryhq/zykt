<template>
	<!-- 登录 -->
	<view class="page">
		<view class="img-block">
			<image class="img" src="../../../static/bg/logo.png" mode=""></image>
		</view>
		<button class="button color_1" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
			一键快捷登录
		</button>
		<view class="button color_2" @click="toTelLogin">
			手机验证码登录
		</view>
		<!-- <uni-popup ref="popup" type="message">
			<uni-popup-message type="success" message="成功消息" :duration="3000">{{prompt}}</uni-popup-message>
		</uni-popup> -->
	</view>
</template>

<script>
	import {
		getOpenID,getData,wechatLogin
	} from '../../../static/js/api.js'
	export default {
		data() {
			return {
				openId: '',
				tel: '',
				userId: '',
				// prompt: ''
			};
		},
		methods: {
			// getUserInfo() {
			// 	return new Promise((resolve, reject) => {
			// 		uni.getUserProfile({
			// 			lang: 'zh_CN',
			// 			desc: '用户登录',
			// 			success: (res) => {
			// 				resolve(res.userInfo)
			// 			},
			// 			fail: (err) => {
			// 				reject(err)
			// 			}
			// 		})
			// 	})
			// },
			//获取openID
			async loginGetOpenID(data) {
				let res = await getOpenID(data)
				this.openId = res.openid
				// if(this.openId) {
				// 	this.prompt = this.openId
				// 	this.$refs.popup.open('top')
				// }
				// console.log(res)
			},
			// 微信登录获取code
			login() {
				uni.login({
					success:(res) => {
						// console.log(res)
						let data = {
							code: res.code
						}
						this.loginGetOpenID(data)
						// console.log(data)
					},
					fail: (err) => {
						// console.log(err)
					}
				}) 	
			},
			//获取手机号
			getPhoneNumber(res) {
				// console.log(res)
				if(res.detail.errno) {
					uni.navigateTo({
						url: '/pageC/pages/login/telLogin'
					})
				} else {
					this.getDataTel(res.detail)
				}
				
			},
			//手机号解密
			async getDataTel(e) {
				let data = {
					iv:e.iv,
					encryptData:e.encryptedData
				}
				// console.log(data,'data')
				let res = await getData(data)
				// console.log(res,"手机号解密")
				// this.tel = res.data
				let json = JSON.parse(res.data)
				this.tel = json.phoneNumber
				// this.prompt = this.tel
				// this.$refs.popup.open('top')
				// console.log(res.data,"手机号")
				this.wLogin(json.phoneNumber)
			},
			//微信登录
			async wLogin(e) {
				let data = {
					open_id: this.openId,
					mobile: e
				}
				// console.log(data,"data")
				let res =  await wechatLogin(data)
				// this.prompt = res
				// this.$refs.popup.open('top')
				// console.log(res)
				this.userId = res.user_id
				uni.setStorage({
					key:'userId',
					data: res.user_id,
					success() {
						// console.log("123")
					}
				})
				uni.navigateTo({
					url: '/pages/index/index'
				})
			},
			//跳转手机号登录
			toTelLogin() {
				uni.navigateTo({
					url: '/pageC/pages/login/telLogin'
				})
			}
		},
		onLoad() {
			this.login()
		}
	}
</script>
<style>
	@import url("../../../static/css/common.css");
</style>
<style lang="less">
	.page {
		overflow: hidden;

		.img-block {
			margin: 100rpx 0 130rpx 0;
			text-align: center;

			.img {
				width: 170rpx;
				height: 170rpx;

			}
		}

		.button {
			width: 464rpx;
			height: 60rpx;
			margin: 0 auto 40rpx auto;
			border-radius: 30rpx;
			font-size: 30rpx;
			line-height: 60rpx;
			text-align: center;
		}

		.color_1 {
			background-color: #E63C31;
			color: #fff;
		}

		.color_2 {
			background-color: #EEEEEE;
			color: #333;
		}
	}
</style>