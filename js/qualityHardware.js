var checkboxs = [];
var factoryCount = 2;
var index = 1;
var allQuas = [];
var factory;
summerready = function() {
	index = summer.pageParam.index;
	factoryCount = summer.pageParam.factoryCount;
	checkboxs = $(".um-check-group").find("input:checkbox");
	/*checkboxs.on("change", function() {
		if (this.checked) {
			if (this.id == "ck_a") {
				$summer.byId("icRwCount").value = 2;
				$summer.byId("icCount").value = 200;
			}
		}
	});*/
	updateH3();
	if (!!(localStorage.getItem("qualityHardware"))) {
		allQuas = JSON.parse(localStorage.getItem("qualityHardware"));
		if (index <= allQuas.length) {
			var obj = allQuas[index - 1];
			$.each(checkboxs, function() {
				if (obj.encrypHardware.indexOf($(this).val()) != -1) {
					this.checked = true;
				}
			});
			$summer.byId("icRwCount").value = obj.icRwCount;
			$summer.byId("icCount").value = obj.icCount;
		}
	}

}
//更新标题
function updateH3() {
	$summer.byId("hh").innerHTML = index + "/" + factoryCount + "工厂硬件选择";
}

function saveInfo() {
	var arr = [];
	$.each(checkboxs, function() {
		if (this.checked) {
			arr.push($(this).val());
		}
	});
	if (index <= allQuas.length) {
		allQuas[index - 1].encrypHardware = arr.toString();
		allQuas[index - 1].icRwCount = $summer.byId("icRwCount").value;
		allQuas[index - 1].icCount = $summer.byId("icCount").value;
	} else {
		var obj = {
			encrypHardware : arr.toString(),
			icRwCount : $summer.byId("icRwCount").value,
			icCount : $summer.byId("icCount").value
		};
		allQuas.push(obj);
	}
	localStorage.setItem("qualityHardware", JSON.stringify(allQuas));
}

//上一步
function pre() {
	summer.openWin({
		id : 'monitorHardware',
		url : 'html/monitorHardware.html',
		pageParam : {
			index : index,
			factoryCount : factoryCount
		}
	});
	summer.closeWin("qualityHardware");
}

//下一步
function next() {
	saveInfo();
	summer.openWin({
		id : 'materialHardware',
		url : 'html/materialHardware.html',
		pageParam : {
			index : index,
			factoryCount : factoryCount
		}
	});
	summer.closeWin("qualityHardware");
}