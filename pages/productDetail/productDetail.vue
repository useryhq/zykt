<template>
  <view class="page flex-col">
    <view class="goods-detail-nav">
    	<view v-if="price != '询价'" class="w">
    		<view class="nav-font" :class="{'nav-font-active': navIndex == 0}" @click="navChange(0)">
    			商品
    		</view>
    		<view class="nav-font" :class="{'nav-font-active': navIndex == 1}" @click="navChange(1)">
    			详情
    		</view>
    		<view class="nav-font" :class="{'nav-font-active': navIndex == 2}" @click="navChange(2)">
    			评价
    		</view>
    	</view>
		<view v-if="price == '询价'" class="w">
			<view class="nav-font" :class="{'nav-font-active': navIndex == 0}" @click="navChange(0)">
				商品
			</view>
			<view class="nav-font" :class="{'nav-font-active': navIndex == 1}" @click="navChange(1)">
				详情
			</view>
		</view>
    </view>
	<view class="goods-block">
		<!-- 商品轮播 -->
		<view class="top-swiper">
			<swiper class="swiper-block" :indicator-dots="true" :autoplay="true" indicator-active-color="#fa6a4a" :circular="true">
				<block v-for="(item,index) in images" :key="index">
					<swiper-item>
						<image mode="aspectFill" :src="item"></image>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<view class="group_6 flex-col">
		  <view class="box_2 flex-row justify-between">
		    <text class="text_6"><text v-if="price != '询价'">￥</text>{{price}}</text>
		    <view class="image-text_1 flex-row justify-between">
		      <text class="iconfont">&#xe64c;</text>
		      <text class="text-group_1">收藏</text>
		    </view>
		  </view>
		  <text class="text_7">
		    二手中央空调10匹一拖二变频冷暖一级能效多联机商用空调机组二手中央空调10匹一拖二变频冷暖一级能效多联机商用空调机组
		  </text>
		  
		  <view class="box_3 flex-row justify-between">
		    <view class="text-wrapper_2">
		      <text class="text_8">成色：</text>
			  <text class="text_10">9成新</text>
		    </view>
		    <view class="text-wrapper_3">
		      <text class="text_12">所在地：</text>
			  <text class="text_13">郑州</text>
		    </view>
		  </view>
		</view>
		<view v-if="price != '询价'" class="group_8 flex-col">
		  <view class="group_9 flex-row">
		    <text class="text_14">已选:</text>
		    <text class="text_15">{{choose}},{{numberValue}}个</text>
		    
		  </view>
		 
		  <view class="group_10 flex-row">
		    <text class="text_16">送至:</text>
		    <text class="text_17">河南省郑州市中原区建设路</text>
		    
		  </view>
		</view>
	</view>
    
    <view class="group_7 flex-col">
      
      <view v-if="price != '询价'" class="group_11 flex-col">
        <view class="block_2 flex-row justify-between">
          <view class="block_3 flex-col"></view>
          <text class="text_18">评价</text>
        </view>
		<view v-for="(item,index) in appraise" :key="index">
        <view class="block_4 flex-row align-center">
          <text class="iconfont label_4">&#xe682;</text>
          <text class="text_19">{{item.tel}}</text>
          <text class="text_20">{{item.time}}</text>
        </view>
        <view class="text-group_2 flex-col justify-between">
          <view class="text-wrapper_4">
            <text class="paragraph_2">
              {{item.message}}
            </text>
          </view>
          <view class="text-wrapper_5">
            <text class="text_21">{{item.attribute}}</text>
          </view>
        </view>
        </view>
        <view class="text-wrapper_8 flex-col">
          <text class="text_29">查看全部评价</text>
        </view>
      </view>
      <view class="group_12 flex-col">
        <view class="image-text_2 flex-row justify-start align-center">
         <image class=".label_6" src="../../static/bg/7220921.png" mode=""></image>
          <text class="text-group_4">美的二手商用中央空调自营店</text>
        </view>
        <view class="box_4 flex-row justify-between">
          <view class="box_5 flex-row justify-center align-center">
               <text class="iconfont label_7">&#xe64c;</text>
              <text class="text-group_5">收藏店铺</text>
          </view>
          <view class="box_6 flex-row justify-center align-center" @click="toShop">
              <text class="iconfont label_8">&#xe676;</text>
              <text class="text-group_6">进入店铺</text>
          </view>
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
    <view class="img_block" :style="{'padding-bottom': iphonex ? '68rpx' : '0rpx'}">
    	<view class="image-text_7 flex-row justify-between align-center">
    					  <text class="iconfont thumbnail_3">&#xe67c;</text>
    				    <text class="text-group_9">商品介绍</text>
    				  </view>
    	<view class="img_list">
    		<image v-for="(item,index) in images" :src="item" :key="index"></image>
    	</view>
    </view>
	<view v-if="price == '询价'" class="words-written" :style="{'padding-bottom': iphonex ? '104rpx' : '36rpx'}">
		<view class="written_text_icon">
			<text class="iconfont written_icon">&#xe649;</text>
			<text class="written_text">留言</text>
		</view>
		<textarea class="written_textarea" disable-default-padding='true' auto-blur='true' cols="30" rows="10" placeholder='有问题就点击问问更多细节吧!' placeholder-style='color:#333;font-size:24rpx;'></textarea>
		<swiper class="written_block" vertical="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in wordsWritten" :key="index">
					<view class="block_4 flex-row align-center">
					  <text class="iconfont label_4">&#xe682;</text>
					  <text class="text_19">{{item.tel}}</text>
					  <text class="text_20">{{item.time}}</text>
					</view>
					<view class="text-wrapper_4">
					  <text class="paragraph_2">
					    {{item.message}}
					  </text>
					</view>
			</swiper-item>
		</swiper>	
	</view>
    <view v-if="price != '询价'" class="group_17 flex-row" :style="{'padding-bottom': iphonex ? '68rpx' : '0rpx'}">
      <view class="image-text_8 flex-col justify-around" @click="tabClick(1)">
        <text class="iconfont label_9" :class="{'tab_color' : store == 1}">&#xe676;</text>
        <text class="text-group_10">店铺</text>
      </view>
      <view class="image-text_9 flex-col justify-around" @click="tabClick(2)">
       <text class="iconfont label_10" :class="{'tab_color' : collect == 2}">&#xe670;</text>
        <text class="text-group_11">收藏</text>
      </view>
      <view class="image-text_10 flex-col justify-around" @click="tabClick(3)">
        <text class="iconfont label_11" :class="{'tab_color' : shoppingCart == 3}">&#xe607;</text>
        <text class="text-group_12" @click="toShoppingCart">购物车</text>
      </view>
      <view class="text-wrapper_9" @click="tabClick(4)">
        <text class="text_31">加入购物车</text>
      </view>
      <view class="text-wrapper_10" @click="tabClick(5)">
        <text class="text_32">立即购买</text>
      </view>
    </view>
	<view v-if="price == '询价'" class="group_17 xj flex-row justify-around" :style="{'padding-bottom': iphonex ? '68rpx' : '0rpx'}">
	  <view class="image-text_8 flex-col justify-around" @click="tabClick(1)">
	    <text class="iconfont label_9" :class="{'tab_color' : store == 1}">&#xe676;</text>
	    <text class="text-group_10">店铺</text>
	  </view>
	  <view class="image-text_9 flex-col justify-around" @click="tabClick(2)">
	   <text class="iconfont label_10" :class="{'tab_color' : collect == 2}">&#xe670;</text>
	    <text class="text-group_11">收藏</text>
	  </view>
	  <view class="image-text_10 flex-col justify-around" @click="tabClick(3)">
	    <text class="iconfont label_11" :class="{'tab_color' : shoppingCart == 3}">&#xe649;</text>
	    <text class="text-group_12">留言</text>
	  </view>
	  <view class="text-wrapper_10" @click="tabClick(6)">
	    <text class="text_32">立即询价</text>
	  </view>
	</view>
	<view class="buy_block" v-if="buyBlock" :style="{'padding-bottom': iphonex ? '68rpx' : '0rpx'}">
		<view class="mask"></view>
		<view class="mode">
			<view class="buy_close" @click="buyClose(1)">×</view>
			<view class="img_price flex-row align-center">
				<image :src="images.a"></image>
				<view class="price_choose flex-col justify-between">
					<text class="price">￥{{price}}</text>
					<text class="exite">库存：2件</text>
					<text class="choose">已选：{{choose}}</text>
				</view>
			</view>
			<view class="specifications_block flex-col align-start">
				<view class="block_text">规格</view>
				<text class="specifications_text" :class="{'click_specifications_text' : specificationsIndex == index}" v-for="(item,index) in specifications" :key="index" @click="clickSpecifications(item,index)">{{item}}</text>
			</view>
			<view class="product_number flex-row justify-between">
				<view class="number_text">购买数量</view>
					<uni-number-box :value="numberValue" @change="change"></uni-number-box>				
			</view>
			<view class="buy_btn">确定</view>
	    </view>	
	</view>
	<view class="buy_block2" v-if="buyBlock2" :style="{'padding-bottom': iphonex ? '68rpx' : '0rpx'}">
		<view class="mask"></view>
		<view class="mode">
			<view class="buy_close" @click="buyClose(2)">×</view>
			<view class="img_price2">
				商家基本信息
				<view class="tel_solid"></view>
			</view>
			<view class="text_block">
				<view class="store_name flex-row align-center">
					<view class="block_text flex-row align-center">
						<text class="iconfont store_icon">&#xe676;</text>
						<text class="name_text">河南诚鑫暖通设备</text>
						<text class="in_store">进店</text>
					</view>
				</view>
				<view class="store_address flex-row align-center">
					<text class="iconfont store_icon">&#xe678;</text>
					<text class="name_text">地址：郑州市金水区北三环花园路</text>
				</view>
				<view class="flex-row align-center">
					<text class="iconfont store_icon">&#xe681;</text>
					<text class="name_text">电话:13213027456</text>
				</view>
			</view>		
			<view class="buy_btn2" @click="openTel()">拨打电话</view>
			<view class="point_out">建议同城当面验货交易,请不要提前私下转账付款或付定金或付押金，可能会被拉黑物财两空;私下交易转账付款造成的纠纷、损失及不法侵害本平台概不负责;</view>
	    </view>	
	</view>
  </view>
