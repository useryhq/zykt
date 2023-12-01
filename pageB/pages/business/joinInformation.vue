<template>
	<view class="page">
		<view class="group_1">
			<view class="title-block flex-row align-center">
				<text class="title-num">01</text>
				<text class="title-text">公司负责人信息</text>
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">联系人：</text>
				<view class="input-block">{{shopInfo.fuzerenxingming}}</view>
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">手机号码：</text>
				<view class="input-block">{{shopInfo.fuzerenshoujihao}}</view>
			</view>
			<view class="box_1 flex-row justify-star align-center">
				<text class="text-block">身份证正面：</text>
				<image class="img" :src="shopInfo.shenfenzhengzhengmian" mode=""></image>
			</view>
			<view class="box_1 flex-row justify-star align-center">
				<text class="text-block">身份证反面：</text>
				<image class="img" :src="shopInfo.shenfenzhengfanmian" mode=""></image>
			</view>
		</view>
		<view class="group_1">
			<view class="title-block flex-row align-center">
				<text class="title-num">02</text>
				<text class="title-text">公司主体信息</text>
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">销售类型：</text>
				<view class="input-icon flex-row justify-between">
					<view class="input_1">{{shopInfo.sales_type}}</view>
				</view>
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">公司名称/授权公司：</text>
				<view class="input-block input-icon_1">{{shopInfo.company_name}}</view>
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">入驻类目：</text>
				<view class="input-icon flex-row justify-between">
					<view class="input_1">{{shopInfo.cate_name}}</view>
				</view>
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">入驻品牌：</text>
				<view class="input-icon flex-row justify-between">
					<view class="input_1">{{shopInfo.brands}}</view>
				</view>
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">执照注册号：</text>
				<text class="input-block">{{shopInfo.yingyezhizhaohao}}</text>
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">营业执照电子版：</text>
				<view class="file-block file-block_1">
					<image class="img" :src="shopInfo.yingyezhizhao" mode=""></image>
				</view>
			</view>
		</view>
		<view class="group_1">
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">所在地：</text>
				<view class="input-icon flex-row justify-between">
					<view class="input_1">
						{{shopInfo.province}}{{shopInfo.city}}{{shopInfo.area}}
					</view>
				</view>
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">详细地址：</text>
				<view class="input-block">{{shopInfo.address}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {sellerInfo} from '../../../static/js/api.js'
	export default {
		data() {
			return {
				shopInfo: '',
				sellerid: '',
			};
		},
		methods: {
			async pSellerInfo(data) {
				let res = await sellerInfo(data)
					this.shopInfo = res
					if(this.shopInfo.shenfenzhengzhengmian.substring(0,6) == 'upload') {
						this.shopInfo.shenfenzhengzhengmian = 'https://img.zykt.com/' + this.shopInfo.shenfenzhengzhengmian
					} else {
						this.shopInfo.shenfenzhengzhengmian = 'https://qn.zykt.com/' + this.shopInfo.shenfenzhengzhengmian
					}
					if(this.shopInfo.shenfenzhengfanmian.substring(0,6) == 'upload') {
						this.shopInfo.shenfenzhengfanmian = 'https://img.zykt.com/' + this.shopInfo.shenfenzhengfanmian
					} else {
						this.shopInfo.shenfenzhengfanmian = 'https://qn.zykt.com/' + this.shopInfo.shenfenzhengfanmian
					}
					if(this.shopInfo.yingyezhizhao.substring(0,6) == 'upload') {
						this.shopInfo.yingyezhizhao = 'https://img.zykt.com/' + this.shopInfo.yingyezhizhao
					} else {
						this.shopInfo.yingyezhizhao = 'https://qn.zykt.com/' + this.shopInfo.yingyezhizhao
					}
				// console.log(res)
				// this.shopStatus = res.status
			},
		},
		onLoad(option) {
			uni.getStorage({
				key: 'userId',
				success: (res) => {
					this.sellerid = option.sellerid
					let data = {
						seller_id: option.sellerid,
						user_id: res.data
					}
					this.pSellerInfo(data)
				}
			})
		}
	}
</script>

<style>
	@import '../../../static/css/common.css';
</style>
<style lang="less">
	.page {
		position: relative;
		overflow: hidden;

		.group_1 {
			width: 650rpx;
			margin: 30rpx;
			padding: 30rpx 20rpx;
			background-color: #fff;

			.title-num {
				width: 32rpx;
				height: 32rpx;
				background-color: #E63C31;
				border-radius: 50%;
				font-size: 18rpx;
				color: #fff;
				line-height: 32rpx;
				text-align: center;
			}

			.title-text {
				margin-left: 10rpx;
				font-size: 30rpx;
				color: #333;
			}

			.box_1 {
				width: 650;
				margin-top: 30rpx;
				position: relative;
				
				.text-block {
					font-size: 24rpx;
					color: #333;
				}

				.input-block {
					width: 490rpx;
					font-size: 24rpx;
					color: #999;
					border-bottom: 1rpx solid #DCDCDC;
				}
				.file-block {
					width: 490rpx;
					padding-bottom: 20rpx;
					border-bottom: 1rpx solid #DCDCDC;
				}
				.file-block_1 {
					width: 450rpx;
				}
				.img {
					width: 200rpx;
					height: 200rpx;
				}
				.input-icon {
					width: 490rpx;
					border-bottom: 1rpx solid #DCDCDC;
					.input_1 {
						width: 400rpx;
						font-size: 24rpx;
						color: #999;
					}
					.icon_1 {
						font-size: 30rpx;
						color: #222;
					}
				}
				.input-icon_1 {
					width: 420rpx;
				}
				.button_1 {
					width: 180rpx;
					height: 40rpx;
					background-color: #E63C31;
					border-radius: 20rpx;
					font-size: 24rpx;
					color: #fff;
					line-height: 40rpx;
					text-align: center;
				}
				.mode {
					font-size: 24rpx;
					color: #fff;
					line-height: 48rpx;
					text-align: center;
				}
			}
		}
	}
</style>
