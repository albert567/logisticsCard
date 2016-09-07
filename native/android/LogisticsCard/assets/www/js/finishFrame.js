summerready = function() {
	
	
}
function saveInfo() {
	
}

//上一步
function pre() {
	summer.closeWin("finish");
}

//下一步
function next() {
	saveInfo();
	localStorage.clear();
	alert("localStorage已被清空");
	summer.openWin({
		id : 'industry',
		url : 'html/industry.html',
	});
}

//动画生成
function animGenerate(){
	alert("动画生成");
}

//报价生成
function priceGenerate(){
	alert("报价生成");
}


//动画预览
function animPreview(){
	alert("动画预览");
}

//报价预览
function pricePreview(){
	alert("报价预览");
}