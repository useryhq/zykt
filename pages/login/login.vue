<template>
	<!-- 登录 -->
	<view class="page">
		<view class="img-block">
			<image class="img" src="../../static/bg/logo.png" mode=""></image>
		</view>
		<button class="button color_1" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
			微信一键登录
		</button>
		<view class="button color_2">
			手机验证码登录
		</view>
	</view>
</template>

<script>
	import {
		getOpenID
	} from '../../static/js/api.js'
	export default {
		data() {
			return {
				openId: ''
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
				console.log(res)
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
						console.log(data)
					},
					fail: (err) => {
						console.log(err)
					}
				}) 	
			},
			getPhoneNumber(res) {
				console.log(res)
			}
		},
		onLoad() {
			this.login()
		}
	}
</script>

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