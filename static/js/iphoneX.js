let iphonex = null
const judgeIphonex = function() {
	uni.getSystemInfo({
		success: res => {
			// console.log(res)
			let modelmes = res.model
			iphonex = res.model
			if (modelmes.search('iPhone X') != -1 || modelmes.search('unknown') != -1) {
				iphonex = true
			} else {
				iphonex = false
			}
		}
	})
}
judgeIphonex()
export default {
	iphonex
}
