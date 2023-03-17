
function test(t){
	var pattern = new RegExp("[\u4E00-\u9FA5]+");
	var pattern2 = new RegExp("[A-Za-z]+");
	var pattern3 = new RegExp("[0-9]+");
	
	let data = t.substring(0,1);
	if(pattern.test(data)){
	    return '中文';
		
	}
	 
	if(pattern2.test(data)){
		return '英文';
		
	}
	
	if(pattern3.test(data)){
	    return '数字';
	// console.log(data)
	}
}

export{
    test
}