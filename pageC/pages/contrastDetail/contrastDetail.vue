<template>
	<!-- 对比详情 -->
	<view class="page flex-col">
		<view class="section_2 flex-col">
			<view class="group_2 flex-row">
				<view class="text-wrapper_1 flex-col">
					<text class="paragraph_1">
						{{arr1.goods_name}}
					</text>
				</view>
				<view v-if="arr2.length!=0" class="text-wrapper_2 flex-col">
					<text class="paragraph_2">
						{{arr2.goods_name}}
					</text>
				</view>
				<view v-if="arr3.length!=0" class="text-wrapper_3 flex-col">
					<text class="paragraph_3">
						{{arr3.goods_name}}
					</text>
				</view>
			</view>
			<view class="text-wrapper_12 flex-col">
				<text class="text_56">01</text>
			</view>
			<view v-if="arr2.length!=0" class="text-wrapper_13 flex-col">
				<text class="text_57">02</text>
			</view>
			<view v-if="arr3.length!=0" class="text-wrapper_14 flex-col">
				<text class="text_58">03</text>
			</view>
		</view>
		<view class="table">
			<view class="table_title">
				基本信息
			</view>
			<uni-table border stripe>
				<uni-tr>
					<uni-td class="td_first" width="80" align="center">商品价格</uni-td>
					<uni-td width="100" align="center">{{arr1.market_price}}</uni-td>
					<uni-td v-if="arr2.length!=0" align="center">{{arr2.market_price}}</uni-td>
					<uni-td v-if="arr3.length!=0" align="center">{{arr3.market_price}}</uni-td>
				</uni-tr>
				<uni-tr>
					<uni-td align="center">商品评价</uni-td>
					<uni-td align="center">总共{{arr1.comment_count}}条</uni-td>
					<uni-td v-if="arr2.length!=0" align="center">总共{{arr2.comment_count}}条</uni-td>
					<uni-td v-if="arr3.length!=0" align="center">总共{{arr3.comment_count}}条</uni-td>
				</uni-tr>
				<uni-tr>
					<uni-td align="center">商品店铺</uni-td>
					<uni-td align="center">{{arr1.sellerInfo.shop_name}}</uni-td>
					<uni-td v-if="arr2.length!=0" align="center">{{arr2.sellerInfo.shop_name}}</uni-td>
					<uni-td v-if="arr3.length!=0" align="center">{{arr3.sellerInfo.shop_name}}</uni-td>
				</uni-tr>
			</uni-table>
		</view>
		<view class="table">
			<view class="table_title">
				规格属性
			</view>
			<uni-table border stripe>
				<uni-tr v-for="(item,index) in arr" :key="index">
					<uni-td width="80" align="center">{{item}}</uni-td>
					<uni-td width="90" align="center">{{attr1[index].attr_value}}</uni-td>
					<uni-td width="90" align="center">{{attr2[index].attr_value}}</uni-td>
					<uni-td width="90" align="center">{{attr3[index].attr_value}}</uni-td>
				</uni-tr>
			</uni-table>
		</view>
		<view class="table_btn" @click="toBack">
			返回产品列表
		</view>
	</view>
</template>
<script>
	import {
		pk,brandPk
	} from '../../../static/js/api.js'
	export default {
		data() {
			return {
				contrastData: '',
				arr: [],
				arr1: [],
				arr2: [],
				arr3: [],
				attr1: [],
				attr2: [],
				attr3: [],
				m: '',
				constants: {}
			};
		},
		methods: {
			// 获取pk商品数据
			async getPk() {
				let ids = ''
				for (let i = 0; i < this.contrastData.length; i++) {
					if (i == this.contrastData.length - 1) {
						ids += this.contrastData[i].id
					} else {
						ids += this.contrastData[i].id + ','
					}
				}
				let data = {
					ids: ids
				}
				let res = await pk(data)
				// console.log(res)
				this.arr = res.attrName
				if (res.goods_info.length == 1) {
					this.arr1 = res.goods_info[0]
					this.getMaxArr(res.goods_info[0].attr)
				} else if (res.goods_info.length == 2) {
					this.arr1 = res.goods_info[0]
					this.arr2 = res.goods_info[1]
					this.getMaxArr(res.goods_info[0].attr, res.goods_info[1].attr)
				} else {
					this.arr1 = res.goods_info[0]
					this.arr2 = res.goods_info[1]
					this.arr3 = res.goods_info[2]
					this.getMaxArr(res.goods_info[0].attr, res.goods_info[1].attr, res.goods_info[2].attr)
				}
				// console.log("arr1", this.arr1, "arr2", this.arr2, "arr3", this.arr3)
				// console.log("attr1", this.attr1, "attr2", this.attr2, "attr3", this.attr3)
			},
			// 对比参数顺序不同,商品pk数据处理
			getMaxArr(arr1, arr2, arr3) {
				if (arr3) {
					for (let i = 0; i < this.arr.length; i++) {
						let a = arr1.find(item => this.arr[i] == item.attr_name)
						let b = arr2.find(item => this.arr[i] == item.attr_name)
						let c = arr3.find(item => this.arr[i] == item.attr_name)
						if (a) {
							this.attr1.push(a)
						} else {
							this.attr1.push({
								attr_name: this.arr[i],
								attr_value: '-'
							})
						}
						if(b) {
							this.attr2.push(b)
						} else {
							this.attr2.push({
								attr_name: this.arr[i],
								attr_value: '-'
							})
						}
						if(c) {
							this.attr3.push(c)
						} else {
							this.attr3.push({
								attr_name: this.arr[i],
								attr_value: '-'
							})
						}
					}
				} else if (arr2) {
					for (let i = 0; i < this.arr.length; i++) {
						let a = arr1.find(item => this.arr[i] == item.attr_name)
						let b = arr2.find(item => this.arr[i] == item.attr_name)
						if (a) {
							this.attr1.push(a)
						} else {
							this.attr1.push({
								attr_name: this.arr[i],
								attr_value: '-'
							})
						}
						if(b) {
							this.attr2.push(b)
						} else {
							this.attr2.push({
								attr_name: this.arr[i],
								attr_value: '-'
							})
						}
					}
				} else {
					this.attr1 = arr1
				}
			},
			toBack() {
				uni.navigateBack()
			}
		},
		computed: {},
		onLoad(option) {
			this.contrastData = JSON.parse(option.pk)
			this.m = option.m
			// console.log(option)
			this.getPk()
		}
	};
