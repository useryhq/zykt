<template>
	<!-- 个人中心售后订单列表 -->
	<view class="page">
		<view class="box_1">
			<view class="section_1 flex-row">
			  <view class="group_3">     
					  <text class="search_icon iconfont">&#xe65c;</text>
			      <input class="text-group_1" type="text" placeholder-style="font-size:22rpx;color:#999999" focus placeholder="搜索想要的空调产品" />
			  </view>
			  <text class="text_2">搜索</text>
			</view>
		</view>
		<view class="box_nav flex-row justify-between">
			<text class="nav nav_1" :class="{'nav_active' : nav == 0}" @click="chooseNav(0)">全部</text>
			<text class="nav" :class="{'nav_active' : nav == 1}" @click="chooseNav(1)">仅退款</text>
			<text class="nav nav_2" :class="{'nav_active' : nav == 2}" @click="chooseNav(2)">退货退款</text>
			<text class="nav nav_1" :class="{'nav_active' : nav == 3}" @click="chooseNav(3)">换货</text>
			<text class="nav" :class="{'nav_active' : nav == 4}" @click="chooseNav(4)">已完成</text>
		</view>
		<view v-if="nav == 0" class="section_3 flex-col" v-for="(items,index) in 6" :key="index">
		  <view class="block_2 flex-row justify-between align-center" >
		    <view class="image-text_1">
				<text>订单号：2023042689563</text>
		    </view>
			<view class="image-text_3" v-if="index == 0 || index == 1">
				仅退款
			</view>
			<view class="image-text_3" v-if="index == 2">
				退货退款
			</view>
			<view class="image-text_3" v-if="index == 3">
				换货
			</view>
			<view class="image-text_4" v-if="index === 4 || index == 5">
				<text>已完成</text>
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
		        
				<view class="flex-row justify-end">
					<text class="text_8">实付：4899元</text>
				</view>
		      </view>
		  </view>
		  <view class="block_3 align-center justify-end">
				<view class="button_2">
					查看详情
				</view>
		  </view>
		</view>
		<view v-if="nav == 1" class="section_3 flex-col" v-for="(items,index) in 6" :key="index">
		  <view class="block_2 flex-row justify-between align-center" >
		    <view class="image-text_1">
				<text>订单号：2023042689563</text>
		    </view>
			<view class="image-text_3">
				仅退款
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
		        
				<view class="flex-row justify-end">
					<text class="text_8">实付：4899元</text>
				</view>
		      </view>
		  </view>
		  <view class="block_3 align-center justify-end">
				<view class="button_2" @click="toReturnManey">
					查看详情
				</view>
		  </view>
		</view>
		<view v-if="nav == 2" class="section_3 flex-col" v-for="(items,index) in 6" :key="index">
		  <view class="block_2 flex-row justify-between align-center" >
		    <view class="image-text_1">
				<text>订单号：2023042689563</text>
		    </view>
			<view class="image-text_3">
				退货退款
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
		        
				<view class="flex-row justify-end">
					<text class="text_8">实付：4899元</text>
				</view>
		      </view>
		  </view>
		  <view class="block_3 align-center justify-end">
				<view class="button_2" @click="toReturnGoodsManey">
					查看详情
				</view>
		  </view>
		</view>
		<view v-if="nav == 3" class="section_3 flex-col" v-for="(items,index) in 6" :key="index">
		  <view class="block_2 flex-row justify-between align-center" >
		    <view class="image-text_1">
				<text>订单号：2023042689563</text>
		    </view>
			<view class="image-text_3">
				换货
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
		        
				<view class="flex-row justify-end">
					<text class="text_8">实付：4899元</text>
				</view>
		      </view>
		  </view>
		  <view class="block_3 align-center justify-end">
				<view class="button_2" @click="toChangeGoods">
					查看详情
				</view>
		  </view>
		</view>
		<view v-if="nav == 4" class="section_3 flex-col" v-for="(items,index) in 6" :key="index">
		  <view class="block_2 flex-row justify-between align-center" >
		    <view class="image-text_1">
				<text>订单号：2023042689563</text>
		    </view>
			<view class="image-text_4">
				<text>已完成</text>
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
		        
				<view class="flex-row justify-end">
					<text class="text_8">实付：4899元</text>
				</view>
		      </view>
		  </view>
		  <view class="block_3 align-center justify-end">
				<view class="button_2">
					查看详情
				</view>
		  </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nav: 0,
			};
		},
		methods: {
			//切换Nav导航条
			chooseNav(e) {
				this.nav = e
			},
			// 跳转退款详情
			toReturnManey() {
				uni.navigateTo({
					url: '/pageA/pages/order/returnManeyDetail'
				})
			},
			//跳转退货退款
			toReturnGoodsManey() {
				uni.navigateTo({
					url: '/pageA/pages/order/returnGoodsManeyDetail'
				})
			},
			//跳转换货详情
			toChangeGoods() {
				uni.navigateTo({
					url: '/pageA/pages/order/changeGoodsDetail'
				})
			}
		}
	}
</script>
<style>
	@import '../../../static/css/common.css';
</style>
<style lang="less">
.page {
	.box_1 {
		width: 720rpx;
		background-color: #fff;
		padding: 25rpx 0 20rpx 30rpx;
		.section_1 {
		  .group_3 {
		    width: 627rpx;
		    height: 56rpx; 
			position: relative;
			.search_icon {
				 font-size: 28rpx;
				 position: absolute;
				 top: 16rpx;
				 left: 19rpx;
				 color: #818181;
				 }
		      .text-group_1 {
		        width: 565rpx;
		        height: 56rpx;
				padding-left: 62rpx;
		        color: #333333;
		        font-size: 26rpx;
		        font-family: PingFang-SC-Regular;
		        text-align: left;
		        white-space: nowrap;
		        line-height: 56rpx;
		        margin-top: 3rpx;
				border: 1px solid rgba(191, 191, 191, 1);
				border-radius: 28px;
		      }
		  }
		  .text_2 {
		    color: rgba(227, 56, 48, 1);
		    font-size: 30rpx;
		    font-family: PingFang-SC-Regular;
		    text-align: left;
		    line-height: 30rpx;
		    margin: 18rpx 0 0 10rpx;
		  }
		}
	}
	.box_nav {
		width: 670rpx;
		height: 50rpx;
		padding: 0 40rpx;
		background-color: #fff;
		.nav {
			width: 90rpx;
			font-size: 24rpx;
			color: #333333;
			text-align: center;
		}
		.nav_1 {
			width: 60rpx;
		}
		.nav_2 {
			width: 110rpx;
		}
		.nav_active {
			color: #E63C31;
			// padding-bottom: 18rpx;
			border-bottom: 4rpx solid #E63C31;
		}
	}
	.section_3 {
	  background-color: rgba(255, 255, 255, 1);
	  border-radius: 10px;
	  height: 340rpx;
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
		  font-size: 24rpx;
		  color: #333;
	    }
		.image-text_3 {
			font-size: 24rpx;
			color: #E63C31;
		}
		.image-text_4 {
			font-size: 24rpx;
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
				    color: #333;
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
	  .block_3 {
		  height: 80rpx;
		  .time {
			  font-size: 22rpx;
			  color: #333;
			  .icon_4 {
				  font-size: 28rpx;
				  margin-right: 12rpx;
			  }
		  }
		  .button_1 {
			  width: 124rpx;
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
</style>
