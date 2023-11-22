<template>
	<!-- 品牌详情 -->
  <view class="page flex-col justify-between">
    <view class="image-wrapper_1 flex-col">
      <image src="../../static/bg/200711.png" mode=""></image>
    </view>
    <view class="box_3 flex-col">
      <view class="text-wrapper_1 flex-row">
        <text class="text_2">{{name}}</text>
        <text class="text_3">{{title}}&gt;{{names}}</text>
      </view>
      <view class="list_1 flex-row justify-between">
        <view class="image-text_1 flex-col align-center justify-between">
			<text class="iconfont icon_3">&#xe67e;</text>
          <text class="text-group_1">参数配置</text>
        </view>
		<view class="image-text_1 flex-col align-center justify-between">
			<text class="iconfont icon_3">&#xe682;</text>
		  <text class="text-group_1">经销商</text>
		</view>
		<view class="image-text_1 flex-col align-center justify-between">
			<text class="iconfont icon_3">&#xe676;</text>
		  <text class="text-group_1">附近实体</text>
		</view>
		<view class="image-text_1 flex-col align-center justify-between">
			<text :class="{'color' : hot == 1}" class="iconfont icon_3">&#xe687;</text>
		  <text class="text-group_1">热卖推荐</text>
		</view>
      </view>
      <text class="text_4">所有型号</text>
	  <view class="section" v-for="(n,i) in list" :key="i">
	  	<view class="section_1 flex-row justify-between">
	  	  <text class="text_5">{{n.model_name}}</text>
	  	  <view v-if="n.pk" class="button_1" @click="pkText(n)">
			  <text class="iconfont text-group_2">&#xe661;</text>
	  	      <text class="text-group_2">对比</text>
	  	    </view>
			<view v-else class="button_2">
				<text class="iconfont text-group_3">&#xe661;</text>
				<text class="text-group_3">已选择</text>
			</view>
	  	</view>
	  </view>  
      <view class="button_3 flex-row justify-center" @click="toContrastDetail()">
        <text class="text_10">PK</text>
        <text class="text_11">(已选{{pkBlockadd}}/3)</text>
      </view>
    </view>
	<view v-if="pkBlock" class="pk_block">
		<view class="mask"></view>
		<view class="mode">
			<view class="pk_title">
				<text>同类产品对比（{{pkBlockadd}}/3）</text>
				<text class="close_pk" @click="closePk">×</text>
			</view>
			<view class="product_message flex-row justify-between" v-for="(item,index) in pkMessage" :key="index">
				<text>{{item.title}}</text>
				<text class="iconfont dele" @click="deleProduct(index)">&#xe665;</text>
			</view>
			<view class="add_product">
				<view class="add_icon" @click="closePk">＋</view>
				<text>点击商品列表中对比按钮继续添加</text>
			</view>
			<view class="pk_btn" @click="toContrastDetail()">开始对比</view>
		</view>
	</view>
	<uni-popup ref="popup" type="message">
		<uni-popup-message type="warn" message="最多选择3个商品" :duration="5000"></uni-popup-message>
	</uni-popup>
  </view>
</template>
<script>
	import {brandThree} from '../../../static/js/api.js'
export default {
  data() {
    return {
		list: [],
		hot: '',
		title: '',
		name: '',
		names: '',
		c_id: '',
		pkBlock:false,
		pkBlockadd: 0,
		pkMessage:[],
      constants: {}
    };
  },
  methods: {
	  // 获取品牌型号
	  async pBrandThree(id,c_id) {
		  let data = {
			  b_id: id,
			  c_id: c_id
		  }
		  let res = await brandThree(data)
		  this.list = res.product_models
		  this.hot = res.product.is_hot
		  // console.log(res)
	  },
	  // 设置页面title
	  setTitle(T) {
	  		  uni.setNavigationBarTitle({
	  		  	title: T
	  		  });
	  },
	  // 对比弹窗
	  pkText(e) {
	  	this.pkBlockadd ++
	  	// console.log(this.pkBlockadd)
	  	if(this.pkBlockadd > 3) {
			this.pkBlockadd = 3
	  		// console.log('=====')
	  		this.$refs.popup.open()
	  		this.pkBlock = true
	  		return
	  	} else {
	  		this.pkMessage.push({'title':e.model_name,'sgb_id':e.sgb_id,'id':e.id})
	  		// console.log(this.pkMessage)
	  		e.pk = false,
	  		this.pkBlock = true
	  	}
	  	
	  },
	  closePk() {
	  	this.pkBlock = false
	  },
	  deleProduct(e) {
	  	// console.log(e)
	  	if(this.pkBlockadd > 0) {
	  		this.pkBlockadd --
	  		for(let i = 0; i < this.list.length; i++) {
	  			// console.log("===",this.ktlist[i].goods_id)
	  			if(this.list[i].id == this.pkMessage[e].id) {
	  				// console.log(this.ktlist[i].goods_id)
	  				// console.log(this.pkMessage[e].id)
	  				this.list[i].pk = true
	  			}
	  		}
	  		this.pkMessage.splice(e,1)
	  	}
	  },
	  // 对比弹窗结束
	// 跳转对比详情
	toContrastDetail() {
		if(this.pkBlockadd > 0) {
			let data = JSON.stringify(this.pkMessage)
			// console.log(data,"====")
			uni.navigateTo({
				url: '/pageC/pages/contrastDetail/contrastDetail?pk=' + data
			})
		}
	}
  },
  onLoad(option) {
	  // console.log(option)
  	  this.title = option.title
	  this.c_id = option.c_id
	  this.name = option.name
	  this.names = option.names
  	  this.setTitle(option.title)
	  this.pBrandThree(option.id,option.c_id)
  }
};
</script>
<style lang='less'>
@import '../../../static/css/common.css';
</style>


