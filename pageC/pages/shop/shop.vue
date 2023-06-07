<template>
	<!-- 店铺主页 -->
	<view class="page">
		<view class="shop-message flex-row justify-between">
			<view class="img-text flex-row align-center">
				<image class="shop-img" src="../../../static/bg/7220921.png"></image>
				<text class="shop-text">ice空调旗舰店</text>
			</view>
			<view class="box_5 flex-row justify-center align-center">
			     <text class="iconfont label_7">&#xe64c;</text>
			    <text class="text-group_5">收藏店铺</text>
			</view>
		</view>
		<swiper class="swiper-block" :indicator-dots="true" :autoplay="true" indicator-active-color="#fa6a4a" :circular="true">
			<block v-for="(item,index) in images" :key="index">
				<swiper-item>
					<image mode="aspectFill" :src="item"></image>
				</swiper-item>
			</block>
		</swiper>
		<view class="group_8 flex-row justify-between">
			<view class="box_3 flex-col" v-for="(item,index) in ktlist2" :key="index"
				@click="toProductDetailH(item.price)">
				<image class="kt_img" :src="item.imgSrc"></image>
				<view class="text-wrapper_3 flex-row justify-between">
					<text class="paragraph_2">
						{{item.title}}
					</text>
				</view>
				<view class="text-wrapper_4 flex-row">
					<text class="text_10">￥{{item.price}}</text>
					<text class="text_11">{{item.address}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				images:{
					a:'../../../static/bg/200711.png',
					b:'../../../static/bg/0301162340.png'
				},
				ktlist2: [{
						imgSrc: "../../../static/bg/200711.png",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "10000.00",
						address: "郑州",
					},
					{
						imgSrc: "../../../static/bg/200711.png",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "询价",
						address: "郑州",
					},
					{
						imgSrc: "../../../static/bg/200711.png",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "10000.00",
						address: "郑州",
					},
					{
						imgSrc: "../../../static/bg/200711.png",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "10000.00",
						address: "郑州",
					},
					{
						imgSrc: "../../../static/bg/200711.png",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "10000.00",
						address: "郑州",
					},
					{
						imgSrc: "../../../static/bg/200711.png",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "10000.00",
						address: "郑州",
					}
				],
			};
		}
	}
</script>
<style>
	@import url("../../../static/css/common.css");
</style>
<style lang="less">
.page {
	padding-bottom: 26rpx;
	.shop-message {
		width: 690rpx;
		height: 70rpx;
		padding: 18rpx 30rpx;
		background-color: #fff;
		.img-text {
			height: 70rpx;
			.shop-img {
				width: 90rpx;
				height: 64rpx;
			}
			.shop-text {
				margin-left: 14rpx;
				font-size: 30rpx;
				color: #333;
			}
		}
		.box_5 {
		  background-color: rgba(255, 255, 255, 1);
		  border-radius: 24px;
		  width: 160rpx;
		  height: 48rpx;
		  border: 1px solid rgba(191, 191, 191, 1);
		    .label_7 {
		      width: 30rpx;
		      height: 30rpx;
		      font-size: 30rpx;
		      color: rgba(51, 51, 51, 1);
		    }
		    .text-group_5 {
		      width: 93rpx;
		      overflow-wrap: break-word;
		      color: rgba(51, 51, 51, 1);
		      font-size: 24rpx;
		      font-family: PingFang-SC-Regular;
		      font-weight: NaN;
		      text-align: center;
		      white-space: nowrap;
		      line-height: 24rpx;
		      margin-top: 1rpx;
		    }
		}
	}
	.swiper-block {
		height: 330rpx;
		
		image {
			width: 100%;
			height: 100%;
		}
	}
	.group_8 {
		width: 694rpx;
		flex-wrap: wrap;
		border-radius: 4px;
		background-color: #fff;
		margin: 26rpx;
		.kt_img {
			width: 320rpx;
			height: 320rpx;
		}
	
		.box_3 {
			background-color: rgba(255, 255, 255, 1);
			width: 320rpx;
			height: 460rpx;
			margin-top: 38rpx;
	
			.text-wrapper_3 {
				width: 300rpx;
				height: 60rpx;
				margin: 26rpx 0 0 9rpx;
	
				.paragraph_2 {
					width: 286rpx;
					height: 60rpx;
					color: rgba(51, 51, 51, 1);
					font-size: 24rpx;
					font-family: PingFang-SC-Regular;
					text-align: left;
					line-height: 30rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					-webkit-line-clamp: 2;
					word-break: break-all;
					display: -webkit-box;
					-webkit-box-orient: vertical;
				}
			}
	
			.text-wrapper_4 {
				width: 300rpx;
				height: 24rpx;
				margin: 21rpx 0 0 13rpx;
				justify-content: space-between;
	
				.text_10 {
					width: 139rpx;
					height: 30rpx;
					overflow-wrap: break-word;
					color: rgba(230, 60, 49, 1);
					font-size: 30rpx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					text-align: left;
					white-space: nowrap;
					line-height: 30rpx;
				}
	
				.text_11 {
					width: 42rpx;
					height: 21rpx;
					overflow-wrap: break-word;
					color: rgba(153, 153, 153, 1);
					font-size: 22rpx;
					font-family: PingFang-SC-Regular;
					font-weight: NaN;
					text-align: left;
					white-space: nowrap;
					line-height: 36rpx;
					margin-right: 20rpx;
				}
	
				.pk_text {
					width: 79rpx;
					height: 32rpx;
					font-size: 22rpx;
					color: #E63C31;
					line-height: 32rpx;
					text-align: center;
					border: 1rpx solid #E63C31;
					border-radius: 16rpx;
				}
	
				.choose_color {
					color: #666666;
					border: 1rpx solid #666666;
				}
	
				.agent_icon {
					font-size: 22rpx;
					color: #999999;
				}
	
			}
		}
	
	}
}
</style>
