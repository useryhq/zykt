<template>
	<view class="page">
		<view class="section_1">
			<view class="block_2 flex-row justify-between align-center">
				<view class="image-text_1 flex-row align-center">
					<text class="iconfont icon_2">&#xe676;</text>
					<text class="text-group_1">格力二手空调专卖</text>
					<text class="iconfont icon_3">&#xe6a3;</text>
				</view>
				<view class="image-text_3">
					共计1件
				</view>
			</view>
			<view class="image-text_2 flex-row">
				<view class="group_5">
					<image src="../../../static/bg/0301162340.png" mode="aspectFit"></image>
				</view>
				<view class="text-group_2 flex-col">
					<view class="text-group_3 flex-row justify-between">
						<text class="paragraph_1">
							科龙（KELON）2/3/5匹天花机商用家用中央空调科龙（KELON）2/3/5匹天花机商用家用中央空调
						</text>
						<text class="num_text">
							×1
						</text>
					</view>

					<view class="flex-row justify-start">
						<text class="text_8">￥4899</text>
					</view>
				</view>
			</view>
		</view>
		<view class="section_4">
			<view class="block_3 justify-between">
				<text class="text_1">换货原因</text>
				<text class="text_2">请选择<text class="iconfont text_2">&#xe6a3;</text></text>
			</view>
			<view class="block_3 justify-between">
				<text class="text_1">换货件数</text>
				<uni-number-box class="num_box" min="1" @change=""></uni-number-box>
			</view>
		</view>
		<view class="section_4">
			<view class="block_3 justify-between">
				<text class="text_1">我的收货地址</text>
				<view class="block_4 flex-col">
					<text class="text_3">华瑞紫韵城5号楼<text class="iconfont text_2">&#xe6a3;</text></text>
					<text class="text_2">赵芳 136****1482 河南省郑州市中原区西流湖街道</text>
				</view>
			</view>
		</view>
		<view class="section_4">
			<view class="block_3">
				<text class="text_1">上传凭证<text class="text_4">（选填）</text></text>
				<view class="file-picker">
					<uni-file-picker ref="file" auto-upload="false" v-model="imageValue" :image-styles="imageStyles"
						limit="1" :del-icon="false" file-mediatype="image" @success="success" @select="select">
						<view class="button_2 flex-col">
							<text class="iconfont icon_2">&#xe67b;</text>
							点击上传
						</view>
					</uni-file-picker>
				</view>
			</view>
			<uni-popup ref="popup" type="message">
				<uni-popup-message type="success" message="成功消息" :duration="3000">{{prompt}}</uni-popup-message>
			</uni-popup>
		</view>
		<view class="section_4">
			<view class="block_3">
				<text class="text_1">补充描述</text>
				<text class="text_4">（选填）</text>
			</view>
			<textarea class="text_5" name="" id="" cols="30" rows="5"></textarea>
		</view>
		<view class="button" @click="submit()">
			提交
		</view>
	</view>
</template>

<script>
	import {
		qnToken
	} from "../../../static/js/api.js"
	export default {
		data() {
			return {
				token: '',
				prompt: '',
				imageStyles: {
					"width": 80,
					"height": 70,
					"border": {
						"color": "#D3D3D3",
						"width": "1rpx",
						"style": "solid"
					}
				},
			};
		},
		methods: {
			// 获取上传token
			async getQntoken() {
				const tokenData = await qnToken()
				this.token = tokenData.qiniu_token
				// console.log(tokenData)
			},
			//选择图片
			select(e) {
				console.log('选择文件：', e)
				//多文件上传
				// e.tempFilePaths.forEach(value => {
				// 	this.filePath.push(value)
				// })
				// console.log(this.filePath)
				//单文件上传
				this.filePath = e.tempFilePaths[0]
				this.name = e.tempFiles[0].name
				let that = this
				uni.uploadFile({
					filePath: that.filePath,
					name: 'file',
					url: 'https://upload-z1.qiniup.com',
					formData: {
						token: that.token,
						key: that.name
					},
					success(res) {
						console.log("上传成功", res)
						that.prompt = "上传成功，如果另有图片请再次上传"
						that.$refs.popup.open('top')

						setTimeout(() => {
							that.$refs.file.clearFiles()
						}, 2000)
					},
					fail(res) {
						console.log("上传失败", res)
					}
				})
				// console.log(this.name)
			},
			//多文件删除图片
			// delet(e) {
			// 	console.log(e)
			// let that = this
			// this.filePath.forEach((value,index) => {
			// 	if(value == e.tempFilePath) {
			// 		that.filePath.splice(index,1)
			// 	}
			// })
			// console.log(this.filePath)
			// },
			//上传
			// submitImg() {
			// },
		},
		onLoad() {
			this.getQntoken()
		}
	}
