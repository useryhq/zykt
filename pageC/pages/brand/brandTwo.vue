<template>
	<!-- 选择品牌 -->
  <view class="page flex-col justify-between">
    <view class="box_3 flex-col" v-for="(items,index) in list" :key="index">
      <text class="text_2">{{items.name}}</text>
      <view class="section_2 flex-col">
        <view class="block_1 flex-row justify-between"  v-for="(item,i) in items.son" :key="i">
          <view class="image-text_1 flex-col justify-between align-center" @click="toBrandThree(item.cat_id,item.name,items.name)">
            <image
              class="image_3"
              referrerpolicy="no-referrer"
              :src="imgUrl + item.files"
            />
            <text class="text-group_1">{{item.name}}</text>
          </view>
          <view class="text-wrapper_1 flex-col" @click="toBrandWantBuy">
            <text class="text_3">询价</text>
          </view>
        </view>
      </view>
    </view>
    </view>
  </view>
</template>
<script>
import { brandTwo } from '../../../static/js/api';
export default {
  data() {
    return {
		title: '',
		id: '',
		list:[],
		imgUrl: this.$imgUrl.img_base_url,
      constants: {}
    };
  },
  methods: {
	  //获取品牌产品列表
	  async getBrandTwo(i,c) {
		  let data = {
			  id: i,
			  cat_id:c
		  }
		  let res = await brandTwo(data)
		  this.setTitle(res.brand_name)
		  this.title = res.brand_name
		  this.list = res.categories
		  console.log(res)
	  },
	  //设置页面title
	  setTitle(T) {
		  uni.setNavigationBarTitle({
		  	title: T
		  });
	  },
	  //跳转品牌三级页面
	  toBrandThree(c_id,n,ns) {
		  uni.navigateTo({
		  	url: '/pageC/pages/brand/brandThree?title=' + this.title + '&id=' + this.id +'&c_id=' + c_id + '&name=' + n +'&names=' + ns
		  })
	  },
	  //跳转询价
	  toBrandWantBuy() {
		  uni.navigateTo({
		  	url: '/pageC/pages/brand/brandWantBuy?title=' + this.title
		  })
	  }
  },
  onLoad(option) {
	  console.log(option)
	  this.getBrandTwo(option.id,option.c)
	  this.id = option.id
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
  .box_3 {
    width: 749rpx;
    .text_2 {
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
      margin: 31rpx 0 0 26rpx;
    }
    .section_2 {
      background-color: rgba(255, 255, 255, 1);
      border-radius: 10px;
      width: 692rpx;
      border: 2px solid rgba(255, 254, 255, 1);
      margin: 16rpx 0 0 26rpx;
      .block_1 {
        width: 648rpx;
        height: 80rpx;
        padding : 26rpx 0 24rpx 24rpx;
		border: 1rpx solid #F6F6F6;
        .image-text_1 {
          width: 150rpx;
          height: 80rpx;
          .image_3 {
            width: 50rpx;
            height: 40rpx;
            // margin-left: 9rpx;
          }
          .text-group_1 {
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
        }
        .text-wrapper_1 {
          background-color: rgba(255, 0, 0, 1);
          border-radius: 19px;
          height: 38rpx;
          border: 1px solid rgba(255, 0, 0, 1);
          width: 95rpx;
		  text-align: center;
          .text_3 {
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 24rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            white-space: nowrap;
            line-height: 38rpx;
          }
        }
      }
  }
}
}
</style>
