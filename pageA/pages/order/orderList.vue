<template>
	<!-- 个人中心订单列表 -->
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
		<view class="section_3 flex-col" v-for="(items,index) in list" :key="index">
		  <view class="block_2 flex-row justify-between align-center" >
		    <view class="image-text_1 flex-row align-center">
				<text class="iconfont icon_2">&#xe676;</text>
		      <text class="text-group_1">{{item.sellerInfo.shop_name}}</text>
		      <text class="iconfont icon_3">&#xe6a3;</text>
		    </view>
			<view class="image-text_3" v-if="item.pay_status == 0">
				等待付款
			</view>
			<view class="image-text_3" v-if="item.order_status == 5">
				待发货
			</view>
			<view class="image-text_3" v-if="item.order_status == 40">
				待收货
			</view>
			<view class="image-text_4 flex-row align-center justify-between" v-if="item.order_status == 60">
				<text>完成</text>|
				<text class="iconfont delet">&#xe665;</text>
			</view>
		  </view>
		    <view class="image-text_2 flex-row">
		      <view class="group_5">
				  <image src="../../../static/bg/0301162340.png" mode="aspectFit"></image>
			  </view>
		      <view class="text-group_2 flex-col">
				  <view class="text-group_3 flex-row justify-between">
				  	<text class="paragraph_1">
				  	  {{item.goodsInfo.goods_name}}
				  	</text>
					<text class="num_text">
						×{{item.goodsInfo.goods_num}}
					</text>
				  </view>
		        
				<view class="flex-row justify-end">
					<text class="text_8" v-if="item.pay_status == 0">应付：{{item.goodsInfo.market_price}}元</text>
				</view>
		      </view>
		  </view>
		  <view class="block_3 flex-row align-center justify-end">
			  <view class="flex-row" v-if="item.pay_status == 0">
			  	<view class="time">
			  		<text class="iconfont icon_4">&#xe680;</text>
			  		支付剩余24小时36分
			  	</view>
			  	<view class="button_1" @click="toOrderDetail">
			  		去支付
			  	</view>
			  </view>
			  <view class="flex-row" v-if="item.order_status == 30">
			  	<view class="button_2">
			  		取消订单
			  	</view>
				<view class="button_1">
					提醒发货
				</view>
			  </view>
			<view class="flex-row" v-if="item.order_status == 40">
				<view class="button_2" @click="toAfterSales">
					退换/售后
				</view>
				<view class="button_2">
					查看物流
				</view>
				<view class="button_1">
					确认收货
				</view>
			</view>
			<view class="flex-row" v-if="item.order_status == 50">
				<view class="button_2">
					评价晒单
				</view>
				<view class="button_1">
					再次购买
				</view>
			</view>
		  </view>
		</view>
	</view>
</template>

<script>
	import {orderList} from '../../../static/js/api.js'
	export default {
		data() {
			return {
				userid: '2',
				nav: 0,
				list:[],
				num: 1
			};
		},
		methods: {
			//获取订单列表
			async pOrderList(data = {
				userid: '',
				type: '',
				curpage: '',
				page: '10',
			}) {
				console.log(data)
				let res = await orderList()
				this.list = res.lists
				console.log(res)
			},
			//切换Nav导航条
			chooseNav(e) {
				this.nav = e
				let data = {
					userid: this.userid,
					type: e,
					curpage: 1,
					page: '10',
				}
				this.pOrderList(data)
			},
			//跳转售后页面
			toAfterSales() {
				uni.navigateTo({
					url: '/pageA/pages/order/afterSales'
				})
			},
			//跳转评价页面
			toPostComments() {
				uni.navigateTo({
					url: '/pageA/pages/order/postComments'
				})
			},
			//跳转订单详情页面
			toOrderDetail() {
				uni.navigateTo({
					url: '/pageA/pages/order/oderDetail'
				})
			},
			//上拉加载更多
			async loadingMore() {
				if(this.loading !== 0)
				return false
				this.loading = 1
				uni.showLoading({
					title: 'Loading...', //提示的内容,
					mask: true, //显示透明蒙层，防止触摸穿透,
					success: res => {}
				})
				let data = {
					userid: '',
					type: '',
					curpage: this.num,
					page: 10
				}
				console.log(data)
				let res =  await orderList(data)
				// console.log("res",res)
				// this.loopData0 = res.lists
				if(res.lists.length < 1) {
					this.loading = 2
					uni.hideLoading()
					return
				}
				this.list = this.list.concat(res.lists)
				// console.log(this.loopData0,"=======")
				this.num++
				this.loading = 0
				uni.hideLoading()
				
			},
		},
		onLoad(option) {
			//获取进入的nav导航状态
			this.nav = option.nav
			uni.getStorage({
				key: 'userId',
				success: (res) => {
					// this.userid = res.data
					let data = {
					userid: 2,
					type: option.nav,
					curpage: 1,
					page: '10',
				}
				this.pOrderList(data)
				}
			})
		},
		onReachBottom() {
			this.loadingMore()
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
			color: #E63C31;
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
			  margin: 0 16rpx;			  
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
			  margin-left: 16rpx;
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
