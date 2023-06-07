<template>
	<!-- 品牌详情 -->
  <view class="page flex-col justify-between">
    <view class="image-wrapper_1 flex-col">
      <image src="../../static/bg/200711.png" mode=""></image>
    </view>
    <view class="box_3 flex-col">
      <view class="text-wrapper_1 flex-row">
        <text class="text_2">{{text1}}空调</text>
        <text class="text_3">{{title}}&gt;{{text0}}</text>
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
			<text class="iconfont icon_3">&#xe687;</text>
		  <text class="text-group_1">热卖推荐</text>
		</view>
      </view>
      <text class="text_4">所有型号</text>
	  <view class="section" v-for="(n,i) in list" :key="i">
	  	<view class="section_1 flex-row justify-between">
	  	  <text class="text_5">{{n.text}}</text>
	  	  <view v-if="n.pk" class="button_1" @click="onClick(i)">
			  <text class="iconfont text-group_2">&#xe661;</text>
	  	      <text class="text-group_2">对比</text>
	  	    </view>
			<view v-else class="button_2">
				<text class="iconfont text-group_3">&#xe661;</text>
				<text class="text-group_3">已选择</text>
			</view>
	  	</view>
	  </view>  
      <view class="button_3 flex-row justify-center" @click="onClick_1">
        <text class="text_10">PK</text>
        <text class="text_11">(已选{{add}}/3)</text>
      </view>
    </view>
	<uni-popup ref="popup" type="message">
		<uni-popup-message type="warn" message="最多选择3个商品" :duration="5000"></uni-popup-message>
	</uni-popup>
  </view>
</template>
<script>
export default {
  data() {
    return {
		list: [
			{
				text: '奥克斯&nbsp;KFR-35GW/BpR3QYQ1+1',
				pk: true
			},
			{
				text: '奥克斯&nbsp;KFR-35GW/BpR3QYQ1+1',
				pk: true
			},
			{
				text: '奥克斯&nbsp;KFR-35GW/BpR3QYQ1+1',
				pk: true
			},
			{
				text: '奥克斯&nbsp;KFR-35GW/BpR3QYQ1+1',
				pk: true
			}
		],
		add: 0,
		title: '',
		text0: '',
		text1: '',
      constants: {}
    };
  },
  methods: {
	  setTitle(T) {
	  		  uni.setNavigationBarTitle({
	  		  	title: T
	  		  });
	  },
    onClick(e) {
	  if(this.add < 3) {
		  this.add ++
		  this.list[e].pk = false
	  } else {
		  this.$refs.popup.open()
	  }
    },
	onClick_1() {
		if(this.add > 0) {
			uni.navigateTo({
				url: '/pageC/pages/contrastDetail/contrastDetail'
			})
		}
	}
  },
  onLoad(option) {
	  console.log(option)
  	  this.title = option.title
	  this.text0 = option.text0
	  this.text1 = option.text1
  	this.setTitle(option.title)
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
}

</style>
