<template>
	<!-- 个人中心 -->
  <view class="page flex-col">
    <view class="group_1 flex-col">
      <view class="box_1 flex-col">
        <view class="box_2 flex-row align-center">
          <image class="single-avatar_1" :src="imgUrl + userInfo.thumb"></image>
          <view class="text-group_1 flex-col justify-between">
            <text class="text_2">{{userInfo.nick_name}}</text>
            <text class="text_3">{{userInfo.mobile}}</text>
          </view>
		  <text class="iconfont icon_2">&#xe67e;</text>
        </view>
		<view v-if="res.shopStatus == 2" class="button_4" @click="toBusiness">进入商家中心</view>
        <view v-else class="box_3 flex-row align-center">
          <text class="text_4">开通店铺</text>
          <text class="text_5">享受专属权益</text>
          <view class="button_1 flex-col" @click="onClick_1">
            <text class="text_6">查看详情</text>
          </view>
        </view>
      </view>
      <view class="box_4 flex-col">
        <view class="group_4 flex-row justify-between">
          <view class="button_2 flex-col" @click="onClick">
            <view class="icon_3 flex-col">
				<text class="iconfont label_2">&#xe6af;</text>
            </view>
            <text class="text_7">发布求购</text>
          </view>
          <view class="button_3 flex-col" @click="toReleaseCommodity">
            <view class="icon_4 flex-col">
				<text class="iconfont label_3">&#xe649;</text>
            </view>
            <text class="text_8">发布商品</text>
          </view>
        </view>
        <view class="group_6 flex-col">
          <view class="image-text_6 flex-row" @click="onClick_2">
			  <text class="iconfont icon_10">&#xe6af;</text>
            <text class="text-group_7">求购管理</text>
          </view>
		  <view class="image-text_6 flex-row" @click="onClick_3">
		    <text class="iconfont icon_10">&#xe651;</text>
		    <text class="text-group_7">商品管理</text>
		  </view>
          <view class="image-text_6 flex-row" @click="toMyMessage">
			  <text class="iconfont icon_10">&#xe66b;</text>
            <text class="text-group_7">我的消息</text>
          </view>
          <view class="image-text_6 flex-row" @click="toMyCollect">
          			  <text class="iconfont icon_10">&#xe64c;</text>
            <text class="text-group_7">我的收藏</text>
          </view>
        </view>
      </view>
    </view>
	<view class="group_12 flex-row">
		<view :class="[selectTab == 1 ? 'image-text_11 flex-col color' : 'image-text_11 flex-col']"
			@click="slecetTab(1)">
			<text class="iconfont label_6">&#xe674;</text>
			<text class="text-group_11">首页</text>
		</view>
		<view :class="[selectTab == 2 ? 'image-text_12 flex-col color' : 'image-text_12 flex-col']"
			@click="ToHotProduct('1')">
			<text class="iconfont label_7">&#xe60e;</text>
			<text class="text-group_12">家用空调</text>
		</view>
		<view :class="[selectTab == 3 ? 'image-text_13 flex-col color' : 'image-text_13 flex-col']"
			@click="ToHotProduct('2')">
			<text class="iconfont label_8">&#xe610;</text>
			<text class="text-group_13">商用空调</text>
		</view>
		<view :class="[selectTab == 4 ? 'image-text_14 flex-col color' : 'image-text_14 flex-col']"
			@click="slecetTab(4)">
			<text class="iconfont label_9">&#xe676;</text>
			<text class="text-group_14">二手门店</text>
		</view>
		<view :class="[selectTab == 5 ? 'image-text_15 flex-col color' : 'image-text_15 flex-col']"
			@click="slecetTab(5)">
			<text class="iconfont label_10">&#xe682;</text>
			<text class="text-group_15">我的</text>
		</view>
	</view>
  </view>
</template>
<script>
	import {my} from '../../../static/js/api.js'
