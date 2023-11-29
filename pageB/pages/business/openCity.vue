<template>
	<!-- 商家中心开通城市分站 -->
	<view class="page">
		<view class="group_1">
			<view class="city-prompt">开通城市分站收费标准（您的商品将会在您开通的城市展示）</view>
			<view class="city-table">
				<view class="table-tr flex-row">
					<text class="table-td">城市</text>
					<text class="table-td_1">全国</text>
					<text class="table-td_1">省会城市</text>
					<text class="table-td_1">其他城市</text>
				</view>
				<view class="table-tr flex-row">
					<text class="table-td border-b">价格</text>
					<text class="table-td_2">{{cityMoney.all}}元</text>
					<text class="table-td_2">{{cityMoney.province}}元</text>
					<text class="table-td_2">{{cityMoney.city}}元</text>
				</view>
			</view>
			<view class="area-list">
				<view class="city-chin flex-row align-center">
					<view class="round"></view>
					<text class="city-text">全中国</text>
				</view>
				<view v-for="(items,index) in cityList" :key="index">
					<view class="city-title">
						{{items.name}}
					</view>
					<view v-for="(item,i) in items.son" :key="i" class="city-list flex-row align-start">
						<view class="city-sheng flex-row align-center">
							<!-- <view class="round"></view> -->
							<text class="list-text">{{item.name}}</text>
						</view>
						<view class="city-shi flex-row align-center">
							<view v-for="(k,n) in item.cities" :key="n" class="shi-list flex-row align-center">
								<view class="round" @click="chooseCity(items.name,item.id,k.id)">
									<view v-if="k.selected" class="drop"></view>
								</view>
								<text class="list-text">{{k.name}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="button" @click="submitOpenCity">
			确认开通
		</view>
		<uni-popup ref="popup" type="message">
			<uni-popup-message type="success" message="成功消息" :duration="3000">{{prompt}}</uni-popup-message>
		</uni-popup>
	</view>
</template>

<script>
	import {cityLists} from '../../../static/js/api.js'
	export default {
		data() {
			return {
				prompt: '',
				cityMoney: '',
				cityList: '',
				//开通城市分站id数组
				openCityArr: []
			};
		},
		methods: {
			//获取城市分站列表
			async pcityLists(data) {
				let res = await cityLists(data)
				this.cityMoney = res.money
				this.cityList = res.area
							 // console.log(res,"===")
			},
			//城市分站选择城市
			chooseCity(areaName,provincid,cityid) {
				this.cityList.forEach(items => {
					if(items.name ==  areaName) {
						items.son.forEach(item => {
							if(item.id == provincid) {
								item.cities.forEach(i => {
									// console.log(i)
									if(i.id ==  cityid) {
										if(i.selected  == false) {
											i.selected = true
											this.openCityArr.push(i.id)
										} else {
											i.selected  = false
											this.openCityArr.splice(this.openCityArr.indexOf(i.id),1)
										}
										// this.$forceUpdate()
										// console.log(this.openCityArr)
									}
								})
							}
						})
					}
				})
			},
			//城市分站提交
			submitOpenCity() {
				this.prompt = '暂不支持该功能，敬请期待下一版本'
				this.$refs.popup.open('center')
			},
		},
		onLoad() {
			this.pcityLists()
		}
	}
</script>
<style>
	@import '../../../static/css/common.css';
</style>
<style lang="less">
.page {
	overflow: hidden;
	.group_1 {
		width: 690rpx;
		margin: 30rpx;
		background-color: #fff;
		overflow: hidden;
		.city-prompt {
			margin: 44rpx 0 22rpx 20rpx;
			font-size: 24rpx;
			color: #333;
		}
		.city-table {
			margin-left: 20rpx;
			.table-td {
				width: 140rpx;
				height: 52rpx;
				font-size: 24rpx;
				color: #333;
				line-height: 52rpx;
				text-align: center;
				background-color: #eee;
				border-left: 1rpx solid #A0A0A0;
				border-top: 1rpx solid #A0A0A0;
				border-right: 1rpx solid #A0A0A0;
			}
			.table-td_1 {
				width: 160rpx;
				height: 52rpx;
				font-size: 24rpx;
				color: #333;
				line-height: 52rpx;
				text-align: center;
				border-top: 1rpx solid #A0A0A0;
				border-right: 1rpx solid #A0A0A0;
			}
			.table-td_2 {
				width: 160rpx;
				height: 52rpx;
				font-size: 24rpx;
				color: #333;
				line-height: 52rpx;
				text-align: center;
				border-top: 1rpx solid #A0A0A0;
				border-right: 1rpx solid #A0A0A0;
				border-bottom: 1rpx solid #A0A0A0;
			}
			.border-b {
				border-bottom: 1rpx solid #A0A0A0;
			}
		}
		.round {
			width: 22rpx;
			height: 22rpx;
			border: 1rpx solid #A0A0A0;
			border-radius: 50%;
			.drop {
				width: 14rpx;
				height: 14rpx;
				margin: 4rpx;
				background-color: #DD1215;
				border-radius: 50%;
			}
		}
		.area-list {
			.city-chin {
				margin: 40rpx 0 26rpx 20rpx;
				.city-text {
					font-size: 30rpx;
					font-weight: 500;
					color: #333;
					margin-left: 10rpx;
				}
			}
			.city-title {
				width: 632rpx;
				height: 46rpx;
				margin-left: 20rpx;
				background-color: #eee;
				font-size: 26rpx;
				font-weight: 500;
				color: #333;
				line-height: 46rpx;
				text-align: center;
			}
			.city-list {
				margin: 32rpx 20rpx;
				font-size: 24rpx;
				color: #333;
				.list-text {
					width: 80rpx;
					margin-left: 8rpx;
					color: #E63C31;
				}
				.city-shi {
					margin-left: 36rpx;
					flex-wrap: wrap;
					.list-text {
						width: auto;
						margin-right: 8rpx;
						color: #333;
					}
				}
		}
					
		}
	}
	.button {
		width: 460rpx;
		height: 60rpx;
		background-color: #E63C31;
		border-radius: 30rpx;
		font-size: 24rpx;
		color: #fff;
		line-height: 60rpx;
		text-align: center;
		margin: 60rpx auto;
	}
}
</style>
