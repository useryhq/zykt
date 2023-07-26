<template>
	<!-- 个人中心退款详情 -->
	<view class="page">
		<view class="section_1 flex-row justify-between align-center">
			<view class="flex-col">
				<text class="text_1">请等待商家处理</text>
				<text v-if="false" class="text_1">请退货并填写物流信息</text>
				<text class="text_2"><text class="icon_1 iconfont">&#xe680;</text>还剩2天23小时</text>
			</view>
			<text class="icon_2 iconfont">&#xe63f;</text>
		</view>
		<view class="section_1">
			<view class="text_3">
				您已成功发起退款申请，请耐心等待商家处理
			</view>
			<view class="block_1 flex-row">
				<view class="drop"></view>
				<text class="text_4">商家同意，商品金额会原路退回。</text>
			</view>
			<view class="block_1 flex-row">
				<view class="drop"></view>
				<text class="text_4">如商家拒绝，您可以修改申请后再次发起，商家将会重新处理。</text>
			</view>
			<view class="block_1 flex-row">
				<view class="drop"></view>
				<text class="text_4">如商家超时未处理，退款申请达成，商品金额会原路退回。</text>
			</view>
		</view>
		<view v-if="false" class="section_1">
			<view class="text_3">
				商家已同意退货申请，请尽早发货
			</view>
			<view class="block_2 flex-row justify-between">
				<text class="icon_3 iconfont">&#xe651;</text>
				<view class="block_4">
					<text class="text_6">收货人:空调王品牌旗舰店 0563-6988538</text>
					<text class="text_6">安徽省宣城市广德县经济开发区建设北路空调王品牌有限公司</text>
				</view>
			</view>
		</view>
		<view v-if="false" class="flex-row justify-end align-center">
			<view class="button_2">
				撤销申请
			</view>
			<view class="button_1">
				填写物流单号
			</view>
		</view>
		<view class="button_1 f-r">
			撤销申请
		</view>
		<view class="text_5">
			退款信息
		</view>
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
						<text class="text_8">￥4899元</text>
					</view>
				</view>
			</view>
		</view>
		<view class="section_4">
			<view class="block_3 justify-between">
				<text class="text_1">退款原因</text>
				<text class="text_1">质量有问题</text>
			</view>
		</view>
		<view class="section_4">
			<view class="block_3 justify-between">
				<text class="text_1">申请退款金额</text>
				<view class="flex-col align-end">
					<text class="text_1">￥4899</text>
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
		<view class="justify-end">
			<view class="button_2">
				提醒商家
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>
<style>
	@import '../../../static/css/common.css';
</style>
<style lang="less">
.page {
	padding: 1rpx 0;
	.section_1 {
		background-color: rgba(255, 255, 255, 1);
		border-radius: 10px;
		width: 630rpx;
		margin: 20rpx 30rpx;
		padding: 20rpx 30rpx;
		.text_1 {
			font-size: 36rpx;
			color: #E63C31;
		}
		.text_2 {
			margin-top: 20rpx;
			font-size: 24rpx;
			color: #333;
			.icon_1 {
				font-size: 26rpx;
			}
		}
		.icon_2 {
			font-size: 90rpx;
			color: #E63C31;
		}
		.text_3 {
			font-size: 30rpx;
			color: #333;
		}
		.block_1 {
			margin: 20rpx 0;
			.drop {
				width: 10rpx;
				height: 10rpx;
				margin: 10rpx 10rpx 0 0;
				background-color: #E63C31;
				border-radius: 50%;
			}
			.text_4 {
				font-size: 24rpx;
				color: #333;
				line-height: 30rpx;
			}
		}
		.block_2 {
			margin-top: 30rpx;
			.icon_3 {
				font-size: 70rpx;
			}
			.block_4 {
				width: 500rpx;
				.text_6 {
					font-size: 24rpx;
					color: #333;
				}
			}
		}
	}
	.button_1 {
		width: 200rpx;
		height: 54rpx;
		margin-right: 30rpx;
		background-color: #E63C31;
		border-radius: 26rpx;
		font-size: 30rpx;
		color: #fff;
		line-height: 54rpx;
		text-align: center;
	}
	.text_5 {
		margin: 120rpx 0 0 30rpx;
		font-size: 36rpx;
		color: #333;
	}
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
	.button_2 {
		width: 188rpx;
		height: 54rpx;
		margin: 30rpx;
		background-color: #fff;
		border-radius: 26rpx;
		border: 1rpx solid #A0A0A0;
		font-size: 30rpx;
		color: #333;
		line-height: 54rpx;
		text-align: center;
	}
}
</style>
