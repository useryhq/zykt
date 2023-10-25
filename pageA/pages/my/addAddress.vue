<template>
	<!-- 个人中心添加地址 -->
  <view class="page flex-col">
    <view class="box_1 flex-col">
		<form @submit="submit">
      <view class="box_5 flex-col">
        <view class="text-wrapper_1 flex-row align-center">
          <text class="text_2">收货人：</text>
		  <input class="text_3" type="text" @blur="inName" placeholder="输入收货人姓名" placeholder-style="color: rgba(153, 153, 153, 1);">
        </view>
		<view class="text-wrapper_1 flex-row align-center">
		  <text class="text_4">联系电话：</text>
		  <input class="text_3" type="number" @blur="inTel" placeholder="输入收货人手机号码" placeholder-style="color: rgba(153, 153, 153, 1);">
		</view>
        <view @click="addressShow" class="box_6 flex-row justify-between align-center">
			<view class="">
				<text class="text_6">所在地区：</text>
				<text class="text_7"><text v-for="(i,n) in address" :key='n'> {{i.text}} <text v-if="n != 2">/</text></text></text>
			</view>
		  <text class="iconfont icon_2">&#xe6a3;</text>
        </view>
		<view class="choose_address">
			<uni-data-picker ref="picker" :localdata="localData" @change="onchange" @nodeclick="onnodeclick">
			</uni-data-picker>
		</view>
        <view class="text-wrapper_3 flex-row align-center">
          <text class="text_8">详细地址：</text>
		  <input class="text_9" type="text" @blur="inDetailAddress" placeholder="输入您的详细地址：如街道门牌号等" placeholder-style="color: rgba(153, 153, 153, 1);">
        </view>
        <view class="box_7 flex-row justify-between align-center">
          <text class="text_10">设置为默认收货地址</text>
          <switch @change="chooseAddress" color="#E63C31" style="transform:scale(0.6)" />
        </view>
      </view>
      <button class="box_8" form-type="submit">
			提交
      </button>
	  </form>
    </view>
	<uni-popup ref="popup" type="message">
		<uni-popup-message type="warn" message="警告消息" :duration="3000">{{prompt}}</uni-popup-message>
	</uni-popup>
  </view>
</template>
<script>
	import get_city_tree from '../../../static/js/cityData.js'
	import {addAddressH} from '../../../static/js/api.js'
