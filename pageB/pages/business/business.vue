<template>
	<!-- 商家中心 -->
  <view class="page flex-col">
    <view class="group_1 flex-col">
      <view class="box_1 flex-col">
        <view class="box_2 flex-row align-center">
          <image class="single-avatar_1" src="../../../static/bg/7220921.png"></image>
          <view class="text-group_1 flex-col justify-between">
            <text class="text_2">{{shopInfo.shop_name}}</text>
            <text class="text_3">{{shopInfo.fuzerenshoujihao}}</text>
          </view>
		  <text class="icon_2" @click="toMy">返回个人中心</text>
        </view>
      </view>
      <view class="box_4 flex-col">
		<view class="box_6">
			常用工具
		</view>
		<view class="group_5 flex-col">
		  <view class="box_5 flex-row justify-between">
		    <view class="image-text_1 image-text_2 flex-col align-center" @click="toReleaseCommodity">
				<text class="iconfont icon_5">&#xe649;</text>
		        <text class="text_11">发布商品</text>
		    </view>
		    <view class="image-text_1 image-text_2 flex-col align-center" @click="toManageCommodity">
			<text class="iconfont icon_5">&#xe699;</text>
		      <text class="text_11">商品管理</text>
		    </view>
			<view class="image-text_1 image-text_2 flex-col align-center" @click="toReleaseWantBuy">
			<text class="iconfont icon_5">&#xe649;</text>
			  <text class="text_11">发布求购</text>
			</view>
		   <view class="image-text_1 image-text_2 flex-col align-center" @click="toManageWantBuy">
		   <text class="iconfont icon_5">&#xe699;</text>
		     <text class="text_11">求购管理</text>           
		   </view>
		   <view class="image-text_1 image-text_2 flex-col align-center" @click="toShopDecoration">
		   <text class="iconfont icon_5">&#xe676;</text>
		     <text class="text_11">店铺装修</text>
		   </view>
		  </view>
		</view>
        <view class="group_6 flex-col">
          <view class="image-text_6 flex-row" @click="toJoinInformation">
			  <text class="iconfont icon_10">&#xe6a8;</text>
            <text class="text-group_7">入驻资料</text>
          </view>
          <view class="image-text_6 flex-row justify-between align-center">
			  <view>
				  <text class="iconfont icon_10">&#xe66b;</text>
				  <text class="text-group_7">订单消息</text>
			  </view>
			<view class="round-dot"></view>
          </view>
          <view class="image-text_6 flex-row" @click="toOpenCity">
          	<text class="iconfont icon_10">&#xe612;</text>
            <text class="text-group_7">开通城市分站</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
	import {sellerInfo} from '../../../static/js/api.js'
