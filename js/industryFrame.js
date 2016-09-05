summerready = function() {
	if (!(window.localStorage)) {
		alert("浏览器不支持localStorage");
	}
	//行业选择
	if (!!(localStorage.getItem("industry"))) {
		$summer.byId("industry").value = localStorage.getItem("industry");
	}
	//公司名称
	if (!!(localStorage.getItem("company"))) {
		$summer.byId("company").value = localStorage.getItem("company");
	}
	//销售分公司
	if (!!(localStorage.getItem("saleCompany"))) {
		$summer.byId("saleCompany").value = localStorage.getItem("saleCompany");
	}
	//销售顾问
	if (!!(localStorage.getItem("saleAdviser"))) {
		$summer.byId("saleAdviser").value = localStorage.getItem("saleAdviser");
	}
	//软件折扣
	if (!!(localStorage.getItem("softDiscount"))) {
		$summer.byId("softDiscount").value = localStorage.getItem("softDiscount");
	}
	//报价工厂数
	if (!!(localStorage.getItem("factoryCount"))) {
		$summer.byId("factoryCount").value = localStorage.getItem("factoryCount");
	}
	//是否按工厂购买自由报表
	if (localStorage.getItem("isBuyReport") != null) {
		$summer.byId("isBuyReport").checked = localStorage.getItem("isBuyReport")=="true"?true:false;
	}else{
		$summer.byId("isBuyReport").checked = true;
	}
	//是否已使用经销商门户
	if (localStorage.getItem("isUseGate") != null) {
		$summer.byId("isUseGate").checked = localStorage.getItem("isUseGate")=="true"?true:false;
	}else{
		$summer.byId("isUseGate").checked = true;
	}
}
function saveInfo() {
	//行业选择
	var industry = $summer.byId("industry");
	//公司名称
	var company = $summer.byId("company");
	//销售分公司
	var saleCompany = $summer.byId("saleCompany");
	//销售顾问
	var saleAdviser = $summer.byId("saleAdviser");
	//软件折扣
	var softDiscount = $summer.byId("softDiscount");
	//报价工厂数
	var factoryCount = $summer.byId("factoryCount");
	//是否按工厂购买自由报表
	var isBuyReport = $summer.byId("isBuyReport");
	//是否已使用经销商门户
	var isUseGate = $summer.byId("isUseGate");

	localStorage.setItem("industry", industry.value);
	localStorage.setItem("company", company.value);
	localStorage.setItem("saleCompany", saleCompany.value);
	localStorage.setItem("saleAdviser", saleAdviser.value);
	localStorage.setItem("softDiscount", softDiscount.value);
	localStorage.setItem("factoryCount", factoryCount.value);
	localStorage.setItem("isBuyReport", isBuyReport.checked);
	localStorage.setItem("isUseGate", isUseGate.checked);

	/*alert("industry="+localStorage.getItem("industry"));
	 alert("company="+localStorage.getItem("company"));
	 alert("saleCompany="+localStorage.getItem("saleCompany"));
	 alert("saleAdviser="+localStorage.getItem("saleAdviser"));
	 alert("softDiscount="+localStorage.getItem("softDiscount"));
	 alert("factoryCount="+localStorage.getItem("factoryCount"));
	 alert("isBuyReport="+localStorage.getItem("isBuyReport"));
	 alert("isUseGate="+localStorage.getItem("isUseGate"));*/
}

//上一步
function pre() {
	summer.closeWin("industry");
}

//下一步
function next() {
	saveInfo();
	summer.openWin({
		id : 'noduty',
		url : 'html/noduty.html',
	});
}

