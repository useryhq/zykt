<template>
	<!-- 热门产品 -->
	<view class="page flex-col">
		<view class="section_2 flex-col">
			<view class="group_2 flex-row justify-between">
				<view class="image-text_1 flex-row justify-between" @click="toClassifyList()">
					<text class="iconfont menu">&#xe677;</text>
					<text class="text-group_1">分类</text>
				</view>
				<view class="group_3 flex-row">
					<text class="search_icon iconfont">&#xe65c;</text>
					<input class="text-group_2" type="text" confirm-type="search" placeholder-style="font-size:22rpx;color:#999999" placeholder="搜索想要的空调产品" @confirm="searchKey($event)" />
				</view>
			</view>
		</view>
		<view class="section_3 flex-col">
			<view class="text-wrapper_1 flex-row align-center justify-start">
				<text :class="[add == 2 ? 'text_2 click_text' : 'text_2']" @click="choose_status(2)">商家</text>
				<text :class="[add == 1 ? 'text_3 click_text' : 'text_3']" @click="choose_status(1)">个人</text>
				<view :class="[add == 2 ? 'group_left' : 'group_right']"></view>
			</view>
			<view v-if="add == 2" class="box_3 flex-row justify-between">
				<view
					:class="[parameter == 1 ? 'text_4 flex-row click_text2 align-center' : 'text_4 flex-rowv align-center']"
					@click="chooseParameter(1)">
					价格
					<text :class="[parameter == 1 && arrow ? 'iconfont delta_transform' : 'iconfont']">&#xe688;</text>
				</view>
				<view
					:class="[parameter == 2 ? 'text_4 flex-row click_text2 align-center' : 'text_4 flex-rowv align-center']"
					@click="chooseParameter(2)">
					销量
					<text :class="[parameter == 2 && arrow ? 'iconfont delta_transform' : 'iconfont']">&#xe688;</text>
				</view>
				<view
					:class="[parameter == 3 ? 'text_4 flex-row click_text2 align-center' : 'text_4 flex-rowv align-center']"
					@click="chooseParameter(3)">
					品牌
					<text :class="[parameter == 3 && arrow ? 'iconfont delta_transform' : 'iconfont']">&#xe688;</text>
				</view>
				<view
					:class="[parameter == 4 ? 'text_4 flex-row click_text2 align-center' : 'text_4 flex-rowv align-center']"
					@click="chooseParameter(4)">
					成色
					<text :class="[parameter == 4 && arrow ? 'iconfont delta_transform' : 'iconfont']">&#xe688;</text>
				</view>
			</view>
			<view v-if="add == 1" class="box_3 flex-row justify-between">
				<view
					:class="[parameter == 1 ? 'text_4 flex-row click_text2 align-center' : 'text_4 flex-rowv align-center']"
					@click="chooseParameter(1)">
					价格
					<text :class="[parameter == 1 && arrow ? 'iconfont delta_transform' : 'iconfont']">&#xe688;</text>
				</view>
				<view
					:class="[parameter == 3 ? 'text_4 flex-row click_text2 align-center' : 'text_4 flex-rowv align-center']"
					@click="chooseParameter(3)">
					品牌
					<text :class="[parameter == 3 && arrow ? 'iconfont delta_transform' : 'iconfont']">&#xe688;</text>
				</view>
				<view
					:class="[parameter == 4 ? 'text_4 flex-row click_text2 align-center' : 'text_4 flex-rowv align-center']"
					@click="chooseParameter(4)">
					成色
					<text :class="[parameter == 4 && arrow ? 'iconfont delta_transform' : 'iconfont']">&#xe688;</text>
				</view>
			</view>
			<view v-if="add == 2" class="group_8 flex-row justify-between">
				<view class="box_3 flex-col" v-for="(item,i) in ktlist" :key="i"
					@click="toProductDetail(item.goods_id)">
					<image v-if="item.thumb[0]" class="kt_img" :src="item.thumb[0]"></image>
					<view class="text-wrapper_3 flex-row justify-between">
						<text class="paragraph_2">
							{{item.goods_name}}
						</text>
					</view>
					<view class="text-wrapper_4 flex-row" @tap.stop.prevent>
						<text class="text_10" v-if="item.is_xunjia != 1"><text>￥</text>{{item.shop_price}}</text>
						<text class="text_10" v-else>询价</text>
						<text class="iconfont pk_text" @click="pkText(item)" v-if="item.pk">&#xe661;对比</text>
						<text class="iconfont pk_text choose_color" v-else>&#xe661;已选</text>
					</view>
					<view class="text-wrapper_4 flex-row">
						<text class="iconfont agent_icon">&#xe67d; 代理商</text>
						<text class="text_11">{{item.city_id}}</text>
					</view>
				</view>
			</view>
			<view v-if="add == 1" class="group_8 flex-row justify-between">
				<view class="box_3 flex-col" v-for="(item,index) in ktlist" :key="index"
					@click="toProductDetailH(item.goods_id)">
					<image v-if="item.thumb[0]" class="kt_img" :src="item.thumb[0]"></image>
					<view class="text-wrapper_3 flex-row justify-between">
						<text class="paragraph_2">
							{{item.goods_name}}
						</text>
					</view>
					<view class="text-wrapper_4 flex-row">
						<text class="text_10">￥{{item.shop_price}}</text>
						<text class="text_11">{{item.city_id}}</text>
					</view>
				</view>
			</view>
		</view>
		<view v-if="pkBlock" class="pk_block">
			<view class="mask"></view>
			<view class="mode">
				<view class="pk_title">
					<text>同类产品对比（{{pkBlockadd}}/3）</text>
					<text class="close_pk" @click="closePk">×</text>
				</view>
				<view class="product_message flex-row justify-between" v-for="(item,index) in pkMessage" :key="index">
					<text>{{item.title}}</text>
					<text class="iconfont dele" @click="deleProduct(index)">&#xe665;</text>
				</view>
				<view class="add_product">
					<view class="add_icon" @click="closePk">＋</view>
					<text>点击商品列表中对比按钮继续添加</text>
				</view>
				<view class="pk_btn" @click="toContrastDetail()">开始对比</view>
			</view>
		</view>
		<uni-popup ref="popup" type="message">
			<uni-popup-message type="warn" message="最多选择3个商品" :duration="5000"></uni-popup-message>
		</uni-popup>
	</view>
