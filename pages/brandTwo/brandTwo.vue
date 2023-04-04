<template>
  <view class="page flex-col justify-between">
    <view class="box_3 flex-col" v-for="(items,index) in list" :key="index">
      <text class="text_2">{{items.text}}</text>
      <view class="section_2 flex-col">
        <view class="block_1 flex-row justify-between"  v-for="(item,index) in items.ktList" :key="index">
          <view class="image-text_1 flex-col justify-between align-center">
            <image
              class="image_3"
              referrerpolicy="no-referrer"
              :src="item.img"
            />
            <text class="text-group_1">{{item.text}}</text>
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
export default {
  data() {
    return {
		title: '',
		list:{
			kt1:{
				text: '普通空调',
				ktList: [{
					img: '/static/bg/0301162340.png',
					text: '壁挂式'
					},
					{
						img: '/static/bg/0301162340.png',
						text: '立柜式'
					},
					{
						img: '/static/bg/0301162340.png',
						text: '壁挂式'
					},
					{
						img: '/static/bg/0301162340.png',
						text: '立柜式'
				}]
			},
			kt2:{
				text: '家用空调',
				ktList: [{
					img: '/static/bg/0301162340.png',
					text: '壁挂式',
					},
					{
						img: '/static/bg/0301162340.png',
						text: '立柜式',
					},
					{
						img: '/static/bg/0301162340.png',
						text: '壁挂式',
					},
					{
						img: '/static/bg/0301162340.png',
						text: '立柜式',
				}]
			},
		},
      constants: {}
    };
  },
  methods: {
	  setTitle(T) {
		  uni.setNavigationBarTitle({
		  	title: T
		  });
	  },
	  toBrandWantBuy() {
		  uni.navigateTo({
		  	url: '/pages/brandWantBuy/brandWantBuy?title=' + this.title
		  })
	  }
  },
  onLoad(option) {
	  this.title = option.title
	this.setTitle(option.title)
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
        height: 72rpx;
        padding : 26rpx 0 24rpx 24rpx;
		border: 1rpx solid #F6F6F6;
        .image-text_1 {
          width: 70rpx;
          height: 72rpx;
          .image_3 {
            width: 50rpx;
            height: 39rpx;
            margin-left: 9rpx;
          }
          .text-group_1 {
            width: 70rpx;
            height: 23rpx;
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
      .image_4 {
        width: 668rpx;
        height: 1rpx;
        margin: 24rpx 0 0 14rpx;
      }
      .block_2 {
        width: 623rpx;
        height: 76rpx;
        margin: 12rpx 0 0 49rpx;
        .image_5 {
          width: 19rpx;
          height: 72rpx;
        }
        .text-wrapper_2 {
          background-color: rgba(255, 0, 0, 1);
          border-radius: 19px;
          height: 38rpx;
          border: 1px solid rgba(255, 0, 0, 1);
          margin-top: 38rpx;
          width: 95rpx;
          .text_4 {
            width: 47rpx;
            height: 23rpx;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 24rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: left;
            white-space: nowrap;
            line-height: 42rpx;
            margin: 7rpx 0 0 24rpx;
          }
        }
      }
      .text_5 {
        width: 70rpx;
        height: 23rpx;
        overflow-wrap: break-word;
        color: rgba(51, 51, 51, 1);
        font-size: 24rpx;
        font-family: PingFang-SC-Regular;
        font-weight: NaN;
        text-align: left;
        white-space: nowrap;
        line-height: 24rpx;
        margin: 7rpx 0 0 24rpx;
      }
      .image_6 {
        width: 668rpx;
        height: 1rpx;
        margin: 8rpx 0 0 14rpx;
      }
      .block_3 {
        width: 648rpx;
        height: 88rpx;
        margin: 23rpx 0 0 24rpx;
        .image-text_2 {
          width: 92rpx;
          height: 88rpx;
          .image_7 {
            width: 50rpx;
            height: 50rpx;
            margin-left: 19rpx;
          }
          .text-group_2 {
            width: 92rpx;
            height: 23rpx;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 24rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: left;
            white-space: nowrap;
            line-height: 24rpx;
            margin-top: 15rpx;
          }
        }
        .text-wrapper_3 {
          background-color: rgba(255, 0, 0, 1);
          border-radius: 19px;
          height: 38rpx;
          border: 1px solid rgba(255, 0, 0, 1);
          margin-top: 10rpx;
          width: 95rpx;
          .text_6 {
            width: 47rpx;
            height: 23rpx;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 24rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: left;
            white-space: nowrap;
            line-height: 42rpx;
            margin: 7rpx 0 0 24rpx;
          }
        }
      }
      .image_8 {
        width: 668rpx;
        height: 1rpx;
        margin: 10rpx 0 0 16rpx;
      }
      .block_4 {
        width: 644rpx;
        height: 78rpx;
        margin: 7rpx 0 0 28rpx;
        .image_9 {
          width: 61rpx;
          height: 78rpx;
        }
        .text-wrapper_4 {
          background-color: rgba(255, 0, 0, 1);
          border-radius: 19px;
          height: 38rpx;
          border: 1px solid rgba(255, 0, 0, 1);
          margin-top: 34rpx;
          width: 95rpx;
          .text_7 {
            width: 47rpx;
            height: 23rpx;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 24rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: left;
            white-space: nowrap;
            line-height: 42rpx;
            margin: 7rpx 0 0 24rpx;
          }
        }
      }
      .text_8 {
        width: 70rpx;
        height: 23rpx;
        overflow-wrap: break-word;
        color: rgba(51, 51, 51, 1);
        font-size: 24rpx;
        font-family: PingFang-SC-Regular;
        font-weight: NaN;
        text-align: left;
        white-space: nowrap;
        line-height: 24rpx;
        margin: 12rpx 0 10rpx 24rpx;
      }
    }
    .text_9 {
      width: 176rpx;
      height: 29rpx;
      overflow-wrap: break-word;
      color: rgba(51, 51, 51, 1);
      font-size: 30rpx;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      text-align: left;
      white-space: nowrap;
      line-height: 30rpx;
      margin: 37rpx 0 0 27rpx;
    }
    .section_3 {
      background-color: rgba(255, 255, 255, 1);
      border-radius: 10px;
      width: 692rpx;
      height: 521rpx;
      border: 2px solid rgba(255, 254, 255, 1);
      justify-content: flex-center;
      margin: 15rpx 0 0 26rpx;
      .box_4 {
        width: 648rpx;
        height: 86rpx;
        margin: 22rpx 0 0 24rpx;
        .image-text_3 {
          width: 70rpx;
          height: 86rpx;
          .image_10 {
            width: 50rpx;
            height: 50rpx;
            margin-left: 7rpx;
          }
          .text-group_3 {
            width: 70rpx;
            height: 23rpx;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 24rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: left;
            white-space: nowrap;
            line-height: 24rpx;
            margin-top: 13rpx;
          }
        }
        .text-wrapper_5 {
          background-color: rgba(255, 0, 0, 1);
          border-radius: 19px;
          height: 38rpx;
          border: 1px solid rgba(255, 0, 0, 1);
          margin-top: 27rpx;
          width: 95rpx;
          .text_10 {
            width: 47rpx;
            height: 23rpx;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 24rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: left;
            white-space: nowrap;
            line-height: 42rpx;
            margin: 7rpx 0 0 24rpx;
          }
        }
      }
      .image_11 {
        width: 668rpx;
        height: 1rpx;
        margin: 14rpx 0 0 14rpx;
      }
      .box_5 {
        width: 648rpx;
        height: 90rpx;
        margin: 28rpx 0 0 24rpx;
        .image-text_4 {
          width: 70rpx;
          height: 90rpx;
          .image_12 {
            width: 50rpx;
            height: 50rpx;
            margin-left: 2rpx;
          }
          .text-group_4 {
            width: 70rpx;
            height: 23rpx;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 24rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: left;
            white-space: nowrap;
            line-height: 24rpx;
            margin-top: 17rpx;
          }
        }
        .text-wrapper_6 {
          background-color: rgba(255, 0, 0, 1);
          border-radius: 19px;
          height: 38rpx;
          border: 1px solid rgba(255, 0, 0, 1);
          margin-top: 22rpx;
          width: 95rpx;
          .text_11 {
            width: 47rpx;
            height: 23rpx;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 24rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: left;
            white-space: nowrap;
            line-height: 42rpx;
            margin: 7rpx 0 0 24rpx;
          }
        }
      }
      .image_13 {
        width: 668rpx;
        height: 1rpx;
        margin: 15rpx 0 0 14rpx;
      }
      .box_6 {
        width: 648rpx;
        height: 82rpx;
        margin: 22rpx 0 0 24rpx;
        .image-text_5 {
          width: 168rpx;
          height: 82rpx;
          .image_14 {
            width: 50rpx;
            height: 50rpx;
            margin-left: 7rpx;
          }
          .text-group_5 {
            width: 168rpx;
            height: 23rpx;
            overflow-wrap: break-word;
            color: rgba(34, 34, 34, 1);
            font-size: 23rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: left;
            white-space: nowrap;
            line-height: 40rpx;
            margin-top: 9rpx;
          }
        }
        .text-wrapper_7 {
          background-color: rgba(255, 0, 0, 1);
          border-radius: 19px;
          height: 38rpx;
          border: 1px solid rgba(255, 0, 0, 1);
          margin-top: 22rpx;
          width: 95rpx;
          .text_12 {
            width: 47rpx;
            height: 23rpx;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 24rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: left;
            white-space: nowrap;
            line-height: 42rpx;
            margin: 7rpx 0 0 24rpx;
          }
        }
      }
      .image_15 {
        width: 668rpx;
        height: 1rpx;
        margin: 15rpx 0 0 14rpx;
      }
      .box_7 {
        width: 648rpx;
        height: 84rpx;
        margin: 38rpx 0 22rpx 24rpx;
        .image-text_6 {
          width: 168rpx;
          height: 84rpx;
          .image_16 {
            width: 50rpx;
            height: 50rpx;
            margin-left: 15rpx;
          }
          .text-group_6 {
            width: 168rpx;
            height: 23rpx;
            overflow-wrap: break-word;
            color: rgba(34, 34, 34, 1);
            font-size: 23rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: left;
            white-space: nowrap;
            line-height: 40rpx;
            margin-top: 11rpx;
          }
        }
        .text_13 {
          width: 95rpx;
          height: 23rpx;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 24rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          text-align: left;
          white-space: nowrap;
          line-height: 24rpx;
          margin: 22rpx 0 0 361rpx;
        }
        .text-wrapper_8 {
          background-color: rgba(255, 0, 0, 1);
          border-radius: 19px;
          height: 38rpx;
          border: 1px solid rgba(255, 0, 0, 1);
          width: 95rpx;
          margin: 20rpx 0 0 -71rpx;
          .text_14 {
            width: 47rpx;
            height: 23rpx;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 24rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: left;
            white-space: nowrap;
            line-height: 42rpx;
            margin: 7rpx 0 0 24rpx;
          }
        }
      }
    }
    .text_15 {
      width: 147rpx;
      height: 28rpx;
      overflow-wrap: break-word;
      color: rgba(51, 51, 51, 1);
      font-size: 30rpx;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      text-align: left;
      white-space: nowrap;
      line-height: 30rpx;
      margin: 35rpx 0 36rpx 26rpx;
    }
  }
}

</style>
