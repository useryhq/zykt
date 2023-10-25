<template>
	<!-- 产品分类 -->
	<view class="classify-list">
		<view class="list-left">
			<view class="left-block" :class="{'left-block-active': activeKey == item.id}" v-for="(item,index) in list" :key="index"
			 @tap="itemClick(item.id)">
				{{item.name}}
			</view>
		</view>
		<view class="list-right">
			<view class="right-content" v-for="(items,index) in comList" :key="index">
				<view class="right-block" v-for="(item,n) in items.sub" :key="n">
						<view class="right-block-title">
							<view class="left-line">
							</view>
							{{item.name}}
							<view class="right-line">
							</view>
						</view>
						<view class="right-img-block">
							<view class="img-font-block" v-for="(i,c) in item.child" :key="c" @tap="toHotProduct(i.id)">
								<image :src="upImgUrl + i.banner" mode="aspectFit" lazy-load></image>
								<view>
									{{i.name}}
								</view>
							</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {category} from '../../../static/js/api.js'
	export default {
		data() {
			return {
				imgUrl: this.$imgUrl.img_base_url,
				upImgUrl:this.$upImgUrl.upImg_base_url,
				activeKey: 1,
				list: [],
				listIndex: 1,
				use: ''
			};
		},
		onLoad(option) {
			this.GetCategory()
			// console.log(option)
			this.use = option.use
			// this.activeKey = option.c_id
			// this.listIndex = option.c_id
		},
		computed: {
			comList() {
				let inList = [];
				for (let i = 0; i < this.list.length; i++) {
					if (this.listIndex == this.list[i].id) {
						inList.push(this.list[i])
					}
				}
				return inList;
				
			}
		},
		methods: {
			// 左侧列表点击
			itemClick(index) {
				this.listIndex = index
				this.activeKey = index
				// console.log(this.comList)
			},
			// 跳转产品列表页
			toHotProduct(id) {
				uni.navigateTo({
					url: '/pages/hotProduct/hotProduct?cate_id=' + id + '&use=' + this.use
				})
			},
			//获取分类列表
			async GetCategory() {
				let res = await category()
				this.list = res.lists
				// console.log(this.list)
			}
		},
	}
</script>
<style>
	@import url("../../../static/css/common.css");
</style>
<style lang="less">
	page {
		width: 100%;
		height: 100%;
	}
	.classify-list {
		width: 100%;
		height: 100%;
		display: flex;

		.list-left {
			.left-block {
				width: 160rpx;
				font-size: 28rpx;
				line-height: 80rpx;
				color: #222;
				text-align: center;
				background-color: #eee;
			}

			.left-block-active {
				color: #FF0000 ;
				background-color: #fff;
			}
		}

		.list-right {
			width: 580rpx;
			height: 100%;
			overflow: auto;
			-webkit-overflow-scrolling: touch;
			
			.right-content {
				.right-block {
					width: 580rpx;
					padding-top: 20rpx;
					margin-bottom: 30rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					background-color: #fff;
					.right-block-title {
						font-size: 28rpx;
						font-weight: 600;
						line-height: 30rpx;
						color: #000;
						text-align: center;
						position: relative;

						.left-line {
							width: 70rpx;
							height: 2rpx;
							background-color: rgba(153, 153, 153, 1);
							position: absolute;
							left: -90rpx;
							top: 50%;
						}

						.right-line {
							width: 70rpx;
							height: 2rpx;
							background-color: rgba(153, 153, 153, 1);
							position: absolute;
							right: -90rpx;
							top: 50%;
						}
					}

					.right-img-block {
						width: 580rpx;
						margin-top: 36rpx;
						display: flex;
						flex-wrap: wrap;

						.img-font-block {
							width: 160rpx;
							margin: 0 0 20rpx 20rpx;
							font-size: 24rpx;
							color: #222;
							text-align: center;

							image {
								width: 160rpx;
								height: 160rpx;
							}
						}
					}
				}
			}
		}
	}
</style>

