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
					<text class="table-td_2">2000元</text>
					<text class="table-td_2">50元</text>
					<text class="table-td_2">10元</text>
				</view>
			</view>
			<view class="area-list">
				<view class="city-chin flex-row align-center">
					<view class="round"></view>
					<text class="city-text">全中国</text>
				</view>
				<view v-for="(item,index) in 3" :key="index">
					<view class="city-title">
						华北地区
					</view>
					<view class="city-list flex-row align-start">
						<view class="city-sheng flex-row align-center">
							<!-- <view class="round"></view> -->
							<text class="list-text">北京</text>
						</view>
						<view class="city-shi flex-row align-center">
							<view class="shi-list flex-row align-center">
								<view class="round">
									<view class="drop"></view>
								</view>
								<text class="list-text">北京</text>
							</view>
						</view>
					</view>
					<view class="city-list flex-row align-start">
						<view class="city-sheng flex-row align-center">
							<!-- <view class="round"></view> -->
							<text class="list-text">天津</text>
						</view>
						<view class="city-shi flex-row align-center">
							<view class="shi-list flex-row align-center">
							<view class="round"></view>
							<text class="list-text">天津</text>
							</view>
						</view>
					</view>
					<view class="city-list flex-row align-start">
						<view class="city-sheng flex-row align-center">
							<!-- <view class="round"></view> -->
							<text class="list-text">河北省</text>
						</view>
						<view class="city-shi flex-row align-center">
							<view class="shi-list flex-row align-center">
							<view class="round"></view>
							<text class="list-text">石家庄</text>
							</view>
							<view class="shi-list flex-row align-center">
							<view class="round"></view>
							<text class="list-text">唐山</text>
							</view>
							<view class="shi-list flex-row align-center">
							<view class="round"></view>
							<text class="list-text">秦皇岛</text>
							</view>
							<view class="shi-list flex-row align-center">
							<view class="round"></view>
							<text class="list-text">邯郸</text>
							</view>
							<view class="shi-list flex-row align-center">
							<view class="round"></view>
							<text class="list-text">邢台</text>
							</view>
							<view class="shi-list flex-row align-center">
							<view class="round"></view>
							<text class="list-text">保定</text>
							</view>
							<view class="shi-list flex-row align-center">
							<view class="round"></view>
							<text class="list-text">张家口</text>
							</view>
							<view class="shi-list flex-row align-center">
							<view class="round"></view>
							<text class="list-text">承德</text>
							</view>
							<view class="shi-list flex-row align-center">
							<view class="round"></view>
							<text class="list-text">沧州</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="button">
			确认开通
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>
<style>
	@import '../../static/css/common.css';
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
