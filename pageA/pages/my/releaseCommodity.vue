<template>
	<!-- 个人中心发布商品 -->
	<view class="page">
		<view class="block_1 flex-col">
		  <view class="group_2 flex-col">
		    <view class="text-wrapper_1 flex-row align-center">
		      <text class="text_2">商品标题：</text>
		      <input class="text_3" @blur="inCname" placeholder="请输入商品的名称品牌等" />
		    </view>
			<view class="text-wrapper_1 flex-row align-center justify-between">
			  <text class="text_2">商品分类：</text>
			  <view v-if="listText" class="text_5">
			  	{{listText}}/{{sListText}}/{{tListText}}
			  </view>
			  <view class="botton_1" @click="chooseBlock">
			  	选择分类
			  </view>
			</view>
			<view class="text-wrapper_1 flex-row align-center justify-between" @click="openBrand">
			  <text class="text_2">品牌：</text>
			  <text class="text_5">{{brandText}}</text>
			  <text class="iconfont icon_1">&#xe686;</text>
			</view>
			<view class="text-wrapper_1 flex-row align-center justify-between" @click="openFineness">
			  <text class="text_2">成色：</text>
			  <text class="text_5">{{finenessText}}</text>
			  <text class="iconfont icon_1">&#xe686;</text>
			</view>
			<view class="text-wrapper_1 flex-row align-center">
			  <text class="text_2">商品价格：</text>
			  <input class="text_3" type="number" @blur="inPrice" placeholder="请输入商品价格" />
			</view>
			<view class="text-wrapper_1 text-wrapper_2 flex-col">
			  <text class="text_2 text_4">商品主图：</text>
			  <uni-file-picker ref="file" auto-upload="false" v-model="imageValue" :image-styles="imageStyles" limit="1" :del-icon="false" file-mediatype="image" @select="select" >
				  <view class="button_2 flex-col align-center">
					  <text class="iconfont icon_2">&#xe67b;</text>
					  点击上传
					  </view>
			  </uni-file-picker>
			 <!-- <view class="button_3" @click="submitImg">
			  	点击上传
			  </view> -->
			  <view class="prompt_text">
			  	最多上传1张图片，建议每张图片大小不超过500KB。
			  	图片尺寸比例为3：2，支持jpg,jpeg,gif,bmp格式。
			  </view>
			</view>
			<view class="text-wrapper_1 flex-row align-center justify-between" @click="toReleaseCommodityDetail">
			  <text class="text_2">商品图文详情：</text>
			  <text class="iconfont icon_1">&#xe686;</text>
			</view>
			<view class="text-wrapper_1 flex-row align-center">
			  <text class="text_2">联系电话：</text>
			  <input class="text_3" type="number" @blur="inTel" placeholder="请输入联系电话" />
			</view>
			<view class="text-wrapper_1 flex-row align-center justify-between">
			  <text class="text_2">所在地：</text>
			  <text class="iconfont icon_1">&#xe686;</text>
			</view>
			</view>
			<view class="button_4" @click="submit">
				提交
			</view>
			<view v-if="choose" class="choose-block">
				<view class="mask"></view>
				<view class="mode">
					<view class="pk_title">
						<text>选择产品分类</text>
						<text class="close_pk" @click="closeChoose">×</text>
					</view>
					<view class="choose-text flex-row justify-around">
						<view class="text-block flex-col align-center">
							<text :class="{'text-font_active':listIndex == item.id}" v-for="(item,index) in textList" :key="index" class="text-font" @click="chooseProduct(item.id,item.name)">{{item.name}}</text>
						</view>
						<view class="text-block flex-col align-center">
							<text :class="{'text-font_active':sListIndex == item.id}" v-for="(item,i) in sList[0].sub" :key="i" class="text-font" @click="chooseSproduct(item.id,item.name)">{{item.name}}</text>
						</view>
						<view class="text-block flex-col align-center">
							<text :class="{'text-font_active':tListIndex == item.id}" v-for="(item,i) in tList[0].child" :key="i" class="text-font" @click="chooseTproduct(item.id,item.name)">{{item.name}}</text>
						</view>
					</view>
					<!-- <view class="pk_btn" @click="choose()">确定</view> -->
				</view>
			</view>
			<view v-if="fineness" class="fineness-block">
				<view class="mask"></view>
				<view class="mode">
					<view class="pk_title">
						<text>选择产品成色</text>
						<text class="close_pk" @click="closeFineness">×</text>
					</view>
					<view class="finess-text flex-row">
						<text v-for="(i,n) in finenessList" :key='n' class="text-block" @click="chooseFineness(i)">{{i}}</text>
					</view>
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
						<text v-for="(i,n) in brandList" :key='n' class="text-block" @click="chooseBrand(i)">{{i.name}}</text>
					</view>
				</view>
			</view>
            <uni-popup ref="popup" type="message">
            	<uni-popup-message type="success" message="成功消息" :duration="3000">{{prompt}}</uni-popup-message>
            </uni-popup>
			</view>
	</view>
