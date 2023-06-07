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
	  			:key="index" @click="toBrandTwo(item.lanhutext0)">
	  			<image class="image_3" referrerpolicy="no-referrer" :src="item.lanhuimage0" />
	  			<text class="text-group_4"
	  				:style="{ color: item.lanhufontColor0 }">{{item.lanhutext0}}</text>
	  		</view>
	  	</view>
	  </view>
      </view>
	  <view :style="{height: Height}" class="box_3">
		  <uni-indexed-list :options="list" @click="bindClick" />
	  </view>
    </view>
</template>
<script>
export default {
  data() {
    return {
		Height: 0,
		loopData0: [{
				lanhuimage0: '../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png',
				lanhutext0: '大金',
				lanhufontColor0: 'rgba(102,102,102,1)',
			},
			{
				lanhuimage0: '../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png',
				lanhutext0: '格力',
				lanhufontColor0: 'rgba(51,51,51,1)',
			},
			{
				lanhuimage0: '../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png',
				lanhutext0: '美的',
				lanhufontColor0: 'rgba(51,51,51,1)',
			},
			{
				lanhuimage0: '../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png',
				lanhutext0: '奥克斯',
				lanhufontColor0: 'rgba(51,51,51,1)',
			},
			{
				lanhuimage0: '../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png',
				lanhutext0: '海尔',
				lanhufontColor0: 'rgba(51,51,51,1)',
			},
			{
					lanhuimage0: '../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png',
					lanhutext0: '大金',
					lanhufontColor0: 'rgba(102,102,102,1)',
				},
				{
					lanhuimage0: '../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png',
					lanhutext0: '格力',
					lanhufontColor0: 'rgba(51,51,51,1)',
				},
				{
					lanhuimage0: '../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png',
					lanhutext0: '美的',
					lanhufontColor0: 'rgba(51,51,51,1)',
				},
				{
					lanhuimage0: '../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png',
					lanhutext0: '奥克斯',
					lanhufontColor0: 'rgba(51,51,51,1)',
				},
				{
					lanhuimage0: '../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png',
					lanhutext0: '海尔',
					lanhufontColor0: 'rgba(51,51,51,1)',
				},
		],
      list: [{
              "letter":"A",
			  'data':[
                  {
                      "id": "10",
                      "name": "奥克斯",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "",
                      "initial": "A"
                  },
                  {
                      "id": "31",
                      "name": "艾尔斯派",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "",
                      "initial": "A"
                  },
                  {
                      "id": "33",
                      "name": "奥普",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "",
                      "initial": "A"
                  },
                  {
                      "id": "101",
                      "name": "安林空调",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "/shop/show?id=163",
                      "initial": "A"
                  },
                  {
                      "id": "114",
                      "name": "奥瑞环保设备有限公司",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "/shop/show?id=185",
                      "initial": "A"
                  }
              ]},
			  {
              "letter":"B",
			  'data':[
                  {
                      "id": "54",
                      "name": "百维",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "",
                      "initial": "B"
                  },
                  {
                      "id": "58",
                      "name": "保室瑞",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "",
                      "initial": "B"
                  },
                  {
                      "id": "88",
                      "name": "布拉 ",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "",
                      "initial": "B"
                  },
                  {
                      "id": "91",
                      "name": "班工防护",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "",
                      "initial": "B"
                  }
              ]},
			  {
              "letter":"C",
			  'data':[
                  {
                      "id": "11",
                      "name": "长虹",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "/brands/brand-index?id=11&c=1",
                      "initial": "C"
                  },
                  {
                      "id": "41",
                      "name": "成都恒荣鑫元亨",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "",
                      "initial": "C"
                  },
                  {
                      "id": "68",
                      "name": "长泽",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "",
                      "initial": "C"
                  },
                  {
                      "id": "69",
                      "name": "长泽恒泰",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "",
                      "initial": "C"
                  },
                  {
                      "id": "89",
                      "name": "晨光",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "",
                      "initial": "C"
                  },
                  {
                      "id": "96",
                      "name": "春兰",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "/brands/brand-index?id=96&c=1",
                      "initial": "C"
                  }
              ]},
			  {
              "letter":"D",
			  'data':[
                  {
                      "id": "2",
                      "name": "大金",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "/brands/brand-index?id=2&c=1",
                      "initial": "D"
                  },
                  {
                      "id": "27",
                      "name": "东洋",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "",
                      "initial": "D"
                  },
                  {
                      "id": "50",
                      "name": "德力西",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "",
                      "initial": "D"
                  },
                  {
                      "id": "56",
                      "name": "鼎盛",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "",
                      "initial": "D"
                  },
                  {
                      "id": "79",
                      "name": "邓禄普",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "",
                      "initial": "D"
                  },
                  {
                      "id": "90",
                      "name": "代尔塔",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "",
                      "initial": "D"
                  },
                  {
                      "id": "104",
                      "name": "东维",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "/shop/show?id=168",
                      "initial": "D"
                  },
                  {
                      "id": "109",
                      "name": "盾安",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "",
                      "initial": "D"
                  },
                  {
                      "id": "115",
                      "name": "顿汉布什",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "",
                      "initial": "D"
                  },
                  {
                      "id": "120",
                      "name": "东芝",
                      "logo": "../../../../static/bg/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86.png",
                      "url": "",
                      "initial": "D"
                  }
              ],
      }],
      constants: {}
    };
  },
  methods: {
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
	  uni.navigateTo({
	  	url: '/pageC/pages/brand/brandTwo?title=' + e.item.itemobj.name
	  })
  			},
			toBrandTwo(T) {
				uni.navigateTo({
					url: '/pageC/pages/brand/brandTwo?title=' + T
				})
			}
  },
  onLoad() {
	 this.setHeight()
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
  .box_2 {
    width: 749rpx;
    .group_3 {
      width: 718rpx;
      height: 36rpx;
      margin: 20rpx 0 0 28rpx;
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
					text-align: left;
					white-space: nowrap;
					line-height: 24rpx;
					margin: 1rpx 0 0 31rpx;
				}
			}
		}
	
		.box_2 {
			width: 671rpx;
			height: 70rpx;
			margin: 26rpx 0 37rpx 16rpx;
	
			.list_2 {
				width: 530rpx;
	
				.image-text_5 {
					width: 110rpx;
					height: 69rpx;
					margin: 5rpx 10rpx 0 0;
	
					.image_4 {
						width: 110rpx;
						height: 40rpx;
					}
	
					.text-group_5 {
						width: 46rpx;
						height: 23rpx;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 24rpx;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						white-space: nowrap;
						line-height: 24rpx;
						margin: 6rpx 0 0 31rpx;
					}
				}
			}
	
			.image-text_9 {
				width: 82rpx;
				height: 30rpx;
				margin: 31rpx 0 0 20rpx;
	
				.label_5 {
					width: 30rpx;
					height: 30rpx;
				}
	
				.text-group_9 {
					width: 45rpx;
					height: 23rpx;
					overflow-wrap: break-word;
					color: rgba(51, 51, 51, 1);
					font-size: 24rpx;
					font-family: PingFang-SC-Regular;
					font-weight: NaN;
					text-align: left;
					white-space: nowrap;
					line-height: 24rpx;
					margin-top: 3rpx;
				}
			}
		}
	}
}
.box_3 {
	width: 720rpx;
	margin-left: 27rpx;
}
}

</style>
