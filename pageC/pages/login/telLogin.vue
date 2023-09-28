<template>
	<view class="page">
		<view class="group_1 flex-col justify-center align-center">
			<view class="block_1">
				<input class="block_tel" @blur="inTel" type="tel" placeholder="请输入手机号" placeholder-style="color:#999;font-size:24rpx">
			</view>
			<view class="block_1 mt_50 flex-row justify-between align-center">
				<input class="block-num" type="number" placeholder="请输入验证码" placeholder-style="color:#999;font-size:24rpx">
				<view class="num-btn">
					获取验证码
				</view>
			</view>
			<view class="login-btn">
				登录 
			</view>
			<view class="registration-agreement">登录即视为同意<text class="text-color" @click="toWebview">《中央空调网用户注册协议》</text></view>
		</view>
		<uni-popup ref="popup" type="message">
			<uni-popup-message type="warn" message="警告消息" :duration="3000">{{prompt}}</uni-popup-message>
		</uni-popup>
	</view>
</template>

<script>
	import {telLogin,registrationAgreement} from '../../../static/js/api.js'
	export default {
		data() {
			return {
				tel: '',
				prompt: ''
			};
		},
		methods: {
			//输入电话
			inTel(e) {
				let reg = /^1[3456789]\d{9}$/
				if(!reg.test(e.detail.value)) {
							  this.prompt = '请输入正确的电话号码'
							  this.$refs.popup.open('top')
				} else {
					this.tel = e.detail.value
				}
				// console.log(this.tel)
			},
			//获取验证码
			async getCode() {
				let data = {
					mobile: this.tel
				}
				let res = telLogin(data)
				console.log(res)
			},
			//获取注册协议
			async getRegistrationAgreement() {
				let res = registrationAgreement()
				console.log(res)
			},
			toWebview() {
				uni.navigateTo({
					url: '/pageC/pages/webview/webview?src='
				})
			}
		}
	}
</script>
<style>
	@import url("../../../static/css/common.css");
</style>
<style lang="less">
.page {
	overflow: hidden;
	.group_1 {
		width: 580rpx;
		height: 570rpx;
		background-color: #fff;
		border-radius: 20rpx;
		margin: auto;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		.block_1 {
			width: 480rpx;
			border-bottom: 1rpx solid #BFBFBF;
			font-size: 24rpx;
			color: #333;
			.block-num {
				width: 200rpx;
			}
			.num-btn {
				width: 116rpx;
				height: 36rpx;
				border: 1rpx solid #BFBFBF;
				border-radius: 18rpx;
				font-size: 18rpx;
				color: #999;
				line-height: 36rpx;
				text-align: center;
			}
		}
		.login-btn {
			width: 464rpx;
			height: 60rpx;
			margin-top: 120rpx;
			background-color: #E63C31;
			border-radius: 30rpx;
			font-size: 30rpx;
			color: #fff;
			line-height: 60rpx;
			text-align: center;
		}
		.registration-agreement {
			margin-top: 30rpx;
			font-size: 22rpx;
			color: #999;
			.text-color {
				color: #2391FB;
			}
		}
	}
}
</style>
