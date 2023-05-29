<template>
	<!-- 产品分类 -->
	<view class="classify-list">
		<view class="list-left">
			<view class="left-block" :class="{'left-block-active': activeKey == item.id}" v-for="(item,index) in list" :key="index"
			 @tap="itemClick(item.id)">
				{{item.name}}
			</view>
		</view>
		<view class="list-right">
			<view class="right-content" v-for="(items,index) in comList" :key="index">
				<view class="right-block" v-for="(item,n) in items.sub" :key="n">
						<view class="right-block-title">
							<view class="left-line">
							</view>
							{{item.name}}
							<view class="right-line">
							</view>
						</view>
						<view class="right-img-block">
							<view class="img-font-block" v-for="(i,c) in item.child" :key="c" @tap="togoodList(i.id)">
								<image :src="i.banner" mode="aspectFit" lazy-load></image>
								<view>
									{{i.name}}
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
				activeKey: 1,
				list: [
            {
                "id": "1",
                "parent_id": "0",
                "type": "goods",
                "name": "家用空调",
                "sub": [
                    {
                        "id": "20",
                        "parent_id": "1",
                        "type": "goods",
                        "name": "普通空调",
                        "child": [
                            {
                                "id": "27",
                                "parent_id": "20",
                                "type": "goods",
                                "name": "壁挂式空调",
                                "banner": "/static/bg/200711.png"
                            },
                            {
                                "id": "28",
                                "parent_id": "20",
                                "type": "goods",
                                "name": "立柜式空调",
                                "banner": "/static/bg/200711.png"
                            },
                            {
                                "id": "29",
                                "parent_id": "20",
                                "type": "goods",
                                "name": "厨房专用空调",
                                "banner": "/static/bg/200711.png"
                            },
                            {
                                "id": "47",
                                "parent_id": "20",
                                "type": "goods",
                                "name": "艺术类空调",
                                "banner": "/static/bg/200711.png"
                            }
                        ]
                    },
                    {
                        "id": "38",
                        "parent_id": "1",
                        "type": "goods",
                        "name": "家用中央空调",
                        "child": [
                            {
                                "id": "49",
                                "parent_id": "38",
                                "type": "goods",
                                "name": "风管机",
                                "banner": "/static/bg/200711.png"
                            },
                            {
                                "id": "50",
                                "parent_id": "38",
                                "type": "goods",
                                "name": "天花机",
                                "banner": "/static/bg/200711.png"
                            },
                            {
                                "id": "51",
                                "parent_id": "38",
                                "type": "goods",
                                "name": "变频多联机（外机）",
                                "banner": "/static/bg/200711.png"
                            },
                            {
                                "id": "311",
                                "parent_id": "38",
                                "type": "goods",
                                "name": "变频多联机（内机）",
                                "banner": "/static/bg/200711.png"
                            }
                        ]
                    },
                    {
                        "id": "48",
                        "parent_id": "1",
                        "type": "goods",
                        "name": "其他类空调",
                        "child": []
                    },
                    {
                        "id": "171",
                        "parent_id": "1",
                        "type": "goods",
                        "name": "空气净化",
                        "child": []
                    }
                ]
            },
            {
                "id": "39",
                "parent_id": "0",
                "type": "goods",
                "name": "附属设备",
                "sub": [
                    {
                        "id": "58",
                        "parent_id": "39",
                        "type": "goods",
                        "name": "冷却塔",
                        "child": []
                    },
                    {
                        "id": "59",
                        "parent_id": "39",
                        "type": "goods",
                        "name": "锅炉",
                        "child": []
                    },
                    {
                        "id": "60",
                        "parent_id": "39",
                        "type": "goods",
                        "name": "水泵",
                        "child": []
                    },
                    {
                        "id": "61",
                        "parent_id": "39",
                        "type": "goods",
                        "name": "换热器",
                        "child": [
                            {
                                "id": "76",
                                "parent_id": "61",
                                "type": "goods",
                                "name": "板式换热器",
                                "banner": "/static/bg/200711.png"
                            },
                            {
                                "id": "77",
                                "parent_id": "61",
                                "type": "goods",
                                "name": "管式换热器",
                                "banner": "/static/bg/200711.png"
                            }
                        ]
                    },
                    {
                        "id": "62",
                        "parent_id": "39",
                        "type": "goods",
                        "name": "集分水器",
                        "child": []
                    },
                    {
                        "id": "63",
                        "parent_id": "39",
                        "type": "goods",
                        "name": "水处理设备",
                        "child": []
                    },
                    {
                        "id": "64",
                        "parent_id": "39",
                        "type": "goods",
                        "name": "水箱",
                        "child": []
                    },
                    {
                        "id": "87",
                        "parent_id": "39",
                        "type": "goods",
                        "name": "恒压供水设备",
                        "child": []
                    }
                ]
            },
            {
                "id": "321",
                "parent_id": "0",
                "type": "goods",
                "name": "商用空调",
                "sub": [
                    {
                        "id": "169",
                        "parent_id": "321",
                        "type": "goods",
                        "name": "末端设备",
                        "child": [
                            {
                                "id": "166",
                                "parent_id": "169",
                                "type": "goods",
                                "name": "新风机组",
                                "banner": "/static/bg/200711.png"
                            }
                        ]
                    },
                    {
                        "id": "170",
                        "parent_id": "321",
                        "type": "goods",
                        "name": "通风设备",
                        "child": []
                    },
                    {
                        "id": "187",
                        "parent_id": "321",
                        "type": "goods",
                        "name": "工业空调",
                        "child": []
                    },
                    {
                        "id": "191",
                        "parent_id": "321",
                        "type": "goods",
                        "name": "恒温恒湿",
                        "child": []
                    },
                    {
                        "id": "322",
                        "parent_id": "321",
                        "type": "goods",
                        "name": "主机设备",
                        "child": [
                            {
                                "id": "52",
                                "parent_id": "322",
                                "type": "goods",
                                "name": "风冷模块机",
                                "banner": "/static/bg/200711.png"
                            },
                            {
                                "id": "55",
                                "parent_id": "322",
                                "type": "goods",
                                "name": "螺杆式水（地）源热泵机组",
                                "banner": "/static/bg/200711.png"
                            },
                            {
                                "id": "177",
                                "parent_id": "322",
                                "type": "goods",
                                "name": "风冷螺杆机组",
                                "banner": "/static/bg/200711.png"
                            },
                            {
                                "id": "329",
                                "parent_id": "322",
                                "type": "goods",
                                "name": "风冷冷（热）水机组",
                                "banner": "/static/bg/200711.png"
                            }
                        ]
                    }
                ]
            }
        ],
				listIndex: 1,
			};
		},
		onLoad(option) {
			// this.activeKey = option.c_id
			// this.listIndex = option.c_id
		},
		computed: {
			comList() {
				let inList = [];
				for (let i = 0; i < this.list.length; i++) {
					if (this.listIndex == this.list[i].id) {
						inList.push(this.list[i])
					}
				}
				return inList;
				
			}
		},
		methods: {
			// 左侧列表点击
			itemClick(index) {
				this.listIndex = index
				this.activeKey = index
				console.log(this.comList)
			},
			// 跳转产品列表页
			// togoodList(id) {
			// 	uni.navigateTo({
			// 		url: "./goodsList?c_id=" + id
			// 	})
			// },
			// async GetGoodsClassifyList() {
			// 	let res = await goodsClassifyList()
			// 	this.list = res.list
			// 	// console.log(res)
			// }
		}
	}
