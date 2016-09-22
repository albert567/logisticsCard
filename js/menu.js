summerready = function() {
	
}

//报价
function price(){
	alert("进入报价界面");
	summer.openWin({
		id : 'subMenu',
		url : 'html/subMenu.html',
	});
	//summer.closeWin("menu");
}

//历史
function history(){
	alert("进入报价历史界面");
	summer.openWin({
		id : 'history',
		url : 'html/history.html',
	});
	//summer.closeWin("menu");
}

//历史
function help(){
	alert("进入帮助界面");
}

//退出
function logout() {
	localStorage.clear();
	summer.openWin({
		id : 'main',
		url : 'index.html',
	});
	summer.closeWin("menu");
}



