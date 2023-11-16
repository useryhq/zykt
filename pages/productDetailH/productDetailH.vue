<template>
	<!-- 产品详情个人 -->
	<view class="page">
		<view class="goods-block">
			<!-- 商品轮播 -->
			<view class="top-swiper">
				<swiper class="swiper-block" :indicator-dots="true" :autoplay="true" indicator-active-color="#fa6a4a"
					:circular="true">
					<block v-for="(item,index) in images" :key="index">
						<swiper-item>
							<image mode="aspectFill" :src="imgUrl + item"></image>
						</swiper-item>
					</block>
				</swiper>
			</view>
			<view class="group_6 flex-col">
				<view class="box_2 flex-row justify-between">
					<text class="text_6">￥{{info.shop_price}}</text>
					<view class="image-text_1 flex-row justify-between" :class="{'tab_color' : store == 1}" @click="postCollect(1)">
						<text class="iconfont">&#xe64c;</text>
						<text class="text-group_1">收藏</text>
					</view>
				</view>
				<text class="text_7">
					{{info.goods_name}}
				</text>

				<view class="box_3 flex-row justify-between">
					<view class="text-wrapper_2">
						<text class="text_8">成色：</text>
						<text class="text_10">{{info.chengse}}</text>
					</view>
					<view class="text-wrapper_3 flex-row">
						<text class="text_12">商品所在地：</text>
						<text class="text_13">{{info.province_id}}{{info.city_id}}{{info.area_id}}</text>
					</view>
				</view>
				<view class="box_4 flex-row justify-between align-center">
					<view class="flex-row align-center">
						<image class="image_1" :src="imgUrl + info.user.thumb"></image>
						<text class="image-text">{{info.user.nick_name}}</text>
					</view>
					<view class="image-text_2">
						<text class="image-text_3">发布时间:</text>
						<text class="image-text_4">{{info.created_at}}</text>
					</view>
				</view>
			</view>
			<view class="group_16">
				<view class="group_13 flex-col">
					<view class="group_14 flex-row justify-between">
						<view class="block_6 flex-col"></view>
						<text class="text_30">详情</text>
					</view>
					<view class="image-text_5 flex-row justify-between">
						<text class="iconfont thumbnail_1">&#xe67e;</text>
						<text class="text-group_7">规格</text>
					</view>
					<view :style="{'height': openHeight + 'rpx'}" class="paragraph_5 flex-col">
						<text v-for="(item,index) in ktParameter" :key="index">{{item.text}}</text>
					</view>
					<view class="justify-center">
						<view class="image-text_6 flex-row justify-center align-center" @click="open">
							<text class="text-group_8">展开</text>
							<text class="iconfont thumbnail_2">&#xe686;</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="img_block">
			<view class="img_list">
				<image v-for="(item,index) in images" :src="imgUrl + item" :key="index"></image>
			</view>
		</view>
		<view class="words-written">
			<view class="written_text_icon">
				<text class="iconfont written_icon">&#xe649;</text>
				<text class="written_text">留言</text>
			</view>
			<form @submit="postSendMessage">
				<textarea class="written_textarea" @input="inTextarea" @blur="inTextareaEnd"
					disable-default-padding='true' auto-blur='true' cols="30" rows="10" placeholder='有问题就点击问问更多细节吧!'
					placeholder-style='color:#333;font-size:24rpx;'></textarea>
				<view v-if="send" class="mt_20 justify-end">
					<button form-type="submit" class="send">
						发送
					</button>
				</view>
			</form>
			<swiper class="written_block" vertical="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item,index) in wordsWritten" :key="index">
					<view class="block_4 flex-row align-center">
						<image class="label_4" :src="imgUrl + item.avatar"></image>
						<text class="text_19">{{item.username}}</text>
						<text class="text_20">{{item.created_at}}</text>
					</view>
					<view class="text-wrapper_4">
						<text class="paragraph_2">
							{{item.notes}}
						</text>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="group_17 xj flex-row justify-around">
			<view class="image-text_8 flex-col justify-around" @click="tabClick(1)">
				<text class="iconfont label_9" :class="{'tab_color' : collect == 1}">&#xe6eb;</text>
				<text class="text-group_10">分享</text>
			</view>
			<view class="image-text_9 flex-col justify-around" @click="tabClick(2)">
				<text class="iconfont label_10" :class="{'tab_color' : collect == 2}">&#xe670;</text>
				<text class="text-group_11">收藏</text>
			</view>
			<view class="image-text_10 flex-col justify-around" @click="tabClick(3)">
				<text class="iconfont label_11" :class="{'tab_color' : collect == 3}">&#xe649;</text>
				<text class="text-group_12">留言</text>
			</view>
			<view class="text-wrapper_10" @click="tabClick(info.shouji)">
				<text class="text_32">电话</text>
			</view>
		</view>
		<uni-popup ref="popup" type="message">
			<uni-popup-message type="success" message="成功消息" :duration="3000">{{prompt}}</uni-popup-message>
		</uni-popup>
	</view>