</template>
<script>
export default {
  data() {
    return {
		navIndex: 0,
		openHeight: 330,
		store: 0,
		collect: 0,
		shoppingCart: 0,
		join: 0,
		buy: 0,
		price: '',
		choose: '',
		numberValue: 0,
		specificationsIndex: 0,
		buyBlock: false,
		buyBlock2: false,
		iphonex: this.$iphonex.iphonex,
		specifications: {
			a: '3匹颐享Ⅲ26-40㎡【一价全包版】',
			b: '10匹一拖二变频',
		},
		images:{
			a:'/static/bg/200711.png',
			b:'/static/bg/0301162340.png'
		},
		appraise: [{
			tel: '136******2',
			time: '2023-01-28',
			message: '制热效果非常好，特别要感谢安装师傅，不光技术熟练，还跟我打扫得干干净净。',
			attribute: '空调面板颜色：陶白色'
		},
		{
			tel: '136******2',
			time: '2023-01-28',
			message: '制热效果非常好，特别要感谢安装师傅，不光技术熟练，还跟我打扫得干干净净。',
			attribute: '空调面板颜色：陶白色'
		}],
		wordsWritten: [{
			tel: '136******2',
				time: '2023-01-28',
				message: '请问多久能发货',
			},
			{
				tel: '136******2',
				time: '2023-01-28',
				message: '请问价格是多少',
		}],
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
				
		},{
				text: '独立除湿：支持独立除湿'
				},
			{
				text: '自动清洁：内外机自动清洁'
				},
			{
				text: '功能制冷量：12000W'
				
		}],
      constants: {}
    };
  },
  methods: {
	  //顶部nav切换，定位到相应栏目
	  navChange(index) {
	  	this.navIndex = index
		let height = 0
		uni.createSelectorQuery().select('.goods-detail-nav').boundingClientRect(data => (
		height = data.height
		)).exec()
		if(index == 0) {
			uni.pageScrollTo({
				duration:100,
				scrollTop: 0
			})
		}else if(index == 2) {
			uni.createSelectorQuery().select('.page').boundingClientRect(res => {
				uni.createSelectorQuery().select('.group_7').boundingClientRect(data => {
					uni.pageScrollTo({
						duration:100,
						scrollTop: data.top - res.top -height
					})
				}).exec()
			}).exec()
		} else {
			uni.createSelectorQuery().select('.page').boundingClientRect(res => {
				uni.createSelectorQuery().select('.group_16').boundingClientRect(data => {
						uni.pageScrollTo({
							duration:100,
							scrollTop: data.top - res.top -height
						})
				}).exec()
			}).exec()
			
	  }
	  },
	  //展开规格
	  open() {
		  this.openHeight = this.ktParameter.length * 48
	  },
	  //底部tab切换
	  tabClick(e) {
		  if(e == 1) {
			  this.store = e
			  uni.navigateTo({
			  	url: '/pages/shop/shop'
			  })
		  } else if (e == 2) {
			  this.collect = e
		  } else if(e == 3) {
			  this.shoppingCart = e
		  } else if(e == 4) {
			  this.join = e
			  uni.navigateTo({
			  	url: '/pages/my/shoppingCart'
			  })
		  } else if(e == 5){
			  this.buyBlock = true
		  } else {
			  this.buyBlock2 = true
		  }
	  },
	  //购买数量改变
	  change(value) {
	  				this.numberValue = value
	  			},
	//选择购买规格	
	  clickSpecifications(e,f) {
		  this.choose = e
		  this.specificationsIndex = f
	  },
	  //关闭购买弹窗
	  buyClose(e) {
		  if(e == 1) {
			  this.buyBlock = false
		  } else {
			  this.buyBlock2 = false
		  }		  
	  },
	  //拨打电话
	  openTel() {
		  uni.makePhoneCall({
		  	phoneNumber: '18838000000'
		  });
	  },
	  //跳转购物车
	  toShoppingCart() {
		  uni.navigateTo({
		  	url: '/pages/my/shoppingCart'
		  })
	  },
	  //跳转店铺
	  toShop() {
		  uni.navigateTo({
		  	url: '/pages/shop/shop'
		  })
	  }
  },
  onLoad(option) {
		  this.price = option.price
  	
  }
};
</script>
<style lang='less'>
@import '../../static/css/common.css';
</style>


