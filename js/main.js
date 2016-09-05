//here is your code...
summerready = function() {
	// 设置输入框文字清除的事件监听
	$(".um-input-clear").click(function() {
		$(this).prev("input").val("");
	});
};


function login() {
	var email = $summer.byId("email");
	/*alert(email.value)
	alert(email.checkValidity());
	if(email.checkValidity()){
        email.setCustomValidity("");
	}else{
		alert("请输入正确的邮箱");
        return false;
	}*/
	alert("登录成功");
	summer.openWin({
		id : 'industry',
		url : 'html/industry.html',
	});
}

function logout() {
	alert("退出成功");
}