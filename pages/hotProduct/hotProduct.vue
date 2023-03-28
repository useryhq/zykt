<template>
	<view class="page flex-col">
		<view class="section_2 flex-col">
			<view class="group_2 flex-row justify-between">
				<view class="image-text_1 flex-row justify-between" @click="toHotProduct()">
					<text class="iconfont menu">&#xe677;</text>
					<text class="text-group_1">分类</text>
				</view>
				<view class="group_3 flex-row">
					<text class="search_icon iconfont">&#xe65c;</text>
					<input class="text-group_2" type="text" placeholder-style="font-size:22rpx;color:#999999" focus
						placeholder="搜索想要的空调产品" />
				</view>
			</view>
		</view>
		<view class="section_3 flex-col" :style="{'padding-bottom': iphonex ? '68rpx' : '0rpx'}">
			<view class="text-wrapper_1 flex-row align-center justify-start">
				<text :class="[add == 1 ? 'text_2 click_text' : 'text_2']" @click="choose_status1">商家</text>
				<text :class="[add == 2 ? 'text_3 click_text' : 'text_3']" @click="choose_status2">个人</text>
			</view>
			<view v-if="add == 1" class="box_3 flex-row justify-between">
				<view
					:class="[parameter == 1 ? 'text_4 flex-row click_text2 align-center' : 'text_4 flex-rowv align-center']"
					@click="chooseParameter(1)">
					价格
					<text :class="[parameter == 1 ? 'iconfont delta_transform' : 'iconfont']">&#xe688;</text>
				</view>
				<view
					:class="[parameter == 2 ? 'text_4 flex-row click_text2 align-center' : 'text_4 flex-rowv align-center']"
					@click="chooseParameter(2)">
					销量
					<text :class="[parameter == 2 ? 'iconfont delta_transform' : 'iconfont']">&#xe688;</text>
				</view>
				<view
					:class="[parameter == 3 ? 'text_4 flex-row click_text2 align-center' : 'text_4 flex-rowv align-center']"
					@click="chooseParameter(3)">
					品牌
					<text :class="[parameter == 3 ? 'iconfont delta_transform' : 'iconfont']">&#xe688;</text>
				</view>
				<view
					:class="[parameter == 4 ? 'text_4 flex-row click_text2 align-center' : 'text_4 flex-rowv align-center']"
					@click="chooseParameter(4)">
					成色
					<text :class="[parameter == 4 ? 'iconfont delta_transform' : 'iconfont']">&#xe688;</text>
				</view>
			</view>
			<view v-if="add == 2" class="box_3 flex-row justify-between">
				<view
					:class="[parameter == 1 ? 'text_4 flex-row click_text2 align-center' : 'text_4 flex-rowv align-center']"
					@click="chooseParameter(1)">
					价格
					<text :class="[parameter == 1 ? 'iconfont delta_transform' : 'iconfont']">&#xe688;</text>
				</view>
				<view
					:class="[parameter == 3 ? 'text_4 flex-row click_text2 align-center' : 'text_4 flex-rowv align-center']"
					@click="chooseParameter(3)">
					品牌
					<text :class="[parameter == 3 ? 'iconfont delta_transform' : 'iconfont']">&#xe688;</text>
				</view>
				<view
					:class="[parameter == 4 ? 'text_4 flex-row click_text2 align-center' : 'text_4 flex-rowv align-center']"
					@click="chooseParameter(4)">
					成色
					<text :class="[parameter == 4 ? 'iconfont delta_transform' : 'iconfont']">&#xe688;</text>
				</view>
			</view>

			<view :class="[add == 1 ? 'group_left' : 'group_right']"></view>
			<view v-if="add == 1" class="group_8 flex-row justify-between">
				<view class="box_3 flex-col" v-for="(item,index) in ktlist1" :key="index"
					@click="toProductDetail(item.price)">
					<image class="kt_img" :src="item.imgSrc"></image>
					<view class="text-wrapper_3 flex-row justify-between">
						<text class="paragraph_2">
							{{item.title}}
						</text>
					</view>
					<view class="text-wrapper_4 flex-row" @tap.stop.prevent>
						<text class="text_10"><text v-if="item.price != '询价'">￥</text>{{item.price}}</text>
						<text class="iconfont pk_text" @click="pkText(item)" v-if="item.pk">&#xe661;对比</text>
						<text class="iconfont pk_text choose_color" v-else="!item.pk">&#xe661;已选</text>
					</view>
					<view class="text-wrapper_4 flex-row">
						<text class="iconfont agent_icon">&#xe67d; 代理商</text>
						<text class="text_11">{{item.address}}</text>
					</view>
				</view>
			</view>
			<view v-if="add == 2" class="group_8 flex-row justify-between">
				<view class="box_3 flex-col" v-for="(item,index) in ktlist2" :key="index"
					@click="toProductDetailH(item.price)">
					<image class="kt_img" :src="item.imgSrc"></image>
					<view class="text-wrapper_3 flex-row justify-between">
						<text class="paragraph_2">
							{{item.title}}
						</text>
					</view>
					<view class="text-wrapper_4 flex-row">
						<text class="text_10">￥{{item.price}}</text>
						<text class="text_11">{{item.address}}</text>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				ktlist1: [{
						imgSrc: "",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "8000.00",
						address: "郑州",
						pk: true,
					},
					{
						imgSrc: "",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "询价",
						address: "郑州",
						pk: true,
					},
					{
						imgSrc: "",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "8000.00",
						address: "郑州",
						pk: true,
					},
					{
						imgSrc: "",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "询价",
						address: "郑州",
						pk: true,
					},
					{
						imgSrc: "",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "8000.00",
						address: "郑州",
						pk: true,
					},
					{
						imgSrc: "",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "8000.00",
						address: "郑州",
						pk: true,
					}
				],
				ktlist2: [{
						imgSrc: "",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "10000.00",
						address: "郑州",
					},
					{
						imgSrc: "",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "10000.00",
						address: "郑州",
					},
					{
						imgSrc: "",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "10000.00",
						address: "郑州",
					},
					{
						imgSrc: "",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "10000.00",
						address: "郑州",
					},
					{
						imgSrc: " ",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "10000.00",
						address: "郑州",
					},
					{
						imgSrc: "",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "10000.00",
						address: "郑州",
					}
				],
				add: 1,
				parameter: 0,
				iphonex: this.$iphonex.iphonex,
				constants: {}
			};
		},
		methods: {
			choose_status1() {
				this.add = 1
			},
			choose_status2() {
				this.add = 2
			},
			chooseParameter(e) {
				this.parameter = e
			},
			pkText(e) {
				e.pk = false
			},
			optionIndex(e) {
				if (e == 'jia') {
					for (let i = 0; i < this.ktlist1.length; i++) {
						this.ktlist1[i].imgSrc = '/static/bg/200711.png'
					}
					for (let i = 0; i < this.ktlist2.length; i++) {
						this.ktlist2[i].imgSrc = '/static/bg/200711.png'
					}
				}
				if (e == 'shang') {
					for (let i = 0; i < this.ktlist1.length; i++) {
						this.ktlist1[i].imgSrc = '/static/bg/0301162340.png'
					}
					for (let i = 0; i < this.ktlist2.length; i++) {
						this.ktlist2[i].imgSrc = '/static/bg/0301162340.png'
					}
				}
			},
			toProductDetail(e) {
				uni.navigateTo({
					url: '/pages/productDetail/productDetail?price=' + e
				})
			},
			toProductDetailH(e) {
				uni.navigateTo({
					url: '/pages/productDetailH/productDetailH?price=' + e
				})
			},
			toHotProduct() {
				uni.navigateTo({
					url: '/pages/classifyList/classifyList'
				})
			}
		},
		onLoad(option) {
			// console.log(option.item)
			this.optionIndex(option.item)

		},
	};
