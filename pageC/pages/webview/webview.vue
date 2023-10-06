<template>
	<view>
		<web-view :webview-styles="webviewStyles" src='https://m.zykt.com/pages/show?id=15'></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				},
				htmlSrc:'',
				title: ''
			};
		},
		onLoad(option) {
			console.log(option)
		}
	}
</script>

<style lang="less">

</style>