export default {
  data() {
    return {
		userid: '',
		name: '',
		tel: '',
		localData: [],
		address: [],
		detailAddress: '',
		prompt: '',
		default: '',
      constants: {}
    };
  },
  methods: {
	  //输入联系人
	  inName(e) {
	  		  this.name = e.detail.value
	  },
	  //输入电话
	  inTel(e) {
	  		  let reg = /^1[3456789]\d{9}$/
	  		  this.tel = e.detail.value
	  		  if(!reg.test(this.tel)) {
	  			  this.prompt = '请输入正确的电话号码'
	  			  this.$refs.popup.open('top')
	  		  }
			  },
	  // 地址选择三级联动
	  async addressShow() {
	  	this.localData = await get_city_tree()
		// console.log(this.localData)
	  	this.$refs.picker.show()
	  },
	  // 节点变化后 （并非已经选择完毕）
	  			onnodeclick(node) {
	  				// console.log(JSON.stringify(node))
	  			},
	  			
	  			// 整体选择完成以后
	  			onchange(e) {
	  				const value = e.detail.value
					// console.log(value)
	  				this.address = value
	  			},
				//输入详细地址
		inDetailAddress(e) {
			this.detailAddress = e.detail.value
		},
		//选择默认地址
		chooseAddress(e) {
			console.log(e)
			if(e,detail.value) {
				this.default = 1
			} else {
				this.default = 0
			}
		},
		async pAddAddressH(data) {
			let res  = await addAddressH(data)
			this.prompt = res.msg
			this.$refs.popup.open('top')
			console.log(res)
		},
    submit() {
      if(this.name == '') {
      	this.prompt = '请输入收货人名字'
      	this.$refs.popup.open('top')
      } else if(this.tel == '') {
      	this.prompt = '请输入电话号码'
      	this.$refs.popup.open('top')
      } else if(this.address.length == 0) {
      	this.prompt = '请选择所在地区'
      	this.$refs.popup.open('top')
      } else if(this.detailAddress == '') {
      	this.prompt = '请输入详细地址'
      	this.$refs.popup.open('top')
      } else {
		  let data = {
			  id: '',
			  mobile: this.tel,
			  name: this.name,
			  prrovince: this.address[0].text,
			  city: this.address[1].text,
			  arrea: this.address[2].text,
			  address: this.detailAddress,
			  userid: this.userid,
			  default: this.default
		  }
		  this.pAddAddressH(data)
	  }
	  console.log(this.name,this.tel,this.address,this.detailAddress)
    }
  },
  onLoad() {
  	uni.getStorage({
  		key: 'userId',
  		success: (res) => {
  			this.userid = res.data
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
  .box_1 {
    width: 750rpx;
    height: 1319rpx;
    margin-top: 15rpx;
    .box_5 {
      background-color: rgba(255, 255, 255, 1);
      border-radius: 4px;
      width: 693rpx;
      height: 484rpx;
      margin: 24rpx 0 0 30rpx;
      .text-wrapper_1 {
        width: 630rpx;
        height: 24rpx;
        margin: 48rpx 30rpx 0 30rpx;
		padding-bottom: 10rpx;
		border-bottom: 1rpx solid #E5E5E5;
        .text_2 {
          width: 80rpx;
          height: 24rpx;
		  margin-left: 33rpx;
          overflow-wrap: break-word;
          color: rgba(34, 34, 34, 1);
          font-size: 24rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          text-align: left;
          white-space: nowrap;
          line-height: 24rpx;
        }
        .text_3 {
          width: 240rpx;
          height: 24rpx;
		  margin-left: 10rpx;
          overflow-wrap: break-word;
          color: rgba(34, 34, 34, 1);
          font-size: 24rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          text-align: left;
          line-height: 24rpx;
        }
		.text_4 {
		  width: 110rpx;
		  height: 24rpx;
		  margin-left: 4rpx;
		  overflow-wrap: break-word;
		  color: rgba(34, 34, 34, 1);
		  font-size: 24rpx;
		  font-family: PingFang-SC-Regular;
		  font-weight: NaN;
		  text-align: left;
		  white-space: nowrap;
		  line-height: 24rpx;
		}
      }
      .box_6 {
        width: 630rpx;
        height: 34rpx;
        margin: 38rpx 0 0 30rpx;
		padding-bottom: 10rpx;
		border-bottom: 1rpx solid #E5E5E5;
        .text_6 {
          width: 107rpx;
          height: 24rpx;
		  margin-left: 4rpx;
          overflow-wrap: break-word;
          color: rgba(34, 34, 34, 1);
          font-size: 24rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          text-align: left;
          white-space: nowrap;
          line-height: 24rpx;
        }
        .text_7 {
          width: 148rpx;
          height: 24rpx;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 24rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          text-align: left;
          white-space: nowrap;
          line-height: 24rpx;
        }
        .icon_2 {
          font-size: 30rpx;
		  color: #999;
        }
      }
	  .choose_address {
	  	width: 0rpx;
	  	height: 1rpx;
	  	// background-color: #ff6842;
	  }
      .text-wrapper_3 {
        width: 630rpx;
        height: 24rpx;
        margin: 38rpx 0 0 30rpx;
        padding-bottom: 10rpx;
        border-bottom: 1rpx solid #E5E5E5;
        .text_8 {
          width: 107rpx;
          height: 24rpx;
          overflow-wrap: break-word;
          color: rgba(34, 34, 34, 1);
          font-size: 24rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          text-align: left;
          white-space: nowrap;
          line-height: 24rpx;
        }
        .text_9 {
          width: 398rpx;
          height: 24rpx;
		  margin-left: 10rpx;
          overflow-wrap: break-word;
          color: rgba(34, 34, 34, 1);
          font-size: 24rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          text-align: left;
          white-space: nowrap;
          line-height: 24rpx;
        }
      }
      .box_7 {
        width: 633rpx;
        height: 40rpx;
        margin: 38rpx 0 70rpx 37rpx;
        .text_10 {
          width: 224rpx;
          height: 24rpx;
          overflow-wrap: break-word;
          color: rgba(34, 34, 34, 1);
          font-size: 24rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          text-align: left;
          white-space: nowrap;
          line-height: 24rpx;
        }
      }
    }
    .box_8 {
     background-color: rgba(230, 60, 49, 1);
     border-radius: 30px;
     height: 60rpx;
     width: 464rpx;
	 color: rgba(255, 255, 255, 1);
	 font-size: 24rpx;
	 font-family: PingFang-SC-Regular;
	 font-weight: NaN;
	 text-align: center;
	 white-space: nowrap;
	 line-height: 60rpx;
	 position: fixed;
	 left: 0;
	 right: 0;
	 bottom: 42rpx;
	 margin: 0 auto;
    }
  }
}

</style>