<style lang="less">
.page {
  position: relative;
  width: 750rpx;
  overflow: hidden;
  .image-wrapper_1 {
    width: 750rpx;
    height: 600rpx;
	image {
		width: 100%;
		height: 100%;
	}
  }
  .box_3 {	  
    .text-wrapper_1 {
      width: 400rpx;
      height: 30rpx;
	  margin: 26rpx 30rpx;
      .text_2 {
        width: 170rpx;
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
      .text_3 {
        width: 190rpx;
        height: 22rpx;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 22rpx;
        font-family: PingFang-SC-Regular;
        font-weight: NaN;
        text-align: left;
        white-space: nowrap;
        line-height: 22rpx;
        margin-top: 5rpx;
      }
    }
    .list_1 {
      width: 678rpx;
      height: 87rpx;
      padding: 20rpx 36rpx;
	  background-color: #fff;
      .image-text_1 {
        width: 100rpx;
        height: 74rpx;
        .icon_3 {
          font-size: 42rpx;
		  color: #333;
        }
		.color {
			color: #FF0000;
		}
        .text-group_1 {
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 24rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          white-space: nowrap;
          line-height: 24rpx;
        }
      }
    }
    .text_4 {
      width: 118rpx;
      height: 28rpx;
      overflow-wrap: break-word;
      color: rgba(51, 51, 51, 1);
      font-size: 30rpx;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      text-align: left;
      white-space: nowrap;
      line-height: 30rpx;
      margin: 36rpx 0 16rpx 26rpx;
    }
	.section {
		width: 750rpx;
		height: 88rpx;
		background-color: #fff;
		.section_1 {
		  width: 690rpx;
		  height: 40rpx;
		  padding: 24rpx 30rpx;
		  border-bottom: 1rpx solid #bfbfbf;
		  .text_5 {
		    width: 370rpx;
		    height: 25rpx;
		    overflow-wrap: break-word;
		    color: rgba(51, 51, 51, 1);
		    font-size: 24rpx;
		    font-family: PingFang-SC-Regular;
		    font-weight: NaN;
		    text-align: left;
		    white-space: nowrap;
		    line-height: 24rpx;
		    margin-top: 10rpx;
		  }
		  .button_1 {
		    background-color: rgba(255, 0, 0, 1);
		    border-radius: 19px;
		    height: 38rpx;
		    width: 96rpx;
			text-align: center;
		      .text-group_2 {
		        font-size: 24rpx;
		        color: #fff;
				line-height: 38rpx;
		      }
		  }
		  .button_2 {
			    background-color: #F6F6F6;
			    border-radius: 19px;
				border: 1rpx solid #999;
			    height: 38rpx;
			    width: 130rpx;
				text-align: center;
			      .text-group_3 {
			        font-size: 24rpx;
			        color: #999;
					line-height: 38rpx;
			      }
			  }
		  }
	}
    .button_3 {
      background-color: rgba(230, 60, 49, 1);
      border-radius: 30px;
      height: 66rpx;
      width: 349rpx;
      margin: 40rpx auto;
      .text_10 {
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 48rpx;
        font-family: PingFang-SC-Bold;
        font-weight: 700;
        white-space: nowrap;
        line-height: 66rpx;
      }
      .text_11 {
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 24rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        white-space: nowrap;
        line-height: 66rpx;
		margin-left: 10rpx;
      }
    }
  }
  .pk_block {
  	width: 100%;
  	height: 100%;
  	position: fixed;
  	top: 0;
  	left: 0;
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
  		left: 0;
  		right: 0;
  		bottom: 0;
  		border-radius: 10rpx;
  		margin: 0 auto;
  		.pk_title {
  			width: 100%;
  			height: 60rpx;
  			background-color: #FF0000;
  			color: #fff;
  			font-size: 30rpx;
  			font-weight: 500;
  			line-height: 60rpx;
  			text-align: center;
  			.close_pk {
  				width: 38rpx;
  				height: 38rpx;
  				margin: 11rpx 26rpx 0 0;
  				font-size: 30rpx;
  				line-height: 38rpx;
  				text-align: center;
  				color: #fff;
  				border: 2rpx solid #fff;
  				border-radius: 50%;
  				float: right;
  			}
  		}
  		.product_message {
  			width: 646rpx;
  			height: 30rpx;
  			margin: 0 auto;
  			padding: 20rpx 10rpx;
  			font-size: 24rpx;
  			color: #333;
  			line-height: 30rpx;
  			text-align: left;
  			border-bottom: 1rpx solid #BFBFBF;
  			.dele {
  				font-size: 24rpx;
  				color: #5C5C5C;
  			}
  		}
  		.add_product {
  			width: 646rpx;
  			height: 88rpx;
  			margin: 0 auto;
  			padding: 16rpx 0;
  			font-size: 20rpx;
  			color: #999;
  			text-align: center;
  			border-bottom: 1rpx solid #BFBFBF;
  			.add_icon {
  				width: 58rpx;
  				height: 58rpx;
  				margin: 0 auto;
  				border-radius: 50%;
  				border: 1rpx solid #B5B5B5;
  				font-size: 44rpx;
  				font-weight: 500;
  				line-height: 58rpx;
  			}
  		}
  		.pk_btn {
  			width: 484rpx;
  			height: 60rpx;
  			margin: 100rpx auto auto auto;
  			background-color: #E63C31;
  			border-radius: 30rpx;
  			font-size: 30rpx;
  			color: #fff;
  			line-height: 60rpx;
  			text-align: center;
  		}
  }
  }
}

</style>
