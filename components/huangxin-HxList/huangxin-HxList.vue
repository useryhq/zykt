<template>
	<view class="Hx-List" >
		
		<view v-if="choice" class="choice">{{choice}}</view>
		<scroll-view class="scroller"  scroll-y="true" >
			<view id="item.letter" class="Indexdata" v-for="(item, index) in List" :key="index"  >
				<view class="Indexdata-t">{{item.letter}}</view>
				<view data-id="item" class="Indexdata-b" v-for="(atem, andex) in item.data" :key="andex"  @click="clickTest(andex,index)" 
					:style="{lineHeight:heighte}"
				>
					{{atem.Name}}
				</view>
			</view>
		</scroll-view>
		<view class="SideMenu" >
			<view  v-for="(item, index) in Letters" @click="Indexes(item)">
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	import {  AlphabeticClassification } from '@/components/huangxin-HxList/AlphabeticClassification.js';
	export default {
		name: 'HxList', //父级调用名
		props: {
			list: {  //list接收传递数据
				type: Array,
				default (e) {
					console.log(e)
				}
			},
			heightes:{
				description: {
					type: String,
					default: ''
				},
			},
			times:{
				description: {
					type: Number,
					default: ''
				},
			}
			
		},
		data() {
			return {
				List:'',
				choice:'',
				toView:'',
				heighte:'80rpx', 
				time:200,
				// this.ListHeight  = uni.getSystemInfoSync().windowHeight  - 480*((uni.getSystemInfoSync().windowWidth/750).toFixed(2));
				Letters:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#']
			}
		},
		computed: {

			
		},
		created(){
			//处理数据
			this.List = AlphabeticClassification(this.list);
			this.heighte = this.heightes + 'rpx';
			this.time = this.times;
			console.log(this.time)
		},
		methods: {
			clickTest(andex,index){
				this.List[index].data[andex]
				this.$emit('clickTest',	this.List[index].data[andex]);
			},
			Indexes(indexes){
				let _this = this;
				let Magnification = (uni.getSystemInfoSync().windowWidth/750).toFixed(2);
				this.choice = indexes;
				console.log(indexes)
				setTimeout(()=>{
					this.choice = ''
				},450)

				this.List.forEach((item,index)=>{
					if(item.letter == indexes) {
						let a = this.List.slice(0,index);
						let num = 0;
						let anum = a.length;
						a.forEach(atem=>{
							num = num + atem.data.length;
						})
						console.log(_this.time)
						uni.pageScrollTo({
						    scrollTop: (parseFloat(_this.heighte)*num + anum *50)*Magnification,
						    duration: _this.time
						});
						
					}
				})
			}

		}
	}
</script>

<style lang="scss">
	.Hx-List {
		width: 100%;
	}
	.SideMenu {
		position: fixed;
		top: 50%;
		right: 0;
		padding: 20rpx 0rpx;
		width: 45rpx;
		background: rgba(100,100,100,0.25);
		transform: translate(0,-50%);
		z-index: 1;
	}
	.SideMenu>view {
		// height: 30rpx;
		display: block;
		padding: 4rpx 0;
		wdith:45rpx;
		color: #fff;
		text-align: center;
		font-size: 22rpx;
	}
	.choice {
		width: 110rpx;
		height: 110rpx;
		position: fixed;
		top: 40%;
		left: 50%;
		transform: translate(-50%,-50%);
		background: rgba(0,0,0,0.3);
		color: #fff;
		border-radius: 20rpx;
		text-align: center;
		line-height: 110rpx;
		font-size: 45rpx;
		z-index: 2;
	}
	.Indexdata {
		width: 100%;
	}
	.Indexdata .Indexdata-b {
		padding: 0rpx 30rpx;
		// line-height: 80rpx;
		// height: 80rpx;
		font-size: 30rpx;
		background: #fff;
		border-bottom: 1rpx solid rgb(245,245,245);
		color: rgb(95,95,95);
	}
	.Indexdata .Indexdata-t {
		width: 100%;
		line-height: 50rpx;
		height: 50rpx;
		padding: 0rpx 30rpx;
		color: rgb(165,165,165);
		font-size: 30rpx;

	}
</style>
