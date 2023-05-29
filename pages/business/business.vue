<template>
	<!-- 商家中心 -->
  <view class="page flex-col">
    <view class="group_1 flex-col">
      <view class="box_1 flex-col">
        <view class="box_2 flex-row align-center">
          <image class="single-avatar_1" src="../../static/bg/7220921.png"></image>
          <view class="text-group_1 flex-col justify-between">
            <text class="text_2">lightdrawlightdraw</text>
            <text class="text_3">136****1482</text>
          </view>
		  <text class="icon_2" @click="toMy">返回个人中心</text>
        </view>
        <view class="box_3 flex-row align-center justify-between">
          <view class="text-block flex-col align-center">
          	<text class="text_4">订单数</text>
			<text class="text_5">10</text>
			<text class="text_4">昨日30</text>
          </view>
		  <view class="text-block flex-col align-center">
		  	<text class="text_4">成交额（￥）</text>
		  	<text class="text_5">10000.00</text>
		  	<text class="text_4">昨日5000</text>
		  </view>
		  <view class="text-block flex-col align-center">
		  	<text class="text_4">总资产（￥）</text>
		  	<text class="text_5">10000.00</text>
		  	<text class="button_1">查看</text>
		  </view>
        </view>
      </view>
      <view class="box_4 flex-col">
        <view class="text-wrapper_1 flex-row justify-between">
          <text class="text_9">销售订单</text>
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
			  <text class="text_12 color">6</text>
            </view>
			<view class="image-text_1 flex-col align-center" @click="toOrderList(3)">
			<text class="iconfont icon_5">&#xe672;</text>
			  <text class="text_11">待收货</text>
			  <text class="text_12 color">6</text>
			</view>
           <view class="image-text_1 flex-col align-center" @click="toOrderList(4)">
           <text class="iconfont icon_5">&#xe673;</text>
             <text class="text_11">待评价</text>
             <text class="text_12 color">6</text>           
           </view>
		   <view class="image-text_1 flex-col align-center" @click="toAfterSalesList">
		   <text class="iconfont icon_5">&#xe6ac;</text>
		     <text class="text_11">退款/售后</text>
		     <text class="text_12">6</text>
		   </view>
          </view>
        </view>
		<view class="box_6">
			常用工具
		</view>
		<view class="group_5 flex-col">
		  <view class="box_5 flex-row justify-between">
		    <view class="image-text_1 image-text_2 flex-col align-center" @click="toReleaseCommodity">
				<text class="iconfont icon_5">&#xe649;</text>
		        <text class="text_11">发布商品</text>
		    </view>
		    <view class="image-text_1 image-text_2 flex-col align-center">
			<text class="iconfont icon_5">&#xe699;</text>
		      <text class="text_11">商品管理</text>
		    </view>
			<view class="image-text_1 image-text_2 flex-col align-center">
			<text class="iconfont icon_5">&#xe649;</text>
			  <text class="text_11">发布求购</text>
			</view>
		   <view class="image-text_1 image-text_2 flex-col align-center">
		   <text class="iconfont icon_5">&#xe699;</text>
		     <text class="text_11">求购管理</text>           
		   </view>
		   <view class="image-text_1 image-text_2 flex-col align-center">
		   <text class="iconfont icon_5">&#xe676;</text>
		     <text class="text_11">店铺装修</text>
		   </view>
		  </view>
		</view>
        <view class="group_6 flex-col">
          <view class="image-text_6 flex-row">
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
          <view class="image-text_6 flex-row">
          	<text class="iconfont icon_10">&#xe612;</text>
            <text class="text-group_7">开通城市分站</text>
          </view>
          <view class="image-text_6 flex-row" @click="toManageAddress">
            <text class="iconfont icon_10">&#xe651;</text>
            <text class="text-group_7">地址管理</text>
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
	//跳转订单列表
	toOrderList(e) {
			uni.navigateTo({
				url: '/pages/businessOrder/orderList?nav=' + e
			})
	},
	//跳转售后列表
	toAfterSalesList() {
		uni.navigateTo({
			url: '/pages/businessOrder/afterSalesList'
		})
	},
	//跳转发布商品
	toReleaseCommodity() {
		uni.navigateTo({
			url: '/pages/business/releaseCommodity'
		})
	},
	//跳转地址管理
	toManageAddress() {
		uni.navigateTo({
			url: '/pages/business/manageAddress'
		})
	},
	//跳转我的收藏
	toMyCollect() {
		uni.navigateTo({
			url: '/pages/my/myCollect'
		})
	},
	//返回个人中心
	toMy() {
		uni.navigateBack()
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
      height: 290rpx;
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
