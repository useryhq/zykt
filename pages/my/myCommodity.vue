<template>
	<view class="page">
		<view class="button_1 flex-row justify-center" @click="toReleaseCommodity">
		    <text class="iconfont icon_2">&#xe649;</text>
		    <text class="text-group_1">发布商品</text>
		</view>
		<view class="nav_box flex-row justify-around">
			<view class="nav_text" :class="{'nav_text-avtive' : nav == 0}" @click="changeNav(0)">
				我发布的
			</view>
			<view class="nav_text" :class="{'nav_text-avtive' : nav == 1}" @click="changeNav(1)">
				已下架
			</view>
			<view class="avtive_line" :class="{'avtive_line-active_left' : nav == 0, 'avtive_line-active_right' : nav== 1}"></view>
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
		 	 <view class="button_text">
			 	<text class="iconfont icon"> &#xe665;</text>
				<text class="text">删除</text>
			 </view>
		  </view>
		</view>
		<view v-if="nav == 1" class="section_3 flex-col" v-for="(items,index) in 6" :key="index">
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
		 	 <view class="button_text">
			 	<text class="iconfont icon"> &#xe665;</text>
				<text class="text">删除</text>
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
			//跳转发布商品
			toReleaseCommodity() {
				uni.navigateTo({
					url: '/pages/my/releaseCommodity'
				})
			}
		}
	}
</script>
<style lang='less'>
@import '../../static/css/common.css';
</style>

<style lang="less">
.page {
	.button_1 {
	  background-color: rgba(230, 60, 49, 1);
	  border-radius: 24px;
	  height: 48rpx;
	  width: 175rpx;
			margin: 36rpx auto;
	    .icon_2 {
	      font-size: 28rpx;
				color: #fff;
				line-height: 48rpx;
	    }
	    .text-group_1 {
	      overflow-wrap: break-word;
	      color: rgba(255, 255, 255, 1);
	      font-size: 24rpx;
	      font-family: PingFang-SC-Regular;
	      font-weight: NaN;
	      white-space: nowrap;
	      line-height: 48rpx;
				margin-left: 6rpx;
	    }
	}
	.nav_box {
		width: 680rpx;
		margin: 20rpx 0 40rpx 36rpx;
		padding-bottom: 10rpx;
		border-bottom: 1rpx solid #A0A0A0;
		position: relative;
			.nav_text {
				font-size: 24rpx;
				color: #333;
			}
			.nav_text-avtive {
				font-size: 30rpx;
				color: #E63C31;
			}
			.avtive_line {
				width: 70rpx;
				height: 4rpx;
				background-color: #E63C31;
				position: absolute;
				bottom: 0;
			}
			.avtive_line-active_left {
				left: 140rpx;
			}
			.avtive_line-active_right {
				right: 134rpx;
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
}
</style>
