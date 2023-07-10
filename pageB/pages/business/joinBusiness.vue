<template>
	<view class="page">
		<view class="step-block">
			<uni-steps :options="[{title: '填写申请信息'}, {title: '平台审核'}, {title: '入驻成功'}]" :active="0"
				active-color="#E63C31"></uni-steps>
		</view>
		<view class="group_1">
			<view class="title-block flex-row align-center">
				<text class="title-num">01</text>
				<text class="title-text">公司负责人信息</text>
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">联系人：</text>
				<input class="input-block" type="text">
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">手机号码：</text>
				<input class="input-block" type="text">
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">身份证正面：</text>
				<view class="file-block">
					<uni-file-picker ref="file" auto-upload="false" v-model="imageValue" :image-styles="imageStyles"
						limit="1" :del-icon="false" file-mediatype="image" @select="select">
						<view class="button_2 flex-col align-center">
							<text class="iconfont icon_2">&#xe67b;</text>
							点击上传
						</view>
					</uni-file-picker>
				</view>
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">身份证反面：</text>
				<view class="file-block">
					<uni-file-picker ref="file" auto-upload="false" v-model="imageValue" :image-styles="imageStyles"
						limit="1" :del-icon="false" file-mediatype="image" @select="select">
						<view class="button_2 flex-col align-center">
							<text class="iconfont icon_2">&#xe67b;</text>
							点击上传
						</view>
					</uni-file-picker>
				</view>
			</view>
		</view>
		<view class="group_1">
			<view class="title-block flex-row align-center">
				<text class="title-num">02</text>
				<text class="title-text">公司主体信息</text>
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">销售类型：</text>
				<view class="input-icon flex-row justify-between">
					<input class="input_1" type="text">
					<text class="iconfont icon_1">&#xe686;</text>
				</view>
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">公司名称/授权公司：</text>
				<input class="input-block input-icon_1" type="text">
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">入驻类目：</text>
				<view class="input-icon flex-row justify-between">
					<input class="input_1" type="text">
					<text class="iconfont icon_1">&#xe686;</text>
				</view>
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">入驻品牌：</text>
				<view class="input-icon flex-row justify-between">
					<input class="input_1" type="text">
					<text class="iconfont icon_1">&#xe686;</text>
				</view>
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">执照注册号：</text>
				<input class="input-block" type="text">
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">营业执照电子版：</text>
				<view class="file-block file-block_1">
					<uni-file-picker ref="file" auto-upload="false" v-model="imageValue" :image-styles="imageStyles"
						limit="1" :del-icon="false" file-mediatype="image" @select="select">
						<view class="button_2 flex-col align-center">
							<text class="iconfont icon_2">&#xe67b;</text>
							点击上传
						</view>
					</uni-file-picker>
				</view>
			</view>
		</view>
		<view class="group_1">
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">所在地：</text>
				<view class="input-icon flex-row justify-between" @click="addressShow">
					<view class="input_1">
						{{address}}
					</view>
					<text class="iconfont icon_1">&#xe686;</text>
				</view>
			</view>
			<view class="choose_address">
				<uni-data-picker ref="picker" :localdata="localData" @change="onchange" @nodeclick="onnodeclick">
				</uni-data-picker>
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">详细地址：</text>
				<input class="input-block" type="text">
			</view>
			<view class="box_1 flex-row">
				<text class="text-block">地图标注：</text>
				<view class="button_1">
					地图标注
				</view>
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">仓库地址：</text>
				<input class="input-block" type="text" placeholder="(退换货地址)">
			</view>
		</view>
		<uni-popup ref="popup" type="message">
			<uni-popup-message type="success" message="成功消息" :duration="3000">{{prompt}}</uni-popup-message>
		</uni-popup>
		<view class="button_3" @click="toBusiness">
			提交
		</view>
	</view>
</template>

<script>
	import get_city_tree from '../../../static/js/cityData.js'
	import {qnToken} from "../../../static/js/api.js"
	export default {
		data() {
			return {
				localData: [],
				address: '选择所在地区',
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
				token: ''
			};
		},
		methods: {
			// 获取上传token
			 async getQntoken() {
				 const tokenData =await qnToken()
				 this.token = tokenData.qiniu_token
				 // console.log(this.token)
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
			addressShow() {
					this.localData = get_city_tree()
					this.$refs.picker.show()
				},
				// 节点变化后 （并非已经选择完毕）
							onnodeclick(node) {
								// console.log(JSON.stringify(node))
							},
							
							// 整体选择完成以后
							onchange(e) {
								const value = e.detail.value
								this.address = value[0].text + '/' + value[1].text + '/' + value[2].text
							},
							//跳转商家中心
							toBusiness() {
								uni.navigateTo({
									url: '/pageB/pages/business/business'
								})
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
		overflow: hidden;

		.step-block {
			margin: 30rpx 70rpx;
		}

		.group_1 {
			width: 650rpx;
			margin: 30rpx;
			padding: 30rpx 20rpx;
			background-color: #fff;

			.title-num {
				width: 32rpx;
				height: 32rpx;
				background-color: #E63C31;
				border-radius: 50%;
				font-size: 18rpx;
				color: #fff;
				line-height: 32rpx;
				text-align: center;
			}

			.title-text {
				margin-left: 10rpx;
				font-size: 30rpx;
				color: #333;
			}

			.box_1 {
				margin-top: 30rpx;

				.text-block {
					font-size: 24rpx;
					color: #333;
				}

				.input-block {
					width: 490rpx;
					font-size: 24rpx;
					color: #999;
					border-bottom: 1rpx solid #DCDCDC;
				}
				.file-block {
					width: 490rpx;
					padding-bottom: 20rpx;
					border-bottom: 1rpx solid #DCDCDC;
					.button_2 {
						font-size: 22rpx;
						color: #DCDCDC;
					
						.icon_2 {
							font-size: 60rpx;
							color: #666;
						}
					}
					
				}
				.file-block_1 {
					width: 450rpx;
				}
				.input-icon {
					width: 490rpx;
					border-bottom: 1rpx solid #DCDCDC;
					.input_1 {
						width: 400rpx;
						font-size: 24rpx;
						color: #999;
					}
					.icon_1 {
						font-size: 30rpx;
						color: #222;
					}
				}
				.input-icon_1 {
					width: 420rpx;
				}
				.button_1 {
					width: 180rpx;
					height: 40rpx;
					background-color: #E63C31;
					border-radius: 20rpx;
					font-size: 24rpx;
					color: #fff;
					line-height: 40rpx;
					text-align: center;
				}
			}
			.choose_address {
				width: 0rpx;
				height: 1rpx;
				// background-color: #ff6842;
			}
		}
		.button_3 {
			width: 464rpx;
			height: 60rpx;
			margin: 70rpx auto;
			background-color: #E63C31;
			border-radius: 30rpx;
			font-size: 24rpx;
			color: #fff;
			line-height: 60rpx;
			text-align: center;
		}
	}
</style>