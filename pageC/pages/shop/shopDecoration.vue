<template>
	<view class="page">
		<view class="group_1">
			<view class="name-block flex-row">
				<text class="shop-name">店铺名称:</text>
				<input @input="inSname" class="name-input" type="text">
			</view>
		</view>
		<view class="group_1">
			<view class="logo-block flex-row">
				<text class="shop-name">店铺logo:</text>
				<uni-file-picker ref="file1" auto-upload="false" v-model="imageValue" :image-styles="imageStyles"
					limit="1" :del-icon="false" file-mediatype="image" @select="select">
					<view class="button_2 flex-col align-center">
						<text class="iconfont icon_2">&#xe67b;</text>
						点击上传
					</view>
				</uni-file-picker>
				<!-- <view class="button_3" @click="submitImg">
				 	点击上传
				 </view> -->
			</view>
		</view>
		<view class="group_1">
			<view class="img-block flex-row">
				<text class="shop-name">店铺轮播图:</text>
				<uni-file-picker ref="file2" auto-upload="false" v-model="imageValue" :image-styles="imageStyles"
					limit="1" :del-icon="false" file-mediatype="image" @select="select">
					<view class="button_2 flex-col align-center">
						<text class="iconfont icon_2">&#xe67b;</text>
						点击上传
					</view>
				</uni-file-picker>
				<!-- <view class="button_3" @click="submitImg">
				 	点击上传
				 </view> -->
			</view>
			<view class="prompt_text">
				最多上传1张图片，建议每张图片大小不超过500KB。
				图片尺寸比例为3：2，支持jpg,jpeg,gif,bmp格式。
			</view>

		</view>
		<view class="button_1" @click="submit">
			提交
		</view>
		<uni-popup ref="popup" type="message">
			<uni-popup-message type="success" message="成功消息" :duration="3000">{{prompt}}</uni-popup-message>
		</uni-popup>
	</view>
</template>

<script>
	import {shopDec,qnToken} from '../../../static/js/api.js'
	export default {
		data() {
			return {
				imageValue: [],
				imageStyles: {
					"width": 60,
					"height": 65,
					"border": {
						"color": "#DCDCDC",
						"width": "1rpx",
						"style": "solid"
					}
				},
				prompt: '',
				sname: '',
				logo: '',
				sliders: '',
				token: '',
				filePath: '',
				name: ''
			};
		},
		methods: {
			// 获取上传token
			 async getQntoken() {
				 const tokenData =await qnToken()
				 this.token = tokenData.qiniu_token
				 // console.log(this.token)
			 },
			//店铺装修数据提交
			async pShopDec(data) {
				let res = await shopDec(data)
				this.prompt = res.msg
				this.$refs.popup.open('top')
			},
			inSname(e) {
				this.sname = e.detail.value
				// console.log(this.sname)
			},
			//选择图片
			select(e) {
				// console.log('选择文件：', e)
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
						if(that.$refs.file1.files.length != 0) {
							that.prompt = "上传成功"
							that.$refs.popup.open('top')
							let data = JSON.parse(res.data)
							that.logo = data.key
						} 
						if(that.$refs.file2.files.length != 0) {
							that.prompt = "上传成功，如果另有图片请再次上传"
							that.$refs.popup.open('top')
							let data = JSON.parse(res.data)
							that.sliders += data.key + ','
							setTimeout(() => {
								that.$refs.file2.clearFiles()
							}, 2000)
						}
					},
					fail(res) {
						// console.log("上传失败", res)
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
			// 提交数据
			submit() {
				if(this.sname == '') {
					this.prompt = "请输入店铺名称"
					this.$refs.popup.open('top')
				} else if(this.logo == '') {
					this.prompt = "请上传店铺logo"
					this.$refs.popup.open('top')
				} else if(this.sliders == '') {
					this.prompt = "请上传店铺轮播图"
					this.$refs.popup.open('top')
				} else {
					let data = {
						seller_id: this.sellerid,
						shop_name: this.sname,
						logo: this.logo,
						sliders: this.sliders
					}
					this.pShopDec(data)
				}
			}
		},
		onLoad() {
			this.getQntoken()
			uni.getStorage({
				key: 'sellerid',
				success: (res) => {
					this.sellerid = res.data
				}
			})
		}
	}
</script>
<style>
	@import '.../../../static/css/common.css';
</style>
<style lang="less">
	.page {
		overflow: hidden;

		.group_1 {
			width: 670rpx;
			margin: 24rpx 30rpx;
			padding: 10rpx;
			background-color: #fff;

			.shop-name {
				margin: 40rpx 16rpx;
				font-size: 24rpx;
				color: #222;
			}

			.name-input {
				width: 530rpx;
				margin: 30rpx 0;
				border-bottom: 1rpx solid #E5E5E5;
				font-size: 24rpx;
				color: #222;
			}

			.img-block {
				border-bottom: 1rpx solid #E5E5E5;
			}

			.button_2 {
				font-size: 22rpx;
				color: #DCDCDC;

				.icon_2 {
					font-size: 60rpx;
					color: #666;
				}
			}

			.prompt_text {
				margin-top: 18rpx;
				font-size: 22rpx;
				color: #999;
			}
		}

		.button_1 {
			width: 464rpx;
			height: 60rpx;
			background-color: #E63C31;
			border-radius: 30rpx;
			font-size: 24rpx;
			color: #fff;
			line-height: 60rpx;
			text-align: center;
			position: absolute;
			left: 0;
			right: 0;
			bottom: 170rpx;
			margin: 0 auto;
		}
	}
</style>