summerready = function() {
	
}
//基本信息维护
function info(){
	alert("进入基本信息维护界面");
	summer.openWin({
		id : 'industry',
		url : 'html/industry.html',
	});
}
//A:计量一卡通（简单）
function simple(){
	alert("选择A:计量一卡通（简单），默认硬件，自动生成报价单");
	summer.openWin({
		id : 'finish',
		url : 'html/finish.html',
	});
}
//C:智能工厂（全面）
function intel(){
	alert("选择C:智能工厂（全面），默认硬件，自动生成报价单");
	summer.openWin({
		id : 'finish',
		url : 'html/finish.html',
	});
}
//B:无人值守（一般）
function common(){
	alert("选择B:无人值守（一般），默认硬件，自动生成报价单");
	summer.openWin({
		id : 'finish',
		url : 'html/finish.html',
	});
}
//D:自定义配置
function custom(){
	alert("选择D:自定义配置，进入到自定义配置界面");
	summer.openWin({
		id : 'ticket',
		url : 'html/ticket.html',
	});
}
//返回
function back(){
	alert("返回");
	summer.openWin({
		id : 'menu',
		url : 'html/menu.html',
	});
	summer.closeWin("subMenu");
}




