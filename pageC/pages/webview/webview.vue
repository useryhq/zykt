<template>
	<view>
		<web-view :webview-styles="webviewStyles" :src='htmlSrc'></web-view>
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
				htmlSrc:  ''
			};
		},
		onLoad(option) {
			console.log(option)
		}
	}
</script>

<style lang="less">

</style>