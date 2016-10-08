var flag = false;
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
		$summer.byId("isBuyReport").checked = localStorage.getItem("isBuyReport") == "true" ? true : false;
	} else {
		$summer.byId("isBuyReport").checked = true;
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

	localStorage.setItem("industry", industry.value);
	localStorage.setItem("company", company.value);
	localStorage.setItem("saleCompany", saleCompany.value);
	localStorage.setItem("saleAdviser", saleAdviser.value);
	localStorage.setItem("softDiscount", softDiscount.value);
	localStorage.setItem("factoryCount", factoryCount.value);
	localStorage.setItem("isBuyReport", isBuyReport.checked);
	if (localStorage.getItem("baseinfoid") != null) {
		//更新数据到数据库
		$.post("http://zhangyph-pc/baseinfo/update", {
			id : localStorage.getItem("baseinfoid"),
			industry : industry.value,
			company : company.value,
			sale_company : saleCompany.value,
			sale_adviser : saleAdviser.value,
			soft_discount : softDiscount.value,
			factory_count : factoryCount.value,
			is_buy_report : isBuyReport.checked
		}, function(data) {
			//alert("数据保存成功：" + data);
			if (data == "false") {
				alert("数据保存失败：" + data);
			}
			flag = true;
		});
	} else {
		//保存数据到数据库
		$.post("http://zhangyph-pc/baseinfo/save", {
			email : localStorage.getItem("email"),
			industry : industry.value,
			company : company.value,
			sale_company : saleCompany.value,
			sale_adviser : saleAdviser.value,
			soft_discount : softDiscount.value,
			factory_count : factoryCount.value,
			is_buy_report : isBuyReport.checked
		}, function(data) {
			//alert("数据保存成功：" + data);
			if (data != -1) {
				localStorage.setItem("baseinfoid", data);
			} else {
				alert("数据保存失败：");
			}
			flag = true;
		});
	}

}

//上一步
function pre() {
	summer.closeWin("industry");
}

//下一步
function next() {
	//("#content").validate();
	saveInfo();
	summer.openWin({
		id : 'noduty',
		url : 'html/noduty.html',
	});
	/*if(flag) {
	 summer.openWin({
	 id : 'noduty',
	 url : 'html/noduty.html',
	 });
	 }else {
	 UM.modal("alert", {
	 title : window.location.host || "",
	 text : "访问网络失败",
	 overlay : true,
	 ok : function(data) {

	 },
	 delay : 300, //Number
	 callback : null
	 });
	 }*/

}

