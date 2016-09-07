var weightCount = 2;
var index = 1;
var weights = [];
var checkboxs = [];
summerready = function() {
	alert("summerready");
	if (!!(localStorage.getItem("weightCount"))) {
		weightCount = localStorage.getItem("weightCount");
	} else {
		alert("请输入计量衡器数目");
	}
	alert("weightCount = "+weightCount);
	$summer.byId("lb_weight").innerHTML = "岗位：" + index + "/" + weightCount + "计量衡器";
	checkboxs = $(".um-check-group").find("input:checkbox");
	checkboxs.on("change", function() {
		if (this.checked) {
			alert(this.id + "被选中");
			if (this.id == "ck_a") {
				$summer.byId("ck_b").checked = false;
				$summer.byId("ck_c").checked = false;
			} else {
				$summer.byId("ck_a").checked = false;
			}

		}
	});
	if (!!(localStorage.getItem("meterHardware"))) {
		weights = JSON.parse(localStorage.getItem("meterHardware"));
		$.each(checkboxs, function() {
			if (weights[0].indexOf($(this).val()) != -1) {
				this.checked = true;
			}
		});
	}
}
function saveInfo() {
	var arr = [];
	$.each(checkboxs, function() {
		if (this.checked) {
			arr.push($(this).val());
		}
	});
	weights[index - 1] = arr.toString();
}

//上一步
function pre() {
	index --;
	if (index < 1) {
		summer.closeWin("meterHardware");
	} else {
		$summer.byId("lb_weight").innerHTML = "岗位：" + index + "/" + weightCount + "计量衡器";
		var hardware = weights[index - 1];
		$.each(checkboxs, function() {
			if (hardware.indexOf($(this).val()) != -1) {
				this.checked = true;
			}else{
				this.checked = false;
			}
		});
	}
	
}

//下一步
function next() {
	saveInfo();
	index++;
	if (index <= weightCount) {
		$summer.byId("lb_weight").innerHTML = "岗位：" + index + "/" + weightCount + "计量衡器";
		if (index <= weights.length) {
			$.each(checkboxs, function() {
				if (weights[index - 1].indexOf($(this).val()) != -1) {
					this.checked = true;
				}else{
					this.checked = false;
				}
			});
		} else {
			$.each(checkboxs, function() {
				this.checked = false;
			});
		}

	} else {
		localStorage.setItem("meterHardware", JSON.stringify(weights));
		if (localStorage.getItem("isNoduty") == "true") {
		summer.openWin({
			id : 'monitorHardware',
			url : 'html/monitorHardware.html',
		});
	} else {
		summer.openWin({
			id : 'dischargeHardware',
			url : 'html/dischargeHardware.html',
		});
	}
	}
	

}