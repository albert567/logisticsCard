summerready = function(){
	//工厂名称
	if (!!(localStorage.getItem("factory"))) {
		$summer.byId("factory").value = localStorage.getItem("factory");
	}
	//是否使用无人值守
	if (localStorage.getItem("isNoduty") != null) {
		$summer.byId("isNoduty").checked = localStorage.getItem("isNoduty")=="true"?true:false;
	}else{
		$summer.byId("isNoduty").checked = true;
	}
	//开单室/班
	if (!!(localStorage.getItem("ticket"))) {
		$summer.byId("ticket").value = localStorage.getItem("ticket");
	}
	//门岗/班
	if (!!(localStorage.getItem("gate"))) {
		$summer.byId("gate").value = localStorage.getItem("gate");
	}
	//地磅房/班
	if (!!(localStorage.getItem("loadMeter"))) {
		$summer.byId("loadMeter").value = localStorage.getItem("loadMeter");
	}
	//计量室/班
	if (!!(localStorage.getItem("meter"))) {
		$summer.byId("meter").value = localStorage.getItem("meter");
	}
	//成品库/班
	if (!!(localStorage.getItem("product"))) {
		$summer.byId("product").value = localStorage.getItem("product");
	}
}
function saveInfo() {
	//工厂名称
	var factory = $summer.byId("factory");
	//是否使用无人值守
	var isNoduty = $summer.byId("isNoduty");
	//开单室/班
	var ticket = $summer.byId("ticket");
	//门岗/班
	var gate = $summer.byId("gate");
	//地磅房/班
	var loadMeter = $summer.byId("loadMeter");
	//计量室/班
	var meter = $summer.byId("meter");
	//成品库/班
	var product = $summer.byId("product");
	
	localStorage.setItem("factory", factory.value);
	localStorage.setItem("isNoduty", isNoduty.checked);
	localStorage.setItem("ticket", ticket.value);
	localStorage.setItem("gate", gate.value);
	localStorage.setItem("loadMeter", loadMeter.value);
	localStorage.setItem("meter", meter.value);
	localStorage.setItem("product", product.value);


	alert("factory=" + localStorage.getItem("factory"));
	alert("isNoduty=" + localStorage.getItem("isNoduty"));
	alert("ticket=" + localStorage.getItem("ticket"));
	alert("gate=" + localStorage.getItem("gate"));
	alert("loadMeter=" + localStorage.getItem("loadMeter"));
	alert("meter=" + localStorage.getItem("meter"));
	alert("product=" + localStorage.getItem("product"));
	
}

//上一步
function pre() {
	summer.closeWin("noduty");
}

//下一步
function next() {
	saveInfo();
	summer.openWin({
		id : 'itemInOut',
		url : 'html/itemInOut.html',
	});
}

