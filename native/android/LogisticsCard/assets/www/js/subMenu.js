summerready = function() {
	//公司名称
	if (!!(localStorage.getItem("company"))) {
		$("#btn_a").attr("disabled", false);
		$("#btn_b").attr("disabled", false);
		$("#btn_c").attr("disabled", false);
		$("#btn_d").attr("disabled", false);
	} else {
		$("#btn_a").attr("disabled", true);
		$("#btn_b").attr("disabled", true);
		$("#btn_c").attr("disabled", true);
		$("#btn_d").attr("disabled", true);
	}

}
//基本信息维护
function info() {
	summer.openWin({
		id : 'industry',
		url : 'html/industry.html',
	});
}

//A:计量一卡通（简单）
function simple() {
	alert("选择A:计量一卡通（简单），默认硬件，自动生成报价单");
	summer.openWin({
		id : 'finish',
		url : 'html/finish.html',
	});
}

//C:智能工厂（全面）
function intel() {
	alert("选择C:智能工厂（全面），默认硬件，自动生成报价单");
	summer.openWin({
		id : 'finish',
		url : 'html/finish.html',
	});
}

//B:无人值守（一般）
function common() {
	alert("选择B:无人值守（一般），默认硬件，自动生成报价单");
	summer.openWin({
		id : 'finish',
		url : 'html/finish.html',
	});
}

//D:自定义配置
function custom() {
	UM.modal("alert", {
		title : window.location.host || "",
		text : "选择D:自定义配置，进入到自定义配置界面",
		overlay : true,
		ok : function(data) {
			summer.openWin({
				id : 'ticket',
				url : 'html/ticket.html',
			});
		},
		delay : 300, //Number
		callback : null
	});

}

//返回
function back() {
	summer.openWin({
		id : 'menu',
		url : 'html/menu.html',
	});
	summer.closeWin("subMenu");
}