export default {
  data() {
    return {
		shopInfo: '',
		sellerid: '',
      constants: {}
    };
  },
  methods: {
	  // 获取商家入驻信息
	  async pSellerInfo(data) {
	  	let res = await sellerInfo(data)
		this.shopInfo = res
	  	// console.log(res)
	  	// this.shopStatus = res.status
	  },
	//跳转发布商品
	toReleaseCommodity() {
		uni.navigateTo({
			url: '/pageB/pages/business/releaseCommodity'
		})
	},
	//返回个人中心
	toMy() {
		uni.navigateBack({
			delta: 1
		})
	},
	// 跳转店铺装修
	toShopDecoration() {
		uni.navigateTo({
			url: '/pageC/pages/shop/shopDecoration'
		})
	},
	// 跳转商品管理
	toManageCommodity() {
		uni.navigateTo({
			url: '/pageB/pages/business/manageCommodity?sellerid=' + this.sellerid
		})
	},
	// 跳转发布求购
	toReleaseWantBuy() {
		uni.navigateTo({
			url: '/pageA/pages/my/releaseWantBuy'
		})
	},
	//跳转求购管理
	toManageWantBuy() {
		uni.navigateTo({
			url: '/pageA/pages/my/myWantBuy'
		})
	},
	// 跳转入驻资料
	toJoinInformation() {
		uni.navigateTo({
			url: '/pageB/pages/business/joinInformation?sellerid=' + this.sellerid
		})
	},
	// 打开开通城市分账
	toOpenCity() {
		uni.navigateTo({
			url: '/pageB/pages/business/openCity'
		})
	}
  },
  onLoad(option) {
	  // console.log(option)
	  if(option.sellerid) {
		  this.sellerid = option.sellerid
		  uni.setStorage({
		  	key:'sellerid',
		  	data: option.sellerid,
		  	success() {
		  		// console.log("sellerid123")
		  	}
		  })
	  }
  			let data = {
  				seller_id: option.sellerid,
  				user_id: option.userid
  			}
  			this.pSellerInfo(data)
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
  .group_1 {
    width: 750rpx;
    .box_1 {
      width: 749rpx;
      height: 180rpx;
      background-color: #4182FE;
      .box_2 {
        width: 675rpx;
        height: 110rpx;
        margin: 28rpx 0 0 39rpx;
        .single-avatar_1 {
          width: 110rpx;
          height: 110rpx;
		  border-radius: 50%;
        }
        .text-group_1 {
          width: 150rpx;
          height: 70rpx;
		  margin-left: 24rpx;
          .text_2 {
            height: 30rpx;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 28rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: left;
            white-space: nowrap;
            line-height: 30rpx;
			text-overflow: ellipsis;
			overflow: hidden;
          }
          .text_3 {
            height: 24rpx;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 24rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: left;
            white-space: nowrap;
            line-height: 24rpx;
            margin: 17rpx 0 0 1rpx;
          }
        }
        .icon_2 {
          width: 170rpx;
          height: 40rpx;
		  margin-left: 250rpx;
		  background-color: #E63C31;
		  border-radius: 20rpx;
          font-size: 22rpx;
		  color: #fff;
		  line-height: 40rpx;
		  text-align: center;
        }
      }
      .box_3 {
        width: 675rpx;
        height: 130rpx;
        margin: 30rpx;
        .text_4 {
          color: #fff;
          font-size: 24rpx;
          font-family: PingFang-SC-Bold;
        }
        .text_5 {
          color: #fff;
          font-size: 36rpx;
          font-family: PingFang-SC-Regular;
        }
		.button_1 {
			width: 90rpx;
			height: 30rpx;
			background-color: #E63C31;
			border-radius: 15rpx;
			color: #fff;
			font-size: 22rpx;
			line-height: 30rpx;
			text-align: center;
		}
      }
    }
    .box_4 {
      width: 750rpx;
      height: 872rpx;
      .text-wrapper_1 {
        width: 678rpx;
        height: 28rpx;
        margin: 50rpx 0 0 37rpx;
        .text_9 {
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
        }
        .text_10 {
          width: 106rpx;
          height: 23rpx;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 24rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          text-align: left;
          white-space: nowrap;
          line-height: 24rpx;
          margin-top: 5rpx;
        }
      }
      .group_5 {
        background-color: rgba(255, 255, 255, 1);
        border-radius: 10px;
        width: 691rpx;
        height: 181rpx;
        margin: 15rpx 0 0 30rpx;
        .box_5 {
          width: 648rpx;
          height: 80rpx;
          margin: 36rpx 0 0 25rpx;
          .image-text_1 {
            width: 110rpx;
            height: 120rpx;
			justify-content: space-between;
            .icon_5 {
              font-size: 44rpx;
			  color: #000;
            }      
              .text_11 {
                overflow-wrap: break-word;
                color: rgba(51, 51, 51, 1);
                font-size: 24rpx;
                font-family: PingFang-SC-Regular;
                font-weight: NaN;
                white-space: nowrap;
                line-height: 24rpx;
              }
              .text_12 {
                overflow-wrap: break-word;
                color: rgba(51, 51, 51, 1);
                font-size: 24rpx;
                font-family: PingFang-SC-Regular;
                font-weight: NaN;
                white-space: nowrap;
                line-height: 24rpx;
              }
			  .color {
				  color: #E63C31
			  }
          }
		  .image-text_2 {
			  height: 80rpx;
		  }
      }
	  }
	  .box_6 {
		  margin: 38rpx 0 16rpx 38rpx;
		  font-size: 30rpx;
		  color: #333;
		  font-weight: 500;
	  }
      .group_6 {
        background-color: rgba(255, 255, 255, 1);
        border-radius: 10px;
        position: relative;
        width: 690rpx;
        height: 260rpx;
        margin: 34rpx 0 0 30rpx;
        .image-text_6 {
          width: 650rpx;
          height: 29rpx;
          margin: 29rpx 0 0 21rpx;
		  padding-bottom: 20rpx;
		  border-bottom: 1rpx solid #BFBFBF;
          .icon_10 {
            font-size: 30rpx;
			color: #666;
          }
          .text-group_7 {
            width: 110rpx;
            height: 24rpx;
			margin-left: 10rpx;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 24rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: left;
            white-space: nowrap;
            line-height: 24rpx;
            margin-top: 3rpx;
          }
		  .round-dot {
			  width: 14rpx;
			  height: 14rpx;
			  margin-right: 20rpx;
			  background-color: #E63C31;
			  border-radius: 50%;
		  }
        }
      }
    }
  }
}

</style>
