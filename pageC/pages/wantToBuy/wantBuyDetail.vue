<<template>
	<!-- 求购详情 -->
	<view class="page flex-col justify-between">
		<view class="group_2 flex-col">
			<view class="text-wrapper_1 flex-col">
				<text class="text_2">二手空调回收，杭州二手空调回收</text>
				<text class="paragraph_1">
					本公司专业收售空调，大小空调，中央空调，风冷模块，冷库，制冷设备等。
					1.酒店宾馆，茶楼，舞厅，KTV，浴场，学校，企业，公司，单位，空调，中央空调，音响，点歌器，服务器
					2.另外承接酒店，宾馆，舞厅，KTV，茶楼，浴场装修前拆除工程。
				</text>
			</view>
			<view class="section_2 flex-col">
				<view class="section_3 flex-row">
					<image class="image_3" src="../../../static/bg/7220921.png" mode=""></image>
					<text class="text_3">华建二手空调</text>
					<view class="text-wrapper_2 flex-col">
						<text class="text_4">查看联系方式</text>
					</view>
				</view>
				<view class="text-wrapper_3 flex-row justify-between">
					<text class="text_5">发布时间：2023年01月29日</text>
					<text class="text_6">地址：河南省郑州市中原区</text>
				</view>
			</view>
			<text class="text_7">同类求购推荐</text>
			<view class="list_1 flex-col">
				<view class="list-items_1 flex-col" v-for="(item, index) in loopData0" :key="index" @click="reRequst(item.id)">
					<view class="text-group_1 flex-col justify-between">
						<text class="text_2">{{item.title}}</text>
						<text class="text_3">{{item.content}}</text>
					</view>
					<view class="box_3 flex-row justify-between">
						<view class="image-text_1 flex-row justify-between align-center">
							<text class="thumbnail_1 iconfont">&#xe680;</text>
							<text class="text-group_2">{{item.created_at}}</text>
						</view>
						<view class="image-text_2 flex-row justify-between align-center">
							<text class="thumbnail_2 iconfont">&#xe678;</text>
							<text class="text-group_3">{{item.province}}{{item.city}}{{item.area}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
	</template>
	<script>
		import {wantBuyDetail} from '../../../static/js/api.js'
		export default {
			data() {
				return {
					loopData0: [],
					constants: {}
				};
			},
			methods: {
				//获取求购详情数据
				async getWantBuyDetail(option) {
					let data = {
						body: {
							id:option,
						}
					}
					let res = await wantBuyDetail(data)
					console.log(res)
					this.loopData0 = res.recommand
				},
				//点击推荐重新请求求购详情
				reRequst(item) {
					this.getWantBuyDetail(item)
				}
			},
			onLoad(option) {
				console.log("++++++++",option)
				this.getWantBuyDetail(option.id)
			}
		};
	</script>
	<style>
		@import '../../../static/css/common.css';
	</style>
	<style lang="less">
		.page {
			position: relative;
			width: 750rpx;
			overflow: hidden;

			.group_2 {
				.text-wrapper_1 {
					background-color: #fff;
					border-radius: 4px;
					width: 654rpx;
					height: 260rpx;
					margin: 27rpx 0 0 29rpx;
					padding: 30rpx 18rpx;

					.text_2 {
						width: 650rpx;
						height: 30rpx;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 30rpx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						text-align: left;
						white-space: nowrap;
						line-height: 30rpx;
						margin-bottom: 30rpx;
						text-overflow: ellipsis;
						overflow: hidden;
					}

					.paragraph_1 {
						width: 650rpx;
						height: 183rpx;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 24rpx;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						line-height: 30rpx;
						overflow: hidden;
					}
				}

				.section_2 {
					background-color: rgba(255, 255, 255, 1);
					border-radius: 4px;
					height: 143rpx;
					width: 690rpx;
					margin: 24rpx 0 0 29rpx;

					.section_3 {
						width: 673rpx;
						height: 71rpx;
						margin: 14rpx 0 0 5rpx;

						.image_3 {
							width: 68rpx;
							height: 71rpx;
							border-radius: 50%;
						}

						.text_3 {
							width: 165rpx;
							height: 26rpx;
							overflow-wrap: break-word;
							color: rgba(51, 51, 51, 1);
							font-size: 28rpx;
							font-family: PingFang-SC-Medium;
							font-weight: 500;
							text-align: left;
							white-space: nowrap;
							line-height: 36rpx;
							margin: 22rpx 0 0 11rpx;
						}

						.text-wrapper_2 {
							background-color: rgba(255, 0, 0, 1);
							border-radius: 21px;
							height: 43rpx;
							width: 182rpx;
							margin: 19rpx 0 0 247rpx;
							text-align: center;

							.text_4 {
								overflow-wrap: break-word;
								color: rgba(255, 255, 255, 1);
								font-size: 24rpx;
								font-family: PingFang-SC-Regular;
								font-weight: NaN;
								white-space: nowrap;
								line-height: 43rpx;
							}
						}
					}

					.text-wrapper_3 {
						width: 531rpx;
						height: 20rpx;
						margin: 19rpx 0 20rpx 18rpx;

						.text_5 {
							width: 253rpx;
							height: 20rpx;
							overflow-wrap: break-word;
							color: rgba(153, 153, 153, 1);
							font-size: 20rpx;
							font-family: PingFang-SC-Regular;
							font-weight: NaN;
							text-align: left;
							white-space: nowrap;
							line-height: 20rpx;
						}

						.text_6 {
							width: 239rpx;
							height: 20rpx;
							overflow-wrap: break-word;
							color: rgba(153, 153, 153, 1);
							font-size: 20rpx;
							font-family: PingFang-SC-Regular;
							font-weight: NaN;
							text-align: left;
							white-space: nowrap;
							line-height: 20rpx;
							text-overflow: ellipsis;
							overflow: hidden;
						}
					}
				}

				.text_7 {
					width: 177rpx;
					height: 29rpx;
					overflow-wrap: break-word;
					color: rgba(102, 102, 102, 1);
					font-size: 30rpx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					text-align: left;
					white-space: nowrap;
					line-height: 30rpx;
					margin: 35rpx 0 0 31rpx;
				}

				.list_1 {
					width: 690rpx;
					margin: 32rpx 0 0 29rpx;

					.list-items_1 {
						background-color: rgba(255, 255, 255, 1);
						border-radius: 10px;
						position: relative;
						width: 690rpx;
						height: 171rpx;
						border: 1px solid rgba(191, 191, 191, 1);
						margin-bottom: 30rpx;

						.text-group_1 {
							width: 640rpx;
							margin: 23rpx 0 0 23rpx;
							padding-bottom: 16rpx;
							border-bottom: 1rpx solid #BFBFBF;

							.text_2 {
								width: 236rpx;
								height: 29rpx;
								overflow-wrap: break-word;
								color: rgba(51, 51, 51, 1);
								font-size: 30rpx;
								font-family: PingFang-SC-Medium;
								font-weight: 500;
								text-align: left;
								white-space: nowrap;
								line-height: 30rpx;
								margin-left: 2rpx;
							}

							.text_3 {
								width: 368rpx;
								height: 24rpx;
								overflow-wrap: break-word;
								color: rgba(102, 102, 102, 1);
								font-size: 24rpx;
								font-family: PingFang-SC-Regular;
								font-weight: NaN;
								text-align: left;
								white-space: nowrap;
								line-height: 30rpx;
								margin-top: 18rpx;
							}
						}

						.text_4 {
							position: absolute;
							left: 23rpx;
							top: 23rpx;
							width: 236rpx;
							height: 29rpx;
							overflow-wrap: break-word;
							color: rgba(51, 51, 51, 1);
							font-size: 30rpx;
							font-family: PingFang-SC-Medium;
							font-weight: 500;
							text-align: left;
							white-space: nowrap;
							line-height: 30rpx;
						}

						.text_5 {
							position: absolute;
							left: 21rpx;
							top: 73rpx;
							width: 593rpx;
							height: 24rpx;
							overflow-wrap: break-word;
							color: rgba(102, 102, 102, 1);
							font-size: 24rpx;
							font-family: PingFang-SC-Regular;
							font-weight: NaN;
							text-align: left;
							white-space: nowrap;
							line-height: 36rpx;
						}

						.box_3 {
							width: 639rpx;
							height: 22rpx;
							margin: 21rpx 0 19rpx 31rpx;

							.image-text_1 {
								width: 150rpx;
								height: 22rpx;

								.thumbnail_1 {
									font-size: 22rpx;
									color: #999;
								}

								.text-group_2 {
									height: 22rpx;
									overflow-wrap: break-word;
									color: rgba(153, 153, 153, 1);
									font-size: 22rpx;
									font-family: PingFang-SC-Regular;
									font-weight: NaN;
									text-align: left;
									white-space: nowrap;
									line-height: 22rpx;
								}
							}

							.image-text_2 {
								width: 240rpx;
								height: 24rpx;

								.thumbnail_2 {
									font-size: 24rpx;
									color: #999;
								}

								.text-group_3 {
									width: 230rpx;
									height: 22rpx;
									overflow-wrap: break-word;
									color: rgba(153, 153, 153, 1);
									font-size: 22rpx;
									font-family: PingFang-SC-Regular;
									font-weight: NaN;
									text-align: left;
									white-space: nowrap;
									line-height: 22rpx;
									overflow: hidden;
									text-overflow: ellipsis;
								}
							}
						}
					}
				}
			}
		}
	</style>