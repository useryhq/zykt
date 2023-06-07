<template>
	<!-- 个人中心我的消息 -->
	<view class="page">
		<view class="nav_box flex-row justify-around">
			<view class="nav_text" :class="{'nav_text-avtive' : nav == 0}" @click="changeNav(0)">
				我的留言
			</view>
			<view class="nav_text" :class="{'nav_text-avtive' : nav == 1}" @click="changeNav(1)">
				系统消息
			</view>
			<view class="avtive_line" :class="{'avtive_line-active_left' : nav == 0, 'avtive_line-active_right' : nav== 1}"></view>
		</view>
		<view class="group_1">
			<view class="box_1 flex-row">
				<view class="img-block">
					<image class="head-img" src="../../../static/bg/7220921.png"></image>
					<view class="drop">
					</view>
				</view>
				<view class="text-block">
					<view class="tel-time flex-row justify-between">
						<text class="tel-text">136******2</text>
						<text class="time-text">2023-01-28</text>
					</view>
					<view class="message-block">
						 请问您这边有其他品牌的空调吗？支持物流吗？
					</view>
				</view>
			</view>
			<view class="button" @click="openSend">
				回复
			</view>
		</view>
		<view v-if="send" class="choose-block">
			<view class="mask"></view>
			<view class="mode">
				<view class="pk_title">
					<text>回复留言</text>
					<text class="close_pk" @click="closeSend">×</text>
				</view>
				<view class="text-block">
					<textarea cols="30" rows="10"></textarea>
				</view>
				<view class="button_1">
					发布
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
				send: false
			};
		},
		methods: {
			// 选择顶部nav
			changeNav(e) {
				this.nav = e
			},
			//打开关闭回复弹窗
			openSend() {
				this.send = true
			},
			closeSend() {
				this.send = false
			}
		}
	}
</script>
<style>
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
				font-size: 28rpx;
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
	.group_1 {
		width: 670rpx;
		margin: 30rpx;
		padding: 10rpx;
		background-color: #fff;
		.box_1 {
			padding-bottom: 10rpx;
			border-bottom: 1rpx solid #E5E5E5;
			.img-block {
				width: 76rpx;
				height: 76rpx;
				position: relative;
				.head-img {
					width: 76rpx;
					height: 76rpx;
					border-radius: 50%;
				}
				.drop {
					width: 12rpx;
					height: 12rpx;
					background-color: #E63C31;
					border-radius: 50%;
					position: absolute;
					top: 10rpx;
					right: 2rpx;
				}
			}
			.text-block {
				margin-left: 18rpx;
				.tel-time {
					width: 570rpx;
					font-size: 22rpx;
					color: #999;
				}
				.message-block {
					margin-top: 20rpx;
					font-size: 24rpx;
					color: #333;
				}
			}
		}
		.button {
			width: 96rpx;
			height: 34rpx;
			border: 1rpx solid #E63C31;
			border-radius: 17rpx;
			font-size: 22rpx;
			color: #E63C31;
			line-height: 34rpx;
			text-align: center;
			margin: 18rpx auto 0 auto;
		}
	}
	.choose-block {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		.mask {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background-color: rgba(0, 0, 0, 0.6);
		}
		.mode {
			width: 680rpx;
			height: 500rpx;
			background-color: #fff;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			border-radius: 10rpx;
			margin: auto;
			.pk_title {
				width: 100%;
				height: 60rpx;
				background-color: #eee;
				color: #333;
				font-size: 30rpx;
				font-weight: 500;
				line-height: 60rpx;
				text-align: center;
				.close_pk {
					width: 38rpx;
					height: 38rpx;
					margin: 11rpx 26rpx 0 0;
					background-color: #666;
					font-size: 30rpx;
					line-height: 38rpx;
					text-align: center;
					color: #fff;
					border-radius: 50%;
					float: right;
				}
			}
			.text-block {
				width: 600rpx;
				height: 300rpx;
				margin: 22rpx 24rpx;
				border: 1rpx solid #A0A0A0;
				font-size: 24rpx;
				color: #333;
			}
			.button_1 {
				width: 146rpx;
				height: 40rpx;
				margin: 50rpx auto 0 auto;
				background-color: #E63C31;
				font-size: 24rpx;
				color: #fff;
				line-height: 40rpx;
				text-align: center;
			}
			}
			}
}
</style>