</script>

<style lang="less">
	page {
		width: 100%;
		height: 100%;
	}

	.classify-list {
		width: 100%;
		height: 100%;
		display: flex;

		.list-left {
			.left-block {
				width: 160rpx;
				font-size: 28rpx;
				line-height: 80rpx;
				color: #222;
				text-align: center;
				background-color: #eee;
			}

			.left-block-active {
				color: #FF0000 ;
				background-color: #fff;
			}
		}

		.list-right {
			width: 580rpx;
			height: 100%;
			overflow: auto;
			-webkit-overflow-scrolling: touch;
			
			.right-content {
				.right-block {
					width: 580rpx;
					padding-top: 20rpx;
					margin-bottom: 30rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					background-color: #fff;
					.right-block-title {
						font-size: 28rpx;
						font-weight: 600;
						line-height: 30rpx;
						color: #000;
						text-align: center;
						position: relative;

						.left-line {
							width: 70rpx;
							height: 2rpx;
							background-color: rgba(153, 153, 153, 1);
							position: absolute;
							left: -90rpx;
							top: 50%;
						}

						.right-line {
							width: 70rpx;
							height: 2rpx;
							background-color: rgba(153, 153, 153, 1);
							position: absolute;
							right: -90rpx;
							top: 50%;
						}
					}

					.right-img-block {
						width: 580rpx;
						margin-top: 36rpx;
						display: flex;
						flex-wrap: wrap;

						.img-font-block {
							width: 160rpx;
							margin: 0 0 20rpx 20rpx;
							font-size: 24rpx;
							color: #222;
							text-align: center;

							image {
								width: 160rpx;
								height: 160rpx;
							}
						}
					}
				}
			}
		}
	}
</style>

