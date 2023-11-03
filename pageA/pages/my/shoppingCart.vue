<template>
	<!-- 购物车 -->
  <view class="page flex-col">
    <view class="block_1 flex-col justify-end">
      <view class="group_4 flex-col">
		<text v-if="write" @click="complete" class="text_7">完成</text>
		<text v-else class="text_7" @click="edite">编辑</text>
        <view class="section_3 flex-col" v-for="(items,index) in list" :key="index">
          <view class="block_2 flex-row" >
            <view class="checkbox_1" @click="choose_1"></view>
			<text v-if="choose1" class="iconfont checkbox">&#xe63e;</text>
            <view class="image-text_1 flex-row align-center">
				<text class="iconfont icon_2">&#xe676;</text>
              <text class="text-group_1">{{items.shop_name}}</text>
              <text class="iconfont icon_3">&#xe6a3;</text>
            </view>
          </view>
          <view class="block_3 flex-row" v-for="(item,n) in items.goodsInfo" :key="n">
            <view class="checkbox_2"></view>
			<text  v-if="choose" class="iconfont checkbox">&#xe63e;</text>
            <view class="image-text_2 flex-row">
              <view class="group_5">
				  <image :src="imgUrl + item.thumb" mode="aspectFit"></image>
			  </view>
              <view class="text-group_2 flex-col justify-between">
                <text class="paragraph_1">
                  {{item.goods_name}}
                </text>
				<view class="flex-row justify-between">
					<text class="text_8">￥{{item.shop_price}}</text>
					<uni-number-box :value="item.goods_num" class="num_box" min="1" @change=""></uni-number-box>
				</view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
	<view class="group_3 flex-row align-center">
	  <view class="checkbox_2"></view>
	  <text class="text_2">全选</text>
	  <text  v-if="choose" class="iconfont checkbox">&#xe63e;</text>
	  <view v-if="write" class="text-wrapper_2">
		<view class="button_2">
			移入收藏夹
		</view>
		<view class="button_3">
			删除
		</view>
	  </view>
	  <view v-if="!write" class="text-wrapper_1">
	    <text class="text_3">合计</text>
	    <text class="text_5">￥9798.00</text>
	  </view>
	  <view v-if="!write" class="button_1" @click="onClick_1">
	    <text class="text_6">去计算(1)</text>
	  </view>
	</view>
  </view>
</template>
<script>
	import {cartList} from '../../../static/js/api.js'
