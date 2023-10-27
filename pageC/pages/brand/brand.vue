<<template>
	<!-- 品牌列表 -->
  <view class="page flex-col justify-between">
    <view class="box_2 flex-col justify-end">
      <view class="group_3 flex-row">
        <view class="block_2 flex-col"></view>
        <text class="text_2">热门品牌</text>
      </view>
	  <view class="block_4">
	  	<view class="list_1 flex-row">
	  		<view class="image-text_4 flex-col justify-between" v-for="(item, index) in loopData0"
	  			:key="index" @click="toBrandTwo(item.id,item.url)">
	  			<image class="image_3" referrerpolicy="no-referrer" :src="imgUrl + 'logo/' + item.logo" />
	  			<text class="text-group_4">{{item.name}}</text>
	  		</view>
	  	</view>
	  </view>
      </view>
	  <view class="box_3">
		  <uni-indexed-list :options="list" @click="bindClick" />
	  </view>
    </view>
</template>
<script>
import {brandHot,brandList} from '../../../static/js/api.js'
export default {
  data() {
    return {
		Height: 0,
		loopData0: [],
		imgUrl: this.$imgUrl.img_base_url,
        list: [],
      constants: {}
    };
  },
  methods: {
	  //获取品牌列表
	  async getBrandList() {
		  let res = await brandList()
		  // console.log(res)
		  this.list = res
	  },
	  // 获取热门品牌数据
	  async getBrandHot() {
	  	let data = await brandHot()
	  	// console.log(data)
	  	this.loopData0 = data.hot1
	  	this.loopData0 = this.loopData0.concat(data.hot2)
	  },
	  //设置品牌列表高度（不用）
	  setHeight() {
		  let h = 0
		  let that = this
		  uni.createSelectorQuery().select(".box_2").boundingClientRect(res => {
			  // console.log(res)
			  h = res.height
			 uni.getSystemInfo({
						success(res) {
							// console.log(res)
						  	that.Height = (res.windowHeight - h) * 2 - 45 + 'rpx'
							// console.log('h',h)
						  	}
						  })
		  }).exec()
  },
  bindClick(e) {
	  // console.log(e)
	  let id = e.item.itemobj.id
	  let c = e.item.itemobj.url.split('c=')[1]
	  // console.log(c)
	  uni.navigateTo({
	  	url: '/pageC/pages/brand/brandTwo?id=' + id + '&c=' + c
	  })
  			},
			//跳转品牌二级页面
			toBrandTwo(id,url) {
				// console.log(url)
				let c = url.split('c=')[1]
				// console.log(c)
				uni.navigateTo({
					url: '/pageC/pages/brand/brandTwo?id=' + id + '&c=' + c
				})
			},
  },
  onLoad() {
	 // this.setHeight()
	 this.getBrandHot()
	 this.getBrandList()
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
  height: 100%;
  overflow: hidden;
  .box_2 {
    width: 750rpx;
    .group_3 {
      width: 718rpx;
      height: 36rpx;
      margin: 20rpx 0 0 26rpx;
      .block_2 {
        background-color: rgba(255, 0, 0, 1);
        border-radius: 3px;
        width: 6rpx;
        height: 24rpx;
        margin-top: 8rpx;
      }
      .text_2 {
        width: 118rpx;
        height: 28rpx;
        overflow-wrap: break-word;
        color: rgba(51, 51, 51, 1);
        font-size: 30rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        text-align: left;
        white-space: nowrap;
        line-height: 30rpx;
        margin: 4rpx 0 0 15rpx;
      }
    }
	.block_4 {
		background-color: rgba(255, 255, 255, 1);
		border-radius: 10px;
		width: 692rpx;
		height: 209rpx;
		margin: 21rpx 31rpx 21rpx 26rpx;
	
		.list_1 {
			width: 671rpx;
			height: 163rpx;
			justify-content: space-between;
			flex-wrap: wrap;
			margin: 7rpx 0 0 16rpx;
	
			.image-text_4 {
				width: 110rpx;
				height: 64rpx;
				margin: 5rpx 10rpx 0 0;
	
				.image_3 {
					width: 110rpx;
					height: 40rpx;
				}
	
				.text-group_4 {
					width: 70rpx;
					height: 23rpx;
					overflow-wrap: break-word;
					font-size: 24rpx;
					font-family: PingFang-SC-Regular;
					font-weight: NaN;
					color: #333;
					text-align: left;
					white-space: nowrap;
					line-height: 24rpx;
					margin: 1rpx 0 0 31rpx;
				}
			}
		}
	}
}
.box_3 {
	width: 724rpx;
	height: 74%;
	margin-left: 26rpx;
}
}

</style>