</template>

<script>
	import {qnToken,mReleaseComodity,category,brandList} from "../../../static/js/api.js"
	export default {
		data() {
			return {
				cname: '',
				price: '',
				imageValue: [],
				imageStyles: {
					"width": 80,
					"height": 70,
					"border": {
						"color": "#D3D3D3", 
						"width": "1rpx",
						"style":"solid"
					}
				},
				token: '',
				filePath: '',
				name: '',
				tel: '',
				prompt: '',
				textList: [],
						//选择分类弹窗
						choose: false,
						//一级分类索引
						listIndex: '',
						//一级分类内容
						listText: '',
						//二级分类数据
						sListC: '',
						//二级分类索引
						sListIndex: '',
						//二级分类内容
						sListText: '',
						//三级分类索引
						tListIndex: '',
						//三级分类内容
						tListText: '',
						//成色弹窗
						fineness: false,
						finenessList: [
							 '全新',
							 '九成新',
							 '八成新',
							 '七成新',
							 '六成新',
							 '五成新',
						],
						finenessText: '',
						//品牌弹窗
						brand: false,
						brandList: [],
						brandText: '',
			};
		},
		computed: {
			//选择计算分类二级分类
			sList() {
				let sList = []
				for(let i = 0; i < this.textList.length; i++) {
					if(this.listIndex == this.textList[i].id) {
						// console.log(this.textList[i])
					sList.push(this.textList[i])
					}
				}
				// console.log("===",sList)
				if(sList.length !== 0) {
					this.sListC = sList[0].sub
				}
				// console.log(this.sListC,"123")
					return sList
				},
				//选择计算分类三级分类
				tList() {
					let tList = []
					for(let i = 0; i < this.textList.length; i++){
						if(this.listIndex == this.textList[i].id)  {
							let item = this.textList[i]
							console.log(item)
							for(i = 0; i < item.sub.length; i++) {
								// console.log("item",item)
								if(this.sListIndex == item.sub[i].id) {
									tList.push(item.sub[i])
								}
							}
						}
						
					}	
						// console.log("===",tList)
						return tList
				},
				
		},
		methods: {
			// 获取上传token
			 async getQntoken() {
				 const tokenData =await qnToken()
				 this.token = tokenData.qiniu_token
				 // console.log(tokenData)
			 },
			 //获取分类列表
			 async GetCategory() {
			 	let res = await category()
			 	this.textList = res.lists
			 	// console.log(this.list)
			 },
			 //获取品牌列表
			 async getBrandList() {
			 		  let res = await brandList()
			 		  // console.log(res)
					  res.forEach(item => {
						  item.data.forEach(i => {
							  this.brandList.push({id:i.id,name:i.name})
						  })
					  })
			 },
			 //输入商品名称
			 inCname(e) {
				 this.cname = e.detail.value
				 console.log(this.cname)
			 },
			 //选择分类
			 //选择一级分类
			 chooseProduct(id,text) {
				 this.listIndex = id
				 this.listText = text
			 },
			 //选择二级分类
			 chooseSproduct(c_id,text) {
				 this.sListIndex = c_id
				 this.sListText = text
			 },
			 //选择三级分类
			 chooseTproduct(d_id,text) {
				 this.tListIndex = d_id
				 this.tListText = text
				 this.choose = false
			 },
			 //打开选择分类弹窗
			 chooseBlock() {
				 this.choose = true
			 }, 
			 //关闭选择分类弹窗
			 closeChoose() {
				 this.choose = false
			 },
			 //打开成色弹窗
			 openFineness() {
				 this.fineness = true
			 },
			 //关闭成色弹窗
			 closeFineness() {
				 this.fineness = false
			 },
			 //选择成色
			 chooseFineness(text) {
				 this.finenessText = text
				 this.fineness = false
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
				this.brand = false
			 },
			 //输入价格
			 inPrice(e) {
				 this.price = e.detail.value
				 console.log(this.price)
			 },
			 //选择图片
						select(e){
							console.log('选择文件：',e)
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
									console.log("上传成功",res)
									that.prompt = "上传成功，如果另有图片请再次上传"
									that.$refs.popup.open('top')
									
									setTimeout(() =>{
										that.$refs.file.clearFiles()
									},2000)
								},
								fail(res) {
									console.log("上传失败",res)
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
						//跳转图文详情
						toReleaseCommodityDetail() {
							uni.navigateTo({
								url: '/pageA/pages/my/releaseCommodityDetail'
							})
						},
						//输入电话
						inTel(e) {
							let reg = /^1[3456789]\d{9}$/
							if(!reg.test(e.detail.value)) {
										  this.prompt = '请输入正确的电话号码'
										  this.$refs.popup.open('top')
							} else {
								this.tel = e.detail.value
							}
							// console.log(this.tel)
						},
						//提交数据
						submit() {
							if(this.cname == '') {
								this.prompt = '请输入商品名字'
								this.$refs.popup.open('top')
							} else if(this.listText == '') {
								this.prompt = '请选择产品分类'
								this.$refs.popup.open('top')
							} else if(this.brandText == '') {
								this.prompt = '请选择品牌'
								this.$refs.popup.open('top')
							} else if(this.finenessText == '') {
								this.prompt = '请选择成色'
								this.$refs.popup.open('top')
							} else if(this.price == '') {
								this.prompt = '请输入商品价格'
								this.$refs.popup.open('top')
							} else if(this.tel == '') {
								this.prompt = '请输入电话号码'
								this.$refs.popup.open('top')
							}
							console.log(this.cname,this.listText,this.brandText,this.finenessText,this.price,this.tel)
						}
		},
		onLoad() {
			this.getQntoken()
			this.GetCategory()
			this.getBrandList()
			// console.log(this.sListIndex)
		}
	}
</script>
<style>
	@import '../../../static/css/common.css';
</style>
<style lang="less">
.page {
	position: relative;
	width: 750rpx;
	height: 100%;
	overflow: hidden;
	.block_1 {
	  width: 750rpx;
	  margin-top: 15rpx;
	  .group_2 {
	    background-color: rgba(255, 255, 255, 1);
	    border-radius: 4px;
	    width: 690rpx;
	    margin: 30rpx 0 0 30rpx;
	    .text-wrapper_1 {
	      width: 630rpx;
	      height: 50rpx;
	      margin: 32rpx 0 0 28rpx;
			padding: 10rpx 8rpx;
			border-bottom: 1rpx solid #E5E5E5;
	      .text_2 {
	        width: 106rpx;
	        overflow-wrap: break-word;
	        color: rgba(34, 34, 34, 1);
	        font-size: 24rpx;
	        font-family: PingFang-SC-Regular;
	        font-weight: NaN;
	        text-align: left;
	        white-space: nowrap;
	      }
	      .text_3 {
	        width: 320rpx;
	        height: 46rpx;
			margin-left: 18rpx;
	        overflow-wrap: break-word;
	        color: #333;
	        font-size: 24rpx;
	        font-family: PingFang-SC-Regular;
	        font-weight: NaN;
	        text-align: left;
	      }
		  .text_5 {
			  width: 380rpx;
			  color: #666;
			  font-size: 24rpx;
		  }
		  .botton_1 {
			  width: 128rpx;
			  height: 40rpx;
			  background-color: #FFE1DF;
			  border-radius: 20rpx;
			  font-size: 24rpx;
			  color: #E63C31;
			  text-align: center;
			  line-height: 40rpx;
		  }
		  .icon_1 {
			  font-size: 30rpx;
			  color: #222;
		  }
	    }
		.text-wrapper_2 {
			height: auto;
			.text_4 {
				margin-bottom: 22rpx;
			}
			.button_2 {
				font-size: 22rpx;
				color: #DCDCDC;
				.icon_2 {
					font-size: 60rpx;
					color: #666;
				}
			}
			.button_3 {
				width: 140rpx;
				height: 40rpx;
				margin: 30rpx auto;
				background-color: #E63C31;
				border-radius: 20rpx;
				font-size: 24rpx;
				color: #fff;
				line-height: 40rpx;
				text-align: center;
			}
			.prompt_text {
				font-size: 22rpx;
				color: #999;
			}
		}
		}
		.button_4 {
			width: 464rpx;
			height: 60rpx;
			margin: 44rpx auto;
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
						width: 200rpx;
						height: 500rpx;
						border: 1rpx solid #A0A0A0;
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
		.fineness-block {
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
				width: 400rpx;
				height: 200rpx;
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
				.finess-text {
					flex-wrap: wrap;
					.text-block {
						width: 110rpx;
						height: 40rpx;
						margin: 16rpx 0 0 16rpx;
						border: 1rpx solid #eee;
						font-size: 22rpx;
						color: #333;
						line-height: 40rpx;
						text-align: center;
					}
				}
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
}
</style>
