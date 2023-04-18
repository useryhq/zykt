<template>
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
			<text class="nav" :class="{'nav_active' : nav == 1}" @click="chooseNav(1)">待付款</text>
			<text class="nav" :class="{'nav_active' : nav == 2}" @click="chooseNav(2)">待发货</text>
			<text class="nav" :class="{'nav_active' : nav == 3}" @click="chooseNav(3)">待收货</text>
			<text class="nav" :class="{'nav_active' : nav == 4}" @click="chooseNav(4)">待评价</text>
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
			chooseNav(e) {
				this.nav = e
			}
		}
	}
</script>
<style>
	@import '../../static/css/common.css';
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
		.nav_active {
			color: #E63C31;
			// padding-bottom: 18rpx;
			border-bottom: 4rpx solid #E63C31;
		}
	}
}
</style>
