//here is your code...
summerready = function() {
	// 设置输入框文字清除的事件监听
	$(".um-input-clear").click(function() {
		$(this).prev("input").val("");
	});

};

function checkMail(mail) {
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (filter.test(mail))
		return true;
	else {
		alert('您的邮箱格式不正确');
		return false;
	}
}

function login() {
	var email = $summer.byId("email");

	if (checkMail(email.value)) {
		localStorage.setItem("email", email.value)
		summer.openWin({
			id : 'menu',
			url : 'html/menu.html',
		});
	}

	/*$file.download({
	 "url" : "http://zhangyph-pc/baseinfo/updateExcel?id=47", //下载文件的url
	 "locate" : "download", //下载后文件存放的路径
	 "filename" : "1.xlsx", //下载后重命名的文件名
	 "override" : "true", //下载后是否覆盖同名文件
	 "callback" : "uploadCallback()"
	 });*/

}

function uploadCallback(args) {
	alert('下载完成:' + JSON.stringify(args));
	var path = args.path;
	//$("#img").attr("src",args.path);
	$file.open({
		"filename" : "1.xlsx", //文件全路径
		"filetype" : "xlsx", //支持手机能打开的格式*.txt,*.doc,*.pdf等
		"filepath" : path.substring(0, path.lastIndexOf('/') + 1)
	})
	//alert(path.substring(0,path.lastIndexOf('/')+1));
}

function logout() {
	UM.modal("alert", {
		title : window.location.host || "",
		text : "退出成功",
		overlay : true,
		ok : function(data) {
			localStorage.clear();
		},
		delay : 300, //Number
		callback : null
	});
	
}