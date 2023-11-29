<template>
	<view class="page">
		<view class="step-block">
			<uni-steps :options="[{title: '填写申请信息'}, {title: '平台审核'}, {title: '入驻成功'}]" :active="nav"
				active-color="#E63C31"></uni-steps>
		</view>
		<form @submit="submit">
		<view class="group_1">
			<view class="title-block flex-row align-center">
				<text class="title-num">01</text>
				<text class="title-text">公司负责人信息</text>
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">联系人：</text>
				<input class="input-block" @blur="inName" type="text">
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">手机号码：</text>
				<input class="input-block" @blur="inTel" type="text">
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">身份证正面：</text>
				<view class="file-block">
					<uni-file-picker ref="file1" auto-upload="false" v-model="imageValue" :image-styles="imageStyles"
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
					<uni-file-picker ref="file2" auto-upload="false" v-model="imageValue" :image-styles="imageStyles"
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
			<view class="box_1 flex-row justify-between align-center" @click="openSale">
				<text class="text-block">销售类型：</text>
				<view class="input-icon flex-row justify-between">
					<view class="input_1">{{saleName}}</view>
					<text class="iconfont icon_1">&#xe686;</text>
				</view>
				<view v-if="sale" class="sale-type">
					<view class="mode" @tap.stop.prevent>
						<view @click="chooseSale(10,'厂家直销')">厂家直销</view>
						<view @click="chooseSale(20,'代理商')">代理商</view>
						<view @click="chooseSale(30,'专卖店')">专卖店</view>
						<view @click="chooseSale(40,'授权业务')">授权业务</view>
					</view>
				</view>
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">公司名称/授权公司：</text>
				<input class="input-block input-icon_1" @blur="inGname" type="text">
			</view>
			<view class="box_1 flex-row justify-between align-center" @click="chooseBlock">
				<text class="text-block">入驻类目：</text>
				<view class="input-icon flex-row justify-between">
					<view class="input_1">{{tListText}}</view>
					<text class="iconfont icon_1">&#xe686;</text>
				</view>
			</view>
			<view class="box_1 flex-row justify-between align-center" @click="openBrand">
				<text class="text-block">入驻品牌：</text>
				<view class="input-icon flex-row justify-between">
					<view class="input_1">{{brandText}}</view>
					<text class="iconfont icon_1">&#xe686;</text>
				</view>
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">执照注册号：</text>
				<input class="input-block" @blur="inCrop" type="text">
			</view>
			<view class="box_1 flex-row justify-between align-center">
				<text class="text-block">营业执照电子版：</text>
				<view class="file-block file-block_1">
					<uni-file-picker ref="file3" auto-upload="false" v-model="imageValue" :image-styles="imageStyles"
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
						<text v-for="(i,n) in address" :key="n">{{i.text}}</text>
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
				<input class="input-block" @blur="inDetail" type="text">
			</view>
			<!-- <view class="box_1 flex-row">
				<text class="text-block">地图标注：</text>
				<view class="button_1">
					地图标注
				</view>
			</view> -->
			<!-- <view class="box_1 flex-row justify-between align-center">
				<text class="text-block">仓库地址：</text>
				<input class="input-block" type="text" placeholder="(退换货地址)">
			</view> -->
		</view>
		<button class="button_3" form-type="submit">
			提交
		</button>
		</form>
		<view v-if="choose" class="choose-block">
			<view class="mask"></view>
			<view class="mode">
				<view class="pk_title">
					<text>选择入驻类目</text>
					<text class="close_pk" @click="closeChoose">×</text>
				</view>
				<view class="choose-text flex-row justify-around">
					<view class="text-block flex-col align-center">
						<text v-for="(item,index) in textList" :key="index" class="text-font"
							@click="chooseProduct(item.id,item.name)">{{item.name}}</text>
					</view>
				</view>
				<!-- <view class="pk_btn" @click="choose()">确定</view> -->
			</view>
		</view>
		<view v-if="brand" class="brand-block">
			<view class="mask"></view>
			<view class="mode">
				<view class="brand-title flex-row justify-between align-center">
					<text>品牌</text>
					<view class="up" @click="closeBrand">
						<text class="iconfont">&#xe686;</text>
					</view>
				</view>
				<view class="brand-text flex-row">
					<text v-for="(i,n) in brandList" :key='n' class="text-block"
						@click="chooseBrand(i)">{{i.name}}</text>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="message">
			<uni-popup-message type="success" message="成功消息" :duration="3000">{{prompt}}</uni-popup-message>
		</uni-popup>
	</view>
</template>

