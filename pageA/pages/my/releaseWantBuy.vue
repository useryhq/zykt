<<template>
	<!-- 个人中心发布求购 -->
	<view class="page flex-col">
		<view class="block_1 flex-col">
			<form @submit="submit">
				<view class="group_2 flex-col">
					<view class="text-wrapper_1 flex-row align-center">
						<text class="text_2">求购商品：</text>
						<input class="text_3" @blur="inCname" placeholder="请输入您要求购的商品" />
					</view>
					<view class="text-wrapper_1 flex-row align-center">
						<text class="text_2">联系人：</text>
						<input class="text_3" @blur="inName" placeholder="请输入您的称呼" />
					</view>
					<view class="text-wrapper_1 flex-row align-center">
						<text class="text_2">联系电话：</text>
						<input class="text_3" @blur="inTel" placeholder="请输入您的联系方式" />
					</view>
					<view class="block_2 flex-row justify-between align-center">
						<view class="flex-row align-center">
							<text class="text_6">采购数量：</text>
							<input class="input_1" @blur="inNum" type="number" placeholder="请输入采购数量">
						</view>
					</view>
					<view class="block_2 flex-row justify-between align-center">
						<view class="flex-row align-center">
							<text class="text_6">单位：</text>
						</view>
						<uni-data-select class="text-group_1" :localdata="danweiData" :clear="false" @change="chooseDanwei" placeholder="选择单位"></uni-data-select>
					</view>
					<view class="block_2 flex-row justify-between align-center">
						<view class="flex-row align-center">
							<text class="text_6">截止日期：</text>
						</view>
						<view class="image-text_2 flex-row justify-between" @click="open">
							<text class="text_7">{{date}}</text>
							<text class="iconfont icon_2">&#xe686;</text>
						</view>
						<uni-calendar ref="calendar" :insert="false" @confirm="confirm" @close="close" />
					</view>
					<text class="text_8">详细描述：</text>
					<textarea class="block_4" maxlength="170" @blur="inText"></textarea>
				</view>
				<button class="button_1" form-type="submit">
					提交
				</button>
			</form>
			<uni-popup ref="popup" type="message">
				<uni-popup-message type="warn" message="警告消息" :duration="3000">{{prompt}}</uni-popup-message>
			</uni-popup>
		</view>
	</view>
	</template>
	<script>
		import {
			releaseWantBuy,other
		} from '../../../static/js/api.js'
		export default {
			data() {
				return {
					userid: '',
					danwei: '',
					cname: '',
					name: '',
					tel: '',
					num: '',
					unit: '',
					date: '请选择截止日期',
					text: '',
					prompt: '',
					constants: {}
				};
			},
			computed: {
				// 单位数据
				danweiData() {
					let dataList = []
					// console.log(this.danwei)
					for(let i = 0;i<this.danwei.length;i++) {
						let json = {value:i,text:this.danwei[i]}
						dataList.push(json)
					}
					// console.log(dataList)
					return dataList
				}
			},
			methods: {
				//获取单位
				async getOther() {
					let res = await other()
					this.danwei = res.danwei
					// console.log(res)
					// console.log(typeof(this.danwei),"123")
				},
				//输入商品
				inCname(e) {
					this.cname = e.detail.value
				},
				//输入联系人
				inName(e) {
					this.name = e.detail.value
				},

				//输入电话
				inTel(e) {
					let reg = /^1[3456789]\d{9}$/
					if (!reg.test(e.detail.value)) {
						this.prompt = '请输入正确的电话号码'
						this.$refs.popup.open('top')
					} else {
						this.tel = e.detail.value
					}
				},
				//输入求购数量
				inNum(e) {
					this.num = e.detail.value
				},
				//选择单位
				chooseDanwei(e) {
					// console.log(e)
					this.danweiData.forEach((item) => {
						if(item.value == e) {
							this.unit = item.text
						}
					})
					
					// console.log(this.unit)
				},
				//输入描述
				inText(e) {
					this.text = e.detail.value
					// console.log(this.text)
				},
				//打开日历
				open() {
					this.$refs.calendar.open()
				},
				//关闭日历
				close() {
					if (this.date == '请选择截止日期') {
						this.prompt = '请选择截止日期'
						this.$refs.popup.open('top')
					}
				},
				//日历返回日期赋值
				confirm(e) {
					// console.log('confirm 返回:', e)
					this.date = e.fulldate
				},
				//提交数据
				async postReleaseWantBuy(data) {
					let res = await releaseWantBuy(data)
					// console.log(res)
					this.prompt = res.msg
					this.$refs.popup.open('top')
				},
				submit() {
					if (this.cname == '') {
						this.prompt = '请输入商品名字'
						this.$refs.popup.open('top')
					} else if (this.name == '') {
						this.prompt = '请输入联系人名字'
						this.$refs.popup.open('top')
					} else if (this.tel == '') {
						this.prompt = '请输入电话号码'
						this.$refs.popup.open('top')
					} else if (this.num == '') {
						this.prompt = '请输入采购数量'
						this.$refs.popup.open('top')
					} else if (this.unit == '') {
						this.prompt = '请选择采购单位'
						this.$refs.popup.open('top')
					} else if (this.date == '请选择截止日期') {
						this.prompt = '请选择采购单位'
						this.$refs.popup.open('top')
					} else {
						let data = {
							userid: this.userid,
							title: this.cname,
							mobile: this.tel,
							num: this.num,
							date: this.date,
							describe: this.text,
							danwei: this.unit
						}
						this.postReleaseWantBuy(data)
						// console.log(this.text)
						// console.log(data)
					}
				}
			},
			onLoad() {
				this.getOther()
				uni.getStorage({
					key: 'userId',
					success: (res) => {
						this.userid = res.data
					}
				})
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

			.block_1 {
				width: 750rpx;
				margin-top: 15rpx;

				.group_2 {
					background-color: rgba(255, 255, 255, 1);
					border-radius: 4px;
					width: 690rpx;
					height: 848rpx;
					margin: 30rpx 0 0 30rpx;

					.text-wrapper_1 {
						width: 630rpx;
						height: 50rpx;
						margin: 32rpx 0 0 28rpx;
						padding: 10rpx 8rpx;
						border-bottom: 1rpx solid #E5E5E5;

						.text_2 {
							width: 106rpx;
							overflow-wrap: break-word;
							color: rgba(34, 34, 34, 1);
							font-size: 24rpx;
							font-family: PingFang-SC-Regular;
							font-weight: NaN;
							text-align: left;
							white-space: nowrap;
						}

						.text_3 {
							width: 320rpx;
							height: 46rpx;
							margin-left: 18rpx;
							overflow-wrap: break-word;
							color: #333;
							font-size: 24rpx;
							font-family: PingFang-SC-Regular;
							font-weight: NaN;
							text-align: left;
						}
					}

					.block_2 {
						width: 630rpx;
						height: 50rpx;
						margin: 32rpx 0 0 28rpx;
						padding: 10rpx 8rpx;
						border-bottom: 1rpx solid #E5E5E5;

						.text_6 {
							width: 107rpx;
							height: 24rpx;
							overflow-wrap: break-word;
							color: rgba(34, 34, 34, 1);
							font-size: 25rpx;
							font-family: PingFang-SC-Regular;
							font-weight: NaN;
							text-align: left;
							white-space: nowrap;
							line-height: 25rpx;
						}

						.input_1 {
							width: 180rpx;
							margin-left: 14rpx;
							font-size: 24rpx;
							color: #333;
						}

							.text-group_1 {
								width: 160rpx;
								height: 70rpx;
								overflow-wrap: break-word;
								color: rgba(34, 34, 34, 1);
								font-size: 25rpx;
								font-family: PingFang-SC-Regular;
								font-weight: NaN;
								text-align: left;
								white-space: nowrap;
								line-height: 25rpx;
								.uni-select {
									border: none;
								}
							}

						.image-text_2 {
							width: 510rpx;
							height: 24rpx;

							.text_7 {
								height: 24rpx;
								overflow-wrap: break-word;
								color: #999;
								font-size: 25rpx;
								font-family: PingFang-SC-Regular;
								font-weight: NaN;
								text-align: left;
								white-space: nowrap;
								line-height: 25rpx;
							}

							.icon_2 {
								font-size: 24rpx;
								color: #333;
							}
						}
					}

					.text_8 {
						width: 107rpx;
						height: 24rpx;
						overflow-wrap: break-word;
						color: rgba(34, 34, 34, 1);
						font-size: 25rpx;
						font-family: PingFang-SC-Regular;
						font-weight: NaN;
						text-align: left;
						white-space: nowrap;
						line-height: 25rpx;
						margin: 31rpx 0 0 37rpx;
					}

					.block_4 {
						border-radius: 2px;
						width: 609rpx;
						height: 377rpx;
						border: 1px solid rgba(229, 229, 229, 1);
						margin: 28rpx 0 58rpx 41rpx;
						font-size: 24rpx;
					}
				}

				.button_1 {
					background-color: rgba(230, 60, 49, 1);
					border-radius: 30px;
					height: 60rpx;
					width: 464rpx;
					margin: 0 auto;
					position: fixed;
					left: 0;
					right: 0;
					bottom: 42rpx;
					font-size: 24rpx;
					color: #fff;
					text-align: center;
					line-height: 60rpx;
				}
			}
		}
	</style>