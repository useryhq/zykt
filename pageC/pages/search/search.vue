<template>
	<!-- 搜索 -->
  <view class="page flex-col">
    <view class="box_3 flex-col">
      <view class="section_1 flex-row">
        <view class="group_3">     
		  <text class="search_icon iconfont">&#xe65c;</text>
            <input class="text-group_1" type="text" placeholder-style="font-size:22rpx;color:#999999" focus placeholder="搜索想要的空调产品" @blur="inSearch" />
        </view>
        <text class="text_2" @click="toSearch">搜索</text>
      </view>
      <text class="text_3">推荐搜索</text>
      <view class="section_2 flex-row">
        <view class="text-wrapper_1" v-for="(item,index) in searchData" :key="index" @click="getSearch(item.key)">
          <text class="text_4">{{item.key}}</text>
        </view>
      </view>
    </view>
	<view v-if="searchList" class="group_8 flex-row justify-between">
		<view class="box_3 flex-col" v-for="(item,index) in searchList" :key="index" @click="toProductDetail(item.goods_id)">
			<image class="kt_img" :src="item.thumb[0]"></image>
			<view class="text-wrapper_3 flex-row justify-between">
				<text class="paragraph_2">
					{{item.goods_name}}
				</text>
			</view>
			<view class="text-wrapper_4 flex-row">
				<text class="text_10">￥{{item.shop_price}}</text>
			</view>
		</view>
	</view>
  </view>
</template>
<script>
	import {search,searchRec} from '../../../static/js/api.js'
export default {
  data() {
    return {
		searchKey: '',
		searchData: [],
		searchList: [],
      constants: {}
    };
  },
  methods: {
	  //搜索关键字赋值
	  inSearch(e) {
		  // console.log(e)
		  this.searchKey = e.detail.value
	  },
	  // 请求搜索接口
	  async getSearch(e) {
		  let data ={}
		  if(e) {
			 data = {
			 	body:{
			 		key:e
			   },
			 } 
		  } else {
			 data = {
			 	body:{
			 		key:this.searchKey,
			   },
			 } 
		  }
		  let res = await search(data)
		  // console.log(res)
		  this.searchList = res.lists
		  this.searchList.forEach(item => {
			  if(item.thumb[0].substring(0,6) == 'upload') {
					item.thumb[0] = 'https://img.zykt.com/' + item.thumb[0]
				} else {
					item.thumb[0] = 'https://qn.zykt.com/' + item.thumb[0]
			}
		  })
		  // console.log(this.searchList)
	  },
	  //点击搜索
	  toSearch() {
		  this.getSearch()
	  },
	  // 获取推荐搜索
	  async getSearchRec() {
		 let res = await searchRec()
		 this.searchData = res.lists
		 // console.log(res)
	  },
	  //跳转商家商品详情
	  toProductDetail(e) {
		  uni.navigateTo({
		  	url: '/pages/productDetail/productDetail?id=' + e
		  })
	  }
  },
  onLoad() {
  	this.getSearchRec()
  }
};
</script>
<style lang='less'>
@import '../../../static/css/common.css';
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
		.group_8 {
					width: 710rpx;
					margin: 0 20rpx;
					flex-wrap: wrap;
					border-radius: 4px;

					.kt_img {
						width: 320rpx;
						height: 320rpx;
					}

					.box_3 {
						background-color: rgba(255, 255, 255, 1);
						width: 320rpx;
						height: 460rpx;
						margin-top: 38rpx;

						.text-wrapper_3 {
							width: 300rpx;
							height: 60rpx;
							margin: 26rpx 0 0 9rpx;

							.paragraph_2 {
								width: 286rpx;
								height: 60rpx;
								color: rgba(51, 51, 51, 1);
								font-size: 24rpx;
								font-family: PingFang-SC-Regular;
								text-align: left;
								line-height: 30rpx;
								overflow: hidden;
								text-overflow: ellipsis;
								-webkit-line-clamp: 2;
								word-break: break-all;
								display: -webkit-box;
								-webkit-box-orient: vertical;
							}
						}

						.text-wrapper_4 {
							width: 300rpx;
							height: 24rpx;
							margin: 21rpx 0 0 13rpx;

							.text_10 {
								width: 139rpx;
								height: 30rpx;
								overflow-wrap: break-word;
								color: rgba(230, 60, 49, 1);
								font-size: 30rpx;
								font-family: PingFang-SC-Medium;
								font-weight: 500;
								text-align: left;
								white-space: nowrap;
								line-height: 30rpx;
							}

							.text_11 {
								width: 42rpx;
								height: 21rpx;
								overflow-wrap: break-word;
								color: rgba(153, 153, 153, 1);
								font-size: 22rpx;
								font-family: PingFang-SC-Regular;
								font-weight: NaN;
								text-align: left;
								white-space: nowrap;
								line-height: 36rpx;
								margin: 3rpx 0 0 100rpx;
							}

						}
					}

				}
}

</style>