</script>
<style lang='less'>
	@import '../../../static/css/common.css';
</style>


<style lang="less">
	.page {
		position: relative;
		width: 750rpx;
		background-color: #ffffff;
		overflow: hidden;

		.section_2 {
			position: relative;
			width: 750rpx;
			margin-bottom: 1rpx;

			.group_2 {
				width: 688rpx;
				height: 161rpx;
				margin: 44rpx 0 0 30rpx;

				.text-wrapper_1 {
					height: 160rpx;
					width: 214rpx;
					box-shadow: 0 0 6rpx rgba(34, 30, 31, 0.26);

					.paragraph_1 {
						width: 200rpx;
						height: 110rpx;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 24rpx;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						line-height: 30rpx;
						margin: 40rpx 0 0 10rpx;
					}
				}

				.text-wrapper_2 {
					height: 160rpx;
					width: 214rpx;
					margin-left: 22rpx;
					box-shadow: 0 0 6rpx rgba(34, 30, 31, 0.26);

					.paragraph_2 {
						width: 200rpx;
						height: 110rpx;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 24rpx;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						line-height: 30rpx;
						margin: 40rpx 0 0 10rpx;
					}
				}

				.text-wrapper_3 {
					height: 160rpx;
					width: 214rpx;
					margin-left: 22rpx;
					box-shadow: 0 0 6rpx rgba(34, 30, 31, 0.26);

					.paragraph_3 {
						width: 200rpx;
						height: 110rpx;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 24rpx;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						line-height: 36rpx;
						margin: 40rpx 0 0 10rpx;
					}
				}
			}

			.text-wrapper_12 {
				background-color: rgba(255, 0, 0, 1);
				border-radius: 50%;
				height: 44rpx;
				width: 44rpx;
				position: absolute;
				left: 116rpx;
				top: 29rpx;
				text-align: center;

				.text_56 {
					overflow-wrap: break-word;
					color: rgba(255, 255, 255, 1);
					font-size: 24rpx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					white-space: nowrap;
					line-height: 44rpx;

				}
			}

			.text-wrapper_13 {
				background-color: rgba(255, 0, 0, 1);
				border-radius: 50%;
				height: 44rpx;
				width: 44rpx;
				position: absolute;
				left: 348rpx;
				top: 28rpx;
				text-align: center;

				.text_57 {
					overflow-wrap: break-word;
					color: rgba(255, 255, 255, 1);
					font-size: 24rpx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					white-space: nowrap;
					line-height: 44rpx;
				}
			}

			.text-wrapper_14 {
				background-color: rgba(255, 0, 0, 1);
				border-radius: 50%;
				height: 44rpx;
				width: 44rpx;
				position: absolute;
				left: 584rpx;
				top: 28rpx;
				text-align: center;

				.text_58 {
					overflow-wrap: break-word;
					color: rgba(255, 255, 255, 1);
					font-size: 24rpx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					white-space: nowrap;
					line-height: 44rpx;
				}
			}
		}

		.table {
			width: 750rpx;
			margin-top: 46rpx;

			.table_title {
				width: 100%;
				height: 60rpx;
				font-size: 30rpx;
				color: rgba(51, 51, 51, 1);
				text-align: center;
				line-height: 60rpx;
				background-color: rgba(238, 238, 238, 1);
			}

			.uni-table-td {
				word-break: break-all;
			}
		}

		.table_btn {
			width: 280rpx;
			height: 60rpx;
			background-color: #E63C31;
			font-size: 30rpx;
			color: #ffffff;
			line-height: 60rpx;
			text-align: center;
			border-radius: 30rpx;
			margin: 32rpx auto 30rpx auto;
		}
	}
</style>