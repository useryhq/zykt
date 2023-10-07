<template>
	<view class="page">
		<view class="title">
			{{title}}
		</view>
		<view class="text">
			<rich-text :nodes="node"></rich-text>
		</view>
	</view>
</template>

<script>
	import {registrationAgreement} from '../../../static/js/api.js'
	export default {
		data() {
			return {
				node:'',
				title: ''
			};
		},
		methods: {
			//获取注册协议
			async getRegistrationAgreement() {
				let res = await registrationAgreement()
				this.node= res.content
				this.title = res.title
			},
		},
		onLoad() {
			this.getRegistrationAgreement()
		}
	}
</script>

<style lang="less">
.page {
	.title {
		width: 750rpx;
		height: 60rpx;
		font-size: 40rpx;
		color: #000;
		font-weight: 500;
		line-height: 80rpx;
		text-align: center;
	}
	.text {
		padding: 20rpx;
	}
}
</style>