</template>

<script>
	import {
		productDetailH,
		sendMessage,
		collect
	} from '../../static/js/api.js'
	export default {
		data() {
			return {
				userid: '',
				id: '',
				info: '',
				textarea: '',
				openHeight: 330,
				send: false,
				store: 0,
				collect: 0,
				shoppingCart: 0,
				imgUrl: this.$imgUrl.img_base_url,
				images: [],
				ktParameter: [{
						text: '型号：120'
					},
					{
						text: '规格：制冷剂R32'
					},
					{
						text: '电压/频率：380V/50Hz'
					},
					{
						text: '内机净重：78kg'
					},
					{
						text: '产品特色：除甲醛不支持除甲醛'
					},
					{
						text: '独立除湿：支持独立除湿'
					},
					{
						text: '自动清洁：内外机自动清洁'
					},
					{
						text: '功能制冷量：12000W'

					}, {
						text: '独立除湿：支持独立除湿'
					},
					{
						text: '自动清洁：内外机自动清洁'
					},
					{
						text: '功能制冷量：12000W'

					}
				],
				wordsWritten: [],
				prompt: '',
			};
		},
		methods: {
			// 获取商品详情数据
			async getProductDetailH(id) {
				let data = {
					id: id
				}
				// console.log(data,"data")
				let res = await productDetailH(data)
				// console.log(res)
				this.info = res.info
				this.wordsWritten = res.notesInfo
				this.images.push(res.info.thumb)
			},
			//提交留言
			async postSendMessage() {
				let data = {
					userid: this.userid,
					type: '1',
					notes: this.textarea,
					goods_id: this.id
				}
				let res = await sendMessage(data)
				// console.log(res)
				this.prompt = res.msg
				this.$refs.popup.open('top')
			},
			//商品收藏
			async postCollect(e) {
				this.store = e
				let  data = {
					type: '1',
					item_id: this.id,
					userid: this.userid
				}
				let res = await collect(data)
				this.prompt = res.msg
				this.$refs.popup.open('top')
				// console.log(res)
			},
			//规格展开
			open() {
				this.openHeight = this.ktParameter.length * 48
			},
			//输入留言
			inTextarea(e) {
				// console.log(e)
				if (e.detail.cursor > 0) {
					this.send = true
				} else {
					this.send = false
				}
			},
			//留言输入结束
			inTextareaEnd(e) {
				// console.log(e)
				this.textarea = e.detail.value
			},
			// 详情下方点击功能
			tabClick(e) {
				this.collect = e
				if (e == 1) {
					
				} else if (e == 2) {
					// console.log(this.collect)
					this.postCollect()
				} else if (e == 3) {
					uni.createSelectorQuery().select('.page').boundingClientRect(res => {
						uni.createSelectorQuery().select('.words-written').boundingClientRect(data => {
							uni.pageScrollTo({
								duration: 100,
								scrollTop: data.top - res.top
							})
						}).exec()
					}).exec()
				} else {
					uni.makePhoneCall({
						phoneNumber: e
					});
				}
			},
		},
		onLoad(option) {
			this.id = option.id
			// console.log(option)
			this.getProductDetailH(option.id)
			uni.getStorage({
				key: 'userId',
				success: (res) => {
					this.userid = res.data
				}
			})
		}
	}
</script>
<style lang='less'>
	@import '../../static/css/common.css';
