<template>
  <view class="page flex-col">
    <view class="box_3 flex-col">
      <view class="section_1 flex-row justify-between">
        <view class="group_3 flex-row">
          <view class="image-text_1 flex-row justify-between">
            <input class="text-group_1" focus placeholder="搜索想要的空调产品" />
          </view>
        </view>
        <text class="text_2">搜索</text>
      </view>
      <text class="text_3">推荐搜索</text>
      <view class="section_2 flex-row">
        <view class="text-wrapper_1 flex-col">
          <text class="text_4">格力中央空调</text>
        </view>
        <view class="text-wrapper_2 flex-col">
          <text class="text_5">格力中央空调</text>
        </view>
        <view class="text-wrapper_3 flex-col">
          <text class="text_6">格力中央空调</text>
        </view>
        <view class="text-wrapper_4 flex-col">
          <text class="text_7">风管机</text>
        </view>
      </view>
      <view class="section_3 flex-row">
        <view class="text-wrapper_5 flex-col">
          <text class="text_8">格力中央空调</text>
        </view>
        <view class="text-wrapper_6 flex-col">
          <text class="text_9">格力中央空调</text>
        </view>
        <view class="text-wrapper_7 flex-col">
          <text class="text_10">格力中央空调</text>
        </view>
        <view class="text-wrapper_8 flex-col">
          <text class="text_11">风管机</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      constants: {}
    };
  },
  methods: {}
};
</script>
<style lang='less'>
@import '../../static/css/common.css';
</style>

<style lang="less">
.page {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 750rpx;
  height: 1334rpx;
  overflow: hidden;
  .box_3 {
    width: 750rpx;
    height: 1211rpx;
    margin-bottom: 1rpx;
    .section_1 {
      width: 690rpx;
      height: 56rpx;
      margin: 25rpx 0 0 29rpx;
      .group_3 {
        background-color: rgba(248, 248, 248, 1);
        border-radius: 28px;
        width: 627rpx;
        height: 56rpx;
        border: 1px solid rgba(191, 191, 191, 1);
        .image-text_1 {
          width: 238rpx;
          height: 25rpx;
          margin: 16rpx 0 0 19rpx;
          .label_3 {
            width: 24rpx;
            height: 24rpx;
          }
          .text-group_1 {
            width: 195rpx;
            height: 22rpx;
            overflow-wrap: break-word;
            color: rgba(153, 153, 153, 1);
            font-size: 22rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: left;
            white-space: nowrap;
            line-height: 22rpx;
            margin-top: 3rpx;
          }
        }
      }
      .text_2 {
        width: 57rpx;
        height: 28rpx;
        overflow-wrap: break-word;
        color: rgba(227, 56, 48, 1);
        font-size: 30rpx;
        font-family: PingFang-SC-Regular;
        font-weight: NaN;
        text-align: left;
        white-space: nowrap;
        line-height: 30rpx;
        margin-top: 18rpx;
      }
    }
    .text_3 {
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
      margin: 41rpx 0 0 30rpx;
    }
    .section_2 {
      width: 691rpx;
      height: 47rpx;
      margin: 31rpx 0 0 29rpx;
      .text-wrapper_1 {
        background-color: rgba(245, 245, 245, 1);
        border-radius: 20px;
        height: 47rpx;
        width: 176rpx;
        .text_4 {
          width: 141rpx;
          height: 23rpx;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 24rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          text-align: left;
          white-space: nowrap;
          line-height: 24rpx;
          margin: 12rpx 0 0 18rpx;
        }
      }
      .text-wrapper_2 {
        background-color: rgba(245, 245, 245, 1);
        border-radius: 20px;
        height: 47rpx;
        margin-left: 13rpx;
        width: 176rpx;
        .text_5 {
          width: 141rpx;
          height: 23rpx;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 24rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          text-align: left;
          white-space: nowrap;
          line-height: 24rpx;
          margin: 12rpx 0 0 18rpx;
        }
      }
      .text-wrapper_3 {
        background-color: rgba(245, 245, 245, 1);
        border-radius: 20px;
        height: 47rpx;
        margin-left: 12rpx;
        width: 176rpx;
        .text_6 {
          width: 141rpx;
          height: 23rpx;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 24rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          text-align: left;
          white-space: nowrap;
          line-height: 24rpx;
          margin: 12rpx 0 0 18rpx;
        }
      }
      .text-wrapper_4 {
        background-color: rgba(245, 245, 245, 1);
        border-radius: 20px;
        height: 47rpx;
        margin-left: 10rpx;
        width: 128rpx;
        .text_7 {
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
          margin: 12rpx 0 0 29rpx;
        }
      }
    }
    .section_3 {
      width: 691rpx;
      height: 47rpx;
      margin: 35rpx 0 901rpx 29rpx;
      .text-wrapper_5 {
        background-color: rgba(245, 245, 245, 1);
        border-radius: 20px;
        height: 47rpx;
        width: 176rpx;
        .text_8 {
          width: 141rpx;
          height: 23rpx;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 24rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          text-align: left;
          white-space: nowrap;
          line-height: 24rpx;
          margin: 12rpx 0 0 18rpx;
        }
      }
      .text-wrapper_6 {
        background-color: rgba(245, 245, 245, 1);
        border-radius: 20px;
        height: 47rpx;
        margin-left: 13rpx;
        width: 176rpx;
        .text_9 {
          width: 141rpx;
          height: 23rpx;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 24rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          text-align: left;
          white-space: nowrap;
          line-height: 24rpx;
          margin: 12rpx 0 0 18rpx;
        }
      }
      .text-wrapper_7 {
        background-color: rgba(245, 245, 245, 1);
        border-radius: 20px;
        height: 47rpx;
        margin-left: 12rpx;
        width: 176rpx;
        .text_10 {
          width: 141rpx;
          height: 23rpx;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 24rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          text-align: left;
          white-space: nowrap;
          line-height: 24rpx;
          margin: 12rpx 0 0 18rpx;
        }
      }
      .text-wrapper_8 {
        background-color: rgba(245, 245, 245, 1);
        border-radius: 20px;
        height: 47rpx;
        margin-left: 10rpx;
        width: 128rpx;
        .text_11 {
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
          margin: 12rpx 0 0 29rpx;
        }
      }
    }
  }
}


</style>
