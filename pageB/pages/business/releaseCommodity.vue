<template>
	<!-- 商家中心发布商品 -->
	<view class="page">
		<view class="block_1 flex-col">
			<view class="commodity-title">
				商品信息
			</view>
		  <view class="group_2 flex-col">
		    <view class="text-wrapper_1 flex-row align-center">
		      <text class="text_2">商品标题：</text>
		      <input class="text_3" @blur="inCname" placeholder="请输入您要发布的商品" />
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
			<view class="text-wrapper_1 flex-row align-center justify-between" @click="openModel">
			  <text class="text_2">型号：</text>
			  <text class="text_5">{{model}}</text>
			  <text class="iconfont icon_1">&#xe686;</text>
			</view>
			<view class="text-wrapper_1 flex-row align-center justify-between" @click="openFineness">
			  <text class="text_2">成色：</text>
			  <text class="text_5">{{finenessText}}</text>
			  <text class="iconfont icon_1">&#xe686;</text>
			</view>
			<view class="text-wrapper_1 flex-row align-center justify-between">
			  <text class="text_2">销售方式：</text>
			  <view class="button_5" :class='{"button_3" : buy == "0"}' @click="changeButton('0')">
			  	在线购买
			  </view>
			  <view class=" button_5" :class='{"button_3" : buy == "1"}' @click="changeButton('1')">
			  	在线询价
			  </view>
			  <text class="iconfont icon_1" @click="openHlep">&#xe8e9;</text>
			</view>
			<view class="text-wrapper_1 flex-row align-center">
			  <text class="text_2">商品价格：</text>
			  <input class="text_3" type="number" @blur="inPrice" placeholder="请输入商品价格" />
			</view>
			<view class="text-wrapper_1 text-wrapper_2 flex-col">
			  <text class="text_2 text_4">商品主图：</text>
			  <uni-file-picker ref="file" auto-upload="false" v-model="imageValue" :image-styles="imageStyles" limit="1" :del-icon="false" file-mediatype="image" @success="success" @select="select" >
				  <view class="button_2 flex-col align-center">
					  <text class="iconfont icon_2">&#xe67b;</text>
					  点击上传
					  </view>
			  </uni-file-picker>
			 <!-- <view class="button_3" @click="submitImg">
			  	点击上传
			  </view> -->
			  <view class="prompt_text">
			  	可以上传多张图片，缩略图消失后再次点击上传，建议每张图片大小不超过500KB。
			  	图片尺寸比例为3：2，支持jpg,jpeg,gif,bmp格式。
			  </view>
			</view>
			<view class="text-wrapper_1 flex-row align-center justify-between" @click="toReleaseCommodityDetail">
			  <text class="text_2">商品图文详情：</text>
			  <text class="iconfont icon_1">&#xe686;</text>
			</view>
			</view>
			<view class="commodity-title">
				交易信息
			</view>
			<view class="group_2">
				<view class="text-wrapper_1 flex-row align-center justify-between">
				  <text class="text_2">计量单位：</text>
				  <uni-data-select class="text-group_1" :localdata="danweiData" :clear="false" @change="chooseDanwei"></uni-data-select>
				</view>
				<view class="text-wrapper_1 flex-row align-center">
				  <text class="text_2 text_6">库存：</text>
				  <input class="text_3" type="number" @blur="inVentory" placeholder="请输入商品库存" />
				</view>
				<view class="text-wrapper_1 flex-row align-center">
				  <text class="text_2 text_7">最小起订量：</text>
				  <input class="text_3" type="number" @blur="inMinNum" placeholder="请输入最小起订量" />
				</view>
			</view>
	<!-- 		<view class="commodity-title">
				物流信息
			</view>
			<view class="group_2">
				<view class="text-wrapper_1 flex-row align-center" @click="">
				  <text class="text_2">单位重量：</text>
				  <input class="text_3" type="number" @blur="inPrice" placeholder="请输入单位重量" />
				</view>
				<view class="text-wrapper_1 flex-row align-center justify-between" @click="open">
				  <text class="text_2">发货日期：</text>
				  <text class="text_5">{{date}}</text>
				  <text class="iconfont icon_1">&#xe686;</text>
				</view>
				<uni-calendar ref="calendar" :insert="false" @confirm="confirm" @close="close"/>
				<view class="text-wrapper_1 flex-row align-center justify-between" @click="">
				  <text class="text_2 text_7">是否含运费：</text>
				  <view class="button_3">
				  	含运费
				  </view>
				  <view class="button_5 button_3">
				  	运费另计
				  </view>
				  <text class="text_8">（以物流实收为准）</text>
				</view>
			</view> -->
			<view class="group_2">
				<view class="text-wrapper_1 text-wrapper_3 flex-row align-center justify-between" @click="">
				  <text class="text_2">售卖区域：</text>
				  <view class="button_3" @click="openCity">
				  	开通新城市
				  </view>
				  <view class="button_5">
				  	更改
				  </view>
				  <text class="text_9">默认展示已开通城市</text>
				</view>
			</view>
			<view class="button_4" @click="submit">
				提交
			</view>
			<!-- 产品分类弹窗 -->
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
			<!-- 成色弹窗 -->
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
			<!-- 型号弹窗 -->
			<view v-if="openmodel" class="model-block">
				<view class="mask"></view>
				<view class="mode">
					<view class="pk_title">
						<text>选择产品型号</text>
						<text class="close_pk" @click="closeModel">×</text>
					</view>
					<view class="model-text flex-row">
						<view v-if="modelText != ''" class="model-font">{{modelText}}</view>
						<text v-else v-for="(i,n) in modelList" :key='n' class="text-block" @click="chooseModel(i.id,i.model_name)">{{i.model_name}}</text>
					</view>
				</view>
			</view>
			<!-- 品牌弹窗 -->
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
			<!-- 销售方式弹窗 -->
			<view v-if="help" class="help-block">
				<view class="mask"></view>
				<view class="mode">
					<view class="text-block">
						<text class="text-title">在线购买：</text>
						明码标价，买家可以直接在线购买您发布的商品。
					</view>
					<view class="text-block">
						<text class="text-title">在线询价：</text>
						商品价格会被隐藏，买家无法直接在线购买您发布的商品，需通过预留的联系方式与您取得联系询问价格。
					</view>
					<view class="button_6" @click="closeHlep">
						确定
					</view>
				</view>
			</view>
			<!-- 开通城市分站弹窗 -->
			<view v-if="city" class="city-block">
				<view class="mask"></view>
				<view class="mode">
					<view class="pk_title">
						<text>开通城市分站</text>
						<text class="close_pk" @click="closeCity">×</text>
					</view>
					<view class="city-prompt">开通城市分站收费标准（您的商品将会在您开通的城市展示）</view>
					<view class="city-table">
						<view class="table-tr flex-row">
							<text class="table-td">城市</text>
							<text class="table-td_1">全国</text>
							<text class="table-td_1">省会城市</text>
							<text class="table-td_1">其他城市</text>
						</view>
						<view class="table-tr flex-row">
							<text class="table-td border-b">价格</text>
							<text class="table-td_2">{{cityMoney.all}}元</text>
							<text class="table-td_2">{{cityMoney.province}}元</text>
							<text class="table-td_2">{{cityMoney.city}}元</text>
						</view>
					</view>
					<view class="area-list">
						<view class="city-chin flex-row align-center">
							<view class="round"></view>
							<text class="city-text">全中国</text>
						</view>
						<view v-for="(items,index) in cityList" :key="index">
							<view class="city-title">
								{{items.name}}
							</view>
							<view v-for="(item,i) in items.son" :key="i" class="city-list flex-row align-start">
								<view class="city-sheng flex-row align-center">
									<!-- <view class="round"></view> -->
									<text class="list-text">{{item.name}}</text>
								</view>
								<view class="city-shi flex-row align-center">
									<view v-for="(k,n) in item.cities" :key="n" class="shi-list flex-row align-center">
										<view class="round" @click="chooseCity(items.name,item.id,k.id)">
											<view v-if="k.selected" class="drop"></view>
										</view>
										<text class="list-text">{{k.name}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="button_7" @click="submitOpenCity">
						确认开通
					</view>
				</view>
			</view>
            <uni-popup class="popup" ref="popup" type="message">
            	<uni-popup-message type="success" message="成功消息" :duration="3000">{{prompt}}</uni-popup-message>
            </uni-popup>
			</view>
	</view>
</template>

<script>
	import {qnToken,category,brandList,brandThree,other,sReleaseComodity,cityLists} from "../../../static/js/api.js"
	export default {
		data() {
			return {
				cname: '',
				price: '',
				thumb: '',
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
						brandid: '',
						brandList: [],
						brandText: '',
						model: '',
						openmodel: false,
						modelList: [],
						modelText: '',
						modelid: '',
						buy: '',
						danwei: '',
						inventory: '',
						minNum: '',
						// date: '',
						help: false,
						city: false,
						backData: '',
						sellerid: '',
						userId: '',
						cityMoney: '',
						cityList: '',
						//开通城市分站id数组
						openCityArr: []
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
				tList() {
					let tList = []
					for(let i = 0; i < this.textList.length; i++){
						if(this.listIndex == this.textList[i].id)  {
							let item = this.textList[i]
							// console.log(item)
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
				// 单位数据
				danweiData() {
					let dataList = []
					// console.log(this.danwei)
					for(let i = 0;i<this.danwei.length;i++) {
						let json = {value:i,text:this.danwei[i]}
						dataList.push(json)
					}
					// console.log(dataList)
					return dataList
				}
		},
		methods: {
			//商品提交
			async PsReleaseComodity(data) {
				let res = await sReleaseComodity(data)
				this.prompt = res.msg
				this.$refs.popup.open('top')
				if(res.code == 200) {
					setTimeout(() =>{
						uni.navigateBack()
					},4000)	
				}
				// console.log(res)
			},
			// 获取上传token
			 async getQntoken() {
				 const tokenData =await qnToken()
				 this.token = tokenData.qiniu_token
				 // console.log(this.token)
			 },
			 //获取城市分站列表
			 async pcityLists(data) {
				 let res = await cityLists(data)
				 this.cityMoney = res.money
				 this.cityList = res.area
				 // console.log(res,"===")
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
			 			this.brandList.push({
			 				id: i.id,
			 				name: i.name
			 			})
			 		})
			 	})
			 },
			 // 获取品牌型号
			 async pBrandThree(id,c_id) {
			 		  let data = {
			 			  b_id: id,
			 			  c_id: c_id
			 		  }
			 		  let res = await brandThree(data)
					  // console.log(res,"=======")
					  if(!res) {
						  this.modelText = '请先选择分类、品牌'
					  } else if(res.product_models.length == 0) {
						  this.modelText = '该分类，该品牌目录下没有型号，可以不填'
					  } else {
						  this.modelText = ''
						  this.modelList = res.product_models
					  }			 		  
			 		  // console.log(res)
			 },
			 //获取单位
			 async getOther() {
			 	let res = await other()
			 	this.danwei = res.danwei
			 	// console.log(res)
			 	// console.log(typeof(this.danwei),"123")
			 },
			 //输入商品名称
			 inCname(e) {
				 this.cname = e.detail.value
				 // console.log(this.cname)
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
			 //打开型号弹窗
			 openModel() {
				 this.pBrandThree(this.brandid,this.tListIndex)
			 	 this.openmodel = true
			 },
			 //关闭型号弹窗
			 closeModel() {
			 	this.openmodel = false
			 },
			 //选择型号
			 chooseModel(id,text) {
			 	this.model = text
				this.modelid = id
			 	this.openmodel = false
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
			 // 选择销售方式
			 changeButton(e) {
				this.buy = e 
			 },
			 //输入价格
			 inPrice(e) {
				 this.price = e.detail.value
				 // console.log(this.price)
			 },
			 //选择单位
			 chooseDanwei(e) {
			 	// console.log(e)
			 	this.danweiData.forEach((item) => {
			 		if(item.value == e) {
			 			this.unit = item.text
			 		}
			 	})
			 	
			 	// console.log(this.unit)
			 },
			 // 输入库存
			 inVentory(e) {
				 this.inventory = e.detail.value
			 },
			 //输入最小起订量
			 inMinNum(e) {
				 this.minNum = e.detail.value
			 },
			 //选择图片
						select(e){
							// console.log('选择文件：',e)
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
									// console.log("上传成功",res)
									that.prompt = "上传成功，如果另有图片请再次上传"
									that.$refs.popup.open('top')
									let data = JSON.parse(res.data)
									that.thumb += data.key + ',' 
									setTimeout(() =>{
										that.$refs.file.clearFiles()
									},2000)
								},
								fail(res) {
									// console.log("上传失败",res)
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
								url: '/pageB/pages/business/releaseCommodityDetail'
							})
						},
						// 图文详情页返回的数据
						backFunction(obj) {
							this.backData = obj
							// console.log(this.backData)
						},
						//打开日历
						// open() {
						// 		this.$refs.calendar.open()
						// 		},
								//关闭日历
							// close(){
							// 	if(this.date == '请选择截止日期') {
							// 		this.prompt = '请选择截止日期'
							// 		this.$refs.popup.open('top')
							// 	} 
							// 	},
								//日历返回日期赋值
							// confirm(e) {
							// 	console.log('confirm 返回:', e)
							// 	this.date = e.fulldate
							// 	},
								//打开销售方式帮助
								openHlep() {
									this.help = true
								},
								//关闭销售方式帮助
								closeHlep() {
									this.help = false
								},
								//打开城市分站弹窗
								openCity() {
									this.city = true
								},
								//关闭城市分站弹窗
								closeCity() {
									this.city = false
								},
								//城市分站选择城市
								chooseCity(areaName,provincid,cityid) {
									this.cityList.forEach(items => {
										if(items.name ==  areaName) {
											items.son.forEach(item => {
												if(item.id == provincid) {
													item.cities.forEach(i => {
														// console.log(i)
														if(i.id ==  cityid) {
															if(i.selected  == false) {
																i.selected = true
																this.openCityArr.push(i.id)
															} else {
																i.selected  = false
																this.openCityArr.splice(this.openCityArr.indexOf(i.id),1)
															}
															// this.$forceUpdate()
															// console.log(this.openCityArr)
														}
													})
												}
											})
										}
									})
								},
								//城市分站提交
								submitOpenCity() {
									this.prompt = '暂不支持该功能，敬请期待下一版本'
									this.$refs.popup.open('center')
								},
						//提交数据
						submit() {
							if(this.cname == '') {
								this.prompt = '请输入商品名字'
								this.$refs.popup.open('top')
							} else if(this.tListIndex == '') {
								this.prompt = '请选择产品分类'
								this.$refs.popup.open('top')
							} else if(this.brandid == '') {
								this.prompt = '请选择品牌'
								this.$refs.popup.open('top')
							} else if(this.modelid == '') {
								this.prompt = '请选择型号'
								this.$refs.popup.open('top')
							} else if(this.finenessText == '') {
								this.prompt = '请选择成色'
								this.$refs.popup.open('top')
							} else if(this.buy == '') {
								this.prompt = '请选择销售方式'
								this.$refs.popup.open('top')
							} else if(this.price == '') {
								this.prompt = '请输入商品价格'
								this.$refs.popup.open('top')
							} else if (this.thumb == '') {
								this.prompt = '请选择商品主图'
								this.$refs.popup.open('top')
							} else if (this.unit == '') {
								this.prompt = '请选择计量单位'
								this.$refs.popup.open('top')
							} else if (this.inventory == '') {
								this.prompt = '请输入库存'
								this.$refs.popup.open('top')
							} else if(this.minNum == '') {
								this.prompt = '请输入最小起订量'
								this.$refs.popup.open('top')
							} else {
								let data = {
									goods_name: this.cname,
									parent_cat_id: this.listIndex,
									sub_cat_id: this.sListIndex,
									cat_id: this.tListIndex,
									brand_id: this.brandid,
									sgb_id: this.modelid,
									thumb: this.thumb,
									pics: this.backData.pics,
									chengse: this.finenessText,
									shop_price: this.price,
									describe: this.backData.describe,
									danwei: this.unit,
									num: this.inventory,
									min_num: this.minNum,
									sale_type: this.buy,
									seller_id: this.sellerid,
									userid: this.userId
								}
								// console.log(data)
								this.PsReleaseComodity(data)
							}
							// console.log(this.cname,this.listText,this.brandText,this.finenessText,this.price,this.tel)
						},
		},
		onLoad() {
			this.getQntoken()
			this.GetCategory()
			this.getBrandList()
			this.getOther()
			this.pcityLists()
			// console.log(this.sListIndex)
			uni.getStorage({
				key: 'sellerid',
				success: (res) => {
					this.sellerid = res.data
				}
			})
			uni.getStorage({
				key: 'userId',
				success: (res) => {
					this.userId = res.data
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
	width: 750rpx;
	overflow: hidden;
	.block_1 {
	  width: 750rpx;
	  margin-top: 15rpx;
	  .commodity-title {
		height: 30rpx;
		margin-left: 30rpx;
	  	padding-left: 16rpx;
	  	font-size: 30rpx;
	  	font-weight: 500;
	  	color: #333;
		line-height: 30rpx;
	  	border-left: 4rpx solid #DD1215;
	  }
	  .group_2 {
	    background-color: rgba(255, 255, 255, 1);
	    border-radius: 4px;
	    width: 690rpx;
	    margin: 20rpx 0 40rpx 30rpx;
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
		  .text-group_1 {
		  	width: 120rpx;
		  	height: 70rpx;
		  	overflow-wrap: break-word;
		  	color: rgba(34, 34, 34, 1);
		  	font-size: 25rpx;
		  	font-family: PingFang-SC-Regular;
		  	font-weight: NaN;
		  	text-align: left;
		  	white-space: nowrap;
		  	line-height: 25rpx;
		  	.uni-select {
		  		border: none;
		  	}
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
		  .button_5 {
			  width: 144rpx;
			  height: 40rpx;
			  background-color: #EEEEEE;
			  border-radius: 20rpx;
			  font-size: 24rpx;
			  text-align: center;
			  line-height: 40rpx;
			  color: #333;
		  }
		  .button_3 {
		  			  width: 144rpx;
		  			  height: 40rpx;
		  			  background-color: #DD1215;
		  			  border-radius: 20rpx;
		  			  font-size: 24rpx;
		  			  color: #fff;
		  			  text-align: center;
		  			  line-height: 40rpx;
		  }
		  .icon_1 {
			  font-size: 30rpx;
			  color: #222;
		  }
		  .text_6 {
			  width: 70rpx;
		  }
		  .text_7 {
			  width: 130rpx;
		  }
		  .text_8 {
			  font-size: 18rpx;
			  color: #999;
		  }
		  .text_9 {
			  font-size: 20rpx;
			  color: #333;
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
		.text-wrapper_3 {
			border: none;
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
		.model-block {
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
				width: 740rpx;
				height: 500rpx;
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
				.model-text {
					flex-wrap: wrap;
					.model-font {
						width: 600rpx;
						height: 50rpx;
						font-size: 30rpx;
						color: #333;
						line-height: 50rpx;
						margin: auto;
					}
					.text-block {
						width: 350rpx;
						height: 40rpx;
						margin: 16rpx 0 0 10rpx;
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
		.help-block {
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
				width: 530rpx;
				height: 368rpx;
				margin: auto;
				background-color: #fff;
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				border-radius: 10rpx;
				.text-block {
					margin: 30rpx 40rpx 0 30rpx;
					font-size: 22rpx;
					color: #666;
					.text-title {
						font-size: 28rpx;
						font-weight: 500;
						color: #333;
					}
				}
				.button_6 {
					width: 144rpx;
					height: 40rpx;
					margin: 36rpx auto auto auto;
					background-color: #DD1215;
					border-radius: 20rpx;
					font-size: 24rpx;
					color: #fff;
					line-height: 40rpx;
					text-align: center;
				}
				}
		}
		.city-block {
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
				width: 680rpx;
				height: 82%;
				margin: auto;
				background-color: #fff;
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				border-radius: 10rpx;
				.pk_title {
					width: 100%;
					height: 60rpx;
					background-color: #E63C31;
					color: #fff;
					font-size: 30rpx;
					font-weight: 500;
					line-height: 60rpx;
					text-align: center;
					.close_pk {
						width: 38rpx;
						height: 38rpx;
						margin: 11rpx 26rpx 0 0;
						background-color: #fff;
						font-size: 36rpx;
						line-height: 38rpx;
						text-align: center;
						color: #E63C31;
						border-radius: 50%;
						float: right;
					}
				}
				.city-prompt {
					margin: 44rpx 0 22rpx 20rpx;
					font-size: 24rpx;
					color: #333;
				}
				.city-table {
					margin-left: 20rpx;
					.table-td {
						width: 120rpx;
						height: 52rpx;
						font-size: 24rpx;
						color: #333;
						line-height: 52rpx;
						text-align: center;
						background-color: #eee;
						border-left: 1rpx solid #A0A0A0;
						border-top: 1rpx solid #A0A0A0;
						border-right: 1rpx solid #A0A0A0;
					}
					.table-td_1 {
						width: 160rpx;
						height: 52rpx;
						font-size: 24rpx;
						color: #333;
						line-height: 52rpx;
						text-align: center;
						border-top: 1rpx solid #A0A0A0;
						border-right: 1rpx solid #A0A0A0;
					}
					.table-td_2 {
						width: 160rpx;
						height: 52rpx;
						font-size: 24rpx;
						color: #333;
						line-height: 52rpx;
						text-align: center;
						border-top: 1rpx solid #A0A0A0;
						border-right: 1rpx solid #A0A0A0;
						border-bottom: 1rpx solid #A0A0A0;
					}
					.border-b {
						border-bottom: 1rpx solid #A0A0A0;
					}
				}
				.round {
					width: 22rpx;
					height: 22rpx;
					border: 1rpx solid #A0A0A0;
					border-radius: 50%;
					.drop {
						width: 14rpx;
						height: 14rpx;
						margin: 4rpx;
						background-color: #DD1215;
						border-radius: 50%;
					}
				}
				.area-list {
					height: 55%;
					overflow: scroll;
					.city-chin {
						margin: 40rpx 0 26rpx 20rpx;
						.city-text {
							font-size: 30rpx;
							font-weight: 500;
							color: #333;
							margin-left: 10rpx;
						}
					}
					.city-title {
						width: 632rpx;
						height: 46rpx;
						margin-left: 20rpx;
						background-color: #eee;
						font-size: 26rpx;
						font-weight: 500;
						color: #333;
						line-height: 46rpx;
						text-align: center;
					}
					.city-list {
						margin: 32rpx 20rpx;
						font-size: 24rpx;
						color: #333;
						.list-text {
							width: 80rpx;
							margin-left: 8rpx;
							color: #E63C31;
						}
						.city-shi {
							margin-left: 36rpx;
							flex-wrap: wrap;
							.list-text {
								width: auto;
								margin-right: 8rpx;
								color: #333;
							}
						}
				}
			
				}
				.button_7 {
					width: 240rpx;
					height: 60rpx;
					margin: 60rpx auto 0 auto;
					background-color: #E63C31;
					border-radius: 30rpx;
					font-size: 24rpx;
					color: #fff;
					line-height: 60rpx;
					text-align: center;
				}
				}
		}
		.popup {
			z-index: 1000;
		}
		}	
}
</style>
