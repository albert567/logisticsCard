summerready = function() {
	$(".um-check-group").find("input:checkbox").on("change", function() {
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
		var meterHardware = localStorage.getItem("meterHardware");
		$.each($(".um-check-group").find("input:checkbox"), function() {
			if (meterHardware.indexOf($(this).val()) > 0) {
				this.checked = true;
			}
		});
	}
}
function saveInfo() {
	var arr = [];
	$.each($(".um-check-group").find("input:checkbox"), function() {
		if (this.checked) {
			arr.push($(this).val());
		}
	});
	localStorage.setItem("meterHardware", arr.toString());

}

//上一步
function pre() {
	summer.closeWin("meterHardware");
}

//下一步
function next() {
	saveInfo();
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