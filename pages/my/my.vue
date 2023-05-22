<template>
  <view class="page flex-col">
    <view class="group_1 flex-col">
      <view class="box_1 flex-col">
        <view class="box_2 flex-row align-center">
          <image class="single-avatar_1" src="../../static/bg/7220921.png"></image>
          <view class="text-group_1 flex-col justify-between">
            <text class="text_2">lightdrawlightdraw</text>
            <text class="text_3">136****1482</text>
          </view>
		  <text class="iconfont icon_2">&#xe67e;</text>
        </view>
        <view class="box_3 flex-row align-center">
          <text class="text_4">开通店铺</text>
          <text class="text_5">享受专属权益</text>
          <view class="button_1 flex-col" @click="onClick_1">
            <text class="text_6">查看详情</text>
          </view>
        </view>
      </view>
      <view class="box_4 flex-col">
        <view class="group_4 flex-row justify-between">
          <view class="button_2 flex-col" @click="onClick_2">
            <view class="icon_3 flex-col">
				<text class="iconfont label_2">&#xe6af;</text>
            </view>
            <text class="text_7">我的求购</text>
          </view>
          <view class="button_3 flex-col" @click="onClick_3">
            <view class="icon_4 flex-col">
				<text class="iconfont label_3">&#xe649;</text>
            </view>
            <text class="text_8">我的发布</text>
          </view>
        </view>
        <view class="text-wrapper_1 flex-row justify-between">
          <text class="text_9">我的订单</text>
          <text class="text_10" @click="toOrderList(0)">全部（10）</text>
        </view>
        <view class="group_5 flex-col">
          <view class="box_5 flex-row justify-between">
            <view class="image-text_1 flex-col align-center" @click="toOrderList(1)">
				<text class="iconfont icon_5">&#xe675;</text>
                <text class="text_11">待付款</text>
                <text class="text_12">6</text>
            </view>
            <view class="image-text_1 flex-col align-center" @click="toOrderList(2)">
			<text class="iconfont icon_5">&#xe67a;</text>
              <text class="text_11">待发货</text>
			  <text class="text_12">6</text>
            </view>
			<view class="image-text_1 flex-col align-center" @click="toOrderList(3)">
			<text class="iconfont icon_5">&#xe672;</text>
			  <text class="text_11">待收货</text>
			  <text class="text_12">6</text>
			</view>
           <view class="image-text_1 flex-col align-center" @click="toOrderList(4)">
           <text class="iconfont icon_5">&#xe673;</text>
             <text class="text_11">待评价</text>
             <text class="text_12">6</text>           
           </view>
		   <view class="image-text_1 flex-col align-center" @click="toAfterSalesList">
		   <text class="iconfont icon_5">&#xe6ac;</text>
		     <text class="text_11">退款/售后</text>
		     <text class="text_12">6</text>
		   </view>
          </view>
        </view>
        <view class="group_6 flex-col">
          <view class="image-text_6 flex-row" @click="toShoppingCart">
			  <text class="iconfont icon_10">&#xe6af;</text>
            <text class="text-group_7">购物车</text>
          </view>
          <view class="image-text_6 flex-row">
			  <text class="iconfont icon_10">&#xe66b;</text>
            <text class="text-group_7">我的消息</text>
          </view>
          <view class="image-text_6 flex-row" @click="toMyCollect">
          			  <text class="iconfont icon_10">&#xe64c;</text>
            <text class="text-group_7">我的收藏</text>
          </view>
          <view class="image-text_6 flex-row" @click="toManageAddress">
            <text class="iconfont icon_10">&#xe651;</text>
            <text class="text-group_7">收货地址</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      constants: {}
    };
  },
  methods: {
    onClick_1() {
      
    },
	//跳转我的求购
    onClick_2() {
      uni.navigateTo({
      	url: '/pages/my/myWantBuy'
      })
    },
	//跳转我的发布
    onClick_3() {
      uni.navigateTo({
      	url: '/pages/my/myCommodity'
      })
    },
	//跳转订单列表
	toOrderList(e) {
			uni.navigateTo({
				url: '/pages/order/orderList?nav=' + e
			})
	},
	//跳转售后列表
	toAfterSalesList() {
		uni.navigateTo({
			url: '/pages/order/afterSalesList'
		})
	},
	//跳转购物车
	toShoppingCart() {
			  uni.navigateTo({
			  	url: '/pages/my/shoppingCart'
			  })
	},
	//跳转地址管理
	toManageAddress() {
		uni.navigateTo({
			url: '/pages/my/manageAddress'
		})
	},
	//跳转我的收藏
	toMyCollect() {
		uni.navigateTo({
			url: '/pages/my/myCollect'
		})
	}
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
  overflow: hidden;
  .group_1 {
    width: 750rpx;
    .box_1 {
      width: 749rpx;
      height: 232rpx;
      background-color: #80ACFF;
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
          height: 63rpx;
		  margin-left: 24rpx;
          .text_2 {
            height: 28rpx;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 28rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: left;
            white-space: nowrap;
            line-height: 28rpx;
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
          width: 48rpx;
          height: 48rpx;
		  margin-left: 350rpx;
          font-size: 48rpx;
		  color: #fff;
        }
      }
      .box_3 {
        width: 630rpx;
        height: 35rpx;
        margin: 20rpx 0 0 40rpx;
		padding: 20rpx 30rpx;
		background-color: #FFE6C2;
		border-radius: 20rpx 20rpx 0 0;
        .text_4 {
          width: 110rpx;
          height: 28rpx;
          overflow-wrap: break-word;
          color: rgba(230, 60, 49, 1);
          font-size: 28rpx;
          font-family: PingFang-SC-Bold;
          font-weight: 700;
          text-align: left;
          white-space: nowrap;
          line-height: 28rpx;
        }
        .text_5 {
          width: 130rpx;
          height: 22rpx;
          overflow-wrap: break-word;
          color: rgba(230, 60, 49, 1);
          font-size: 22rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          text-align: left;
          white-space: nowrap;
          line-height: 22rpx;
          margin-left:  15rpx;
        }
        .button_1 {
          background-color: rgba(230, 60, 49, 1);
          border-radius: 20px;
          height: 40rpx;
          margin-left: 259rpx;
          width: 124rpx;
		  text-align: center;
          .text_6 {
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 22rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            white-space: nowrap;
            line-height: 40rpx;
          }
        }
      }
    }
    .box_4 {
      width: 750rpx;
      height: 872rpx;
      .group_4 {
        width: 686rpx;
        height: 77rpx;
        margin: 28rpx 0 0 32rpx;
        .button_2 {
          background-color: rgba(238, 238, 238, 1);
          border-radius: 10px;
          height: 77rpx;
          width: 330rpx;
          .icon_3 {
            background-color: rgba(255, 255, 255, 1);
            border-radius: 50%;
            height: 57rpx;
            width: 57rpx;
            margin: 12rpx 0 0 68rpx;
			text-align: center;
            .label_2 {
              font-size: 40rpx;
			  color: #000;
			  line-height: 57rpx;
            }
          }
          .text_7 {
            width: 117rpx;
            height: 28rpx;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 30rpx;
            font-family: PingFang-SC-Medium;
            font-weight: 500;
            text-align: left;
            white-space: nowrap;
            line-height: 30rpx;
            margin: -42rpx 0 22rpx 147rpx;
          }
        }
        .button_3 {
          background-color: rgba(238, 238, 238, 1);
          border-radius: 10px;
          height: 77rpx;
          width: 330rpx;
          .icon_4 {
            background-color: rgba(255, 255, 255, 1);
            border-radius: 50%;
            height: 57rpx;
            width: 57rpx;
            margin: 12rpx 0 0 63rpx;
			text-align: center;
            .label_3 {
              font-size: 40rpx;
              color: #000;
              line-height: 57rpx;
            }
          }
          .text_8 {
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
            margin: -42rpx 0 22rpx 142rpx;
          }
        }
      }
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
          }
      }
	  }
      .group_6 {
        background-color: rgba(255, 255, 255, 1);
        border-radius: 10px;
        position: relative;
        width: 690rpx;
        height: 330rpx;
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
        }
      }
    }
  }
}

</style>
