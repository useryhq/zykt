<template>
	<!-- 品牌询价 -->
  <view class="page flex-col justify-between">
    <view class="group_4 flex-col">
      <!-- <view class="image-text_1 flex-row justify-between align-center">
        <text class="text-group_1">区域</text>
		<text class="thumbnail_1 iconfont">&#xe686;</text>
      </view> -->
      <view class="list_1 flex-col">
        <view
          class="list-items_1 flex-row align-center  justify-between"
          v-for="(item, index) in loopData0"
          :key="index"
        >
          <view class="image-text_2 flex-row justify-between">
            <view class="text-group_2 flex-col">
              <text class="text_2">{{item.shop_name}}</text>
			  <text  class="text_3">地址：{{item.province}}{{item.city}}{{item.area}}{{item.address}}</text>
			  <text class="text_3">详细地址：{{item.address}}</text>
            </view>
          </view>
          <view class="image-wrapper_1" @click="toTel(item.mobile)">
			  <text class="label_3 iconfont">&#xe681;</text>
          </view>
        </view>
      </view>
    </view>
	</view>
</template>
<script>
	import {brandAsk} from '../../../static/js/api.js'
export default {
  data() {
    return {
      loopData0: [],
      constants: {}
    };
  },
  methods: {
	  async pBrandAsk(name,id) {
		 let data = {
			 name:name,
			 userid: id
		 } 
		let res = await brandAsk(data)
		this.loopData0 = res.lists
	  },
	  //拨打电话
	  toTel(e) {
	  		  uni.makePhoneCall({
	  		  	phoneNumber: e
	  		  });
	  },
	  //设置导航名称
	  setTitle(T) {
	  		  uni.setNavigationBarTitle({
	  		  	title: T
	  		  });
	  }  
  },
  onLoad(option) {
  	this.setTitle(option.title)
	uni.getStorage({
		key: 'userId',
		success: (res) => {
			this.pBrandAsk(option.title,res.data)
		}
	})
  }
};
</script>
<style>
@import '../../../static/css/common.css';
</style>
<style lang='less'>
	.page {
	  position: relative;
	  width: 750rpx;
	  overflow: hidden;
	  
	  .group_4 {
	    position: relative;
	    width: 749rpx;
	    height: 1210rpx;
	    margin-left: 1rpx;
	    .image-text_1 {
	      width: 65rpx;
	      height: 22rpx;
	      margin: 25rpx 0 0 341rpx;
	      .text-group_1 {
	        width: 42rpx;
	        height: 22rpx;
	        overflow-wrap: break-word;
	        color: rgba(51, 51, 51, 1);
	        font-size: 22rpx;
	        font-family: PingFang-SC-Regular;
	        font-weight: NaN;
	        text-align: left;
	        white-space: nowrap;
	        line-height: 22rpx;
	      }
	      .thumbnail_1 {
	        font-size: 20rpx;
			color: #000;
	      }
	    }
	    .list_1 {
	      width: 690rpx;
	      height: 755rpx;
	      justify-content: space-between;
	      margin: 16rpx 0 0 29rpx;
	      .list-items_1 {
	        background-color: rgba(255, 255, 255, 1);
	        border-radius: 4px;
	        width: 650rpx;
	        height: 167rpx;
	        margin-bottom: 29rpx;
			padding: 0 20rpx;
	        .image-text_2 {
	          width: 589rpx;
	          height: 110rpx;
	          .image_3 {
	            width: 124rpx;
	            height: 110rpx;
	          }
	          .text-group_2 {
	            width: 500rpx;
	            height: 99rpx;
	            margin-top: 6rpx;
	            .text_2 {
	              width: 332rpx;
	              height: 27rpx;
	              overflow-wrap: break-word;
	              color: rgba(51, 51, 51, 1);
	              font-size: 28rpx;
	              font-family: PingFang-SC-Medium;
	              font-weight: 500;
	              text-align: left;
	              white-space: nowrap;
	              line-height: 27rpx;
				  margin-bottom: 20rpx;
	            }
	            .text_3 {
	              width: 500rpx;
	              height: 26rpx;
	              overflow-wrap: break-word;
	              color: rgba(51, 51, 51, 1);
	              font-size: 20rpx;
	              font-family: PingFang-SC-Regular;
	              font-weight: NaN;
	              text-align: left;
	              line-height: 26rpx;
				  text-overflow: ellipsis;
				  overflow: hidden;
				  white-space: nowrap;
	            }
	          }
	        }
	        .image-wrapper_1 {
	          background-color: rgba(255, 239, 239, 1);
	          border-radius: 50%;
	          height: 54rpx;
	          width: 54rpx;
			  margin-bottom: 50rpx;
			  text-align: center;
	          .label_3 {
	            font-size: 32rpx;
				color: #FF0000;
				line-height: 54rpx;
	          }
	        }
	      }
	    }
	  }
}
</style>
