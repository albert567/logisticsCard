summerready = function() {
	$(".um-check-group").find("input:checkbox").on("change", function() {
		var arr = [];
		$.each($(".um-check-group").find("input:checkbox"), function() {
			if (this.checked)
				arr.push($(this).val());
		})
		alert("您选择的是：" + arr.toString())
	});
}
function saveInfo() {
	var industry = $summer.byId("industry");
	var company = $summer.byId("company");
	var saleCompany = $summer.byId("saleCompany");
	var saleAdviser = $summer.byId("saleAdviser");
	var softDiscount = $summer.byId("softDiscount");
	var factoryCount = $summer.byId("factoryCount");
	var isBuyReport = $summer.byId("isBuyReport");
	var isUseGate = $summer.byId("isUseGate");
	if (!(window.localStorage)) {
		alert("浏览器不支持localStorage");
	}
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
	summer.closeWin("meterRoomCnt2");
}

//下一步
function next() {
	summer.openWin({
		id : 'noduty',
		url : 'html/noduty.html',
	});
}