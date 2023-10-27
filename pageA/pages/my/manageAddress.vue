<template>
	<!-- 个人中心地址列表 -->
  <view class="page flex-col">
    <view class="group_1 flex-col">
        <view class="list_1 flex-col">
          <view
            class="list-items_1 flex-col"
            v-for="(item, index) in loopData0"
            :key="index"
          >
            <view class="text-wrapper_1 flex-row justify-between">
              <text class="text_2">{{item.name}}</text>
              <text class="text_3">{{item.mobile}}</text>
            </view>
            <text class="text_4">{{item.province}}{{item.city}}{{item.district}}{{item.address}}</text>
            <view class="group_3 flex-col"></view>
            <view class="group_4 flex-row align-center">
				<view class="image-text flex-row">
					<text v-if="item.is_default == 1" class="iconfont icon">&#xe63e;</text>
					<text v-else class="icon_2 flex-col" @click="chooseAddress(item)"></text>
					<text class="text_5">默认地址</text>
				</view>
              <view class="image-text_1 flex-row justify-between">
				<text class="iconfont icon_3">&#xe66e;</text>
                <text class="text-group_1">编辑</text>
              </view>
              <view class="image-text_2 flex-row justify-between" @click="delet(item)">
                <text class="iconfont icon_4">&#xe665;</text>
                <text class="text-group_2">删除</text>
              </view>
            </view>
          </view>
      </view>
    </view>
	<view class="button_1" @click="onClick_1">
	  <text class="text_6">新增地址</text>
	</view>
	<uni-popup ref="popup" type="message">
		<uni-popup-message type="warn" message="警告消息" :duration="3000">{{prompt}}</uni-popup-message>
	</uni-popup>
  </view>
</template>
<script>
	import {manageAddressH,setAddressH,delAddressH} from '../../../static/js/api.js'
