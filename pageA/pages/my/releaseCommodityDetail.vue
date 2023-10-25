<template>
	<!-- 个人中心发布商品图文详情 -->
	<view class="page">
		<view class="block_1">
			<view class="detail-block">
				<view class="text-block">
					<textarea @input="inText" class="text-area" placeholder="请填写商品描述，详细介绍您所出售的商品，上传图片更能吸引人哦"
						placeholder-style="font-size:24rpx" />
				</view>
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
			<view class="button_1" @click="toReleaseCommodity">
				完成
			</view>
		</view>
	</view>
</template>

<script>
	import {qnToken} from "../../../static/js/api.js"
	export default {
		data() {
			return {
				imageValue: [],
				imageStyles: {
					"width": 284,
					"height": 330,
				},
				prompt: '',
				text: '',
				token: ''
			};
		},
		methods: {
			// 获取上传token
			 async getQntoken() {
				 let tokenData =await qnToken()
				 // console.log(tokenData)
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
			inText(e) {
				this.text = e.detail.value
			},
			//返回发布商品
			toReleaseCommodity() {
				let pages = getCurrentPages();
				let prevPage = pages[pages.length - 2]; //上一个页面
				let obj = {
					describe: this.text,
					pics: ''
				}
				console.log(obj)
				prevPage.$vm.backFunction(obj)
				uni.navigateBack()
			}
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
		.block_1 {
			width: 690rpx;
			margin: 30rpx;
			background-color: #fff;
			overflow: hidden;

			.detail-block {
				width: 610rpx;
				margin: 40rpx;
				border: 1rpx solid #E5E5E5;

				.text-block {
					margin: 36rpx 0 0 16rpx;

					.text-area {
						width: 574rpx;
						height: 66rpx;
						font-size: 24rpx;
						color: #333;
					}
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
			.button_1 {
				width: 464rpx;
				height: 60rpx;
				margin: 0 auto;
				background-color: #E63C31;
				border-radius: 30rpx;
				color: #fff;
				font-size: 24rpx;
				line-height: 60rpx;
				text-align: center;
				position: fixed;
				left: 0;
				right: 0;
				bottom: 60rpx;
			}
		}
	}
</style>