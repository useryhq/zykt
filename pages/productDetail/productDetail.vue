<<template>
  <view class="page flex-col">
    <view class="goods-detail-nav">
    	<view class="w">
    		<view class="nav-font" :class="{'nav-font-active': navIndex == 0}" @click="navChange(0)">
    			商品
    		</view>
    		<view class="nav-font" :class="{'nav-font-active': navIndex == 1}" @click="navChange(1)">
    			详情
    		</view>
    		<view class="nav-font" :class="{'nav-font-active': navIndex == 2}" @click="navChange(2)">
    			评价
    		</view>
    	</view>
    </view>
	<view class="goods-block" v-if="navIndex == 0">
		<!-- 商品轮播 -->
		<view class="top-swiper">
			<swiper class="swiper-block" :indicator-dots="true" :autoplay="true" indicator-active-color="#fa6a4a" :circular="true">
				<block v-for="(item,index) in images" :key="index">
					<swiper-item>
						<image mode="aspectFill" :src="item"></image>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<view class="group_6 flex-col">
		  <view class="box_2 flex-row justify-between">
		    <text class="text_6">￥8000.00</text>
		    <view class="image-text_1 flex-row justify-between">
		      <text class="iconfont">&#xe64c;</text>
		      <text class="text-group_1">收藏</text>
		    </view>
		  </view>
		  <text class="text_7">
		    二手中央空调10匹一拖二变频冷暖一级能效多联机商用空调机组二手中央空调10匹一拖二变频冷暖一级能效多联机商用空调机组
		  </text>
		  
		  <view class="box_3 flex-row justify-between">
		    <view class="text-wrapper_2">
		      <text class="text_8">成色：</text>
			  <text class="text_10">9成新</text>
		    </view>
		    <view class="text-wrapper_3">
		      <text class="text_12">所在地：</text>
			  <text class="text_13">郑州</text>
		    </view>
		  </view>
		</view>
		<view class="group_8 flex-col">
		  <view class="group_9 flex-row">
		    <text class="text_14">已选:</text>
		    <text class="text_15">10匹一拖二变频,1个</text>
		    
		  </view>
		 
		  <view class="group_10 flex-row">
		    <text class="text_16">送至:</text>
		    <text class="text_17">河南省郑州市中原区建设路</text>
		    
		  </view>
		</view>
	</view>
    
    <view class="group_7 flex-col" v-if="navIndex == 2">
      
      <view class="group_11 flex-col">
        <view class="block_2 flex-row justify-between">
          <view class="block_3 flex-col"></view>
          <text class="text_18">评价</text>
        </view>
		<view v-for="(item,index) in appraise" :key="index">
        <view class="block_4 flex-row align-center">
          <text class="iconfont label_4">&#xe682;</text>
          <text class="text_19">{{item.tel}}</text>
          <text class="text_20">{{item.time}}</text>
        </view>
        <view class="text-group_2 flex-col justify-between">
          <view class="text-wrapper_4">
            <text class="paragraph_2">
              {{item.message}}
            </text>
          </view>
          <view class="text-wrapper_5">
            <text class="text_21">{{item.attribute}}</text>
          </view>
        </view>
        </view>
        <view class="text-wrapper_8 flex-col">
          <text class="text_29">查看全部评价</text>
        </view>
      </view>
      <view class="group_12 flex-col">
        <view class="image-text_2 flex-row justify-start align-center">
         <image class=".label_6" src="../../static/bg/7220921.png" mode=""></image>
          <text class="text-group_4">美的二手商用中央空调自营店</text>
        </view>
        <view class="box_4 flex-row justify-between">
          <view class="box_5 flex-row justify-center align-center">
               <text class="iconfont label_7">&#xe64c;</text>
              <text class="text-group_5">收藏店铺</text>
          </view>
          <view class="box_6 flex-row justify-center align-center">
              <text class="iconfont label_8">&#xe676;</text>
              <text class="text-group_6">进入店铺</text>
          </view>
        </view>
      </view>
      </view>
      <view class="group_16">
		  <view class="group_13 flex-col">
		    <view class="group_14 flex-row justify-between">
		      <view class="block_6 flex-col"></view>
		      <text class="text_30">详情</text>
		    </view>
		    <view class="image-text_5 flex-row justify-between">
		      
		      <text class="text-group_7">规格</text>
		    </view>
		    <text class="paragraph_5">
		      <br />
		      型号：120
		      <br />
		      规格：制冷剂R32
		      <br />
		      电压/频率：380V/50Hz
		      <br />
		      内机净重：78kg
		      <br />
		      产品特色：除甲醛不支持除甲醛
		      <br />
		      独立除湿：支持独立除湿
		      <br />
		      自动清洁：内外机自动清洁
		      <br />
		      功能制冷量：12000W
		      <br />
		    </text>
		    <view class="group_15 flex-row">
		      <view class="image-text_6 flex-row justify-between">
		        <text class="text-group_8">展开</text>
		        
		      </view>
		    </view>
		  </view>
        <view class="image-text_7 flex-row justify-between">
         
          <text class="text-group_9">商品介绍</text>
        </view>
      </view>
    
    <view class="group_17 flex-row">
      <view class="image-text_8 flex-col justify-between">
        
        <text class="text-group_10">店铺</text>
      </view>
      <view class="image-text_9 flex-col justify-between">
       
        <text class="text-group_11">收藏</text>
      </view>
      <view class="image-text_10 flex-col justify-between">
        
        <text class="text-group_12">购物车</text>
      </view>
      <view class="text-wrapper_9 flex-col">
        <text class="text_31">加入购物车</text>
      </view>
      <view class="text-wrapper_10 flex-col">
        <text class="text_32">立即购买</text>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
		navIndex: 0,
		images:{
			a:'/static/bg/200711.png',
			b:'/static/bg/0301162340.png'
		},
		appraise: [{
			tel: '136******2',
			time: '2023-01-28',
			message: '制热效果非常好，特别要感谢安装师傅，不光技术熟练，还跟我打扫得干干净净。',
			attribute: '空调面板颜色：陶白色'
		},
		{
			tel: '136******2',
			time: '2023-01-28',
			message: '制热效果非常好，特别要感谢安装师傅，不光技术熟练，还跟我打扫得干干净净。',
			attribute: '空调面板颜色：陶白色'
		},
		],
      constants: {}
    };
  },
  methods: {
	  navChange(index) {
	  	this.navIndex = index
	  },
  },
  onLoad() {
  	console.log(this.appraise)
  }
};
</script>
<style lang='less'>
@import '../../static/css/common.css';
/* @import './assets/style/index.rpx.less'; */
</style>


