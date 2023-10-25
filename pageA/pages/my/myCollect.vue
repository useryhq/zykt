<template>
	<!-- 个人中心我的收藏 -->
	<view class="page">
		<view class="nav_box flex-row justify-around">
			<view class="nav_text" :class="{'nav_text-avtive' : nav == 0}" @click="changeNav(0)">
				商品
			</view>
			<view class="nav_text" :class="{'nav_text-avtive' : nav == 1}" @click="changeNav(1)">
				店铺
			</view>
			<view class="avtive_line" :class="{'avtive_line-active_left' : nav == 0, 'avtive_line-active_right' : nav== 1}"></view>
		</view>
		<view class="colloct_block flex-row justify-between align-center">
			<view class="block_text">
				共收藏<text class="collocet_num">{{num}}</text>件<text v-if="nav == 0">商品</text><text v-if="nav == 1">店铺</text>
			</view>
			<text v-if="button" class="button" @click="edit">编辑</text>
			<text v-else class="button" @click="complete">完成</text>
		</view>
		<checkbox-group name="" @change="checkbox">
		<view v-if="nav == 0" class="section_3 flex-col" v-for="(items,index) in list" :key="item.id">
		    <view class="image-text_2 flex-row align-center">
			<label v-if="!button">
				<checkbox :value="items.id" :checked="items.checked" />
			</label>
		      <view class="group_5">
				  <image :src="imgUrl + items.goodsInfo.thumb" mode="aspectFit"></image>
			  </view>
		      <view class="text-group_2 flex-col">
				  <view class="text-group_3 flex-row">
				  	<text class="paragraph_1">
				  	  {{items.goodsInfo.goods_name}}
				  	</text>
				  </view>
				<view class="flex-row">
					<text class="text_8">￥{{items.goodsInfo.market_price}}</text>
				</view>
		      </view>
		  </view>
		</view>
		</checkbox-group>
		<checkbox-group  name="" @change="checkbox">
		<view v-if="nav == 1" class="section_3 d-block flex-col" v-for="(items,index) in list" :key="index">
		    <view class="image-text_2 d-block_1 flex-row">
				<label v-if="!button">
					<checkbox :value="items.id" :checked="items.checked" />
				</label>
		      <view class="d_group_5">
				  <image :src="imgUrl + items.shopInfo.logo" mode="aspectFit"></image>
			  </view>
		      <view class="text-group_2 d-text">
				  	 {{items.shopInfo.shop_name}}
		      </view>
			  <view class="button_1">
			  	进店
			  </view>
		  </view>
		</view>
		</checkbox-group>
		<uni-popup ref="popup" type="message">
			<uni-popup-message type="success" message="成功消息" :duration="3000">{{prompt}}</uni-popup-message>
		</uni-popup>
	</view>
</template>

<script>
	import {collectShop,collectGood,collectCancel} from '../../../static/js/api.js'
	export default {
		data() {
			return {
				userid: '',
				nav: 0,
				list: [],
				num: '',
				idarr: [],
				button: true,
				imgUrl: this.$imgUrl.img_base_url,
				prompt: ''
			};
		},
		methods: {
			// 获取收藏店铺列表
			async pCollectShop(data) {
				let res = await collectShop(data)
				this.list = res.lists
				// this.list.forEach(item => {
				// 	item.checked = false
				// })
				this.num = res.num
				console.log(res)
			},
			// 获取收藏商品列表
			async pCollectGood(data) {
				let res = await collectGood(data)
				this.list = res.lists
				// this.list.forEach(item => {
				// 	item.checked = false
				// })
				this.num = res.num
				console.log(this.list)
			},
			// 取消收藏
			async pCollectCancel(data) {
				console.log(data)
				let res = await collectCancel(data)
				if(res.code == 200) {
					this.prompt = res.msg
					this.$refs.popup.open('top')
					clearTimeout(time)
					let time = setTimeout(() => {
						uni.redirectTo({
							url: '/pageA/pages/my/myCollect'
						})
					},2000)
				}
			},
			// 切换商品和店铺
			changeNav(e) {
				this.nav = e
				let data = {
					userid: this.userid
				}
				if(e == 0) {
					//收藏商品
					this.pCollectGood(data)
				} else {
					//收藏店铺
					this.pCollectShop(data)
				}
			},
			// 选择框状态改变
			checkbox(e) {
				console.log(e)
				this.idarr = e.detail.value
				let values = e.detail.value,list = this.list
				for(let i = 0,len = list.length;i < len;++i){
					const item = list[i]
					if(values.includes(item.id)) {
						console.log(item)
						this.$set(item,'checked',true)
						// item.checked = true
					} else {
						// item.checked = false
						this.$set(item,'checked',false)
					}
				}
				// console.log(this.list)
			},
			//编辑切换完成
			edit() {
				this.button = false
			},
			// 完成按钮
			complete() {
				let ids = ''
				this.idarr.forEach((item,index) => {
					if(index < this.idarr.length-1){
						ids += item +','
					} else {
						ids += item
					}
				})
				let data = {
					userid:this.userid,
					ids: ids
				}
				this.pCollectCancel(data)
				this.button = true
			}
		},
		onLoad() {
			uni.getStorage({
				key: 'userId',
				success: (res) => {
					this.userid = res.data
					let data = {
					userid: res.data
				}
				this.pCollectGood(data)
				}
			})
		}
	}
</script>
<style lang='less'>
@import '../../../static/css/common.css';
</style>

<style lang="less">
.page {
	.nav_box {
		width: 680rpx;
		padding: 20rpx 35rpx 10rpx 35rpx;
		// border-bottom: 1rpx solid #A0A0A0;
		position: relative;
		background-color: #fff;
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
				left: 170rpx;
			}
			.avtive_line-active_right {
				right: 170rpx;
			}
	}
	.colloct_block {
		width: 670rpx;
		height: 84rpx;
		padding: 0 40rpx;
		.block_text {
			font-size: 24rpx;
			color: #222;
			.collocet_num {
				color: #E63C31;
			}
		}
		.button {
			font-size: 28rpx;
			color: #E63C31;
		}
	}
	.section_3 {
	  background-color: rgba(255, 255, 255, 1);
	  border-radius: 10px;
	  height: 180rpx;
	  width: 690rpx;
	  margin: 22rpx 0 0 32rpx;
	    .image-text_2 {
	      width: 670rpx;
	      height: 110rpx;
	      margin: 30rpx 0 0 17rpx;
		  padding-bottom: 20rpx;
	      .group_5 {
	        width: 110rpx;
	        height: 110rpx;
				  image {
					  width: 110rpx;
					  height: 110rpx;
				  }
	      }
	      .text-group_2 {
	        width: 400rpx;
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
	}
	.d-block {
		height: 100rpx;
		.d-block_1 {
			height: 100rpx;
			margin: 0 0 0 20rpx;
			padding: 0;
			align-items: center;
			.d_group_5 {
				width: 48rpx;
				height: 45rpx;
					image {
						width: 48rpx;
						height: 45rpx;
					}
			}
			.d-text {
				height: 28rpx;
				margin: 0 0 0 14rpx;
				color: rgba(51, 51, 51, 1);
				font-size: 24rpx;
			}
			.button_1 {
				width: 96rpx;
				height: 38rpx;
				margin-left: 70rpx;
				background-color: #FF0000;
				border-radius: 19rpx;
				color: #fff;
				font-size: 24rpx;
				line-height: 38rpx;
				text-align: center;
			}
		}
	}
}
</style>
