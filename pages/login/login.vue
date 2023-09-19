<template>
	<!-- 登录 -->
	<view class="page">
		<view class="img-block">
			<image class="img" src="../../static/bg/logo.png" mode=""></image>
		</view>
		<view class="button color_1" @click="login">
			微信一键登录
		</view>
		<view class="button color_2">
			手机验证码登录
		</view>
	</view>
</template>

<script>
	import {getOpenID} from '../../static/js/api.js'
	export default {
		data() {
			return {
			code: ''
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
			async loginGetOpenID(data) {
				let res = await getOpenID(data)
				console.log(res)
			},
			getLogin() {
				return new Promise((resolve, reject) => {
					uni.login({
						success(res) {
							resolve(res.code)
						},
						fail: (err) => {
							reject(err)
						}
					})
				})
			},

			login() {
				// let userInfo = this.getUserInfo();
				let wxCode = this.getLogin();


				wxCode.then((res) => {
					//都获取权限成功
					console.log(res)
					let data = {
						code:res
					}
					
					this.loginGetOpenID(data)
					console.log(data)
				}).catch(err => {
					console.log(err)
				})
			}
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