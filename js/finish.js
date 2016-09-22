summerready = function() {
	
	
}
//动画预览
function animPreview(){
	alert("动画预览");
}

//报价预览
function pricePreview(){
	alert("报价预览");
	/*summer.openWin({
		id : 'pricePreview',
		url : 'html/pricePreview.html',
	});*/
	$.post("http://192.168.43.214/baseinfo/updateExcel", {
			id : localStorage.getItem("baseinfoid")
		}, function(data) {
			//alert("数据保存成功：" + data);
			
		});
}
//动画下载
function animDownload(){
	alert("动画下载");
}

//报价转发
function priceForward(){
	alert("报价转发");
}

//上一步
function pre() {
	summer.closeWin("finish");
}

//返回
function back() {
	alert("返回主菜单");
	summer.openWin({
		id : 'menu',
		url : 'html/menu.html',
	});
	summer.closeWin("finish");
}
