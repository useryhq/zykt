<template>
  <view class="page flex-col">
    <view class="box_3 flex-col">
      <view class="section_1 flex-row">
        <view class="group_3">     
		  <text class="search_icon iconfont">&#xe65c;</text>
            <input class="text-group_1" type="text" placeholder-style="font-size:22rpx;color:#999999" focus placeholder="搜索想要的空调产品" />
        </view>
        <text class="text_2">搜索</text>
      </view>
      <text class="text_3">推荐搜索</text>
      <view class="section_2 flex-row">
        <view class="text-wrapper_1" v-for="(item,index) in searchData" :key="index">
          <text class="text_4">{{item.text}}</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
		searchData: [
			{
				text: '格力中央空调'
			},
			{
				text: '风管机'
			},
			{
				text: '格力中央空调'
			},
			{
				text: '风管机'
			},
			{
				text: '格力中央空调'
			},
			{
				text: '风管机'
			}
		],
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
  // height: 1334rpx;
  overflow: hidden;
  .box_3 {
    width: 750rpx;
    // height: 1211rpx;
    // margin-bottom: 1rpx;
    .section_1 {
      margin: 25rpx 0 0 29rpx;
      .group_3 {
        background-color: rgba(248, 248, 248, 1);
        width: 627rpx;
        height: 56rpx; 
		position: relative;
		.search_icon {
			 font-size: 28rpx;
			 position: absolute;
			 top: 16rpx;
			 left: 19rpx;
			 color: #818181;
			 }
          .text-group_1 {
            width: 565rpx;
            height: 56rpx;
			padding-left: 62rpx;
            color: #333333;
            font-size: 26rpx;
            font-family: PingFang-SC-Regular;
            text-align: left;
            white-space: nowrap;
            line-height: 56rpx;
            margin-top: 3rpx;
			border: 1px solid rgba(191, 191, 191, 1);
			border-radius: 28px;
          }
      }
      .text_2 {
        color: rgba(227, 56, 48, 1);
        font-size: 30rpx;
        font-family: PingFang-SC-Regular;
        text-align: left;
        line-height: 30rpx;
        margin: 18rpx 0 0 10rpx;
      }
    }
    .text_3 {
      color: rgba(51, 51, 51, 1);
      font-size: 30rpx;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      text-align: left;
      line-height: 30rpx;
      margin: 41rpx 0 0 30rpx;
    }
    .section_2 {
      margin: 31rpx 0 0 30rpx;
	  flex-wrap: wrap;
      .text-wrapper_1 {
        background-color: rgba(245, 245, 245, 1);
        border-radius: 20px;
        height: 47rpx;
		text-align: center;
		margin: 0 0 35rpx 14rpx;
		padding: 0 18rpx 0 18rpx;
        .text_4 {
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 24rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          white-space: nowrap;
          line-height: 47rpx;
		  overflow: hidden;
		  white-space: nowrap;
		  text-overflow: ellipsis;
        }
      }
  }
}
}

</style>