export default {
  data() {
    return {
		userid: '',
		loopData0: [],
		prompt: '',
		constants: {}
    };
  },
  methods: {
	  //获取地址列表
	  async pManageAddress(data) {
		  let res = await manageAddressH(data)
		  this.loopData0 = res.lists
		  // console.log(res)
	  },
	  //设置默认地址
	  async pSetAddressH(data) {
		  let res = await setAddressH(data)
		  // console.log(res)
		  this.prompt = res.msg
		  this.$refs.popup.open('top')
		  if(res.code == 200) {
			 let data = {
			 	userid: this.userid
			 }
			  this.pManageAddress(data)
			  // this.$forceUpdate()
		  }
	  },
	  //删除地址接口
	  async pDelAddressH(data) {
		  let res = await delAddressH(data)
		  this.prompt = res.msg
		  this.$refs.popup.open('top')
		  if(res.code == 200) {
		  			 let data = {
		  			 	userid: this.userid
		  			 }
		  			  this.pManageAddress(data)
		  			  // this.$forceUpdate()
		  }
	  },
	  delet(e) {
		  let data = {
			  id: e.id
		  }
		  this.pDelAddressH(data)
	  },
	  //选择默认地址
	  chooseAddress(e) {
		 let data = {
			 id: e.id,
			 userid: this.userid
		 }
		 this.pSetAddressH(data)
	  },
	  //跳转填写地址
    onClick_1() {
      uni.navigateTo({
      	url: '/pageA/pages/my/addAddress'
      })
    }
  },
  onLoad() {
  	
  },
  onShow() {
	  uni.getStorage({
	  	key: 'userId',
	  	success: (res) => {
	  		this.userid = res.data
			let data = {
				userid: res.data
			}
			this.pManageAddress(data)
	  	}
	  })
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
    margin-top: 15rpx;
      .list_1 {
        width: 693rpx;
        margin: 25rpx 0 0 30rpx;
		padding-bottom: 120rpx;
        .list-items_1 {
          background-color: rgba(255, 255, 255, 1);
          border-radius: 4px;
          width: 693rpx;
          height: 276rpx;
          margin-bottom: 28rpx;
          .text-wrapper_1 {
            width: 303rpx;
            margin: 31rpx 0 0 27rpx;
            .text_2 {
              width: 87rpx;
              height: 28rpx;
              overflow-wrap: break-word;
              color: rgba(34, 34, 34, 1);
              font-size: 30rpx;
              font-family: PingFang-SC-Regular;
              font-weight: NaN;
              text-align: left;
              white-space: nowrap;
              line-height: 28rpx;
            }
            .text_3 {
              width: 181rpx;
              overflow-wrap: break-word;
              color: rgba(34, 34, 34, 1);
              font-size: 30rpx;
              font-family: PingFang-SC-Regular;
              font-weight: NaN;
              text-align: left;
              white-space: nowrap;
              line-height: 28rpx;
            }
          }
          .text_4 {
            width: 620rpx;
            height: 60rpx;
            overflow-wrap: break-word;
            color: rgba(34, 34, 34, 1);
            font-size: 24rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: justifyLeft;
            line-height: 37rpx;
            margin: 25rpx 0 0 29rpx;
          }
          .group_3 {
            background-color: rgba(215, 215, 215, 1);
            width: 690rpx;
            height: 1rpx;
            margin: 35rpx 0 0 -4rpx;
          }
          .group_4 {
            width: 619rpx;
            height: 39rpx;
            margin: 22rpx 0 35rpx 43rpx;
			.image-text {
				width: 130rpx;
				.icon {
					font-size: 26rpx;
					color: #E63C31;
				}
				.icon_2 {
				  border-radius: 50%;
				  height: 22rpx;
				  width: 22rpx;
				  border: 1rpx solid #333;
				  }
				  .text_5 {
				    width: 99rpx;
				    height: 24rpx;
				    overflow-wrap: break-word;
				    color: rgba(34, 34, 34, 1);
				    font-size: 25rpx;
				    font-family: PingFang-SC-Regular;
				    font-weight: NaN;
				    text-align: left;
				    white-space: nowrap;
				    line-height: 24rpx;
				    margin-left: 8rpx;
				  }
			} 
            .image-text_1 {
              width: 80rpx;
              height: 28rpx;
              margin-left: 278rpx;
              .icon_3 {
                font-size: 30rpx;
				color: #999;
              }
              .text-group_1 {
                width: 49rpx;
                height: 24rpx;
                overflow-wrap: break-word;
                color: rgba(34, 34, 34, 1);
                font-size: 25rpx;
                font-family: PingFang-SC-Regular;
                font-weight: NaN;
                text-align: left;
                white-space: nowrap;
                line-height: 28rpx;
              }
            }
            .image-text_2 {
              width: 80rpx;
              height: 28rpx;
              margin-left: 41rpx;
              .icon_4 {
               font-size: 30rpx;
               color: #999;
              }
              .text-group_2 {
                width: 49rpx;
                height: 24rpx;
                overflow-wrap: break-word;
                color: rgba(34, 34, 34, 1);
                font-size: 25rpx;
                font-family: PingFang-SC-Regular;
                font-weight: NaN;
                text-align: left;
                white-space: nowrap;
                line-height: 28rpx;
              }
            }
          }
        }
	  }
    }
	.button_1 {
	  background-color: rgba(230, 60, 49, 1);
	  border-radius: 30px;
	  height: 60rpx;
	  width: 464rpx;
			margin: 0 auto;
			 text-align: center;
	 position: fixed;
	 left: 0;
	 right: 0;
	 bottom: 40rpx;
	  .text_6 {
	    color: rgba(255, 255, 255, 1);
	    font-size: 24rpx;
	    font-family: PingFang-SC-Regular;
	    font-weight: NaN;
	    white-space: nowrap;
	    line-height: 60rpx;
	  }
	}
  }

</style>