export default {
  data() {
    return {
		userid:'',
		list: [],
		choose1: false,
		write: false,
		imgUrl: this.$imgUrl.img_base_url,
      constants: {}
    };
  },
  methods: {
	  //获取购物车列表
	  async pCartList(data) {
		  let res = await cartList(data)
		  this.list = res.lists
		  console.log(res)
	  },
	  //编辑按钮
	  edite() {
		  this.write = true
	  },
	  //完成按钮
	  complete() {
		  this.write = false
	  },
	  //单选商品未选中按钮
	  choose_1() {
		 this.choose1 = true 
	  },
    onClick_1() {
      alert(1);
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
  		this.pCartList(data)
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
  // position: relative;
  width: 750rpx;
  // height: 100%;
  // overflow: hidden;
  .checkbox {
  	font-size: 36rpx;
  	color: #E63C31;
  }
  .block_1 {
    // position: relative;
    width: 750rpx;
    margin: 15rpx 0 110rpx 0;

    .group_4 {
      .text_7 {
        width: 54rpx;
        height: 26rpx;
        overflow-wrap: break-word;
        color: rgba(230, 60, 49, 1);
        font-size: 28rpx;
        font-family: PingFang-SC-Regular;
        font-weight: NaN;
        text-align: left;
        white-space: nowrap;
        line-height: 28rpx;
        margin: 24rpx 0 0 665rpx;
      }
      .section_3 {
        background-color: rgba(255, 255, 255, 1);
        border-radius: 10px;
        height: 233rpx;
        width: 688rpx;
        margin: 22rpx 0 0 32rpx;
        .block_2 {
          width: 688rpx;
          height: 31rpx;
          margin: 28rpx 0 0 19rpx;
          .checkbox_1 {
            border-radius: 50%;
            width: 22rpx;
            height: 22rpx;
            border: 2px solid rgba(51, 51, 51, 1);
            margin-top: 5rpx;
          }
          .image-text_1 {
            width: 630rpx;
            height: 29rpx;
            margin-left: 8rpx;
			border-bottom: 1rpx solid #EEEEEE;
			padding-bottom: 18rpx;
			.icon_2 {
			  font-size: 34rpx;
			  color: #666;
			  margin-left: 18rpx;
			}
            .text-group_1 {
			  width: 250rpx;
              height: 30rpx;
              overflow-wrap: break-word;
              color: rgba(51, 51, 51, 1);
              font-size: 30rpx;
              font-family: PingFang-SC-Regular;
              font-weight: NaN;
              text-align: left;
              white-space: nowrap;
              line-height: 30rpx;
			  text-overflow: ellipsis;
			  overflow: hidden;
			  margin-left: 10rpx;
            }
            .icon_3 {
              font-size: 24rpx;
			  color: #333;
			  margin-left: 14rpx;
            }
          }
        }
        .block_3 {
          width: 650rpx;
          height: 110rpx;
          margin: 21rpx 0 27rpx 19rpx;
          .checkbox_2 {
            border-radius: 50%;
            width: 22rpx;
            height: 22rpx;
            border: 2px solid rgba(51, 51, 51, 1);
            margin-top: 51rpx;
          }
          .image-text_2 {
            width: 600rpx;
            height: 110rpx;
            margin: 20rpx 0 0 17rpx;
            .group_5 {
              width: 110rpx;
              height: 110rpx;
			  image {
				  width: 110rpx;
				  height: 110rpx;
			  }
            }
            .text-group_2 {
              width: 470rpx;
              height: 120rpx;
              margin: 6rpx 0 0 14rpx;
              .paragraph_1 {
                width: 382rpx;
                height: 56rpx;
                overflow-wrap: break-word;
                color: rgba(51, 51, 51, 1);
                font-size: 24rpx;
                font-family: PingFang-SC-Regular;
                font-weight: NaN;
                text-align: left;
                line-height: 28rpx;
				// text-overflow: ellipsis;
				display: -webkit-box; 
				-webkit-box-orient: vertical; 
				-webkit-line-clamp: 2; 
				overflow: hidden;
              }
			  .text_8 {
			    width: 75rpx;
			    height: 24rpx;
			    overflow-wrap: break-word;
			    color: rgba(230, 60, 49, 1);
			    font-size: 24rpx;
			    font-family: PingFang-SC-Bold;
			    font-weight: 700;
			    text-align: left;
			    white-space: nowrap;
			    line-height: 24rpx;
			    margin: 16rpx 0 0 15rpx;
			  }
			  .uni-numbox {
				  width: 180rpx;
			  }
            }
          }
        }
      }
    }
	}
	.group_3 {
	  width: 750rpx;
	  height: 98rpx;
	  background-color: #fff;
	  position: fixed;
	  left: 0;
	  bottom: 0;
	  .checkbox_2 {
	    border-radius: 50%;
	    width: 22rpx;
	    height: 22rpx;
		margin-left: 50rpx;
	    border: 2px solid rgba(51, 51, 51, 1);
	  }
	  .text_2 {
	    width: 46rpx;
	    height: 24rpx;
		margin-left: 10rpx;
	    overflow-wrap: break-word;
	    color: rgba(49, 49, 49, 1);
	    font-size: 24rpx;
	    font-family: PingFang-SC-Regular;
	    font-weight: NaN;
	    text-align: left;
	    white-space: nowrap;
	    line-height: 24rpx;
	  }
	  .text-wrapper_1 {
	    width: 182rpx;
	    height: 24rpx;
	    overflow-wrap: break-word;
	    font-size: 0;
	    font-family: PingFang-SC-Regular;
	    font-weight: NaN;
	    text-align: left;
	    white-space: nowrap;
	    line-height: 24rpx;
	    .text_3 {
	      width: 182rpx;
	      height: 24rpx;
		  margin-left: 30rpx;
	      overflow-wrap: break-word;
	      color: rgba(51, 51, 51, 1);
	      font-size: 24rpx;
	      font-family: PingFang-SC-Regular;
	      font-weight: NaN;
	      text-align: left;
	      white-space: nowrap;
	      line-height: 24rpx;
	    }
	    .text_5 {
	      width: 182rpx;
	      height: 24rpx;
		  margin-left: 16rpx;
	      overflow-wrap: break-word;
	      color: rgba(230, 60, 49, 1);
	      font-size: 24rpx;
	      font-family: PingFang-SC-Medium;
	      font-weight: 500;
	      text-align: left;
	      white-space: nowrap;
	      line-height: 24rpx;
	    }
	  }
	  .text-wrapper_2 {
		  width: 540rpx;
		  margin-left: 20rpx;
		  display: flex;
		  flex-direction: row;
		  justify-content: flex-end;
		  align-items: center;
		  .button_2 {
			  width: 148rpx;
			  height: 46rpx;
			  margin-right: 20rpx;
			  background-color: #E63C31;
			  border-radius: 23rpx;
			  color: #fff;
			  font-size: 24rpx;
			  line-height: 46rpx;
			  text-align: center;
		  }
		  .button_3 {
		  		width: 148rpx;
		  		height: 46rpx;
		  		background-color: #fff;
		  		border-radius: 23rpx;
		  		color: #333;
		  		font-size: 24rpx;
		  		line-height: 46rpx;
		  		text-align: center;
				border: 1rpx solid #D2D2D2;
		  }
	  }
	  .button_1 {
	    background-color: rgba(230, 60, 49, 1);
	    border-radius: 20px;
	    height: 40rpx;
	    width: 140rpx;
		margin-left: 230rpx;
		text-align: center;
	    .text_6 {
	      overflow-wrap: break-word;
	      color: rgba(255, 255, 255, 1);
	      font-size: 22rpx;
	      font-family: PingFang-SC-Regular;
	      font-weight: NaN;
	      text-align: left;
	      white-space: nowrap;
	      line-height: 40rpx;
	    }
	  }
	}
  }

</style>
