<template>
	<!-- 商家中心售后详情 -->
	<view class="page">
		<view class="section_3 flex-col">
			<view class="block_2 flex-row justify-between align-center">
				<view class="image-text_1 flex-row align-center">
					<text class="text-group_1">订单号：2023042689563</text>
				</view>
				<view class="image-text_3">
					申请时间:2023-04-01
				</view>
			</view>
			<view class="image-text_2 flex-row">
				<view class="group_5">
					<image src="../../../static/bg/0301162340.png" mode="aspectFit"></image>
				</view>
				<view class="text-group_2 flex-col">
					<view class="text-group_3 flex-row justify-between">
						<text class="paragraph_1">
							科龙（KELON）2/3/5匹天花机商用家用中央空调科龙（KELON）2/3/5匹天花机商用家用中央空调
						</text>
						<text class="num_text">
							×1
						</text>
					</view>

					<view class="flex-row justify-start">
						<text class="text_8">实付：4899元</text>
					</view>
				</view>
			</view>
		</view>
		<view class="section_4">
			<view class="block_3 justify-between">
				<text class="text_1">货物状态</text>
				<text class="text_1">未发货</text>
			</view>
			<view class="block_3 justify-between">
				<text class="text_1">退款原因</text>
				<text class="text_1">其他</text>
			</view>
		</view>
		<view class="section_4">
			<view class="block_3 justify-between">
				<text class="text_1">申请退款金额</text>
				<view class="flex-col align-end">
					<text class="text_1">未发货</text>
					<text class="text_2">不可修改，商品金额￥4899</text>
				</view>
			</view>
		</view>
		<view class="section_4">
			<view class="block_3">
				<text class="text_1">上传凭证</text>
				<text class="text_2">（选填）</text>
			</view>
			<view>
				<image class="img_1" src="../../../static/bg/200711.png"></image>
				<image class="img_1" src="../../../static/bg/200711.png"></image>
			</view>

		</view>
		<view class="section_4">
			<view class="block_3">
				<text class="text_1">补充描述</text>
				<text class="text_2">（选填）</text>
			</view>
			<textarea class="text_3" name="" id="" cols="30" rows="5"></textarea>
		</view>
		<view class="button" @click="submit(0)">
			立即处理
		</view>
		<view class="button" @click="submit(1)">
			同意
		</view>
		<view v-if="model" class="model-block">
			<view class="mask"></view>
			<view class="mode">
				<view class="pk_title">
					<text>仓库退货地址</text>
				</view>
				<view class="model-text">
					<view class="text_1">
						<text>王婷婷</text>
						<text class="ml_30">155123330123</text>
					</view>
					<view class="text_2">
						河南省郑州市金水区南阳路农业路227号叠翠园1号楼2单元
						3楼东户
					</view>
					<view class="mt_50 flex-row justify-center">
						<view class="button_2">
							修改地址
						</view>
						<view class="button_1" @click="submit(2)">
							提交退货地址
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				model: false
			};
		},
		methods: {
			submit(e) {
				if(e == 0) {
					
				} else if(e == 1) {
					this.model = true
				} else {
					this.model = false
				}
			}
		}
	}
</script>
<style>
	@import '../../../static/css/common.css';
</style>
<style lang="less">
	.page {
		overflow: hidden;

		.section_3 {
			background-color: rgba(255, 255, 255, 1);
			border-radius: 10px;
			height: 260rpx;
			width: 690rpx;
			margin: 22rpx 0 0 32rpx;

			.block_2 {
				width: 650rpx;
				height: 31rpx;
				margin: 28rpx 0 0 19rpx;
				border-bottom: 1rpx solid #EEEEEE;
				padding-bottom: 18rpx;

				.image-text_1 {
					width: 430rpx;
					height: 29rpx;

					.text-group_1 {
						width: 280rpx;
						height: 30rpx;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 24rpx;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						white-space: nowrap;
						line-height: 30rpx;
						text-overflow: ellipsis;
						overflow: hidden;
						margin-left: 10rpx;
					}
				}

				.image-text_3 {
					font-size: 20rpx;
					color: #999;
				}
			}

			.image-text_2 {
				width: 660rpx;
				height: 110rpx;
				margin: 30rpx 0 0 17rpx;
				padding-bottom: 20rpx;
				border-bottom: 1rpx solid #EEEEEE;

				.group_5 {
					width: 110rpx;
					height: 110rpx;

					image {
						width: 110rpx;
						height: 110rpx;
					}
				}

				.text-group_2 {
					width: 500rpx;
					height: 120rpx;
					margin: 6rpx 0 0 14rpx;

					.paragraph_1 {
						width: 382rpx;
						height: 56rpx;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 24rpx;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						line-height: 28rpx;
						// text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}

					.text_8 {
						overflow-wrap: break-word;
						color: #E63C31;
						font-size: 24rpx;
						font-family: PingFang-SC-Bold;
						font-weight: 600;
						text-align: left;
						white-space: nowrap;
						line-height: 24rpx;
						margin-top: 10rpx;
					}

					.num_text {
						font-size: 24rpx;
						color: #333;
					}
				}
			}
		}

		.section_4 {
			background-color: rgba(255, 255, 255, 1);
			border-radius: 10px;
			width: 630rpx;
			margin: 22rpx 0 0 32rpx;
			padding: 22rpx 30rpx;

			.block_3 {
				margin-bottom: 18rpx;

				.text_1 {
					font-size: 24rpx;
					color: #333;
				}

				.text_2 {
					font-size: 18rpx;
					color: #999;
				}
			}

			.img_1 {
				width: 144rpx;
				height: 100rpx;
				margin-right: 50rpx;
			}

			.text_3 {
				width: 628rpx;
				height: 120rpx;
				border: 1rpx solid #EEEEEE;
				font-size: 24rpx;
				color: #333;
			}
		}

		.button {
			width: 464rpx;
			height: 60rpx;
			background-color: #E63C31;
			border-radius: 30rpx;
			margin: 100rpx auto 30rpx auto;
			font-size: 24rpx;
			color: #fff;
			text-align: center;
			line-height: 60rpx;
		}

		.model-block {
			width: 100%;
			height: 100%;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;

			.mask {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				background-color: rgba(0, 0, 0, 0.6);
			}

			.mode {
				width: 600rpx;
				height: 350rpx;
				background-color: #fff;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				border-radius: 10rpx;
				margin: auto;

				.pk_title {
					width: 100%;
					height: 60rpx;
					background-color: #E63C31;
					color: #fff;
					font-size: 30rpx;
					font-weight: 500;
					line-height: 60rpx;
					text-align: center;
				}

				.model-text {
					margin: 36rpx;

					.text_1 {
						font-size: 30rpx;
						color: #222;
					}

					.text_2 {
						margin-top: 26rpx;
						font-size: 24rpx;
						color: #222;
					}

					.button_1 {
						width: 160rpx;
						height: 40rpx;
						margin-left: 16rpx;
						font-size: 22rpx;
						color: #fff;
						line-height: 40rpx;
						text-align: center;
						background-color: #E63C31;
						border-radius: 20rpx;
					}

					.button_2 {
						width: 124rpx;
						height: 40rpx;
						margin-right: 16rpx;
						font-size: 22rpx;
						color: #999;
						line-height: 40rpx;
						text-align: center;
						border-radius: 20rpx;
						border: 1rpx solid #BFBFBF;
					}
				}
			}
		}
	}
</style>