<style lang="less">
.page {
  position: relative;
  width: 750rpx;
  overflow: hidden;
  .goods-detail-nav {
	  .w {
	  				display: flex;
	  				justify-content: space-between;
					background-color: rgba(0, 0, 0, 0.6);
					padding: 0 176rpx 0 176rpx;
	  				.nav-font {
	  					padding: 20rpx;
	  					font-size: 32rpx;
	  					font-weight: 600;
	  					color: #ffffff;
	  				}
	  
	  				.nav-font-active {
	  					color: #E63C31;
	  					border-bottom: 4rpx solid #E63C31;
	  				}
	  			}
  }
.goods-block {
	.top-swiper {
		.swiper-block {
			height: 500rpx;
	
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.group_6 {
	  width: 750rpx;
	  height: 188rpx;
	  .box_2 {
	    width: 692rpx;
	    height: 40rpx;
	    padding: 21rpx 30rpx 0 33rpx;
		background-color: #fff;
	    .text_6 {
	      width: 166rpx;
	      height: 40rpx;
	      overflow-wrap: break-word;
	      color: rgba(230, 60, 49, 1);
	      font-size: 36rpx;
	      font-family: PingFang-SC-Medium;
	      font-weight: 500;
	      text-align: left;
	      white-space: nowrap;
	      line-height: 40rpx;
	      margin-top: 2rpx;
	    }
	    .image-text_1 {
	      width: 77rpx;
	      height: 24rpx;
	      .label_3 {
	        width: 24rpx;
	        height: 22rpx;
	      }
	      .text-group_1 {
	        width: 45rpx;
	        height: 23rpx;
	        overflow-wrap: break-word;
	        color: rgba(51, 51, 51, 1);
	        font-size: 24rpx;
	        font-family: PingFang-SC-Regular;
	        font-weight: NaN;
	        text-align: left;
	        white-space: nowrap;
	        line-height: 36rpx;
	        margin-top: 1rpx;
	      }
	    }
	  }
	  .text_7 {
	    width: 692rpx;
	    height: 40rpx;
	    overflow-wrap: break-word;
	    color: rgba(51, 51, 51, 1);
	    font-size: 24rpx;
	    font-family: PingFang-SC-Regular;
	    font-weight: NaN;
	    text-align: left;
	    white-space: nowrap;
	    line-height: 40rpx;
	    padding: 10rpx 30rpx 10rpx 28rpx;
		background-color: #fff;
		overflow: hidden;
		text-overflow: ellipsis;
	  }
	  .image_3 {
	    width: 750rpx;
	    height: 1rpx;
	    margin-top: 18rpx;
	  }
	  .box_3 {
	    width: 692rpx;
	    height: 30rpx;
		margin-top: 4rpx;
	    padding: 0 24rpx 16rpx 34rpx;
		background-color: #fff;
	    .text-wrapper_2 {
	      width: 127rpx;
	      height: 30rpx;
	      overflow-wrap: break-word;
	      font-size: 0;
	      font-family: PingFang-SC-Regular;
	      font-weight: NaN;
	      text-align: left;
	      white-space: nowrap;
	      .text_8 {
	        width: 127rpx;
	        height: 30rpx;
	        overflow-wrap: break-word;
	        color: rgba(153, 153, 153, 1);
	        font-size: 24rpx;
	        font-family: PingFang-SC-Regular;
	        font-weight: NaN;
	        text-align: left;
	        white-space: nowrap;
	        line-height: 30rpx;
	      }
	      .text_10 {
	        width: 127rpx;
	        height: 30rpx;
	        overflow-wrap: break-word;
	        color: rgba(51, 51, 51, 1);
	        font-size: 24rpx;
	        font-family: PingFang-SC-Regular;
	        font-weight: NaN;
	        text-align: left;
	        white-space: nowrap;
	        line-height: 30rpx;
	      }
	    }
	    .text-wrapper_3 {
	      width: 136rpx;
	      height: 30rpx;
	      overflow-wrap: break-word;
	      font-size: 0;
	      font-family: PingFang-SC-Regular;
	      font-weight: NaN;
	      text-align: left;
	      white-space: nowrap;
	      line-height: 30rpx;
	      .text_12 {
	       width: 127rpx;
	       height: 30rpx;
	       overflow-wrap: break-word;
	       color: rgba(153, 153, 153, 1);
	       font-size: 24rpx;
	       font-family: PingFang-SC-Regular;
	       font-weight: NaN;
	       text-align: left;
	       white-space: nowrap;
	       line-height: 30rpx;
	      }
	      .text_13 {
	        width: 136rpx;
	        height: 23rpx;
	        overflow-wrap: break-word;
	        color: rgba(51, 51, 51, 1);
	        font-size: 24rpx;
	        font-family: PingFang-SC-Regular;
	        font-weight: NaN;
	        text-align: left;
	        white-space: nowrap;
	        line-height: 36rpx;
	      }
	    }
	  }
	}
	.group_8 {
	  background-color: rgba(255, 255, 255, 1);
	  border-radius: 10px;
	  width: 749rpx;
	  height: 175rpx;
	  margin-top: 30rpx;
	  .group_9 {
	    width: 686rpx;
	    height: 24rpx;
	    margin: 38rpx 0 0 32rpx;
	    .text_14 {
	      width: 51rpx;
	      height: 23rpx;
	      overflow-wrap: break-word;
	      color: rgba(51, 51, 51, 1);
	      font-size: 24rpx;
	      font-family: PingFang-SC-Medium;
	      font-weight: 500;
	      text-align: left;
	      white-space: nowrap;
	      line-height: 36rpx;
	    }
	    .text_15 {
	      width: 213rpx;
	      height: 24rpx;
	      overflow-wrap: break-word;
	      color: rgba(51, 51, 51, 1);
	      font-size: 24rpx;
	      font-family: PingFang-SC-Regular;
	      font-weight: NaN;
	      text-align: left;
	      white-space: nowrap;
	      line-height: 36rpx;
	      margin-left: 23rpx;
	    }
	    .image_4 {
	      width: 36rpx;
	      height: 6rpx;
	      margin: 10rpx 0 0 363rpx;
	    }
	  }
	  .image_5 {
	    width: 750rpx;
	    height: 1rpx;
	    margin-top: 23rpx;
	  }
	  .group_10 {
	    width: 687rpx;
	    height: 24rpx;
	    margin: 37rpx 0 28rpx 31rpx;
	    .text_16 {
	      width: 52rpx;
	      height: 23rpx;
	      overflow-wrap: break-word;
	      color: rgba(51, 51, 51, 1);
	      font-size: 24rpx;
	      font-family: PingFang-SC-Medium;
	      font-weight: 500;
	      text-align: left;
	      white-space: nowrap;
	      line-height: 36rpx;
	    }
	    .text_17 {
	      width: 287rpx;
	      height: 23rpx;
	      overflow-wrap: break-word;
	      color: rgba(51, 51, 51, 1);
	      font-size: 24rpx;
	      font-family: PingFang-SC-Regular;
	      font-weight: NaN;
	      text-align: left;
	      white-space: nowrap;
	      line-height: 36rpx;
	      margin: 1rpx 0 0 22rpx;
	    }
	    .image_6 {
	      width: 36rpx;
	      height: 6rpx;
	      margin: 7rpx 0 0 290rpx;
	    }
	  }
}
}		
  

  .group_7 {
    background-color: rgba(246, 246, 246, 1);
    position: relative;
    width: 750rpx;
    // height: 2148rpx;
    // margin: -1rpx 0 486rpx 0;
    .group_11 {
      background-color: rgba(255, 255, 255, 1);
      border-radius: 10px;
      width: 749rpx;
      margin-top: 28rpx;
      .block_2 {
        width: 76rpx;
        height: 29rpx;
        margin: 25rpx 0 0 30rpx;
        .block_3 {
          background-color: rgba(230, 60, 49, 1);
          border-radius: 1px;
          width: 3rpx;
          height: 28rpx;
          margin-top: 1rpx;
        }
        .text_18 {
          width: 58rpx;
          height: 28rpx;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 30rpx;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          text-align: left;
          white-space: nowrap;
          line-height: 36rpx;
        }
      }
      .block_4 {
        width: 691rpx;
        height: 42rpx;
        margin: 23rpx 0 0 30rpx;
        .label_4 {
          width: 45rpx;
          height: 45rpx;
		  color: #FFD7D4;
		  font-size: 50rpx;
        }
        .text_19 {
          width: 116rpx;
          height: 30rpx;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 22rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          text-align: left;
          white-space: nowrap;
          line-height: 30rpx;
          margin: 13rpx 0 0 8rpx;
        }
        .text_20 {
          width: 131rpx;
          height: 30rpx;
          overflow-wrap: break-word;
          color: rgba(153, 153, 153, 1);
          font-size: 22rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          text-align: left;
          white-space: nowrap;
          line-height: 30rpx;
          margin: 13rpx 0 0 394rpx;
        }
      }
      .text-group_2 {
        width: 695rpx;
        height: 97rpx;
        margin: 18rpx 0 0 28rpx;
        .text-wrapper_4 {
          width: 695rpx;
          overflow-wrap: break-word;
          font-size: 24rpx;
          font-family: MicrosoftYaHei;
          font-weight: NaN;
          text-align: left;
          line-height: 34rpx;
          .paragraph_2 {
            width: 695rpx;
            height: 53rpx;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 24rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: left;
            line-height: 30rpx;
          }
        }
        .text-wrapper_5 {
          width: 218rpx;
          height: 30rpx;
          overflow-wrap: break-word;
          font-size: 0;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          text-align: left;
          white-space: nowrap;
          line-height: 30rpx;
          margin-top: 10rpx;
          .text_21 {
            width: 218rpx;
            height: 30rpx;
            overflow-wrap: break-word;
            color: #999;
            font-size: 22rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: left;
            white-space: nowrap;
            line-height: 30rpx;
          }
          .text_22 {
            width: 218rpx;
            height: 22rpx;
            overflow-wrap: break-word;
            color: rgba(153, 153, 153, 1);
            font-size: 18rpx;
            font-family: PingFang-SC-Regular;
            font-weight: NaN;
            text-align: left;
            white-space: nowrap;
            line-height: 30rpx;
          }
          .text_23 {
            width: 218rpx;
            height: 22rpx;
            overflow-wrap: break-word;
            color: rgba(153, 153, 153, 1);
            font-size: 18rpx;
            font-family: MicrosoftYaHei;
            font-weight: NaN;
            text-align: left;
            white-space: nowrap;
            line-height: 30rpx;
          }
        }
      }
      .text-wrapper_8 {
        background-color: rgba(255, 255, 255, 1);
        border-radius: 19px;
        height: 38rpx;
        border: 1px solid rgba(191, 191, 191, 1);
        width: 180rpx;
        margin: 45rpx 0 35rpx 317rpx;
		text-align: center;
        .text_29 {
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 24rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          white-space: nowrap;
          line-height: 38rpx;
        }
      }
}
  
    .group_12 {
      background-color: rgba(255, 255, 255, 1);
      border-radius: 10px;
      width: 750rpx;
      height: 214rpx;
      margin-top: 29rpx;
      .image-text_2 {
        width: 718rpx;
        height: 45rpx;
        margin: 40rpx 0 0 32rpx;
        .label_6 {
          width: 48rpx;
          height: 45rpx;
        }
        .text-group_4 {
          width: 310rpx;
          height: 23rpx;
		  margin-left: 16rpx;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 24rpx;
          font-family: PingFang-SC-Regular;
          font-weight: NaN;
          text-align: left;
          white-space: nowrap;
          line-height: 23rpx;
        }
      }
      .box_4 {
        width: 338rpx;
        height: 48rpx;
        margin: 42rpx 0 39rpx 206rpx;
        .box_5 {
          background-color: rgba(255, 255, 255, 1);
          border-radius: 24px;
          width: 160rpx;
          height: 48rpx;
          border: 1px solid rgba(191, 191, 191, 1);
            .label_7 {
              width: 30rpx;
              height: 30rpx;
              font-size: 30rpx;
              color: rgba(51, 51, 51, 1);
            }
            .text-group_5 {
              width: 93rpx;
              overflow-wrap: break-word;
              color: rgba(51, 51, 51, 1);
              font-size: 24rpx;
              font-family: PingFang-SC-Regular;
              font-weight: NaN;
              text-align: center;
              white-space: nowrap;
              line-height: 24rpx;
              margin-top: 1rpx;
            }
        }
        .box_6 {
          background-color: rgba(255, 255, 255, 1);
          border-radius: 24px;
          width: 160rpx;
          height: 48rpx;
          border: 1px solid rgba(191, 191, 191, 1);
            .label_8 {
              width: 30rpx;
              height: 30rpx;
			  font-size: 30rpx;
			  color: rgba(51, 51, 51, 1);
            }
            .text-group_6 {
              width: 94rpx;
              overflow-wrap: break-word;
              color: rgba(51, 51, 51, 1);
              font-size: 24rpx;
              font-family: PingFang-SC-Regular;
              font-weight: NaN;
              text-align: center;
              white-space: nowrap;
              line-height: 24rpx;
            }
          }
      }
    }
	}
 
    .group_16 {
      background-color: rgba(255, 255, 255, 1);
      border-radius: 10px;
      width: 749rpx;
      margin-top: 30rpx;
	  .group_13 {
	    background-color: rgba(255, 255, 255, 1);
	    border-radius: 10px;
	    width: 749rpx;
	    height: 592rpx;
	    // margin: 30rpx 0 489rpx 0;
	    .group_14 {
	      width: 76rpx;
	      height: 29rpx;
	      margin: 30rpx 0 0 30rpx;
	      .block_6 {
	        background-color: rgba(230, 60, 49, 1);
	        border-radius: 1px;
	        width: 3rpx;
	        height: 28rpx;
	        margin-top: 1rpx;
	      }
	      .text_30 {
	        width: 58rpx;
	        height: 28rpx;
	        overflow-wrap: break-word;
	        color: rgba(51, 51, 51, 1);
	        font-size: 30rpx;
	        font-family: PingFang-SC-Medium;
	        font-weight: 500;
	        text-align: left;
	        white-space: nowrap;
	        line-height: 36rpx;
	      }
	    }
	    .image-text_5 {
	      width: 88rpx;
	      height: 28rpx;
	      margin: 26rpx 0 0 29rpx;
	      .thumbnail_1 {
	        width: 20rpx;
	        height: 20rpx;
	        margin-top: 5rpx;
	      }
	      .text-group_7 {
	        width: 58rpx;
	        height: 28rpx;
	        overflow-wrap: break-word;
	        color: rgba(51, 51, 51, 1);
	        font-size: 30rpx;
	        font-family: PingFang-SC-Medium;
	        font-weight: 500;
	        text-align: left;
	        white-space: nowrap;
	        line-height: 48rpx;
	      }
	    }
	    .paragraph_5 {
	      width: 335rpx;
	      height: 331rpx;
	      overflow-wrap: break-word;
	      color: rgba(51, 51, 51, 1);
	      font-size: 24rpx;
	      font-family: PingFang-SC-Regular;
	      font-weight: NaN;
	      text-align: left;
	      line-height: 48rpx;
	      margin: 28rpx 0 0 35rpx;
	    }
	    .group_15 {
	      background-color: rgba(255, 255, 255, 1);
	      border-radius: 19px;
	      width: 111rpx;
	      height: 38rpx;
	      border: 1px solid rgba(191, 191, 191, 1);
	      margin: 43rpx 0 39rpx 320rpx;
	      .image-text_6 {
	        width: 75rpx;
	        height: 22rpx;
	        margin: 9rpx 0 0 18rpx;
	        .text-group_8 {
	          width: 47rpx;
	          height: 22rpx;
	          overflow-wrap: break-word;
	          color: rgba(51, 51, 51, 1);
	          font-size: 24rpx;
	          font-family: PingFang-SC-Regular;
	          font-weight: NaN;
	          text-align: left;
	          white-space: nowrap;
	          line-height: 36rpx;
	        }
	        .thumbnail_2 {
	          width: 16rpx;
	          height: 9rpx;
	          margin-top: 6rpx;
	        }
	      }
	    }
	  }
      .image-text_7 {
        width: 147rpx;
        height: 28rpx;
        margin: 32rpx 0 0 29rpx;
        .thumbnail_3 {
          width: 20rpx;
          height: 20rpx;
          margin-top: 5rpx;
        }
        .text-group_9 {
          width: 117rpx;
          height: 28rpx;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 30rpx;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          text-align: left;
          white-space: nowrap;
          line-height: 48rpx;
        }
      }
    }

  .group_17 {
    box-shadow: 0px 5px 8px 0px rgba(92, 92, 92, 0.66);
    background-color: rgba(255, 255, 255, 1);
    // position: absolute;
    // left: 0;
    // top: 3602rpx;
    // width: 750rpx;
    // height: 98rpx;
    border: 1px solid rgba(211, 211, 211, 1);
    .image-text_8 {
      width: 47rpx;
      height: 74rpx;
      margin: 14rpx 0 0 33rpx;
      .label_9 {
        width: 47rpx;
        height: 44rpx;
      }
      .text-group_10 {
        width: 46rpx;
        height: 23rpx;
        overflow-wrap: break-word;
        color: rgba(51, 51, 51, 1);
        font-size: 24rpx;
        font-family: PingFang-SC-Regular;
        font-weight: NaN;
        text-align: left;
        white-space: nowrap;
        line-height: 48rpx;
        margin-top: 7rpx;
      }
    }
    .image-text_9 {
      width: 47rpx;
      height: 74rpx;
      margin: 14rpx 0 0 65rpx;
      .label_10 {
        width: 46rpx;
        height: 44rpx;
      }
      .text-group_11 {
        width: 45rpx;
        height: 23rpx;
        overflow-wrap: break-word;
        color: rgba(51, 51, 51, 1);
        font-size: 24rpx;
        font-family: PingFang-SC-Regular;
        font-weight: NaN;
        text-align: left;
        white-space: nowrap;
        line-height: 48rpx;
        margin: 7rpx 0 0 2rpx;
      }
    }
    .image-text_10 {
      width: 71rpx;
      height: 77rpx;
      margin: 11rpx 0 0 56rpx;
      .label_11 {
        width: 48rpx;
        height: 48rpx;
      }
      .text-group_12 {
        width: 70rpx;
        height: 23rpx;
        overflow-wrap: break-word;
        color: rgba(51, 51, 51, 1);
        font-size: 24rpx;
        font-family: PingFang-SC-Regular;
        font-weight: NaN;
        text-align: left;
        white-space: nowrap;
        line-height: 48rpx;
        margin: 6rpx 0 0 1rpx;
      }
    }
    .text-wrapper_9 {
      background-color: rgba(255, 255, 255, 1);
      border-radius: 30px;
      height: 60rpx;
      border: 1px solid rgba(166, 166, 166, 1);
      width: 180rpx;
      margin: 19rpx 0 0 27rpx;
      .text_31 {
        width: 147rpx;
        height: 29rpx;
        overflow-wrap: break-word;
        color: rgba(51, 51, 51, 1);
        font-size: 30rpx;
        font-family: PingFang-SC-Regular;
        font-weight: NaN;
        text-align: left;
        white-space: nowrap;
        line-height: 48rpx;
        margin: 17rpx 0 0 17rpx;
      }
    }
    .text-wrapper_10 {
      background-color: rgba(230, 60, 49, 1);
      border-radius: 30px;
      height: 60rpx;
      width: 180rpx;
      margin: 19rpx 30rpx 0 14rpx;
      .text_32 {
        width: 118rpx;
        height: 28rpx;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 30rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        text-align: left;
        white-space: nowrap;
        line-height: 48rpx;
        margin: 16rpx 0 0 31rpx;
      }
    }
  }
}

</style>
