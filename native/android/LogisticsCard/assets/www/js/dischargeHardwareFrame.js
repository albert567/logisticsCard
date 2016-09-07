﻿summerready = function() {
	if(!!(localStorage.getItem("dischargeCount"))){
		$summer.byId("dischargeCount").value = localStorage.getItem("dischargeCount");
	}
	if (!!(localStorage.getItem("dischargeHardware"))) {
		var dischargeHardware = localStorage.getItem("dischargeHardware");
		$.each($(".um-check-group").find("input:checkbox"), function() {
			if (dischargeHardware.indexOf($(this).val()) > 0) {
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
	localStorage.setItem("dischargeHardware", arr.toString());
	localStorage.setItem("dischargeCount", $summer.byId("dischargeCount").value);
}

//上一步
function pre() {
	summer.closeWin("dischargeHardware");
}

//下一步
function next() {
	saveInfo();
	summer.openWin({
		id : 'packHardware',
		url : 'html/packHardware.html',
	});
}