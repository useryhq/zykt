<template>
	<!-- 商家中心订单详情 -->
	<view class="page">
		<view class="section_1">
			<view class="box_1 flex-row justify-center align-center">
				<text class="icon_1 iconfont">&#xe680;</text>
				<text class="text_1">等待买家付款</text>
			</view>
		</view>
		<view class="section_2 ">
			<view class="block-text">买家信息</view>
			<view class="block_3 flex-row align-center">
				<text class="icon_2 iconfont">&#xe678;</text>
				<view class="box_2 ml_12 flex-col">
					<text class="text_3">赵云  136****1482</text>
					<text class="text_4">河南省郑州市中原区某某小区几号楼</text>
				</view>
				<text class="text_5 mt_40">修改</text>
			</view>
			
		</view>
		<view class="section_3">
			<view class="block_2">
				商品信息
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
						<text class="text_8">￥4899</text>
					</view>
				</view>
			</view>
		</view>
		<view class="section_4">
			<view class="block_1">
				<text class="text_6">订单编号：</text>
				<text class="text_7">261298108396</text>
				<text class="btn_1 ml_30">复制</text>
			</view>
			<view class="block_1">
				<text class="text_6">下单时间：</text>
				<text class="text_7">2023-02-21 21:20:30</text>
			</view>
			<view class="block_1">
				<text class="text_6">支付方式：</text>
				<text class="text_7">在线支付</text>
			</view>
			<view class="block_1">
				<text class="text_6">配送方式：</text>
				<text class="text_7">快递配送</text>
			</view>
			<view class="block_1 mt_50">
				<text class="text_6">商品总额：</text>
				<text class="text_8 f-r">￥4899</text>
			</view>
			<view class="block_1">
				<text class="text_6">运费：</text>
				<text class="text_8 f-r">+￥8</text>
			</view>
			<view class="block_1 justify-end">
				<text class="text_9">应付金额：</text>
				<text class="text_8">￥4917</text>
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
	padding-bottom: 1rpx;
	position: relative;
	.section_1 {
		width: 750rpx;
		height: 240rpx;
		background-color: #E63C31;
		overflow: hidden;
		.box_1 {
			margin-top: 40rpx;
			color: #fff;
			.icon_1 {
				font-size: 42rpx;
			}
			.text_1 {
				margin-left: 10rpx;
				font-size: 36rpx;
				font-weight: 500;
			}
		}
		.text_2 {
			margin: 30rpx 120rpx;
			font-size: 24rpx;
			color: #fff;
		}
	}
	.section_2 {
		background-color: rgba(255, 255, 255, 1);
		border-radius: 10px;
		width: 630rpx;
		margin: 0 30rpx;
		padding: 20rpx 30rpx;
		position: absolute;
		top: 120rpx;
		.block-text {
			margin-bottom: 36rpx;
			font-size: 30rpx;
			color: #333;
			font-weight: 500;
		}
		.block_3 {
			height: 70rpx;
			.icon_2 {
				font-size: 36rpx;
				color: #999;
			}
			.text_3 {
				font-size: 28rpx;
				color: #333;
			}
			.text_4 {
				font-size: 24rpx;
				color: #999;
			}
		}
		.text_5 {
			margin-left: 150rpx;
			font-size: 24rpx;
			color: #999;
		}
	}
	.section_3 {
		background-color: rgba(255, 255, 255, 1);
		border-radius: 10px;
		height: 210rpx;
		width: 690rpx;
		margin: 90rpx 0 0 32rpx;
		padding-top: 28rpx;
	
		.block_2 {
			width: 650rpx;
			height: 31rpx;
			margin-left: 19rpx;
			border-bottom: 1rpx solid #EEEEEE;
			padding-bottom: 18rpx;
			font-size: 30rpx;
			color: #333;
			font-weight: 500;
	
			.image-text_4 {
				width: 120rpx;
				font-size: 24rpx;
				color: #999;
	
				.delet {
					width: 40rpx;
					height: 40rpx;
					font-size: 28rpx;
					line-height: 40rpx;
					text-align: center;
				}
			}
		}
	
		.image-text_2 {
			width: 640rpx;
			height: 130rpx;
			margin: 30rpx 0 0 17rpx;
	
			// padding-bottom: 20rpx;
			// border-bottom: 1rpx solid #EEEEEE;
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
					font-weight: 700;
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
		margin: 20rpx 30rpx 0 30rpx;
		padding: 20rpx 30rpx;
		.block_1 {
			margin-bottom: 30rpx;
			font-size: 24rpx;
			.text_6 {
				color: #999;
			}
			.text_7 {
				color: #333;
			}
			.btn_1 {
				padding: 6rpx 20rpx;
				border-radius: 16rpx;
				background-color: #F6F6F6;
				font-size: 20rpx;
				color: #333;
			}
			.text_8 {
				color: #E63C31;
			}
		}
		
	}
}
</style>
