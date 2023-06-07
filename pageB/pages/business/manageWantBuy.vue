<template>
	<!-- 商家中心求购管理 -->
  <view class="page flex-col">
    <view class="section_1 flex-col">
      <view class="section_3 flex-col">
        <view class="list_1 flex-col">
          <view
            class="list-items_1 flex-col"
            v-for="(item, index) in loopData0"
            :key="index"
          >
            <text class="text_2">{{item.lanhutext0}}</text>
            <text class="text_3">{{item.lanhutext1}}</text>
            <view class="block_2 flex-row justify-between">
              <view class="image-text_2 flex-row justify-between">
                <text class="iconfont icon_3">&#xe680;</text>
                <text class="text-group_2">{{item.lanhutext2}}</text>
              </view>
              <view class="image-text_3 flex-row justify-between">
				<text class="iconfont icon_4">&#xe651;</text>
                <text class="text-group_3">{{item.lanhutext3}}</text>
              </view>
            </view>
            <view class="block_3 flex-row justify-between">
				<view class="button" @click="deleList(index)">
					<text class="iconfont icon_5">&#xe665;</text>
					<text class="text_4">删除</text>
				</view>
			  <view class="button">
			<text class="iconfont icon_5">&#xe66e;</text>
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
export default {
  data() {
    return {
      loopData0: [
        {
          lanhutext0: '求购中央空调商用',
          lanhutext1: '本公司专业收售空调，大小空调，中央空调，风冷模块本公司专业收售空调，大小空调，中央空调，风冷模块',
          lanhutext2: '2013-01-30',
          lanhutext3: '河南省郑州市金水区',
        },
        {
          lanhutext0: '求购中央空调商用',
          lanhutext1: '本公司专业收售空调，大小空调，中央空调，风冷模块0',
          lanhutext2: '2013-01-30',
          lanhutext3: '河南省郑州市金水区',
        },
        {
          lanhutext0: '求购中央空调商用',
          lanhutext1: '本公司专业收售空调，大小空调，中央空调，风冷模块1',
          lanhutext2: '2013-01-30',
          lanhutext3: '河南省郑州市金水区',
        }
      ],
      constants: {}
    };
  },
  methods: {
    onClick_2() {
      alert(1);
    },
    onClick_3() {
      alert(1);
    },
	deleList(e) {
		// console.log(e,this.loopData0)
		this.loopData0.splice(e,1)
		console.log(this.loopData0)
	}
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
      .list_1 {
        width: 690rpx;
        height: 820rpx;
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
