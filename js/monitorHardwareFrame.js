summerready = function() {
	
	if (!!(localStorage.getItem("monitorHardware"))) {
		var monitorHardware = localStorage.getItem("monitorHardware");
		$.each($(".um-check-group").find("input:checkbox"), function() {
			if (monitorHardware.indexOf($(this).val()) > 0) {
				this.checked = true;
			}
		});
	}
}
function saveInfo() {
	var arr = [];
	$summer.byId("ck_b").checked = true;
	$.each($(".um-check-group").find("input:checkbox"), function() {
		if (this.checked) {
			arr.push($(this).val());
		}
	});
	localStorage.setItem("monitorHardware", arr.toString());

}

//上一步
function pre() {
	summer.closeWin("monitorHardware");
}

//下一步
function next() {
	saveInfo();
	summer.openWin({
		id : 'dischargeHardware',
		url : 'html/dischargeHardware.html',
	});
}