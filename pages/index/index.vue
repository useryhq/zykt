<template>
	<view class="page flex-col">
		<view class="group_1 flex-col">
			<view class="group_2 flex-col">
				<view class="block_2 flex-row justify-between">
					<view class="image-text_1 flex-row justify-between">
						<text class="text-group_1">郑州</text>
						<image class="thumbnail_1" referrerpolicy="no-referrer"
							src="/static/bg/psn0jpa0rv4jokgnpjgiyspa6d5ap30qwvka8534697-34f3-4d04-ad86-53aa6ed0ac52.png" />
					</view>
					<view class="text-wrapper_1 flex-col" @click="ToSearch">
						<text class="text_2">搜索想要的空调产品</text>
					</view>
					<view class="image-wrapper_1 flex-col">
						<text class="iconfont label_2">&#xe78b;</text>
					</view>
				</view>
			</view>
			<view class="group_5 flex-col">
				<view class="block_3 flex-row justify-between">
					<view class="section_1 flex-row">
						<view class="image-text_2 flex-row justify-between">
							<view class="image-wrapper_2 flex-col">
								<text class="iconfont label_3">&#xe60e;</text>
							</view>
							<view class="text-group_2 flex-col justify-between">
								<text class="text_3">我要买空调</text>
								<text class="text_4">一键发布&nbsp;&nbsp;快速匹配</text>
							</view>
						</view>
					</view>
					<view class="section_2 flex-row">
						<view class="image-text_3 flex-row justify-between">
							<view class="image-wrapper_3 flex-col">
								<text class="iconfont label_4">&#xe6ac;</text>
							</view>
							<view class="text-group_3 flex-col justify-between">
								<text class="text_5">我要卖空调</text>
								<text class="text_6">一键发布&nbsp;&nbsp;快速匹配</text>
							</view>
						</view>
					</view>
				</view>
				<view class="block_4 flex-col">
					<view class="list_1 flex-row">
						<view class="image-text_4 flex-col justify-between" v-for="(item, index) in loopData0"
							:key="index">
							<image class="image_3" referrerpolicy="no-referrer" :src="item.lanhuimage0" />
							<text class="text-group_4"
								:style="{ color: item.lanhufontColor0 }">{{item.lanhutext0}}</text>
						</view>
					</view>
					<view class="box_2 flex-row">
						<view class="list_2 flex-row justify-between">
							<view class="image-text_5 flex-col justify-between" v-for="(item, index) in loopData1"
								:key="index">
								<image class="image_4" referrerpolicy="no-referrer" :src="item.lanhuimage0" />
								<text class="text-group_5"
									:style="{ color: item.lanhufontColor0 }">{{item.lanhutext0}}</text>
							</view>
						</view>
						<view class="image-text_9 flex-row justify-between" @click="toBrand()">
							<image class="label_5" referrerpolicy="no-referrer"
								src="../../static/bg/ps8w062b4dww78ren5gnd20n7t1lgq9wifk1489dc63-ba6a-4b28-81df-764d45f40f3c.png" />
							<text class="text-group_9">更多</text>
						</view>
					</view>
				</view>
			</view>
			<view class="group_6 flex-col">
				<view class="section_3 flex-row justify-between">
					<text class="text_7">最新求购</text>
					<view class="image-text_10 flex-row justify-between" @click="TowantToBuy()">
						<text class="text-group_10">查看更多</text>
						<image class="thumbnail_2" referrerpolicy="no-referrer"
							src="/static/bg/ps9eqtt3izc6df1bfdwxikkb9lerbbb0sf89be13a8-4627-4296-a69e-c90609ca556f.png" />
					</view>
				</view>
				<view class="section_7">
					<view class="section_4 flex-col justify-between">
						<view class="section_5 flex-row justify-between align-center" v-for="(item,index) in message"
							:key="index">
							<view class="section_6"></view>
							<text class="paragraph_1">
								{{item.text}}
								<br />
							</text>
						</view>
					</view>
				</view>
			</view>
			<view class="group_7 flex-col" :style="{'padding-bottom': iphonex ? '196rpx' : '128rpx'}">
				<view class="text-wrapper_2 flex-row justify-start">
					<text :class="[add == 1 ? 'text_8 click_text' : 'text_8']" @click="choose_status1">商家</text>
					<text :class="[add == 2 ? 'text_9 click_text' : 'text_9']" @click="choose_status2">个人</text>
				</view>
				<view v-if="add == 1" class="group_8 flex-row justify-between">
					<view class="box_3 flex-col" v-for="(item,index) in ktlist1" :key="index" @click="toProductDetail(item.price)">
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
				<view  v-if="add == 2" class="group_8 flex-row justify-between">
					<view class="box_3 flex-col" v-for="(item,index) in ktlist2" :key="index" @click="toProductDetailH(item.price)">
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
				<view :class="[add == 1 ? 'group_left' : 'group_right']"></view>
			</view>
			<view class="group_12 flex-row" :style="{'padding-bottom': iphonex ? '68rpx' : '0rpx'}">
				<view :class="[selectTab == 1 ? 'image-text_11 flex-col color' : 'image-text_11 flex-col']" @click="slecetTab(1)">
					<text class="iconfont label_6">&#xe674;</text>
					<text class="text-group_11">首页</text>
				</view>
				<view :class="[selectTab == 2 ? 'image-text_12 flex-col color' : 'image-text_12 flex-col']"
					@click="ToHotProduct('jia')">
					<text class="iconfont label_7">&#xe60e;</text>
					<text class="text-group_12">家用空调</text>
				</view>
				<view :class="[selectTab == 3 ? 'image-text_13 flex-col color' : 'image-text_13 flex-col']"
					@click="ToHotProduct('shang')">
					<text class="iconfont label_8">&#xe610;</text>
					<text class="text-group_13">商用空调</text>
				</view>
				<view :class="[selectTab == 4 ? 'image-text_14 flex-col color' : 'image-text_14 flex-col']"
					@click="slecetTab(4)">
					<text class="iconfont label_9">&#xe676;</text>
					<text class="text-group_14">二手门店</text>
				</view>
				<view :class="[selectTab == 5 ? 'image-text_15 flex-col color' : 'image-text_15 flex-col']"
					@click="slecetTab(5)">
					<text class="iconfont label_10">&#xe682;</text>
					<text class="text-group_15">我的</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				loopData0: [{
						lanhuimage0: '/static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png',
						lanhutext0: '大金',
						lanhufontColor0: 'rgba(102,102,102,1)',
					},
					{
						lanhuimage0: '/static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png',
						lanhutext0: '格力',
						lanhufontColor0: 'rgba(51,51,51,1)',
					},
					{
						lanhuimage0: '/static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png',
						lanhutext0: '美的',
						lanhufontColor0: 'rgba(51,51,51,1)',
					},
					{
						lanhuimage0: '/static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png',
						lanhutext0: '奥克斯',
						lanhufontColor0: 'rgba(51,51,51,1)',
					},
					{
						lanhuimage0: '/static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png',
						lanhutext0: '海尔',
						lanhufontColor0: 'rgba(51,51,51,1)',
					},
				],
				loopData1: [{
						lanhuimage0: '/static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png',
						lanhutext0: '大金',
						lanhufontColor0: 'rgba(102,102,102,1)',
					},
					{
						lanhuimage0: '/static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png',
						lanhutext0: '格力',
						lanhufontColor0: 'rgba(51,51,51,1)',
					},
					{
						lanhuimage0: '/static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png',
						lanhutext0: '美的',
						lanhufontColor0: 'rgba(51,51,51,1)',
					},
					{
						lanhuimage0: '/static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png',
						lanhutext0: '奥克斯',
						lanhufontColor0: 'rgba(51,51,51,1)',
					},
				],
				message: [{
						text: "美的大风管机",
					},
					{
						text: "求购一台格力壁挂式空调，要求最起码八成新求购一台格力壁挂式空调，要求最起码八成新",

					},
					{
						text: "回收废旧空调压缩机 回收5台1.5匹空调",

					},
					{
						text: "回收10台二手格力柜式机回",
					},
					{
						text: "求购一台格力壁挂式空调，要求最起码八成新求购一台格力壁挂式空调，要求最起码八成新",

					},
					{
						text: "回收废旧空调压缩机 回收5台1.5匹空调",

					},
					{
						text: "回收10台二手格力柜式机回",
					},
				],
				ktlist1: [{
						imgSrc: "/static/bg/0301162340.png",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "8000.00",
						address: "郑州",
					},
					{
						imgSrc: "/static/bg/0301162340.png",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "8000.00",
						address: "郑州",
					},
					{
						imgSrc: "/static/bg/0301162340.png",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "8000.00",
						address: "郑州",
					},
					{
						imgSrc: "/static/bg/0301162340.png",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "8000.00",
						address: "郑州",
					},
					{
						imgSrc: "/static/bg/0301162340.png",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "8000.00",
						address: "郑州",
					},
					{
						imgSrc: "/static/bg/0301162340.png",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "8000.00",
						address: "郑州",
					}
				],
				ktlist2: [{
						imgSrc: "/static/bg/0301162340.png",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "10000.00",
						address: "郑州",
					},
					{
						imgSrc: "/static/bg/0301162340.png",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "10000.00",
						address: "郑州",
					},
					{
						imgSrc: "/static/bg/0301162340.png",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "10000.00",
						address: "郑州",
					},
					{
						imgSrc: "/static/bg/0301162340.png",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "10000.00",
						address: "郑州",
					},
					{
						imgSrc: "/static/bg/0301162340.png",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "10000.00",
						address: "郑州",
					},
					{
						imgSrc: "/static/bg/0301162340.png",
						title: "(二手8成新)大金（DAIKIN）一拖五中央空调,金制全效",
						price: "10000.00",
						address: "郑州",
					}
				],
				add: 1,
				selectTab: 1,
				iphonex: this.$iphonex.iphonex,
				constants: {},
			};
		},
		methods: {
			choose_status1() {
				this.add = 1
			},
			choose_status2() {
				this.add = 2
			},
			slecetTab(e) {
				// console.log(e)
				this.selectTab = e
				if(e == 4) {
					uni.navigateTo({
						url: '/pages/twoHand/twoHand'
					})				}
			},
			ToSearch() {
				uni.navigateTo({
					url: '../search/search'
				})
			},
			ToHotProduct(e) {
				if (e == 'jia') {
					this.selectTab = 2,
					uni.navigateTo({
						url: '/pages/hotProduct/hotProduct?item=' + e
					})
				} 
				if (e == 'shang') {
					this.selectTab = 3,
					uni.navigateTo({
						url: '/pages/hotProduct/hotProduct?item='+ e
					})
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
			TowantToBuy() {
				uni.navigateTo({
					url: '/pages/wantToBuy/wantToBuy'
				})
			},
			toBrand() {
				uni.navigateTo({
					url:'/pages/brand/brand'
				})
			}
		},
		onLoad() {
			// console.log(this.message)
		},
	};

</script>
<style>
	@import '../../static/css/common.css';
	/* @import './index.rpx.css';y */

</style>

<style lang="less" scoped>
	.page {
		position: relative;
		width: 750rpx;
		// overflow: hidden;

		.group_1 {
			width: 750rpx;
			margin-top: 15rpx;

			.group_2 {
				width: 750rpx;
				height: 110rpx;
				background: url(/static/bg/ps59drfwoeaop2rwmujyrphvuaeqgb0axqfdf6667e-c63f-4b00-961c-724335a2ad65.png) 0rpx -15rpx no-repeat;
				background-size: 750rpx 100rpx;
				margin-top: -15rpx;

				.image_1 {
					width: 727rpx;
					height: 20rpx;
					margin: 15rpx 0 0 12rpx;
				}

				.block_1 {
					width: 706rpx;
					height: 64rpx;
					margin: 23rpx 0 0 31rpx;

					.label_1 {
						width: 42rpx;
						height: 42rpx;
						margin-top: 7rpx;
					}

					.text_1 {
						width: 146rpx;
						height: 29rpx;
						overflow-wrap: break-word;
						color: rgba(255, 255, 255, 1);
						font-size: 30rpx;
						font-family: PingFang-SC-Bold;
						font-weight: 700;
						text-align: left;
						white-space: nowrap;
						line-height: 30rpx;
						margin: 15rpx 0 0 12rpx;
					}

					.group_3 {
						background-color: rgba(0, 0, 0, 0.18);
						border-radius: 32px;
						width: 174rpx;
						height: 64rpx;
						border: 1px solid rgba(210, 210, 210, 0.18);
						margin-left: 332rpx;

						.image_2 {
							width: 68rpx;
							height: 42rpx;
							margin: 11rpx 0 0 28rpx;
						}

						.group_4 {
							border-radius: 50%;
							height: 32rpx;
							border: 3px solid rgba(255, 254, 255, 1);
							width: 32rpx;
							margin: 17rpx 28rpx 0 0;

							.box_1 {
								background-color: rgba(255, 254, 255, 1);
								border-radius: 50%;
								width: 14rpx;
								height: 14rpx;
								margin: 9rpx 0 0 9rpx;
							}
						}
					}
				}

				.block_2 {
					width: 693rpx;
					height: 56rpx;
					margin: 0 0 39rpx 28rpx;

					.image-text_1 {
						width: 70rpx;
						height: 23rpx;
						margin-top: 18rpx;

						.text-group_1 {
							width: 45rpx;
							height: 23rpx;
							overflow-wrap: break-word;
							color: rgba(255, 255, 255, 1);
							font-size: 24rpx;
							font-family: PingFang-SC-Regular;
							font-weight: NaN;
							text-align: left;
							white-space: nowrap;
							line-height: 24rpx;
						}

						.thumbnail_1 {
							width: 18rpx;
							height: 10rpx;
							margin-top: 10rpx;
						}
					}

					.text-wrapper_1 {
						background-color: rgba(255, 255, 255, 1);
						border-radius: 28px;
						height: 56rpx;
						border: 1px solid rgba(191, 191, 191, 1);
						margin-left: 27rpx;
						width: 520rpx;

						.text_2 {
							width: 195rpx;
							height: 22rpx;
							overflow-wrap: break-word;
							color: rgba(153, 153, 153, 1);
							font-size: 22rpx;
							font-family: PingFang-SC-Regular;
							font-weight: NaN;
							text-align: left;
							white-space: nowrap;
							line-height: 22rpx;
							margin: 20rpx 0 0 22rpx;
						}
					}

					.image-wrapper_1 {
						background-color: rgba(255, 255, 255, 1);
						border-radius: 50%;
						height: 48rpx;
						border: 1px solid rgba(191, 191, 191, 1);
						width: 48rpx;
						margin: 4rpx 0 0 28rpx;

						.label_2 {
							font-size: 35rpx;
							color: #333333;
							margin: 7rpx 0 0 7rpx;
						}
					}
				}
			}

			.group_5 {
				width: 750rpx;
				height: 413rpx;

				.block_3 {
					width: 694rpx;
					height: 133rpx;
					margin: 0 0 0 27rpx;

					.section_1 {
						background-color: rgba(255, 255, 255, 1);
						border-radius: 10px;
						width: 332rpx;
						height: 133rpx;
						border: 2px solid rgba(255, 254, 255, 1);

						.image-text_2 {
							width: 275rpx;
							height: 80rpx;
							margin: 27rpx 0 0 16rpx;

							.image-wrapper_2 {
								height: 80rpx;
								background: url(/static/bg/ps7h7jzhhtm8jb4llh1yegvcjvxbrswrx85d5751f1-88c2-4c20-bf8f-6ff75a5375a7.png) 100% no-repeat;
								background-size: 100% 100%;
								width: 80rpx;

								.label_3 {
									font-size: 45rpx;
									color: #ffffff;
									margin: 22rpx 0 0 16rpx;
								}
							}

							.text-group_2 {
								width: 189rpx;
								height: 66rpx;
								margin-top: 8rpx;

								.text_3 {
									width: 157rpx;
									height: 31rpx;
									overflow-wrap: break-word;
									color: rgba(51, 51, 51, 1);
									font-size: 32rpx;
									font-family: PingFang-SC-Medium;
									font-weight: 500;
									text-align: left;
									white-space: nowrap;
									line-height: 32rpx;
									margin-left: 7rpx;
								}

								.text_4 {
									width: 189rpx;
									height: 22rpx;
									overflow-wrap: break-word;
									color: rgba(153, 153, 153, 1);
									font-size: 22rpx;
									font-family: PingFang-SC-Regular;
									text-align: left;
									white-space: nowrap;
									line-height: 22rpx;
									margin-top: 13rpx;
								}
							}
						}
					}

					.section_2 {
						background-color: rgba(255, 255, 255, 1);
						border-radius: 10px;
						width: 332rpx;
						height: 133rpx;
						border: 2px solid rgba(255, 254, 255, 1);

						.image-text_3 {
							width: 275rpx;
							height: 80rpx;
							margin: 27rpx 0 0 30rpx;

							.image-wrapper_3 {
								height: 80rpx;
								background: url(../../static/bg/pstzh93nwbnl5cb7gwrw4bmlegwk475rbb98159a4-30ef-482c-9b50-b8c05d79ac62.png) 100% no-repeat;
								background-size: 100% 100%;
								width: 80rpx;

								.label_4 {
									font-size: 48rpx;
									color: #ffffff;
									margin: 18rpx 0 0 18rpx;
								}
							}

							.text-group_3 {
								width: 189rpx;
								height: 66rpx;
								margin-top: 8rpx;

								.text_5 {
									width: 157rpx;
									height: 31rpx;
									overflow-wrap: break-word;
									color: rgba(51, 51, 51, 1);
									font-size: 32rpx;
									font-family: PingFang-SC-Medium;
									font-weight: 500;
									text-align: left;
									white-space: nowrap;
									line-height: 32rpx;
									margin-left: 7rpx;
								}

								.text_6 {
									width: 189rpx;
									height: 22rpx;
									overflow-wrap: break-word;
									color: rgba(153, 153, 153, 1);
									font-size: 22rpx;
									font-family: PingFang-SC-Regular;
									font-weight: NaN;
									text-align: left;
									white-space: nowrap;
									line-height: 22rpx;
									margin-top: 13rpx;
								}
							}
						}
					}
				}

				.block_4 {
					background-color: rgba(255, 255, 255, 1);
					border-radius: 10px;
					width: 692rpx;
					height: 209rpx;
					border: 2px solid rgba(255, 254, 255, 1);
					margin: 21rpx 0 21rpx 27rpx;

					.list_1 {
						width: 671rpx;
						height: 163rpx;
						justify-content: space-between;
						margin: 7rpx 0 0 16rpx;

						.image-text_4 {
							width: 110rpx;
							height: 64rpx;
							margin: 5rpx 10rpx 0 0;

							.image_3 {
								width: 110rpx;
								height: 40rpx;
							}

							.text-group_4 {
								width: 70rpx;
								height: 23rpx;
								overflow-wrap: break-word;
								font-size: 24rpx;
								font-family: PingFang-SC-Regular;
								font-weight: NaN;
								text-align: left;
								white-space: nowrap;
								line-height: 24rpx;
								margin: 1rpx 0 0 31rpx;
							}
						}
					}

					.box_2 {
						width: 671rpx;
						height: 70rpx;
						margin: 26rpx 0 37rpx 16rpx;

						.list_2 {
							width: 530rpx;

							.image-text_5 {
								width: 110rpx;
								height: 69rpx;
								margin: 5rpx 10rpx 0 0;

								.image_4 {
									width: 110rpx;
									height: 40rpx;
								}

								.text-group_5 {
									width: 46rpx;
									height: 23rpx;
									overflow-wrap: break-word;
									color: rgba(51, 51, 51, 1);
									font-size: 24rpx;
									font-family: PingFang-SC-Regular;
									font-weight: NaN;
									text-align: left;
									white-space: nowrap;
									line-height: 24rpx;
									margin: 6rpx 0 0 31rpx;
								}
							}
						}

						.image-text_9 {
							width: 82rpx;
							height: 30rpx;
							margin: 31rpx 0 0 20rpx;

							.label_5 {
								width: 30rpx;
								height: 30rpx;
							}

							.text-group_9 {
								width: 45rpx;
								height: 23rpx;
								overflow-wrap: break-word;
								color: rgba(51, 51, 51, 1);
								font-size: 24rpx;
								font-family: PingFang-SC-Regular;
								font-weight: NaN;
								text-align: left;
								white-space: nowrap;
								line-height: 24rpx;
								margin-top: 3rpx;
							}
						}
					}
				}
			}

			.group_6 {
				width: 692rpx;
				height: 393rpx;
				margin: 20rpx 31rpx 19rpx 37rpx;
				background-color: rgba(255, 255, 255, 1);
				border-radius: 10px;

				.section_3 {
					width: 653rpx;
					height: 33rpx;
					margin: 22rpx 0 0 19rpx;

					.text_7 {
						width: 125rpx;
						height: 31rpx;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 32rpx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						text-align: left;
						white-space: nowrap;
						line-height: 32rpx;
						margin-top: 2rpx;
					}

					.image-text_10 {
						width: 105rpx;
						height: 31rpx;

						.text-group_10 {
							width: 87rpx;
							height: 31rpx;
							overflow-wrap: break-word;
							color: rgba(153, 153, 153, 1);
							font-size: 22rpx;
							font-family: PingFang-SC-Regular;
							text-align: left;
							white-space: nowrap;
							line-height: 31rpx;
						}

						.thumbnail_2 {
							width: 10rpx;
							height: 16rpx;
							margin-top: 8rpx;
						}
					}
				}

				.section_7 {
					height: 360rpx;
					overflow: hidden;

					.section_4 {
						width: 653rpx;

						.section_5 {
							margin: 25rpx 0 0 20rpx;

							.section_6 {
								background-color: rgba(230, 60, 49, 1);
								border-radius: 50%;
								width: 7rpx;
								height: 7rpx;
							}

							.paragraph_1 {
								width: 600rpx;
								height: 30rpx;
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
								text-align: left;
								color: rgba(51, 51, 51, 1);
								font-size: 24rpx;
								font-family: PingFang-SC-Regular;
								font-weight: NaN;
							}
						}
					}
				}


			}

			.group_7 {
				background-color: rgba(255, 255, 255, 1);
				border-radius: 10px;
				position: relative;
				width: 694rpx;
				border: 2px solid rgba(255, 254, 255, 1);
				margin: 19rpx 0 0 27rpx;
				padding-bottom: 128rpx;
				.text-wrapper_2 {
					width: 665rpx;
					height: 32rpx;
					margin: 27rpx 0 0 14rpx;
					padding-bottom: 15rpx;
					border-bottom: 2rpx solid #A0A0A0;

					.text_8 {
						margin: 0 51rpx 0 22rpx;
						font-size: 28rpx;
						font-family: PingFang-SC-Medium;
						line-height: 28rpx;
						color: rgba(102, 102, 102, 1);
					}

					.text_9 {
						font-size: 28rpx;
						color: rgba(102, 102, 102, 1);
						font-family: PingFang-SC-Regular;
						line-height: 28rpx;
					}

					.click_text {
						font-size: 32rpx;
						font-weight: 500;
						line-height: 32rpx;
						color: rgba(51, 51, 51, 1);
					}
				}

				.group_8 {
					width: 659rpx;
					margin-left: 16rpx;
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
								margin: 3rpx 0 0 100rpx;
							}

						}
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
					left: 140rpx;
					top: 68rpx;
					width: 64rpx;
					height: 4rpx;
				}
			}

			.group_12 {
				background-color: rgba(255, 255, 255, 1);
				width: 750rpx;
				height: 98rpx;
				padding-bottom: 6rpx;
				// margin: 25rpx 0 5rpx 0;
				position: fixed;
				left: 0;
				bottom: 0rpx;
				z-index: 1000;


				.image-text_11 {
					width: 46rpx;
					height: 72rpx;
					margin: 19rpx 0 0 37rpx;
					color: rgba(51, 51, 51, 1);
					.label_6 {
						width: 42rpx;
						height: 40rpx;
						font-size: 42rpx;
						margin-left: 1rpx;
					}


					.text-group_11 {
						width: 46rpx;
						height: 23rpx;
						overflow-wrap: break-word;
						font-size: 24rpx;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						white-space: nowrap;
						line-height: 36rpx;
						margin-top: 9rpx;
					}
				}

				.image-text_12 {
					width: 93rpx;
					height: 68rpx;
					margin: 23rpx 0 0 85rpx;
					color: rgba(51, 51, 51, 1);
					.label_7 {
						width: 48rpx;
						height: 38rpx;
						font-size: 44rpx;
						margin-left: 26rpx;
					}

					.text-group_12 {
						width: 93rpx;
						height: 23rpx;
						overflow-wrap: break-word;
						font-size: 24rpx;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						white-space: nowrap;
						line-height: 36rpx;
						margin-top: 7rpx;
					}
				}

				.image-text_13 {
					width: 93rpx;
					height: 75rpx;
					margin: 16rpx 0 0 63rpx;
					color: rgba(51, 51, 51, 1);
					.label_8 {
						width: 42rpx;
						height: 42rpx;
						font-size: 42rpx;
						margin-left: 26rpx;
					}

					.text-group_13 {
						width: 93rpx;
						height: 23rpx;
						overflow-wrap: break-word;
						font-size: 24rpx;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						white-space: nowrap;
						line-height: 36rpx;
						margin-top: 10rpx;
					}
				}

				.image-text_14 {
					width: 94rpx;
					height: 75rpx;
					margin: 16rpx 0 0 62rpx;
					color: rgba(51, 51, 51, 1);
					.label_9 {
						width: 42rpx;
						height: 40rpx;
						font-size: 44rpx;
						margin-left: 29rpx;
					}

					.text-group_14 {
						width: 94rpx;
						height: 23rpx;
						overflow-wrap: break-word;
						font-size: 24rpx;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						white-space: nowrap;
						line-height: 36rpx;
						margin-top: 12rpx;
					}
				}

				.image-text_15 {
					width: 45rpx;
					height: 73rpx;
					margin: 18rpx 47rpx 0 86rpx;
					color: rgba(51, 51, 51, 1);
					.label_10 {
						width: 36rpx;
						height: 40rpx;
						font-size: 44rpx;
						margin-left: 2rpx;
					}

					.text-group_15 {
						width: 45rpx;
						height: 23rpx;
						overflow-wrap: break-word;
						font-size: 24rpx;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						white-space: nowrap;
						line-height: 36rpx;
						margin-top: 10rpx;
					}
				}
				.color {
					color: #E63C31;
				}
			}
		}
	}

</style>

