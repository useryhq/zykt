<template>
	<!-- 提交评价 -->
	<view class="page">
		<view class="section_1 flex-row align-center">
			<text class="text_1">描述相符：</text>
			<text class="text_2" :class="{'text_2-active':btn == 0}" @click="chooseBtn(0)">好评</text>
			<text class="text_2" :class="{'text_2-active':btn == 1}" @click="chooseBtn(1)">中评</text>
			<text class="text_2" :class="{'text_2-active':btn == 2}" @click="chooseBtn(2)">差评</text>
		</view>
		<view class="section_1">
			<textarea class="text-area" name="" id="" cols="30" rows="10"></textarea>
			<view class="file-picker">
				<uni-file-picker ref="file" auto-upload="false" v-model="imageValue" :image-styles="imageStyles"
					limit="1" :del-icon="false" file-mediatype="image" @success="success" @select="select">
					<view class="button_2 flex-col">
						<text class="iconfont icon_2">&#xe67b;</text>
						点击上传
					</view>
				</uni-file-picker>
			</view>
			<uni-popup ref="popup" type="message">
				<uni-popup-message type="success" message="成功消息" :duration="3000">{{prompt}}</uni-popup-message>
			</uni-popup>
		</view>
		<view class="button" @click="submit()">
			提交评价
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
				btn:0,
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
			//选择好中差评
			chooseBtn(e) {
				this.btn = e
			},
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
	overflow: hidden;
	.section_1 {
		background-color: rgba(255, 255, 255, 1);
		border-radius: 10px;
		width: 630rpx;
		margin: 22rpx 0 0 32rpx;
		padding: 22rpx 30rpx;
		.text_1 {
			font-size: 30rpx;
			color: #333;
		}
		.text_2 {
			width: 90rpx;
			height: 36rpx;
			margin-left: 16rpx;
			background-color: #E6E6E6;
			border-radius: 18rpx;
			font-size: 24rpx;
			color: #333;
			text-align: center;
			line-height: 36rpx;
		}
		.text_2-active {
			background-color: #E63C31;
			color: #fff;
		}
		.text-area {
			width: 630rpx;
			height: 450rpx;
			background-color: #F6F6F6;
			font-size: 24rpx;
			color: #333;
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
