<template>
	<!-- 二手门店 -->
  <view class="page flex-col justify-between">
    <view class="group_4 flex-col">
      <view class="list_1 flex-col">
        <view
          class="list-items_1 flex-row align-center  justify-between"
          v-for="(item, index) in loopData0"
          :key="index"
        >
          <view class="image-text_2 flex-row justify-between">
            <image
              class="image_3"
              referrerpolicy="no-referrer"
              :src="imgUrl + item.logo"
            />
            <view class="text-group_2 flex-col">
              <text class="text_2">{{item.shop_name}}</text>
              <text class="text_3">{{item.intro}}</text>
			  <text  class="text_3">地址:{{item.province}}{{item.city}}{{item.area}}{{item.address}}</text>
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
	import {twoHand} from '../../static/js/api.js'
export default {
  data() {
    return {
	  imgUrl: this.$imgUrl.img_base_url,
      loopData0: [],
      constants: {}
    };
  },
  methods: {
	  async getData() {
		  let data = {}
		  let cityId = ''
		  let lnglat = {}
		  let flag = ''
		  const res1 = uni.getStorageInfoSync()
		  // console.log(res)
			// console.log(keys)
		  res1.keys.forEach(item => {
		  console.log(item)
			if(item === 'cityId'){
			flag = true
			console.log(flag)
			   }		 							  
			})	   
		 
		  if(flag) {
			  const res2 = uni.getStorageSync('cityId')
			  console.log(res2)
			  data = {
				  type: '2',
				  cityId: res2
			  }
			  let res  = await twoHand(data)
			  console.log(res)
			  this.loopData0 = res.lists
		  } else {
			  const res3 = uni.getStorageSync('longlat')
			  // console.log(res3)
			  let jsonRes3 = JSON.parse(res3)
			  data = {
				  type: '1',
				   lng: jsonRes3.lng,
				   lat: jsonRes3.lat
			  }
			  // console.log(typeof(res3))
			  console.log(data)
			  let res = await twoHand(data)
			  this.loopData0 = res.lists
		  }
		  
		  // data = JSON.parse(data)
		  // console.log(res,"123")
	  },
	  //拨打电话
	  toTel(e) {
	  		  uni.makePhoneCall({
	  		  	phoneNumber: e
	  		  });
	  }
  },
  onLoad() {
  	this.getData()
  }
};
</script>
<style>
@import '../../static/css/common.css';
</style>
<style lang='less'>
	.page {
	  width: 750rpx;
	  /* overflow: scroll; */
	  .group_4 {
	    position: relative;
	    width: 749rpx;
	    height: 1210rpx;
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
	            width: 444rpx;
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
	              width: 443rpx;
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
