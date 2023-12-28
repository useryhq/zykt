<template>
	<view class="page">
		<view class="group_1 flex-col justify-center align-center">
			<view class="block_1">
				<input class="block_tel" @blur="inTel" type="tel" placeholder="请输入手机号"
					placeholder-style="color:#999;font-size:24rpx">
			</view>
			<view class="block_1 mt_50 flex-row justify-between align-center">
				<input class="block-num" @blur="inCode" type="number" placeholder="请输入验证码"
					placeholder-style="color:#999;font-size:24rpx">
				<view v-if="flag" class="time-text">
					<text>{{time}}</text>S
				</view>
				<view v-else class="num-btn" @click="getCode">
					获取验证码
				</view>
			</view>
			<view class="login-btn" @click="submit">
				登录
			</view>
			<view class="registration-agreement flex-row align-center"> 
			<checkbox-group @change="checked">
				<label>
					<checkbox class="checked" value="check"/>
				</label>
			</checkbox-group> 我已阅读并同意同意<text class="text-color" @click="toWebview">《中央空调网用户注册协议》</text>
			</view>
		</view>
		<uni-popup ref="popup" type="message">
			<uni-popup-message type="warn" message="警告消息" :duration="3000">{{prompt}}</uni-popup-message>
		</uni-popup>
	</view>
</template>

<script>
	import {
		telCode,
		telLogin,
		registrationAgreement
	} from '../../../static/js/api.js'
	export default {
		data() {
			return {
				tel: '',
				code: '',
				prompt: '',
				reg: '',
				time: '60',
				flag: false,
				test: false,
				check: false
			};
		},
		methods: {
			//输入电话
			inTel(e) {
				let reg = /^1[3456789]\d{9}$/
				if (!reg.test(e.detail.value)) {
					this.prompt = '请输入正确的电话号码'
					this.$refs.popup.open('top')
				} else {
					this.tel = e.detail.value
					this.test = true
				}
				// console.log(this.tel)
			},
			//输入验证码
			inCode(e) {
				this.code = e.detail.value
			},
			//获取验证码
			async getCode() {
				if (this.tel) {
					let data = {
						mobile: this.tel
					}
					let res = await telCode(data)
					// console.log(res)
					if (res.code == 200) {
						this.flag = true
						const timer = setInterval(() => {
							if (this.time > 0) {
								this.time--
							} else {
								this.flag = false
								clearInterval(timer)
							}
						}, 1000)
					}
				} else {
					this.prompt = '请输入正确的电话号码'
					this.$refs.popup.open('top')
				}

			},
			// 选择同意隐私协议
			checked(e) {
				if(e.detail.value.length != 0) {
					this.check = true
				} else {
					this.check = false
				}	
			},
			async submit() {
				if (!this.test) {
					this.prompt = '请输入正确的电话号码'
					this.$refs.popup.open('top')
				} else if (!this.code) {
					this.prompt = '请输入验证码'
					this.$refs.popup.open('top')
				} else if(!this.check) {
					this.prompt = '请仔细阅读隐私协议并勾选同意框'
					this.$refs.popup.open('top')
				} else {
					let data = {
						mobile: this.tel,
						code: this.code
					}
					// console.log(data)
					let res = await telLogin(data)
					// console.log(res)
					if (res.code == 200) {
						uni.setStorage({
							key: 'userId',
							data: res.data.user_id,
							success() {
								// console.log("123")
							}
						})
						uni.navigateTo({
							url: '/pages/index/index'
						})
					} else if(res.code == 0) {
						this.prompt = res.msg
						this.$refs.popup.open('top')
					}
				}
			},
			//跳转注册协议页面
			toWebview() {
				uni.navigateTo({
					url: '/pageC/pages/regAgreement/regAgreement'
				})
			}
		},
		onLoad() {
			
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

				.time-text {
					font-size: 22rpx;
					color: #E63C31;
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
				.checked {
					 transform:scale(0.6);
				}
				.text-color {
					color: #2391FB;
				}
			}
		}
	}
</style>