export default {
  data() {
    return {
		userid:'',
		imgUrl: this.$imgUrl.img_base_url,
		res: '',
		userInfo: '',
		shopStatus: '',
		sellerid: '',
		selectTab: 5,
      constants: {}
    };
  },
  methods: {
	  //获取个人中心信息
	  async getMy(e) {
	  	let data = {
	  		userid: e
	  	}
		let all = await my(data)
	  	this.res = all
		this.userInfo = all.userInfo
		this.sellerid = all.shopInfo.id
	  	// console.log(this.res)
		},
		//跳转发布商品
		toReleaseCommodity() {
			uni.navigateTo({
				url: '/pageA/pages/my/releaseCommodity'
			})
		},
		//跳转发布求购
		onClick() {
		  uni.navigateTo({
		  	url: '/pageA/pages/my/releaseWantBuy'
		  })
		},
	  // 跳转商家入驻
    onClick_1() {
      uni.navigateTo({
      	url: '/pageB/pages/business/joinBusiness'
      })
    },
	//跳转我的求购
    onClick_2() {
      uni.navigateTo({
      	url: '/pageA/pages/my/myWantBuy'
      })
    },
	//跳转我的发布
    onClick_3() {
      uni.navigateTo({
      	url: '/pageA/pages/my/myCommodity'
      })
    },
	//跳转我的收藏
	toMyCollect() {
		uni.navigateTo({
			url: '/pageA/pages/my/myCollect'
		})
	},
	//跳转我的消息
	toMyMessage() {
		uni.navigateTo({
			url: '/pageA/pages/my/myMessage?userid='+ this.userid
		})
	},
	//开通店铺后跳转商家中心
	toBusiness() {
		uni.navigateTo({
			url: '/pageB/pages/business/business?userid=' + this.userid + '&sellerid=' + this.sellerid
		})
	},
	//tab栏跳转
	slecetTab(e) {
		// console.log(e)
		this.selectTab = e
		if (e == 4) {
			//跳转二手门店
			uni.navigateTo({
				url: '/pages/twoHand/twoHand'
			})
		} else if (e == 1) {
			//跳转首页
			uni.navigateTo({
				url: '/pages/index/index'
			})
		}
	},
	ToHotProduct(e) {
		//跳转家用空调
		if (e == 1) {
			this.selectTab = 2,
				uni.navigateTo({
					url: '/pages/hotProduct/hotProduct?item=' + e
				})
		}
		//跳转商用空调
		if (e == 2) {
			this.selectTab = 3,
				uni.navigateTo({
					url: '/pages/hotProduct/hotProduct?item=' + e
				})
		}
	},
  },
  onLoad(option) {
  	// console.log(option)
	this.getMy(option.userid)
	this.userid = option.userid
  },
  onShow() {
  	this.selectTab = 5
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
      width: 750rpx;
      height: 232rpx;
      background-color: #4182FE;
	  position: relative;
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
            margin: 16rpx 0 0 1rpx;
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
	  .button_4 {
	    width: 170rpx;
	    height: 40rpx;
	    background-color: #E63C31;
	    border-radius: 20rpx;
	    font-size: 22rpx;
	    color: #fff;
	    line-height: 40rpx;
	    text-align: center;
		position: absolute;
		right: 50rpx;
		bottom: 20rpx;
	  }
      .box_3 {
        width: 630rpx;
        height: 35rpx;
        margin-left: 40rpx;
		padding: 20rpx 30rpx;
		background-color: #FFE6C2;
		border-radius: 20rpx 20rpx 0 0;
		position: absolute;
		bottom: 0;
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
			  .color {
			  	color: #E63C31
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
  .group_12 {
  	background-color: rgba(255, 255, 255, 1);
  	box-shadow: 0 -8rpx 4rpx #e6e6e6;
  	width: 750rpx;
  	height: 98rpx;
  	padding-bottom: 6rpx;
  	// margin: 25rpx 0 5rpx 0;
  	position: fixed;
  	left: 0;
  	bottom: 0rpx;
  	z-index: 999;
  	padding-bottom: constant(safe-area-inset-bottom); /*兼容 IOS<11.2*/
  	padding-bottom: env(safe-area-inset-bottom); /*兼容 IOS>11.2*/
  
  	.image-text_11 {
  		width: 46rpx;
  		height: 72rpx;
  		margin: 19rpx 0 0 37rpx;
  		color: rgba(51, 51, 51, 1);
  
  		.label_6 {
  			width: 42rpx;
  			height: 40rpx;
  			font-size: 42rpx;
  			margin-left: 1rpx;
  		}
  
  
  		.text-group_11 {
  			width: 46rpx;
  			height: 23rpx;
  			overflow-wrap: break-word;
  			font-size: 24rpx;
  			font-family: PingFang-SC-Regular;
  			font-weight: NaN;
  			text-align: left;
  			white-space: nowrap;
  			line-height: 36rpx;
  			margin-top: 9rpx;
  		}
  	}
  
  	.image-text_12 {
  		width: 93rpx;
  		height: 68rpx;
  		margin: 23rpx 0 0 85rpx;
  		color: rgba(51, 51, 51, 1);
  
  		.label_7 {
  			width: 48rpx;
  			height: 38rpx;
  			font-size: 44rpx;
  			margin-left: 26rpx;
  		}
  
  		.text-group_12 {
  			width: 93rpx;
  			height: 23rpx;
  			overflow-wrap: break-word;
  			font-size: 24rpx;
  			font-family: PingFang-SC-Regular;
  			font-weight: NaN;
  			text-align: left;
  			white-space: nowrap;
  			line-height: 36rpx;
  			margin-top: 7rpx;
  		}
  	}
  
  	.image-text_13 {
  		width: 93rpx;
  		height: 75rpx;
  		margin: 16rpx 0 0 63rpx;
  		color: rgba(51, 51, 51, 1);
  
  		.label_8 {
  			width: 42rpx;
  			height: 42rpx;
  			font-size: 42rpx;
  			margin-left: 26rpx;
  		}
  
  		.text-group_13 {
  			width: 93rpx;
  			height: 23rpx;
  			overflow-wrap: break-word;
  			font-size: 24rpx;
  			font-family: PingFang-SC-Regular;
  			font-weight: NaN;
  			text-align: left;
  			white-space: nowrap;
  			line-height: 36rpx;
  			margin-top: 10rpx;
  		}
  	}
  
  	.image-text_14 {
  		width: 94rpx;
  		height: 75rpx;
  		margin: 16rpx 0 0 62rpx;
  		color: rgba(51, 51, 51, 1);
  
  		.label_9 {
  			width: 42rpx;
  			height: 40rpx;
  			font-size: 44rpx;
  			margin-left: 29rpx;
  		}
  
  		.text-group_14 {
  			width: 94rpx;
  			height: 23rpx;
  			overflow-wrap: break-word;
  			font-size: 24rpx;
  			font-family: PingFang-SC-Regular;
  			font-weight: NaN;
  			text-align: left;
  			white-space: nowrap;
  			line-height: 36rpx;
  			margin-top: 12rpx;
  		}
  	}
  
  	.image-text_15 {
  		width: 45rpx;
  		height: 73rpx;
  		margin: 18rpx 47rpx 0 86rpx;
  		color: rgba(51, 51, 51, 1);
  
  		.label_10 {
  			width: 36rpx;
  			height: 40rpx;
  			font-size: 44rpx;
  			margin-left: 2rpx;
  		}
  
  		.text-group_15 {
  			width: 45rpx;
  			height: 23rpx;
  			overflow-wrap: break-word;
  			font-size: 24rpx;
  			font-family: PingFang-SC-Regular;
  			font-weight: NaN;
  			text-align: left;
  			white-space: nowrap;
  			line-height: 36rpx;
  			margin-top: 10rpx;
  		}
  	}
  
  	.color {
  		color: #E63C31;
  	}
  }
}

</style>