<style lang="less">
.page {
  position: relative;
  width: 750rpx;
  // overflow: hidden;
  .goods-detail-nav {
	  width: 750rpx;
	  height: 86rpx;
	  position: fixed;
	  top: 0;
	  left: 0;
	  z-index: 996;
	  .w {
	  				display: flex;
	  				justify-content: space-between;
					background-color: rgba(0, 0, 0, 0.6);
					padding: 0 176rpx 0 176rpx;
	  				.nav-font {
	  					padding: 20rpx;
	  					font-size: 32rpx;
	  					font-weight: 600;
	  					color: #ffffff;
	  				}
	  
	  				.nav-font-active {
	  					color: #E63C31;
	  					border-bottom: 4rpx solid #E63C31;
	  				}
	  			}
  }
.goods-block {
	margin-top: 86rpx;
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
	  height: 188rpx;
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
	  .box_3 {
	    width: 692rpx;
	    height: 30rpx;
		margin-top: 4rpx;
	    padding: 0 24rpx 16rpx 34rpx;
		background-color: #fff;
	    .text-wrapper_2 {
	      width: 127rpx;
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
	      width: 136rpx;
	      height: 30rpx;
	      overflow-wrap: break-word;
	      font-size: 0;
	      font-family: PingFang-SC-Regular;
	      font-weight: NaN;
	      text-align: left;
	      white-space: nowrap;
	      line-height: 30rpx;
	      .text_12 {
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
	      .text_13 {
	        width: 136rpx;
	        height: 23rpx;
	        overflow-wrap: break-word;
	        color: rgba(51, 51, 51, 1);
	        font-size: 24rpx;
	        font-family: PingFang-SC-Regular;
	        font-weight: NaN;
	        text-align: left;
	        white-space: nowrap;
	        line-height: 36rpx;
	      }
	    }
	  }
	}
	.group_8 {
	  background-color: rgba(255, 255, 255, 1);
	  border-radius: 10px;
	  width: 749rpx;
	  height: 175rpx;
	  margin-top: 30rpx;
	  .group_9 {
	    width: 686rpx;
	    height: 24rpx;
	    margin: 38rpx 0 0 32rpx;
	    .text_14 {
	      width: 51rpx;
	      height: 23rpx;
	      overflow-wrap: break-word;
	      color: rgba(51, 51, 51, 1);
	      font-size: 24rpx;
	      font-family: PingFang-SC-Medium;
	      font-weight: 500;
	      text-align: left;
	      white-space: nowrap;
	      line-height: 36rpx;
	    }
	    .text_15 {
	      width: 213rpx;
	      height: 24rpx;
	      overflow-wrap: break-word;
	      color: rgba(51, 51, 51, 1);
	      font-size: 24rpx;
	      font-family: PingFang-SC-Regular;
	      font-weight: NaN;
	      text-align: left;
	      white-space: nowrap;
	      line-height: 36rpx;
	      margin-left: 23rpx;
	    }
	  }
	  .group_10 {
	    width: 687rpx;
	    height: 24rpx;
	    margin: 37rpx 0 28rpx 31rpx;
	    .text_16 {
	      width: 52rpx;
	      height: 23rpx;
	      overflow-wrap: break-word;
	      color: rgba(51, 51, 51, 1);
	      font-size: 24rpx;
	      font-family: PingFang-SC-Medium;
	      font-weight: 500;
	      text-align: left;
	      white-space: nowrap;
	      line-height: 36rpx;
	    }
	    .text_17 {
	      width: 287rpx;
	      height: 23rpx;
	      overflow-wrap: break-word;
	      color: rgba(51, 51, 51, 1);
	      font-size: 24rpx;
	      font-family: PingFang-SC-Regular;
	      font-weight: NaN;
	      text-align: left;
	      white-space: nowrap;
	      line-height: 36rpx;
	      margin: 1rpx 0 0 22rpx;
	    }
	  }
}
}		
  

  .group_7 {
    background-color: rgba(246, 246, 246, 1);
    position: relative;
    width: 750rpx;
    // height: 2148rpx;
    // margin: -1rpx 0 486rpx 0;
    .group_11 {
      background-color: rgba(255, 255, 255, 1);
      border-radius: 10px;
      width: 749rpx;
      margin-top: 28rpx;
      .block_2 {
        width: 76rpx;
        height: 29rpx;
        margin: 25rpx 0 0 30rpx;
        .block_3 {
          background-color: rgba(230, 60, 49, 1);
          border-radius: 1px;
          width: 3rpx;
          height: 28rpx;
          margin-top: 1rpx;
        }
        .text_18 {
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
      .block_4 {
        width: 691rpx;
        height: 42rpx;
        margin: 23rpx 0 0 30rpx;
        .label_4 {
          width: 45rpx;
          height: 45rpx;
		  color: #FFD7D4;
		  font-size: 50rpx;
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
      .text-group_2 {
        width: 695rpx;
        height: 97rpx;
        margin: 18rpx 0 0 28rpx;
        .text-wrapper_4 {
          width: 695rpx;
          overflow-wrap: break-word;
          font-size: 24rpx;
          font-family: MicrosoftYaHei;
          font-weight: NaN;
          text-align: left;
          line-height: 34rpx;
          .paragraph_2 {
            width: 695rpx;
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
        .text-wrapper_5 {
          width: 218rpx;
          height: 30rpx;
          overflow-wrap: break-word;
          font-size: 0;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          text-align: left;
          white-space: nowrap;
          line-height: 30rpx;
          margin-top: 10rpx;
          .text_21 {
            width: 218rpx;
            height: 30rpx;
            overflow-wrap: break-word;
            color: #999;
            font-size: 22rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: left;
            white-space: nowrap;
            line-height: 30rpx;
          }
        }
      }
      .text-wrapper_8 {
        background-color: rgba(255, 255, 255, 1);
        border-radius: 19px;
        height: 38rpx;
        border: 1px solid rgba(191, 191, 191, 1);
        width: 180rpx;
        margin: 45rpx 0 35rpx 317rpx;
		text-align: center;
        .text_29 {
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 24rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          white-space: nowrap;
          line-height: 38rpx;
        }
      }
}
  
    .group_12 {
      background-color: rgba(255, 255, 255, 1);
      border-radius: 10px;
      width: 750rpx;
      height: 214rpx;
      margin-top: 29rpx;
      .image-text_2 {
        width: 718rpx;
        height: 45rpx;
        margin: 40rpx 0 0 32rpx;
        .label_6 {
          width: 48rpx;
          height: 45rpx;
        }
        .text-group_4 {
          width: 310rpx;
          height: 23rpx;
		  margin-left: 16rpx;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 24rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          text-align: left;
          white-space: nowrap;
          line-height: 23rpx;
        }
      }
      .box_4 {
        width: 338rpx;
        height: 48rpx;
        margin: 42rpx 0 39rpx 206rpx;
        .box_5 {
          background-color: rgba(255, 255, 255, 1);
          border-radius: 24px;
          width: 160rpx;
          height: 48rpx;
          border: 1px solid rgba(191, 191, 191, 1);
            .label_7 {
              width: 30rpx;
              height: 30rpx;
              font-size: 30rpx;
              color: rgba(51, 51, 51, 1);
            }
            .text-group_5 {
              width: 93rpx;
              overflow-wrap: break-word;
              color: rgba(51, 51, 51, 1);
              font-size: 24rpx;
              font-family: PingFang-SC-Regular;
              font-weight: NaN;
              text-align: center;
              white-space: nowrap;
              line-height: 24rpx;
              margin-top: 1rpx;
            }
        }
        .box_6 {
          background-color: rgba(255, 255, 255, 1);
          border-radius: 24px;
          width: 160rpx;
          height: 48rpx;
          border: 1px solid rgba(191, 191, 191, 1);
            .label_8 {
              width: 30rpx;
              height: 30rpx;
			  font-size: 30rpx;
			  color: rgba(51, 51, 51, 1);
            }
            .text-group_6 {
              width: 94rpx;
              overflow-wrap: break-word;
              color: rgba(51, 51, 51, 1);
              font-size: 24rpx;
              font-family: PingFang-SC-Regular;
              font-weight: NaN;
              text-align: center;
              white-space: nowrap;
              line-height: 24rpx;
            }
          }
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
.img_block {
	background-color: rgba(255, 255, 255, 1);
	border-radius: 10px;
	width: 750rpx;
	margin-top: 28rpx;
	.image-text_7 {
	  width: 147rpx;
	  height: 30rpx;
	  margin: 32rpx 0 28rpx 30rpx;
	  .thumbnail_3 {
	    width: 24rpx;
	    height: 24rpx;
			  font-size: 24rpx;
	  }
	  .text-group_9 {
	    width: 117rpx;
	    height: 30rpx;
	    overflow-wrap: break-word;
	    color: rgba(51, 51, 51, 1);
	    font-size: 30rpx;
	    font-family: PingFang-SC-Medium;
	    font-weight: 500;
	    text-align: left;
	    white-space: nowrap;
	    line-height: 30rpx;
	  }
	}
	.img_list {
			  width: 690rpx;
			  margin:0 0 100rpx 30rpx;
			  image {
				  width: 100%;
			  }
	}
}
.words-written {
	width: 690rpx;
	height: 238rpx;
	background-color: #fff;
	margin: 18rpx 0 100rpx 0;
	padding: 36rpx 30rpx;
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
		padding:10rpx 0 0 10rpx;
		background-color: #eee;
		border: 1rpx solid #BFBFBF;
		border-radius: 10rpx;
		font-size: 24rpx;
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
				  color: #FFD7D4;
				  font-size: 50rpx;
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
	.tab_color {
		color: #E63C31;
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
  .buy_block {
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
  		width: 750rpx;
  		height: 900rpx;
  		background-color: #fff;
  		position: absolute;
  		left: 0;
		bottom: 0;
		border-radius: 10rpx;
		.buy_close {
			width: 36rpx;
			height: 36rpx;
			font-size: 36rpx;
			color: #333;
			line-height: 36rpx;
			text-align: center;
			border: 2rpx solid #333;
			border-radius: 50%;
			position: absolute;
			top: 12rpx;
			right: 30rpx;
		}
		.img_price {
			margin: 32rpx 0 0 30rpx;
			image {
				width: 160rpx;
				height: 160rpx;
				margin-right: 26rpx;
			}
			.price_choose {
				height: 130rpx;
				.price {
					font-size: 36rpx;
					color: #E63C31;
				}
				.exite {
					font-size: 24rpx;
					color: #999;
				}
				.choose {
					font-size: 24rpx;
					color: #333;
				}
			} 
		}
		.specifications_block {
			.block_text {
				margin: 40rpx 0 22rpx 30rpx;
				font-size: 30rpx;
				color: #333;
				font-weight: 500;
			}
			.specifications_text {
				margin: 0 0 20rpx 30rpx;
				padding: 16rpx 26rpx;
				background-color: #eee;
				border-radius: 1rpx solid #bfbfbf;
				font-size: 24rpx;
				color: #333;
				border-radius: 36rpx;
			}
			.click_specifications_text {
				background-color: #E63C31;
				color: #ffffff;
			}
		}
		.product_number {
			margin: 65rpx 40rpx 0 30rpx;
			.number_text {
				font-size: 36rpx;
				color: #333;
			}
		}
		.buy_btn {
			width: 690rpx;
			height: 60rpx;
			background-color: #E63C31;
			font-size: 30rpx;
			color: #ffffff;
			font-weight: 500;
			line-height: 60rpx;
			text-align: center;
			border-radius: 30rpx;
			position: absolute;
			margin-left: -345rpx;
			left: 50%;
			bottom: 16rpx;
		}
}
}
		.buy_block2 {
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
		  		width: 750rpx;
		  		height: 720rpx;
		  		background-color: #fff;
		  		position: absolute;
		  		left: 0;
				bottom: 0;
				border-radius: 10rpx;
				.buy_close {
					width: 36rpx;
					height: 36rpx;
					font-size: 36rpx;
					color: #333;
					line-height: 36rpx;
					text-align: center;
					border: 2rpx solid #333;
					border-radius: 50%;
					position: absolute;
					top: 12rpx;
					right: 30rpx;
				}
				.img_price2 {
					width: 680rpx;
					margin: 36rpx 0 0 30rpx;
					padding-bottom: 65rpx;
					font-size: 36rpx;
					font-weight: 600;
					color: #333;
					text-align: center;
					border-bottom: 1rpx solid #DCDCDC;
					position: relative;
					.tel_solid {
						width: 60rpx;
						height: 6rpx;
						background-color: #E63C31;
						position: absolute;
						left: 290rpx;
						bottom: 44rpx;
					}
				}
				.text_block {
					margin: 50rpx 0 80rpx 35rpx;
					.store_name {
						.in_store {
							width: 104rpx;
							height: 36rpx;
							background-color: #FF0000;
							border-radius: 18rpx;
							font-size: 24rpx;
							color: #fff;
							line-height: 36rpx;
							text-align: center;
						}
					}	
					.store_address {
						margin: 46rpx 0;
					}
					.store_icon {
						font-size: 30rpx;
						color: #666;
					}
					.name_text {
						margin: 0 6rpx;
						font-size: 30rpx;
						color: #333;
					}
				}
				.buy_btn2 {
					width: 350rpx;
					height: 66rpx;
					background-color: #E63C31;
					font-size: 30rpx;
					font-weight: 500;
					color: #ffffff;
					font-weight: 500;
					line-height: 66rpx;
					text-align: center;
					border-radius: 33rpx;
					margin-left: 200rpx;
				}
				.point_out {
					width: 665rpx;
					margin: 35rpx 0 0 45rpx;
					font-size: 20rpx;
					color: #666;
					white-space: pre-line;
				}
		}
		}
}
</style>