</script>
<style lang='less'>
	@import '../../static/css/common.css';
</style>


<style lang="less">
	.page {
		background-color: rgba(255, 255, 255, 1);
		position: relative;
		width: 750rpx;

		.section_2 {
			width: 750rpx;
			height: 95rpx;

			.group_2 {
				width: 685rpx;
				height: 50rpx;
				margin: 25rpx 0 0 33rpx;

				.image-text_1 {
					height: 30rpx;
					margin-top: 17rpx;

					.menu {
						width: 36rpx;
						height: 36rpx;
						font-size: 36rpx;
						color: #999999;
						margin-right: 8rpx;
					}

					.text-group_1 {
						width: 64rpx;
						height: 36rpx;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 30rpx;
						font-family: PingFang-SC-Regular;
						text-align: left;
						line-height: 32rpx;
					}
				}
			}

			.group_3 {
				position: relative;
				background-color: rgba(248, 248, 248, 1);

				.search_icon {
					font-size: 28rpx;
					position: absolute;
					top: 16rpx;
					left: 19rpx;
					color: #818181;
				}

				.text-group_2 {
					width: 490rpx;
					height: 50rpx;
					padding-left: 62rpx;
					overflow-wrap: break-word;
					font-size: 24rpx;
					font-family: PingFang-SC-Regular;
					font-weight: NaN;
					text-align: left;
					white-space: nowrap;
					line-height: 24rpx;
					margin-top: 2rpx;
					color: #333333;
					font-size: 26rpx;
					border-radius: 25px;
					border: 1px solid rgba(191, 191, 191, 1);
				}
			}
		}

		.section_3 {
			background-color: rgba(255, 255, 255, 1);
			border-radius: 10px;
			position: relative;
			width: 694rpx;
			margin-left: 33rpx;

			.text-wrapper_1 {
				width: 665rpx;
				height: 32rpx;
				margin: 27rpx 0 0 14rpx;
				padding-bottom: 15rpx;
				border-bottom: 2rpx solid #A0A0A0;

				.text_2 {
					margin: 0 51rpx 0 26rpx;
					color: rgba(102, 102, 102, 1);
					font-size: 24rpx;
					font-family: PingFang-SC-Medium;
					font-weight: NaN;
					text-align: left;
					line-height: 24rpx;
				}

				.text_3 {
					color: rgba(102, 102, 102, 1);
					font-size: 24rpx;
					font-family: PingFang-SC-Regular;
					font-weight: NaN;
					text-align: left;
					white-space: nowrap;
					line-height: 24rpx;
					margin-top: 7rpx;
				}

				.click_text {
					font-size: 32rpx;
					font-weight: 500;
					line-height: 32rpx;
					color: rgba(230, 60, 49, 1);
				}
			}

			.image_3 {
				width: 665rpx;
				height: 1rpx;
				margin: 12rpx 0 0 14rpx;
			}

			.box_3 {
				width: 586rpx;
				height: 23rpx;
				margin: 29rpx 0 0 6rpx;


				.text_4 {
					width: 70rpx;
					height: 23rpx;
					overflow-wrap: break-word;
					color: #666666;
					font-size: 24rpx;
					font-family: PingFang-SC-Regular;
					font-weight: NaN;
					text-align: left;
					white-space: nowrap;
					line-height: 36rpx;
				}

				.click_text2 {
					color: rgba(230, 60, 49, 1);
				}

				.delta_transform {
					transform: rotate(180deg);
				}
			}

			.group_left {
				background-color: rgba(230, 60, 49, 1);
				border-radius: 2px;
				position: absolute;
				left: 36rpx;
				top: 68rpx;
				width: 64rpx;
				height: 4rpx;
			}

			.group_right {
				background-color: rgba(230, 60, 49, 1);
				border-radius: 2px;
				position: absolute;
				left: 134rpx;
				top: 68rpx;
				width: 64rpx;
				height: 4rpx;
			}
		}

		.group_8 {
			width: 659rpx;
			flex-wrap: wrap;
			border-radius: 4px;

			.kt_img {
				width: 320rpx;
				height: 320rpx;
			}

			.box_3 {
				background-color: rgba(255, 255, 255, 1);
				width: 320rpx;
				height: 460rpx;
				margin-top: 38rpx;

				.text-wrapper_3 {
					width: 300rpx;
					height: 60rpx;
					margin: 26rpx 0 0 9rpx;

					.paragraph_2 {
						width: 286rpx;
						height: 60rpx;
						color: rgba(51, 51, 51, 1);
						font-size: 24rpx;
						font-family: PingFang-SC-Regular;
						text-align: left;
						line-height: 30rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						-webkit-line-clamp: 2;
						word-break: break-all;
						display: -webkit-box;
						-webkit-box-orient: vertical;
					}

					.paragraph_3 {
						width: 286rpx;
						height: 60rpx;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 24rpx;
						font-family: PingFang-SC-Regular;
						text-align: left;
						line-height: 36rpx;
					}
				}

				.text-wrapper_4 {
					width: 300rpx;
					height: 24rpx;
					margin: 21rpx 0 0 13rpx;
					justify-content: space-between;

					.text_10 {
						width: 139rpx;
						height: 30rpx;
						overflow-wrap: break-word;
						color: rgba(230, 60, 49, 1);
						font-size: 30rpx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						text-align: left;
						white-space: nowrap;
						line-height: 30rpx;
					}

					.text_11 {
						width: 42rpx;
						height: 21rpx;
						overflow-wrap: break-word;
						color: rgba(153, 153, 153, 1);
						font-size: 22rpx;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						white-space: nowrap;
						line-height: 36rpx;
						margin-right: 20rpx;
					}

					.pk_text {
						width: 79rpx;
						height: 32rpx;
						font-size: 22rpx;
						color: #E63C31;
						line-height: 32rpx;
						text-align: center;
						border: 1rpx solid #E63C31;
						border-radius: 16rpx;
					}

					.choose_color {
						color: #666666;
						border: 1rpx solid #666666;
					}

					.agent_icon {
						font-size: 22rpx;
						color: #999999;
					}

				}
			}

		}


	}
</style>