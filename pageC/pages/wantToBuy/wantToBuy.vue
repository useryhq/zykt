<template>
	<!-- 求购列表 -->
	<view class="page">
		<view class="list_1 flex-col">
			<view class="list-items_1 flex-col" v-for="(item, index) in loopData0" :key="index" @click="toWantBUyDetail(item.id)">
				<view class="text-group_1 flex-col justify-between">
					<text class="text_2">{{item.title}}</text>
					<text class="text_3">{{item.content}}</text>
				</view>
				<view class="box_3 flex-row justify-between">
					<view class="image-text_1 flex-row justify-between align-center">
						<text class="thumbnail_1 iconfont">&#xe680;</text>
						<text class="text-group_2">{{item.created_at}}</text>
					</view>
					<view class="image-text_2 flex-row justify-between align-center">
						<text class="thumbnail_2 iconfont">&#xe678;</text>
						<text class="text-group_3">{{item.province}}{{item.city}}{{item.area}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {wantToBuy} from '../../../static/js/api.js'
	export default {
		data() {
			return {
				loopData0: [],
				loading: 0,
				num: 1,
				constants: {}
			};
		},
		methods: {
			//获取求购列表
			async getWantToBuy() {
				let data = {
						curpage: 1,
						page: 10
				}
				let res = await wantToBuy(data)
				// console.log(res)
				this.loopData0 = res.lists
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
						curpage: this.num,
						page: 10
				}
				// console.log(data)
				let res =  await wantToBuy(data)
				// console.log("res",res)
				// this.loopData0 = res.lists
				if(res.lists.length < 1) {
					this.loading = 2
					uni.hideLoading()
					return
				}
				this.loopData0 = this.loopData0.concat(res.lists)
				// console.log(this.loopData0,"=======")
				this.num++
				this.loading = 0
				uni.hideLoading()
				
			},
			//跳转求购详情
			toWantBUyDetail(id) {
				uni.navigateTo({
					url:'/pageC/pages/wantToBuy/wantBuyDetail?id=' + id
				})
			}
		},
		onLoad() {
			this.getWantToBuy()
		},
		onReachBottom() {
			this.loadingMore()
		}
	};
</script>
<style>
	@import '../../../static/css/common.css';
</style>
<style lang='less'>
	.page {
		position: relative;
		width: 750rpx;

		.list_1 {
			width: 690rpx;
			margin: 32rpx 0 0 29rpx;

			.list-items_1 {
				background-color: rgba(255, 255, 255, 1);
				border-radius: 10px;
				position: relative;
				width: 690rpx;
				height: 180rpx;
				border: 1px solid rgba(191, 191, 191, 1);
				margin-bottom: 30rpx;

				.text-group_1 {
					width: 640rpx;
					margin: 23rpx 0 0 23rpx;
					padding-bottom: 16rpx;
					border-bottom: 1rpx solid #BFBFBF;

					.text_2 {
						width: 600rpx;
						height: 30rpx;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 30rpx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						text-align: left;
						white-space: nowrap;
						line-height: 30rpx;
						margin-left: 2rpx;
						text-overflow: ellipsis;
						overflow: hidden;
					}

					.text_3 {
						width: 600rpx;
						height: 26rpx;
						overflow-wrap: break-word;
						color: rgba(102, 102, 102, 1);
						font-size: 24rpx;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						white-space: nowrap;
						line-height: 24rpx;
						margin-top: 18rpx;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}

				.text_4 {
					position: absolute;
					left: 23rpx;
					top: 23rpx;
					width: 236rpx;
					height: 29rpx;
					overflow-wrap: break-word;
					color: rgba(51, 51, 51, 1);
					font-size: 30rpx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					text-align: left;
					white-space: nowrap;
					line-height: 30rpx;
				}

				.text_5 {
					position: absolute;
					left: 21rpx;
					top: 73rpx;
					width: 593rpx;
					height: 24rpx;
					overflow-wrap: break-word;
					color: rgba(102, 102, 102, 1);
					font-size: 24rpx;
					font-family: PingFang-SC-Regular;
					font-weight: NaN;
					text-align: left;
					white-space: nowrap;
					line-height: 36rpx;
				}

				.box_3 {
					width: 639rpx;
					height: 22rpx;
					margin: 21rpx 0 19rpx 31rpx;

					.image-text_1 {
						width: 150rpx;
						height: 22rpx;

						.thumbnail_1 {
							font-size: 22rpx;
							color: #999;
						}

						.text-group_2 {
							height: 22rpx;
							overflow-wrap: break-word;
							color: rgba(153, 153, 153, 1);
							font-size: 22rpx;
							font-family: PingFang-SC-Regular;
							font-weight: NaN;
							text-align: left;
							white-space: nowrap;
							line-height: 22rpx;
						}
					}

					.image-text_2 {
						width: 240rpx;
						height: 24rpx;

						.thumbnail_2 {
							font-size: 24rpx;
							color: #999;
						}

						.text-group_3 {
							width: 230rpx;
							height: 22rpx;
							overflow-wrap: break-word;
							color: rgba(153, 153, 153, 1);
							font-size: 22rpx;
							font-family: PingFang-SC-Regular;
							font-weight: NaN;
							text-align: left;
							white-space: nowrap;
							line-height: 22rpx;
							overflow: hidden;
							text-overflow: ellipsis;
						}
					}
				}
			}
		}
	}
</style>