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
	
}

function downloadCallback(args) {
	alert('下载完成:' + JSON.stringify(args));
	var path = args.path;
	$file.open({
		"filename" : "1.xlsx", //文件全路径
		"filetype" : "xlsx", //支持手机能打开的格式*.txt,*.doc,*.pdf等
		"filepath" : path.substring(0, path.lastIndexOf('/') + 1)
	})
}

//动画下载
function animDownload(){
	alert("动画下载");
}

//报价转发
function priceForward(){
	$file.download({
	 "url" : "http://zhangyph-pc/baseinfo/updateExcel?id="+localStorage.getItem("baseinfoid"), //下载文件的url
	 "locate" : "download", //下载后文件存放的路径
	 "filename" : "1.xlsx", //下载后重命名的文件名
	 "override" : "true", //下载后是否覆盖同名文件
	 "callback" : "downloadCallback()"
	 });
}

//上一步
function pre() {
	summer.closeWin("finish");
}

//返回
function back() {
	alert("返回主菜单");
	var email = localStorage.getItem("email");
	localStorage.clear();
	localStorage.setItem("email",email);
	summer.openWin({
		id : 'menu',
		url : 'html/menu.html',
	});
	summer.closeWin("finish");
}
