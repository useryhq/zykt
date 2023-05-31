<template>
	<!-- 商家中心商品管理 -->
	<view class="page">
		<view class="nav_box flex-row justify-around">
			<view class="nav_text" :class="{'nav_text-avtive' : nav == 0}" @click="changeNav(0)">
				出售中
			</view>
			<view class="nav_text" :class="{'nav_text-avtive' : nav == 1}" @click="changeNav(1)">
				待审核
			</view>
			<view class="nav_text" :class="{'nav_text-avtive' : nav == 2}" @click="changeNav(2)">
				未通过
			</view>
			<view class="nav_text" :class="{'nav_text-avtive' : nav == 3}" @click="changeNav(3)">
				已下架
			</view>
		</view>
		<view v-if="nav == 0" class="section_3 flex-col" v-for="(items,index) in 6" :key="index">
		    <view class="image-text_2 flex-row">
		      <view class="group_5">
				  <image src="../../static/bg/0301162340.png" mode="aspectFit"></image>
			  </view>
		      <view class="text-group_2 flex-col">
				  <view class="text-group_3 flex-row">
				  	<text class="paragraph_1">
				  	  科龙（KELON）2/3/5匹天花机商用家用中央空调科龙（KELON）2/3/5匹天花机商用家用中央空调
				  	</text>
				  </view>
		        
				<view class="flex-row">
					<text class="text_8">￥4899</text>
				</view>
		      </view>
		  </view>
		  <view class="block_3 flex-row align-center justify-around">
			 <view class="button_text">
			 	<text class="iconfont icon">&#xe66e;</text>
				<text class="text">编辑</text>
			 </view>
			 <view class="button_text">
			 	<text class="iconfont icon">&#xe739;</text>
				<text class="text">下架</text>
			 </view>		
		  </view>
		</view>
		<view v-if="nav == 1" class="section_3 section_4 flex-col" v-for="(items,index) in 6" :key="index">
		    <view class="image-text_2 flex-row">
		      <view class="group_5">
				  <image src="../../static/bg/0301162340.png" mode="aspectFit"></image>
			  </view>
		      <view class="text-group_2 flex-col">
				  <view class="text-group_3 flex-row">
				  	<text class="paragraph_1">
				  	  科龙（KELON）2/3/5匹天花机商用家用中央空调科龙（KELON）2/3/5匹天花机商用家用中央空调
				  	</text>
				  </view>
		        
				<view class="flex-row justify-end">
					<text class="text_8">审核中</text>
				</view>
		      </view>
		  </view>
		</view>
		<view v-if="nav == 2" class="section_3 flex-col" v-for="(items,index) in 6" :key="index">
		    <view class="image-text_2 flex-row">
		      <view class="group_5">
				  <image src="../../static/bg/0301162340.png" mode="aspectFit"></image>
			  </view>
		      <view class="text-group_2 flex-col">
				  <view class="text-group_3 flex-row">
				  	<text class="paragraph_1">
				  	  科龙（KELON）2/3/5匹天花机商用家用中央空调科龙（KELON）2/3/5匹天花机商用家用中央空调
				  	</text>
				  </view>
		        
				<view class="flex-row">
					<text class="text_8">￥4899</text>
				</view>
		      </view>
		  </view>
		  <view class="block_3 flex-row align-center justify-around">
			 <view class="button_text">
			 	<text class="iconfont icon">&#xe66e;</text>
				<text class="text">编辑</text>
			 </view>
			 <view class="button_text">
			 	<text class="iconfont icon">&#xe739;</text>
				<text class="text">删除</text>
			 </view>		
		  </view>
		</view>
		<view v-if="nav == 3" class="section_3 flex-col" v-for="(items,index) in 6" :key="index">
		    <view class="image-text_2 flex-row">
		      <view class="group_5">
				  <image src="../../static/bg/0301162340.png" mode="aspectFit"></image>
			  </view>
		      <view class="text-group_2 flex-col">
				  <view class="text-group_3 flex-row">
				  	<text class="paragraph_1">
				  	  科龙（KELON）2/3/5匹天花机商用家用中央空调科龙（KELON）2/3/5匹天花机商用家用中央空调
				  	</text>
				  </view>
		        
				<view class="flex-row">
					<text class="text_8">￥4899</text>
				</view>
		      </view>
		  </view>
		  <view class="block_3 flex-row align-center justify-around">
			 <view class="button_text">
			 	<text class="iconfont icon">&#xe66e;</text>
				<text class="text">编辑</text>
			 </view>
			 <view class="button_text">
			 	<text class="iconfont icon">&#xe739;</text>
				<text class="text">上架</text>
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
			changeNav(e) {
				this.nav = e
			},
		}
	}
</script>
<style>
	@import '../../static/css/common.css';
</style>
<style lang="less">
.page {
	.nav_box {
		width: 680rpx;
		margin: 20rpx 0 40rpx 36rpx;
		border-bottom: 1rpx solid #A0A0A0;
		position: relative;
			.nav_text {
				padding-bottom: 10rpx;
				font-size: 24rpx;
				color: #333;
			}
			.nav_text-avtive {
				font-size: 30rpx;
				color: #E63C31;
				border-bottom: 4rpx solid #E63C31;
			}
	}
	.section_3 {
	  background-color: rgba(255, 255, 255, 1);
	  border-radius: 10px;
	  height: 230rpx;
	  width: 690rpx;
	  margin: 22rpx 0 0 32rpx;
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
	      }
	  }
	  .block_3 {
		  height: 80rpx;
		  .icon {
			  font-size: 24rpx;
			  color: #272727;
		  }
		  .text {
			  margin-left: 4rpx;
		  	  font-size: 24rpx;
		  	  color: #272727;
		  }
	  }
	}
	.section_4 {
		height: 180rpx;
		.image-text_2 {
			padding: 0;
			border: none;
			.text-group_2 {
				.text_8 {
					font-weight: 400;
				}
			}
		}
	}
}
</style>