</script>
<style>
	@import '../../../static/css/common.css';
</style>
<style lang="less">
	.page {
		padding: 1rpx 0;
		.section_1 {
			background-color: rgba(255, 255, 255, 1);
			border-radius: 10px;
			height: 210rpx;
			width: 690rpx;
			margin: 22rpx 0 0 32rpx;
			padding-top: 28rpx;

			.block_2 {
				width: 650rpx;
				height: 31rpx;
				margin-left: 19rpx;
				border-bottom: 1rpx solid #EEEEEE;
				padding-bottom: 18rpx;

				.image-text_1 {
					width: 430rpx;
					height: 29rpx;

					.icon_2 {
						font-size: 34rpx;
						color: #666;
					}

					.text-group_1 {
						width: 250rpx;
						height: 30rpx;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 30rpx;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						white-space: nowrap;
						line-height: 30rpx;
						text-overflow: ellipsis;
						overflow: hidden;
						margin-left: 10rpx;
					}

					.icon_3 {
						font-size: 24rpx;
						color: #333;
						margin-left: 14rpx;
					}
				}

				.image-text_3 {
					font-size: 24rpx;
					color: #999;
				}

				.image-text_4 {
					width: 120rpx;
					font-size: 24rpx;
					color: #999;

					.delet {
						width: 40rpx;
						height: 40rpx;
						font-size: 28rpx;
						line-height: 40rpx;
						text-align: center;
					}
				}
			}

			.image-text_2 {
				width: 640rpx;
				height: 130rpx;
				margin: 30rpx 0 0 17rpx;

				// padding-bottom: 20rpx;
				// border-bottom: 1rpx solid #EEEEEE;
				.group_5 {
					width: 110rpx;
					height: 110rpx;

					image {
						width: 110rpx;
						height: 110rpx;
					}
				}

				.text-group_2 {
					width: 500rpx;
					height: 120rpx;
					margin: 6rpx 0 0 14rpx;

					.paragraph_1 {
						width: 382rpx;
						height: 56rpx;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 24rpx;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						line-height: 28rpx;
						// text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}

					.text_8 {
						overflow-wrap: break-word;
						color: #E63C31;
						font-size: 24rpx;
						font-family: PingFang-SC-Bold;
						font-weight: 700;
						text-align: left;
						white-space: nowrap;
						line-height: 24rpx;
						margin-top: 10rpx;
					}

					.num_text {
						font-size: 24rpx;
						color: #333;
					}
				}
			}
		}

		.section_4 {
			background-color: rgba(255, 255, 255, 1);
			border-radius: 10px;
			width: 630rpx;
			margin: 22rpx 0 0 32rpx;
			padding: 22rpx 30rpx;

			.block_3 {
				margin-bottom: 18rpx;

				.text_1 {
					font-size: 24rpx;
					color: #333;
				}

				.text_2 {
					width: 400rpx;
					font-size: 24rpx;
					color: #999;
					font-weight: 400;
					white-space: pre-wrap;
					text-align: end;
				}

				.text_4 {
					font-size: 18rpx;
					color: #999;
				}
				
				.file-picker {
					margin: 24rpx 20rpx;

					.button_2 {
						font-size: 22rpx;
						color: #DCDCDC;

						.icon_2 {
							font-size: 60rpx;
							color: #666;
						}
					}
				}
			}

			.block_4 {
				.text_3 {
					font-size: 24rpx;
					color: #333;
					font-weight: 600;
					text-align: end;
				}
			}
			.text_5 {
				width: 628rpx;
				height: 120rpx;
				border: 1rpx solid #EEEEEE;
				font-size: 24rpx;
				color: #333;
			}
		}
		.button {
			width: 464rpx;
			height: 60rpx;
			background-color: #E63C31;
			border-radius: 30rpx;
			margin: 100rpx auto 30rpx auto;
			font-size: 24rpx;
			color: #fff;
			text-align: center;
			line-height: 60rpx;
		}
	}
</style>