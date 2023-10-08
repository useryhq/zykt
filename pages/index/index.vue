<template>
	<!-- 首页 -->
	<view class="page flex-col">
		<view class="group_1 flex-col">
			<view class="group_2 flex-col">
				<view class="block_2 flex-row justify-between">
					<view class="image-text_1 flex-row" @click="addressShow">
						<text class="text-group_1">{{address}}</text>
						<text class="thumbnail_1 iconfont">&#xe686;</text>
					</view>
					<view class="text-wrapper_1 flex-col" @click="ToSearch">
						<text class="text_2">搜索想要的空调产品</text>
					</view>
					<view class="image-wrapper_1 flex-col">
						<text class="iconfont label_2">&#xe78b;</text>
					</view>
				</view>
			</view>
			<view v-show="addShow" class="choose_address">
				<uni-indexed-list :options="localData" :show-select="true" @click="bindClick" />
			</view>
			<view class="group_5 flex-col">
				<view class="block_3 flex-row justify-between">
					<view class="section_1 flex-row">
						<view class="image-text_2 flex-row justify-between">
							<view class="image-wrapper_2 flex-col">
								<text class="iconfont label_3">&#xe60e;</text>
							</view>
							<view class="text-group_2 flex-col justify-between" @click="buyKt">
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
							<view class="text-group_3 flex-col justify-between" @click="sellKt">
								<text class="text_5">我要卖空调</text>
								<text class="text_6">一键发布&nbsp;&nbsp;快速匹配</text>
							</view>
						</view>
					</view>
				</view>
				<view class="block_4 flex-col">
					<view class="list_1 flex-row">
						<view class="image-text_4 flex-col justify-between" v-for="(item, index) in loopData0"
							:key="index" @click="toBrandTwo(item.id,item.url)">
							<image class="image_3" referrerpolicy="no-referrer" :src="imgUrl + 'logo/' + item.logo" />
							<text class="text-group_4">{{item.name}}</text>
						</view>
					</view>
					<view class="box_2 flex-row">
						<view class="list_2 flex-row justify-between">
							<view class="image-text_5 flex-col justify-between" v-for="(item, index) in loopData1"
								:key="index" @click="toBrandTwo(item.id,item.url)">
								<image class="image_4" referrerpolicy="no-referrer"
									:src="imgUrl + 'logo/' + item.logo" />
								<text class="text-group_5">{{item.name}}</text>
							</view>
						</view>
						<view class="image-text_9 flex-row justify-between" @click="toBrand()">
							<text class="iconfont label_5">&#xe6b3;</text>
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
							<text class="paragraph_1" @click="toWantBuyDetail(item.id)">
								{{item.title}}
								<br />
							</text>
						</view>
					</view>
				</view>
			</view>
			<view class="group_7 flex-col">
				<view class="text-wrapper_2 flex-row justify-start">
					<text :class="[add == 2 ? 'text_8 click_text' : 'text_8']" @click="choose_status(2)">商家</text>
					<text :class="[add == 1 ? 'text_9 click_text' : 'text_9']" @click="choose_status(1)">个人</text>
					<view :class="[add == 2 ? 'group_left' : 'group_right']"></view>
				</view>
				<view v-if="add == 2" class="group_8 flex-row justify-between">
					<view class="box_3 flex-col" v-for="(item,index) in ktlist1" :key="index"
						@click="toProductDetail(item.goods_id)">
						<image class="kt_img" :src="imgUrl + item.thumb"></image>
						<view class="text-wrapper_3 flex-row justify-between">
							<text class="paragraph_2">
								{{item.goods_name}}
							</text>
						</view>
						<view class="text-wrapper_4 flex-row">
							<text class="text_10">￥{{item.market_price}}</text>
							<text class="text_11">{{item.region_id}}</text>
						</view>
					</view>
				</view>
				<view v-if="add == 1" class="group_8 flex-row justify-between">
					<view class="box_3 flex-col" v-for="(item,i) in ktlist2" :key="i"
						@click="toProductDetailH(item.goods_id)">
						<image class="kt_img" :src="imgUrl + item.thumb"></image>
						<view class="text-wrapper_3 flex-row justify-between">
							<text class="paragraph_2">
								{{item.goods_name}}
							</text>
						</view>
						<view class="text-wrapper_4 flex-row">
							<text class="text_10">￥{{item.market_price}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="group_12 flex-row">
				<view :class="[selectTab == 1 ? 'image-text_11 flex-col color' : 'image-text_11 flex-col']"
					@click="slecetTab(1)">
					<text class="iconfont label_6">&#xe674;</text>
					<text class="text-group_11">首页</text>
				</view>
				<view :class="[selectTab == 2 ? 'image-text_12 flex-col color' : 'image-text_12 flex-col']"
					@click="ToHotProduct('1')">
					<text class="iconfont label_7">&#xe60e;</text>
					<text class="text-group_12">家用空调</text>
				</view>
				<view :class="[selectTab == 3 ? 'image-text_13 flex-col color' : 'image-text_13 flex-col']"
					@click="ToHotProduct('2')">
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
	import {
		indexGoodsList,
		brandHot,
		wantBuy,
		getCity,
		getCityList,
		my
	} from '../../static/js/api.js'
	export default {
		data() {
			return {
				loopData0: [],
				loopData1: [],
				message: [],
				ktlist1: [],
				ktlist2: [],
				localData: [],
				address: '郑州',
				addShow: false,
				add: 2,
				selectTab: 1,
				imgUrl: this.$imgUrl.img_base_url,
				constants: {},
			};
		},
		methods: {
			//获取商品列表
			async getIndexGoodsList(t,id) {
				let data = {
					city_id: id,
					type: t
				}
				let res = await indexGoodsList(data)
				// console.log(res)
				if(t == 1) {
					//个人
					this.ktlist2 = res.lists
				} else {
					//2是商家
					this.ktlist1 = res.lists
				}
			},
			// 获取热门品牌数据
			async getBrandHot() {
				let data = await brandHot()
				// console.log(data)
				this.loopData0 = data.hot1
				this.loopData1 = data.hot2
			},
			//获取最新求购
			async getWantBuy() {
				let data = await wantBuy()
				// console.log(data)
				this.message = data.lists
			},
			//获取市列表
			async getCityLists() {
				let res = await getCityList()
				this.localData = res
				// console.log(res)
			},
			//获取个人信息判断是否为商家
			//卖空调
			async getMy1(e) {
				let data = {
					userid: e
				}
				let res =  await my(data)
				console.log(res)
				if(res.shopStatus == 2) {
					uni.navigateTo({
						url: '/pageB/pages/business/releaseCommodity'
					})
				}else {
					uni.navigateTo({
						url: '/pageA/pages/my/releaseCommodity'
					})
				}
			},
			//买空调
			async getMy2(e) {
				let data = {
					userid: e
				}
				let res =  await my(data)
				console.log(res)
				if(res.shopStatus == 2) {
					uni.navigateTo({
						url: '/pageB/pages/my/releaseWantBuy'
					})
				}else {
					uni.navigateTo({
						url: '/pageA/pages/my/releaseWantBuy'
					})
				}
			},
			//买空调一键发布
			buyKt() {
				uni.getStorage({
					key: 'userId',
					success:(res) => {
						// console.log(res)
						this.getMy2(res.data)
						// uni.navigateTo({
						// 	url: '/pageA/pages/my/releaseWantBuy'
						// })
					},
					fail:(res) => {
						// console.log(res)
						uni.navigateTo({
							url: '/pageC/pages/login/login'
						})
					}
				})
			},
			//卖空调一键发布
			sellKt() {
				uni.getStorage({
					key: 'userId',
					success:(res) => {
						// console.log(res)
						this.getMy1(res.data)
						// uni.navigateTo({
						// 	url: '/pageA/pages/my/releaseCommodity'
						// })
					},
					fail:(res) => {
						// console.log(res)
						uni.navigateTo({
							url: '/pageC/pages/login/login'
						})
					}
				})
			},
			//切换商家个人
			choose_status(e) {
				//1是个人，2是商家
				this.add = e
				this.getIndexGoodsList(e)
				
			},
			//tab栏跳转
			slecetTab(e) {
				// console.log(e)
				this.selectTab = e
				if (e == 4) {
					//跳转二手门店
					uni.navigateTo({
						url: '/pages/twoHand/twoHand'
					})
				} else if (e == 5) {
					//跳转我的
					uni.getStorage({
						key: 'userId',
						success:(res) => {
							// console.log(res)
							uni.navigateTo({
								url: '/pageA/pages/my/my?userid=' + res.data
							})
						},
						fail:(res) => {
							// console.log(res)
							uni.navigateTo({
								url: '/pageC/pages/login/login'
							})
						}
					})
				}
			},
			//跳转搜索
			ToSearch() {
				uni.navigateTo({
					url: '/pageC/pages/search/search'
				})
			},
			ToHotProduct(e) {
				//跳转家用空调
				if (e == 1) {
					this.selectTab = 2,
						uni.navigateTo({
							url: '/pages/hotProduct/hotProduct?item=' + e
						})
				}
				//跳转商用空调
				if (e == 2) {
					this.selectTab = 3,
						uni.navigateTo({
							url: '/pages/hotProduct/hotProduct?item=' + e
						})
				}
			},
			//跳转商家详情
			toProductDetail(e) {
				uni.navigateTo({
					url: '/pages/productDetail/productDetail?id=' + e
				})
			},
			//跳转个人详情
			toProductDetailH(e) {
				uni.navigateTo({
					url: '/pages/productDetailH/productDetailH?id=' + e
				})
			},
			// 跳转求购列表
			TowantToBuy() {
				uni.navigateTo({
					url: '/pageC/pages/wantToBuy/wantToBuy'
				})
			},
			// 跳转品牌
			toBrand() {
				uni.navigateTo({
					url: '/pageC/pages/brand/brand'
				})
			},
			// 跳转品牌二级列表
			toBrandTwo(id, url) {
				// console.log(url)
				let c = url.split('c=')[1]
				// console.log(c)
				uni.navigateTo({
					url: '/pageC/pages/brand/brandTwo?id=' + id + '&c=' + c
				})
			},
			//跳转求购详情
			toWantBuyDetail(id) {
				uni.navigateTo({
					url: '/pageC/pages/wantToBuy/wantBuyDetail?id=' + id
				})
			},
			// 获取地址
			getGps() {
				// console.log('gps')
				let that = this
				uni.authorize({
					scope: 'scope.userLocation',
					success() {
						// console.log("========")
						uni.getLocation({
							type: 'wgs84',
							success: function(res) {
								console.log("+++++++")
								console.log('当前位置的经度：' + res.longitude);
								console.log('当前位置的纬度：' + res.latitude);
								that.indexGetCity(res.latitude,res.longitude)
								let storage = {
										lat: res.latitude,
										lng: res.longitude
									}
								let storageData = JSON.stringify(storage)	
								uni.setStorage({
									key:'longlat',
									data: storageData,
									success() {
										// console.log("123")
									}
								})
							}
						});
					},
					fail: (res) => {
						uni.showModal({
							content: '检测到您没打开获取信息功能权限，是否去设置打开？',
							confirmText: "确认",
							cancelText: '取消',
							success: (res) => {
								if (res.confirm) {
									uni.openSetting({
										success: (res) => {
											console.log(res);
										}
									})
								} else {
									console.log('取消');
								}
							}
						})
					}
				})
				// console.log(this.longitude,this.latitude,"1230")
			},
			//根据经纬度获取城市名称
			async indexGetCity(latitude,longitude) {
				let data = {
					lat: latitude,
					lng: longitude
				}
				// console.log(data)
				let res = await getCity(data)
				this.address = res.cityName
				// console.log(res)
				this.getIndexGoodsList(2,res.cityId)
			},
			//显示城市列表
			addressShow() {
				this.addShow = true
			},
			//选择地址
			bindClick(e) {
				this.address = e.item.itemobj.name
				this.getIndexGoodsList(2,e.item.itemobj.id)
				this.addShow = false
				// console.log(e)
				uni.setStorage({
					key:'cityId',
					data: e.item.itemobj.id,
					success() {
						// console.log("123")
					}
				})
			}
		},
		onLoad() {
			this.getGps()
			this.getBrandHot()
			this.getWantBuy()
			this.getCityLists()
			// console.log(this.imgUrl)
		},
	};
</script>
<style>
	@import '../../static/css/common.css';
</style>

<style lang="less" scoped>
	@aaa: ~'>>>';
	.page {
		position: relative;
		width: 750rpx;
		height: 100%;
		// overflow: hidden;

		.group_1 {
			width: 750rpx;

			.group_2 {
				width: 750rpx;
				height: 110rpx;
				background: url(/static/bg/ps59drfwoeaop2rwmujyrphvuaeqgb0axqfdf6667e-c63f-4b00-961c-724335a2ad65.png) 0rpx -1rpx no-repeat;
				background-size: 750rpx 100rpx;

				.block_2 {
					width: 693rpx;
					height: 56rpx;
					margin: 0 0 39rpx 28rpx;

					.image-text_1 {
						width: 140rpx;
						height: 24rpx;
						margin-top: 18rpx;

						.text-group_1 {
							height: 24rpx;
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
							font-size: 28rpx;
							color: #fff;
							margin-left: 8rpx;
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
			.choose_address {
				width: 750rpx;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.6);
				position: absolute;
				z-index: 998;
				@{aaa} .uni-indexed-list {
						top: 100rpx;
						left: 0;
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
								background-color: #E43930;
								width: 80rpx;
								border-radius: 50%;

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
								background-color: #F09B0F;
								width: 80rpx;
								border-radius: 50%;

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
								color: #333;
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
								font-size: 30rpx;
								color: #000;
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
					position: relative;

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

					.group_left {
						background-color: rgba(230, 60, 49, 1);
						border-radius: 2px;
						position: absolute;
						left: 20rpx;
						bottom: 0;
						width: 64rpx;
						height: 4rpx;
					}

					.group_right {
						background-color: rgba(230, 60, 49, 1);
						border-radius: 2px;
						position: absolute;
						left: 128rpx;
						bottom: 0;
						width: 64rpx;
						height: 4rpx;
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
				padding-bottom: constant(safe-area-inset-bottom); /*兼容 IOS<11.2*/
				padding-bottom: env(safe-area-inset-bottom); /*兼容 IOS>11.2*/

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