</template>
<script>
import {goodsList, fGoodsList} from '../../static/js/api.js'
	export default {
		data() {
			return {
				ktlist: [],
				add: 2,
				parameter: 0,
				arrow: false,
				pkBlock:false,
				pkBlockadd: 0,
				pkMessage:[],
				use: '',
				type: '2',
				num: 1,
				loading: 0,
			};
		},
		methods: {
			// 获取商品列表
			async getGoodList(data = {
					use: '',
					page: '20',
					type: '',
					key: '',
					priceDesc:'',
					brandDesc:'',
					cengseDesc:''
				}) {
				// console.log(data,"====")
				let res = await goodsList(data)
				// console.log(res,"res")
				this.ktlist = res.lists
				this.ktlist.forEach(item => {
					// console.log(item.thumb[0].substring(0,))
					if(item.thumb[0].substring(0,6) == 'upload') {
						item.thumb[0] = 'https://img.zykt.com/' + item.thumb[0]
					} else {
						item.thumb[0] = 'https://qn.zykt.com/' + item.thumb[0]
					}
				})
				// console.log(this.ktlist,"====")
				// console.log(this.ktlist)
			},
			// 分类跳转获取商品列表
			async getFgoodsList(id) {
				let data = {
					cate_id: id
				}
				let res = await fGoodsList(data)
				this.ktlist = res.lists
				this.ktlist.forEach(item => {
					if(item.thumb[0].substring(0,6) == 'upload') {
						item.thumb[0] = 'https://img.zykt.com/' + item.thumb[0]
					} else {
						item.thumb[0] = 'https://qn.zykt.com/' + item.thumb[0]
					}
				})
				// console.log(res)
			},
			//切换商家个人
			choose_status(e) {
				this.add = e
				this.type = e
				this.loading = 0
				this.getGoodList({
					use: this.use,
					page: '20',
					type: e,
					key: '',
					priceDesc:'',
					brandDesc:'',
					cengseDesc:''
				})
			},
			// 价格、销量、品牌、成色筛选
			chooseParameter(e) {
				this.parameter = e
				if(this.arrow) {
					this.arrow = false
				} else {
					this.arrow = true 
				}
				if(e == 1 && this.arrow) {
					this.getGoodList({
						use: this.use,
						page: '20',
						type: this.type,
						key: '',
						priceDesc:'0',
						brandDesc:'',
						cengseDesc:''
					})
				} else if(e == 1 && !this.arrow) {
					this.getGoodList({
						use: this.use,
						page: '20',
						type: this.type,
						key: '',
						priceDesc:'1',
						brandDesc:'',
						cengseDesc:''
					})
				} else if(e == 2 && this.arrow) {
					this.getGoodList({
						use: this.use,
						page: '20',
						type: this.type,
						key: '',
						priceDesc:'',
						brandDesc:'',
						salesDesc:'0',
						cengseDesc:''
					})
				} else if(e == 2 && !this.arrow) {
					this.getGoodList({
						use: this.use,
						page: '20',
						type: this.type,
						key: '',
						priceDesc:'',
						brandDesc:'',
						salesDesc:'1',
						cengseDesc:''
					})
				} 
				else if(e == 3 && this.arrow) {
					this.getGoodList({
						use: this.use,
						page: '20',
						type: this.type,
						key: '',
						priceDesc:'',
						brandDesc:'0',
						cengseDesc:''
					})
				} else if(e == 3 && !this.arrow) {
					this.getGoodList({
						use: this.use,
						page: '20',
						type: this.type,
						key: '',
						priceDesc:'',
						brandDesc:'1',
						cengseDesc:''
					})
				} else if(e == 4 && this.arrow) {
					this.getGoodList({
						use: this.use,
						page: '20',
						type: this.type,
						key: '',
						priceDesc:'',
						brandDesc:'',
						cengseDesc:'0'
					})
				} else if(e == 4 && !this.arrow) {
					this.getGoodList({
						use: this.use,
						page: '20',
						type: this.type,
						key: '',
						priceDesc:'',
						brandDesc:'',
						cengseDesc:'1'
					})
				}
			},
			//上拉加载更多
			async loadingMore() {
				// console.log(this.loading)
				if(this.loading !== 0)
				return false
				this.loading = 1
				uni.showLoading({
					title: 'Loading...', //提示的内容,
					mask: true, //显示透明蒙层，防止触摸穿透,
					success: res => {}
				})
				let data ={
						use: this.use,
						curpage: this.num,
						page: '20',
						type: this.type,
						key: '',
						priceDesc:'',
						brandDesc:'',
						cengseDesc:''
					}
					let res = await goodsList(data)
					// console.log(data)
				// console.log("res",res)
				// this.loopData0 = res.lists
				if(res.lists.length < 1) {
					this.loading = 2
					uni.hideLoading()
					return
				}
				this.ktlist = this.ktlist.concat(res.lists)
				this.ktlist.forEach(item => {
					if(item.thumb[0].substring(0,6) == 'upload') {
						item.thumb[0] = 'https://img.zykt.com/' + item.thumb[0]
					} else {
						item.thumb[0] = 'https://qn.zykt.com/' + item.thumb[0]
					}
				})
				// console.log(this.ktlist,"=======")
				this.num++
				this.loading = 0
				uni.hideLoading()
				
			},
			//搜索
			searchKey(e) {
				// console.log(e)
				this.getGoodList({
						use: this.use,
						page: '20',
						type: this.type,
						key: e.detail.value,
						priceDesc:'',
						brandDesc:'',
						cengseDesc:''
					})
			},
			// 对比弹窗
			pkText(e) {
				this.pkBlockadd ++
				// console.log(this.pkBlockadd)
				if(this.pkBlockadd > 3) {
					this.pkBlockadd = 3
					// console.log('=====')
					this.$refs.popup.open()
					this.pkBlock = true
					return
				} else {
					this.pkMessage.push({'title':e.goods_name,'id':e.goods_id})
					// console.log(this.pkMessage)
					e.pk = false,
					this.pkBlock = true
				}
				
			},
			closePk() {
				this.pkBlock = false
			},
			deleProduct(e) {
				// console.log(e)
				if(this.pkBlockadd > 0) {
					this.pkBlockadd --
					for(let i = 0; i < this.ktlist.length; i++) {
						// console.log("===",this.ktlist[i].goods_id)
						if(this.ktlist[i].goods_id == this.pkMessage[e].id) {
							// console.log(this.ktlist[i].goods_id)
							// console.log(this.pkMessage[e].id)
							this.ktlist[i].pk = true
						}
					}
					this.pkMessage.splice(e,1)
				}
			},
			// 对比弹窗结束
			// 跳转商家商品详情
			toProductDetail(e) {
				uni.navigateTo({
					url: '/pages/productDetail/productDetail?id=' + e
				})
			},
			// 跳转个人商品详情
			toProductDetailH(e) {
				uni.navigateTo({
					url: '/pages/productDetailH/productDetailH?id=' + e
				})
			},
			// 跳转热门分类
			toClassifyList() {
				uni.navigateTo({
					url: '/pageC/pages/classifyList/classifyList?use=' + this.use
				})
			},
			//跳转对比详情
			toContrastDetail() {
				let data = JSON.stringify(this.pkMessage)
				uni.navigateTo({
					url: '/pageC/pages/contrastDetail/contrastDetail?pk=' + data
				})
			}
		},
		onLoad(option) {
			// console.log(option)
			if(option.item) {
				this.getGoodList({
						use: option.item,
						page: '20',
						type: '2',
						key: '',
						priceDesc:'',
						brandDesc:'',
						cengseDesc:''
					})
				this.use = option.item
			} else if(option.cate_id) {
				this.getFgoodsList(option.cate_id)
				this.use = option.use
			}
		},
		onReachBottom() {
			this.loadingMore()
		}
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
			padding-bottom: 10rpx;
			.text-wrapper_1 {
				width: 665rpx;
				height: 32rpx;
				margin: 27rpx 0 0 14rpx;
				padding-bottom: 15rpx;
				border-bottom: 2rpx solid #A0A0A0;
				position: relative;
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
				.group_left {
					background-color: rgba(230, 60, 49, 1);
					border-radius: 2px;
					position: absolute;
					left: 24rpx;
					bottom: 0;
					width: 64rpx;
					height: 4rpx;
				}
				
				.group_right {
					background-color: rgba(230, 60, 49, 1);
					border-radius: 2px;
					position: absolute;
					left: 124rpx;
					bottom: 0;
					width: 64rpx;
					height: 4rpx;
				}
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
		}

		.group_8 {
			width: 690rpx;
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
.pk_block {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	.mask {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.6);
	}
	.mode {
		width: 686rpx;
		height: 600rpx;
		background-color: #fff;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 10rpx;
		margin: 0 auto;
		.pk_title {
			width: 100%;
			height: 60rpx;
			background-color: #FF0000;
			color: #fff;
			font-size: 30rpx;
			font-weight: 500;
			line-height: 60rpx;
			text-align: center;
			.close_pk {
				width: 38rpx;
				height: 38rpx;
				margin: 11rpx 26rpx 0 0;
				font-size: 30rpx;
				line-height: 38rpx;
				text-align: center;
				color: #fff;
				border: 2rpx solid #fff;
				border-radius: 50%;
				float: right;
			}
		}
		.product_message {
			width: 646rpx;
			height: 30rpx;
			margin: 0 auto;
			padding: 20rpx 10rpx;
			font-size: 24rpx;
			color: #333;
			line-height: 30rpx;
			text-align: left;
			border-bottom: 1rpx solid #BFBFBF;
			.dele {
				font-size: 24rpx;
				color: #5C5C5C;
			}
		}
		.add_product {
			width: 646rpx;
			height: 88rpx;
			margin: 0 auto;
			padding: 16rpx 0;
			font-size: 20rpx;
			color: #999;
			text-align: center;
			border-bottom: 1rpx solid #BFBFBF;
			.add_icon {
				width: 58rpx;
				height: 58rpx;
				margin: 0 auto;
				border-radius: 50%;
				border: 1rpx solid #B5B5B5;
				font-size: 44rpx;
				font-weight: 500;
				line-height: 58rpx;
			}
		}
		.pk_btn {
			width: 484rpx;
			height: 60rpx;
			margin: 100rpx auto auto auto;
			background-color: #E63C31;
			border-radius: 30rpx;
			font-size: 30rpx;
			color: #fff;
			line-height: 60rpx;
			text-align: center;
		}
}
}
	}
</style>