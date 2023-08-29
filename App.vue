<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="less">
	/*每个页面公共css */
	page {
		width: 100%;
		height: 100%;
		background-color: #f6f6f6;
		.page {
			padding-bottom: constant(safe-area-inset-bottom); /*兼容 IOS<11.2*/
			padding-bottom: env(safe-area-inset-bottom); /*兼容 IOS>11.2*/
		}
	}
</style>