<script>
	import get_city_tree from '../../../static/js/cityData.js'
	import {qnToken,brandList,category,addSeller} from "../../../static/js/api.js"
	export default {
		data() {
			return {
				nav: 0,
				localData: [],
				userid: '',
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
				token: '',
				filePath: '',
				cname: '',
				sale: false,
				front: '',
				back: '',
				cropImg: '',
				name: '',
				tel: '',
				saleType: '',
				saleName: '',
				gName: '',
				choose: false,
				textList: [],
				tListIndex: '',
				tListText: '',
				brand: false,
				brandList: [],
				brandText: '',
				brandid: '',
				cropNum: '',
				address: '选择所在地区',
				detail: '',
			};
		},
		methods: {
			// 商家入驻申请提交
			async pAddSeller(data) {
				console.log(data)
				let res = await addSeller(data)
				this.prompt = res.msg
				this.$refs.popup.open('top')
				if(res.code == 200) {
					this.nav = 1
					uni.setStorage({
						key:'activeNav',
						data: 1,
						success() {
							// console.log("123")
						}
					})
					if(res.data.length !=0) {
						uni.setStorage({
							key:'sellerid',
							data: res.data.sellerInfo.seller_id,
							success() {
								// console.log("sellerid123")
							}
						})
					}
				}
			},
			// 获取上传token
			 async getQntoken() {
				 const tokenData =await qnToken()
				 this.token = tokenData.qiniu_token
				 // console.log(this.token)
			 },
			 //获取分类列表
			 async GetCategory() {
			 	let res = await category()
				let list = res.lists
				list.forEach(items => {
					items.sub.forEach(item => {
						this.textList.push(item)
						// if(item.child.length != 0) {
						// 	item.child.forEach(i => {
						// 		this.textList.push(i)
						// 	})
						// }
					})
				})
			 	// console.log(this.textList)
			 },
			 //获取品牌列表
			 async getBrandList() {
			 	let res = await brandList()
			 	// console.log(res)
			 	res.forEach(item => {
			 		item.data.forEach(i => {
			 			this.brandList.push({
			 				id: i.id,
			 				name: i.name
			 			})
			 		})
			 	})
			 },
			 // 输入联系人
			 inName(e) {
				 this.cname = e.detail.value
			 },
			 //输入电话号码
			 inTel(e) {
				let reg = /^1[3456789]\d{9}$/
				if (!reg.test(e.detail.value)) {
					this.prompt = '请输入正确的电话号码'
					this.$refs.popup.open('top')
				} else {
					this.tel = e.detail.value
				} 
			 },
			 //打开销售类型
			 openSale() {
				this.sale = true	
			 },
			 //选择销售类型
			 chooseSale(e,n) {
				this.saleType = e
				this.saleName = n
				this.sale = false
			 },
			 // 输入公司名
			 inGname(e) {
				this.gName = e.detail.value 
			 },
			 //打开选择分类弹窗
			 chooseBlock() {
			 	this.choose = true
			 },
			 //关闭选择分类弹窗
			 closeChoose() {
			 	this.choose = false
			 },
			 // 选择分类
			 chooseProduct(id, text) {
			 	this.tListIndex = id
			 	this.tListText = text
				this.choose = false
			 },
			 //打开品牌弹窗
			 openBrand() {
			 	this.brand = true
			 },
			 //关闭品牌弹窗
			 closeBrand() {
			 	this.brand = false
			 },
			 //选择品牌
			 chooseBrand(text) {
			 	this.brandText = text.name
			 	this.brandid = text.id
			 	this.brand = false
			 },
			 //输入营业执照号
			 inCrop(e) {
				 this.cropNum = e.detail.value
			 },
			 //输入详细地址 
			 inDetail(e) {
				 this.detail = e.detail.value 
			 },
			//选择图片
			select(e) {
				console.log('选择文件：', e)
				// console.log(this.$refs)
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
						if(that.$refs.file1.files.length != 0) {
							that.prompt = "上传成功"
							that.$refs.popup.open('top')
							let data = JSON.parse(res.data)
							that.front = data.key 
						} 
						if(that.$refs.file2.files.length != 0) {
							that.prompt = "上传成功"
							that.$refs.popup.open('top')
							let data = JSON.parse(res.data)
							that.back = data.key 
						} 
						if(that.$refs.file3.files.length != 0) {
							that.prompt = "上传成功"
							that.$refs.popup.open('top')
							let data = JSON.parse(res.data)
							that.cropImg = data.key 
						}
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
			// 地址选择三级联动
			async addressShow() {
				this.localData = await get_city_tree()
					// console.log(this.localData)
				this.$refs.picker.show()
			},
				// 节点变化后 （并非已经选择完毕）
				onnodeclick(node) {
					// console.log(JSON.stringify(node))
					},
							
				// 整体选择完成以后
				onchange(e) {
					this.address = e.detail.value
					},
					//跳转商家中心
					toBusiness() {
						uni.navigateTo({
							url: '/pageB/pages/business/business'
							})
						},
				// 提交数据
				submit() {
					if(this.cname == '') {
						this.prompt = "请输入联系人"
						this.$refs.popup.open('top')
					} else if(this.tel == '') {
						this.prompt = "请输入手机号码"
						this.$refs.popup.open('top')
					} else if(this.front == '') {
						this.prompt = "请上传身份证正面"
						this.$refs.popup.open('top')
					} else if(this.back == '') {
						this.prompt = "请上传身份证反面"
						this.$refs.popup.open('top')
					} else if(this.saleType == '') {
						this.prompt = "请选择销售类型"
						this.$refs.popup.open('top')
					} else if(this.gName == '') {
						this.prompt = "请输入公司名称"
						this.$refs.popup.open('top')
					} else if(this.tListIndex == '') {
						this.prompt = "请选择入驻类目"
						this.$refs.popup.open('top')
					} else if(this.brandid == '') {
						this.prompt = "请选择入驻品牌"
						this.$refs.popup.open('top')
					} else if(this.cropNum == '') {
						this.prompt = "请输入营业执照号"
						this.$refs.popup.open('top')
					} else if(this.cropImg == '') {
						this.prompt = "请上传营业执照电子版"
						this.$refs.popup.open('top')
					} else if(this.address == "选择所在地区") {
						this.prompt = "请选择所在地"
						this.$refs.popup.open('top')
					} else if(this.detail == '') {
						this.prompt = "请输入详细地址"
						this.$refs.popup.open('top')
					} else {
						let data = {
							sellerid: 0,
							userid: this.userid,
							mobile: this.tel,
							name: this.cname,
							front_identity: this.front,
							back_identity: this.back,
							brand_id: this.brandid,
							cate_id: this.tListIndex,
							shop_name: this.gName,
							sale_type: this.saleType,
							province: this.address[0].value,
							city: this.address[1].value,
							area: this.address[2].value,
							corp_num: this.cropNum,
							corp_img: this.cropImg,
							address: this.detail
						}
						this.pAddSeller(data)
					}
				}
			},
			onLoad() {
				this.getQntoken()
				this.getBrandList()
				this.GetCategory()
				uni.getStorage({
					key: 'userId',
					success: (res) => {
						this.userid = res.data
					}
				})
				uni.getStorage({
					key: 'activeNav',
					success: (res) => {
						this.nav = res.data
					}
				})
			}
		}
</script>
<style>
	@import '../../../static/css/common.css';
</style>
<style lang="less">
	.page {
		position: relative;
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
				width: 650;
				margin-top: 30rpx;
				position: relative;
				
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
				.sale-type {
					width: 120rpx;
					height: 200rpx;
					background-color: #999;
					position: absolute;
					top: 22rpx;
					right: 10rpx;
					border-radius: 10rpx;
					z-index: 9999;
				}
				.mode {
					font-size: 24rpx;
					color: #fff;
					line-height: 48rpx;
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
		.choose-block {
			width: 100%;
			height: 100%;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
		
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
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				border-radius: 10rpx;
				margin: auto;
		
				.pk_title {
					width: 100%;
					height: 60rpx;
					background-color: #eee;
					color: #333;
					font-size: 30rpx;
					font-weight: 500;
					line-height: 60rpx;
					text-align: center;
		
					.close_pk {
						width: 38rpx;
						height: 38rpx;
						margin: 11rpx 26rpx 0 0;
						background-color: #666;
						font-size: 30rpx;
						line-height: 38rpx;
						text-align: center;
						color: #fff;
						border-radius: 50%;
						float: right;
					}
				}
		
				.choose-text {
					margin-top: 20rpx;
		
					.text-block {
						width: 660rpx;
						height: 500rpx;
						border: 1rpx solid #A0A0A0;
						flex-wrap: wrap;
		
						.text-font {
							padding: 14rpx 16rpx;
							font-size: 24rpx;
							color: #333;
							line-height: 30rpx;
						}
		
						.text-font_active {
							background-color: #E63C31;
							color: #fff;
							font-weight: 500;
						}
					}
				}
		
				// .pk_btn {
				// 	width: 148rpx;
				// 	height: 40rpx;
				// 	margin: 26rpx auto 18rpx auto;
				// 	background-color: #E63C31;
				// 	font-size: 30rpx;
				// 	color: #fff;
				// 	line-height: 40rpx;
				// 	text-align: center;
				// }
			}
		}
		.brand-block {
			width: 100%;
			height: 100%;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
		
			.mask {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				background-color: rgba(0, 0, 0, 0.6);
			}
		
			.mode {
				width: 600rpx;
				height: 100%;
				background-color: #fff;
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				border-radius: 10rpx;
		
				.brand-title {
					padding: 20rpx 30rpx;
					font-size: 30rpx;
					color: #000;
		
					.up {
						width: 50rpx;
						height: 50rpx;
						transform: rotate(180deg);
						text-align: center;
						line-height: 50rpx;
						color: #222;
						font-size: 30rpx;
					}
				}
		
				.brand-text {
					flex-wrap: wrap;
					overflow: scroll;
					height: 90%;
		
					.text-block {
						width: 200rpx;
						height: 80rpx;
						margin-top: 50rpx;
						font-size: 26rpx;
						color: #333;
						line-height: 80rpx;
						text-align: center;
					}
				}
			}
		}
	}
</style>