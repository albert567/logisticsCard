summerready = function() {
	if (!!(localStorage.getItem("doorHardware"))) {
		var doorHardware = localStorage.getItem("doorHardware");
		$.each($(".um-check-group").find("input:checkbox"), function() {
			if (doorHardware.indexOf($(this).val()) > 0) {
				this.checked = true;
			}
		});
	} else {
		alert("isNoduty=" + localStorage.getItem("isNoduty"));
		if (localStorage.getItem("isNoduty") == "false") {
			$summer.byId("ck_a").checked = true;
			$summer.byId("ck_b").checked = true;
		}
	}
}
function saveInfo() {
	var arr = [];
	$.each($(".um-check-group").find("input:checkbox"), function() {
		if (this.checked) {
			arr.push($(this).val());
		}
	});
	localStorage.setItem("doorHardware", arr.toString());

}

//上一步
function pre() {
	summer.closeWin("doorHardware");
}

//下一步
function next() {
	saveInfo();
	summer.openWin({
		id : 'meterHardware',
		url : 'html/meterHardware.html',
	});
}