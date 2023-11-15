<template>
	<!-- 个人中心我的求购 -->
  <view class="page flex-col">
    <view class="section_1 flex-col">
      <view class="section_3 flex-col">
        <view class="list_1 flex-col">
          <view
            class="list-items_1 flex-col"
            v-for="(item, index) in loopData0"
            :key="index"
          >
            <text class="text_2">{{item.title}}</text>
            <text class="text_3">{{item.content}}</text>
            <view class="block_2 flex-row justify-between">
              <view class="image-text_2 flex-row justify-between">
                <text class="iconfont icon_3">&#xe680;</text>
                <text class="text-group_2">{{item.created_at}}</text>
              </view>
              <!-- <view class="image-text_3 flex-row justify-between">
				<text class="iconfont icon_4">&#xe651;</text>
                <text class="text-group_3">{{item.province}}{{item.city}}{{item.area}}</text>
              </view> -->
            </view>
            <view class="block_3 flex-row justify-between">
				<view class="button" @click="deleList(item.id)">
					<text class="iconfont icon_5">&#xe665;</text>
					<text class="text_4">删除</text>
				</view>
			  <view class="button" @click="onClick_2(item.id)">
			<text class="iconfont icon_5" >&#xe66e;</text>
              <text class="text_4">编辑</text>
				</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
	import {myWantBuy,deleWantBuy} from '../../../static/js/api.js'
export default {
  data() {
    return {
		userid: '',
		loopData0: [],
		constants: {}
    };
  },
  methods: {
	  //获取求购列表
	  async pMyWantBuy(data) {
		  let res = await myWantBuy(data)
		  this.loopData0 = res.lists
		  console.log(res)
	  },
	  // 删除求购
	async pDeleWantBuy(id) {
		  let data = {
			  userid: this.userid,
			  id: id
		  }
		  let res = await deleWantBuy(data)
		  if (res.code == 200) {
			  let data = {
			  	userid: this.userid
			  }
			this.pMyWantBuy(data)  
		  }
	  },
	// 编辑求购
    onClick_2(e) {
	 uni.navigateTo({
	 	url: '/pageB/pages/business/releaseWantBuy?id=' + e
	 })
    },
    onClick_3() {
      
    },
	deleList(e) {
		this.pDeleWantBuy(e)
	}
  },
  onLoad() {
  	uni.getStorage({
  		key: 'userId',
  		success: (res) => {
  			this.userid = res.data
  			let data = {
  			userid: res.data
  		}
  		this.pMyWantBuy(data)
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
  .section_1 {
    width: 750rpx;
    margin-top: 15rpx;
    .section_3 {
      width: 750rpx;   
      .button_1 {
        background-color: rgba(230, 60, 49, 1);
        border-radius: 24px;
        height: 48rpx;
        width: 175rpx;
		margin: 36rpx auto;
          .icon_2 {
            font-size: 28rpx;
			color: #fff;
			line-height: 48rpx;
          }
          .text-group_1 {
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 24rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            white-space: nowrap;
            line-height: 48rpx;
			margin-left: 6rpx;
          }
      }
      .list_1 {
        width: 690rpx;
        margin-left: 30rpx;
        .list-items_1 {
          background-color: rgba(255, 255, 255, 1);
          border-radius: 4px;
          position: relative;
          width: 690rpx;
          height: 260rpx;
          margin-bottom: 21rpx;
          .text_2 {
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 30rpx;
            font-family: PingFang-SC-Medium;
            font-weight: 500;
            text-align: left;
            white-space: nowrap;
            line-height: 30rpx;
            margin: 23rpx 0 0 23rpx;
          }
          .text_3 {
            width: 660rpx;
			height: 30rpx;
            overflow-wrap: break-word;
            color: rgba(102, 102, 102, 1);
            font-size: 24rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: left;
            white-space: nowrap;
            line-height: 24rpx;
            margin: 21rpx 0 0 21rpx;
			text-overflow: ellipsis;
			overflow: hidden;
          }
          .block_2 {
            width: 630rpx;
            height: 22rpx;
			padding:0 10rpx 24rpx 10rpx;
            margin: 35rpx 0 0 21rpx;
			border-bottom:1rpx solid #bfbfbf ;
            .image-text_2 {
              width: 156rpx;
              height: 30rpx;
              .icon_3 {
                font-size: 22rpx;
				color: #999;
				line-height: 30rpx;
              }
              .text-group_2 {
                width: 130rpx;
                height: 30rpx;
                overflow-wrap: break-word;
                color: rgba(153, 153, 153, 1);
                font-size: 22rpx;
                font-family: PingFang-SC-Regular;
                font-weight: NaN;
                text-align: left;
                white-space: nowrap;
                line-height: 30rpx;
              }
            }
            .image-text_3 {
              width: 219rpx;
              height: 30rpx;
              .icon_4 {
                font-size: 22rpx;
                color: #999;
                line-height: 30rpx;
              }
              .text-group_3 {
                height: 30rpx;
                overflow-wrap: break-word;
                color: rgba(153, 153, 153, 1);
                font-size: 22rpx;
                font-family: PingFang-SC-Regular;
                font-weight: NaN;
                text-align: left;
                white-space: nowrap;
                line-height: 30rpx;
              }
            }
          }
          .block_3 {
            width: 320rpx;
            height: 40rpx;
            margin: 20rpx 0 22rpx 350rpx;
			.button {
				width: 142rpx;
				height: 40rpx;
				border: 1rpx solid #A0A0A0;
				border-radius: 20rpx;
				text-align: center;
				.icon_5 {
				  font-size: 24rpx;
				  color: rgba(51, 51, 51, 1);
				  line-height: 40rpx;
				}
				.text_4 {
				  width: 46rpx;
				  height: 23rpx;
				  overflow-wrap: break-word;
				  color: rgba(51, 51, 51, 1);
				  font-size: 24rpx;
				  font-family: PingFang-SC-Regular;
				  font-weight: NaN;
				  text-align: left;
				  white-space: nowrap;
				  line-height: 40rpx;
				  margin-left: 6rpx;
				}
			}
          }
        }
      }
    }
  }
}

</style>