</style>
<style lang="less">
	.page {
		position: relative;

		.goods-block {
			.top-swiper {
				.swiper-block {
					height: 500rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}

			.group_6 {
				width: 750rpx;
				height: 288rpx;
				background-color: #fff;

				.box_2 {
					width: 692rpx;
					height: 40rpx;
					padding: 21rpx 30rpx 0 33rpx;
					background-color: #fff;

					.text_6 {
						width: 166rpx;
						height: 40rpx;
						overflow-wrap: break-word;
						color: rgba(230, 60, 49, 1);
						font-size: 36rpx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						text-align: left;
						white-space: nowrap;
						line-height: 40rpx;
						margin-top: 2rpx;
					}

					.image-text_1 {
						width: 77rpx;
						height: 24rpx;

						.label_3 {
							width: 24rpx;
							height: 22rpx;
						}

						.text-group_1 {
							width: 45rpx;
							height: 23rpx;
							overflow-wrap: break-word;
							color: rgba(51, 51, 51, 1);
							font-size: 24rpx;
							font-family: PingFang-SC-Regular;
							font-weight: NaN;
							text-align: left;
							white-space: nowrap;
							line-height: 36rpx;
							margin-top: 1rpx;
						}
					}
				}

				.text_7 {
					width: 692rpx;
					height: 40rpx;
					overflow-wrap: break-word;
					color: rgba(51, 51, 51, 1);
					font-size: 24rpx;
					font-family: PingFang-SC-Regular;
					font-weight: NaN;
					text-align: left;
					white-space: nowrap;
					line-height: 40rpx;
					padding: 10rpx 30rpx 10rpx 28rpx;
					background-color: #fff;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				.image_3 {
					width: 750rpx;
					height: 1rpx;
					margin-top: 18rpx;
				}

				.box_3 {
					width: 692rpx;
					height: 30rpx;
					margin-top: 4rpx;
					padding: 0 24rpx 16rpx 34rpx;
					background-color: #fff;

					.text-wrapper_2 {
						width: 136rpx;
						height: 30rpx;
						overflow-wrap: break-word;
						font-size: 0;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						white-space: nowrap;

						.text_8 {
							width: 127rpx;
							height: 30rpx;
							overflow-wrap: break-word;
							color: rgba(153, 153, 153, 1);
							font-size: 24rpx;
							font-family: PingFang-SC-Regular;
							font-weight: NaN;
							text-align: left;
							white-space: nowrap;
							line-height: 30rpx;
						}

						.text_10 {
							width: 127rpx;
							height: 30rpx;
							overflow-wrap: break-word;
							color: rgba(51, 51, 51, 1);
							font-size: 24rpx;
							font-family: PingFang-SC-Regular;
							font-weight: NaN;
							text-align: left;
							white-space: nowrap;
							line-height: 30rpx;
						}
					}

					.text-wrapper_3 {
						width: 450rpx;
						height: 30rpx;
						overflow-wrap: break-word;
						font-size: 0;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						white-space: nowrap;
						line-height: 30rpx;

						.text_12 {
							width: 138rpx;
							height: 30rpx;
							overflow-wrap: break-word;
							color: rgba(153, 153, 153, 1);
							font-size: 24rpx;
							font-family: PingFang-SC-Regular;
							font-weight: NaN;
							text-align: left;
							white-space: nowrap;
							line-height: 30rpx;
						}

						.text_13 {
							width: 312rpx;
							height: 30rpx;
							color: rgba(51, 51, 51, 1);
							font-size: 24rpx;
							font-family: PingFang-SC-Regular;
							font-weight: NaN;
							text-align: left;
							line-height: 30rpx;
							text-overflow: ellipsis;
							overflow: hidden;
							white-space: nowrap;
						}
					}
				}

				.box_4 {
					width: 690rpx;
					height: 80rpx;
					padding: 10rpx 30rpx;
					background-color: #fff;
					border-top: 1rpx solid #e6e6e6;
					border-bottom: 1rpx solid #e6e6e6;

					.image_1 {
						width: 68rpx;
						height: 68rpx;
						margin-right: 10rpx;
						border-radius: 50%;
					}

					.image-text {
						width: 200rpx;
						height: 28rpx;
						font-size: 28rpx;
						line-height: 28rpx;
						font-weight: 500;
						color: #333;
						text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
					}

					.image-text_3 {
						font-size: 22rpx;
						color: #999;
						line-height: 24rpx;
					}

					.image-text_4 {
						font-size: 24rpx;
						color: #333;
						line-height: 24rpx;
					}
				}
			}

			.group_16 {
				background-color: rgba(255, 255, 255, 1);
				border-radius: 10px;
				width: 750rpx;
				margin-top: 30rpx;

				.group_13 {
					background-color: rgba(255, 255, 255, 1);
					border-radius: 10px;
					width: 750rpx;

					.group_14 {
						width: 76rpx;
						height: 29rpx;
						margin: 30rpx 0 0 30rpx;

						.block_6 {
							background-color: rgba(230, 60, 49, 1);
							border-radius: 1px;
							width: 3rpx;
							height: 28rpx;
							margin-top: 1rpx;
						}

						.text_30 {
							width: 58rpx;
							height: 28rpx;
							overflow-wrap: break-word;
							color: rgba(51, 51, 51, 1);
							font-size: 30rpx;
							font-family: PingFang-SC-Medium;
							font-weight: 500;
							text-align: left;
							white-space: nowrap;
							line-height: 36rpx;
						}
					}

					.image-text_5 {
						width: 100rpx;
						height: 36rpx;
						margin: 26rpx 0 0 29rpx;

						.thumbnail_1 {
							width: 36rpx;
							height: 36rpx;
							font-size: 36rpx;
						}

						.text-group_7 {
							width: 58rpx;
							height: 36rpx;
							overflow-wrap: break-word;
							color: rgba(51, 51, 51, 1);
							font-size: 30rpx;
							font-family: PingFang-SC-Medium;
							font-weight: 500;
							text-align: left;
							white-space: nowrap;
							line-height: 36rpx;
						}
					}

					.paragraph_5 {
						width: 690rpx;
						height: 330rpx;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 24rpx;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						line-height: 48rpx;
						margin: 28rpx 35rpx 40rpx 35rpx;
						overflow: hidden;
					}

					.over {
						overflow: block;
					}

					.image-text_6 {
						width: 112rpx;
						height: 38rpx;
						border: 1px solid #BFBFBF;
						border-radius: 19rpx;

						.text-group_8 {
							width: 50rpx;
							height: 24rpx;
							overflow-wrap: break-word;
							color: rgba(51, 51, 51, 1);
							font-size: 24rpx;
							font-family: PingFang-SC-Regular;
							font-weight: NaN;
							line-height: 24rpx;
						}

						.thumbnail_2 {
							width: 18rpx;
							height: 18rpx;
							margin-left: 10rpx;
							font-size: 18rpx;
							color: #000000;
						}
					}
				}
			}
		}

		.img_block {
			background-color: rgba(255, 255, 255, 1);
			border-radius: 10px;
			width: 750rpx;
			padding-top: 30rpx;
			background-color: #fff;

			.img_list {
				width: 690rpx;
				margin: 0 0 30rpx 30rpx;

				image {
					width: 100%;
				}
			}
		}

		.words-written {
			width: 690rpx;
			height: 238rpx;
			background-color: #fff;
			margin-top: 18rpx;
			padding: 36rpx 30rpx 130rpx 30rpx;

			.written_text_icon {
				.written_icon {
					font-size: 26rpx;
					color: #333;
				}

				.written_text {
					font-size: 30rpx;
					color: #333;
				}
			}

			.written_textarea {
				width: 680rpx;
				height: 60rpx;
				margin-top: 30rpx;
				padding: 10rpx 0 0 10rpx;
				background-color: #eee;
				border: 1rpx solid #BFBFBF;
				border-radius: 10rpx;
				font-size: 24rpx;
			}

			.send {
				width: 100rpx;
				height: 40rpx;
				border-radius: 10rpx;
				background-color: #E63C31;
				font-size: 22rpx;
				color: #fff;
				line-height: 40rpx;
				text-align: center;
			}

			.written_block {
				width: 690rpx;
				height: 120rpx;

				.block_4 {
					width: 690rpx;
					height: 42rpx;
					margin-top: 23rpx;

					.label_4 {
						width: 45rpx;
						height: 45rpx;
					}

					.text_19 {
						width: 116rpx;
						height: 30rpx;
						overflow-wrap: break-word;
						color: rgba(153, 153, 153, 1);
						font-size: 22rpx;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						white-space: nowrap;
						line-height: 30rpx;
						margin: 13rpx 0 0 8rpx;
					}

					.text_20 {
						width: 131rpx;
						height: 30rpx;
						overflow-wrap: break-word;
						color: rgba(153, 153, 153, 1);
						font-size: 22rpx;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						white-space: nowrap;
						line-height: 30rpx;
						margin: 13rpx 0 0 394rpx;
					}
				}

				.text-wrapper_4 {
					width: 670rpx;
					margin: 14rpx 0 0 20rpx;
					overflow-wrap: break-word;
					font-size: 24rpx;
					font-family: MicrosoftYaHei;
					font-weight: NaN;
					text-align: left;
					line-height: 34rpx;

					.paragraph_2 {
						width: 670rpx;
						height: 53rpx;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 24rpx;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						line-height: 30rpx;
					}
				}
			}
		}

		.group_17 {
			width: 750rpx;
			box-shadow: 0px 5px 8px 0px rgba(92, 92, 92, 0.66);
			background-color: rgba(255, 255, 255, 1);
			position: fixed;
			left: 0;
			bottom: 0;
			padding-bottom: constant(safe-area-inset-bottom);
			/*兼容 IOS<11.2*/
			padding-bottom: env(safe-area-inset-bottom);

			/*兼容 IOS>11.2*/
			.image-text_8 {
				width: 47rpx;
				height: 80rpx;
				margin: 14rpx 0 0 33rpx;

				.label_9 {
					width: 47rpx;
					height: 44rpx;
					font-size: 44rpx;
				}

				.text-group_10 {
					width: 46rpx;
					height: 24rpx;
					overflow-wrap: break-word;
					color: rgba(51, 51, 51, 1);
					font-size: 24rpx;
					font-family: PingFang-SC-Regular;
					font-weight: NaN;
					text-align: left;
					white-space: nowrap;
					line-height: 20rpx;
				}
			}

			.image-text_9 {
				width: 47rpx;
				height: 80rpx;
				margin: 14rpx 0 0 65rpx;

				.label_10 {
					width: 46rpx;
					height: 44rpx;
					font-size: 44rpx;
				}

				.text-group_11 {
					width: 45rpx;
					height: 24rpx;
					overflow-wrap: break-word;
					color: rgba(51, 51, 51, 1);
					font-size: 24rpx;
					font-family: PingFang-SC-Regular;
					font-weight: NaN;
					text-align: left;
					white-space: nowrap;
					line-height: 20rpx;
				}
			}

			.image-text_10 {
				width: 71rpx;
				height: 80rpx;
				margin: 14rpx 0 0 56rpx;

				.label_11 {
					width: 50rpx;
					height: 50rpx;
					font-size: 50rpx;
				}

				.text-group_12 {
					width: 70rpx;
					height: 24rpx;
					overflow-wrap: break-word;
					color: rgba(51, 51, 51, 1);
					font-size: 24rpx;
					font-family: PingFang-SC-Regular;
					font-weight: NaN;
					text-align: left;
					white-space: nowrap;
					line-height: 20rpx;
				}
			}

			.text-wrapper_9 {
				background-color: rgba(255, 255, 255, 1);
				border-radius: 30px;
				height: 60rpx;
				border: 1px solid rgba(166, 166, 166, 1);
				width: 180rpx;
				margin: 19rpx 0 0 27rpx;
				text-align: center;

				.text_31 {
					width: 147rpx;
					height: 30rpx;
					overflow-wrap: break-word;
					color: rgba(51, 51, 51, 1);
					font-size: 30rpx;
					font-family: PingFang-SC-Regular;
					font-weight: NaN;
					text-align: left;
					white-space: nowrap;
					line-height: 60rpx;
				}
			}

			.text-wrapper_10 {
				background-color: rgba(230, 60, 49, 1);
				border-radius: 30px;
				height: 60rpx;
				width: 180rpx;
				margin: 19rpx 30rpx 0 14rpx;
				text-align: center;

				.text_32 {
					width: 118rpx;
					height: 30rpx;
					overflow-wrap: break-word;
					color: rgba(255, 255, 255, 1);
					font-size: 30rpx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					text-align: left;
					white-space: nowrap;
					line-height: 60rpx;
				}
			}
		}
		.tab_color {
			color: #E63C31;
		}
	}
</style>