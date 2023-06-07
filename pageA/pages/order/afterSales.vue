<template>
	<!-- 个人中心申请售后 -->
	<view class="page">
		<view class="section_1">
			<view class="block_2 flex-row justify-between align-center" >
			  <view class="image-text_1 flex-row align-center">
							<text class="iconfont icon_2">&#xe676;</text>
			    <text class="text-group_1">格力二手空调专卖</text>
			    <text class="iconfont icon_3">&#xe6a3;</text>
			  </view>
						<view class="image-text_3">
							共计1件
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
								<text class="text_8">￥4899</text>
							</view>
			    </view>
			</view>
		</view>
		<view class="section_2">
			<view class="box flex-row justify-around">
				<text class="iconfont icon1">&#xe6ac;</text>
				<view class="text_box flex-col justify-between">
					<text class="text_1">仅退款(无需退货)</text>
					<text class="text_2">未收到货，或与商家协商一致不用退货只退款</text>
				</view>
				<text class="iconfont icon2">&#xe6a3;</text>
			</view>
			<view class="box flex-row justify-around">
				<text class="iconfont icon1">&#xe62c;</text>
				<view class="text_box flex-col justify-between">
					<text class="text_1">退货退款</text>
					<text class="text_2">已收到货，需退还收到的货物</text>
				</view>
				<text class="iconfont icon2">&#xe6a3;</text>
			</view>
			<view class="box flex-row justify-around">
				<text class="iconfont icon1">&#xe63f;</text>
				<view class="text_box flex-col justify-between">
					<text class="text_1">换货</text>
					<text class="text_2">已收到货，需更换收到的货物</text>
				</view>
				<text class="iconfont icon2">&#xe6a3;</text>
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
	.section_1 {
	background-color: rgba(255, 255, 255, 1);
	border-radius: 10px;
	height: 210rpx;
	width: 690rpx;
	margin: 22rpx 0 0 32rpx;
	padding-top: 28rpx;
	.block_2 {
	  width: 650rpx;
	  height: 31rpx;
	  margin-left: 19rpx;
			border-bottom: 1rpx solid #EEEEEE;
			padding-bottom: 18rpx;
	  .image-text_1 {
	    width: 430rpx;
	    height: 29rpx;				
					.icon_2 {
					  font-size: 34rpx;
					  color: #666;
					}
	    .text-group_1 {
					  width: 250rpx;
	      height: 30rpx;
	      overflow-wrap: break-word;
	      color: rgba(51, 51, 51, 1);
	      font-size: 30rpx;
	      font-family: PingFang-SC-Regular;
	      font-weight: NaN;
	      text-align: left;
	      white-space: nowrap;
	      line-height: 30rpx;
					  text-overflow: ellipsis;
					  overflow: hidden;
					  margin-left: 10rpx;
	    }
	    .icon_3 {
	      font-size: 24rpx;
					  color: #333;
					  margin-left: 14rpx;
	    }
	  }
			.image-text_3 {
				font-size: 24rpx;
				color: #999;
			}
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
	.section_2 {
		background-color: rgba(255, 255, 255, 1);
		border-radius: 10px;
		width: 620rpx;
		margin: 22rpx 0 0 32rpx;
		padding: 18rpx 40rpx 60rpx 30rpx;
		.box {
			padding: 20rpx 0;
			border-bottom: 1rpx solid #A0A0A0;
			.icon1 {
				font-size: 40rpx;
				color: #E63C31;
			}
			.text_box {
				width: 460rpx;
				height: 80rpx;
				.text_1 {
					font-size: 30rpx;
					color: #333;
					font-weight: 700;
				}
				.text_2 {
					font-size: 22rpx;
					color: #999;
				}
			}
			.icon2 {
				margin-top: 10rpx;
				font-size: 40rpx;
				color: #000;
			}
		}
	}
}
</style>
