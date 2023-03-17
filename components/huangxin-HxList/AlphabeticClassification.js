import {test} from '@/components/huangxin-HxList/typeCheck.js';
import {pinyin} from '@/components/huangxin-HxList/lettersFilter.js';

function AlphabeticClassification(data){
				// console.log(data)
				if(data == undefined) {
					return false;
				}
				let Letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
				let devices = data;
				
				let temporary = {letter:'',data:[]};// 逻辑处理，临时数组
				let num_temporary = {letter:'',data:[]};
				let devices_d = []; // 遍历数组
				Letters.forEach(atem =>{ // 字母遍历
				// this.temporary.letter = atem;
					devices.forEach((btem,bndex)=>{ // 设备遍历
						let n = test(devices[bndex].Name)
						if(n == '中文' ){
							let a = pinyin(devices[bndex].Name);
							if(atem == a) {
								temporary.letter = atem;
								temporary.data.push(btem)
							}
							
						}else if(n == '英文') {
							let a = pinyin(devices[bndex].Name)
							if(atem == a.toUpperCase()) {
								temporary.letter = atem;
								temporary.data.push(btem)
							}
						}else {
							// this.temporark.letter = '其它';
							// this.temporark.data.push(btem)
						}
						
					}) 
					let t = temporary;
					if(t.letter && t.data.length>0){
						devices_d.push(temporary)
					}
					temporary = {letter:'',data:[]}
				})
				// console.log(this.devices_d)
				let _this = this;
				devices.forEach((btem,bndex)=>{
					let n = test(devices[bndex].Name)
					
					if(n != '英文' && n != '中文') {
						// console.log(test(devices[bndex].Name))
						num_temporary.letter = '#'
						num_temporary.data.push(btem)
					}
				})
				devices_d.push(num_temporary)
				return devices_d;
			}


export{
    AlphabeticClassification,
}