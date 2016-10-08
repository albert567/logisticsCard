summerready = function() {
	
}

//报价
function price(){
	summer.openWin({
		id : 'subMenu',
		url : 'html/subMenu.html',
	});
	//summer.closeWin("menu");
}

//历史
function history(){
	summer.openWin({
		id : 'history',
		url : 'html/history.html',
	});
}

//历史
function help(){
	UM.modal("alert", {
		title : window.location.host || "",
		text : "帮助界面还在开发中",
		overlay : true,
		ok : function(data) {
			
		},
		delay : 300, //Number
		callback : null
	});
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



