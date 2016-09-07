summerready = function() {
	if (!!(localStorage.getItem("maPersonCount"))) {
		$summer.byId("personCount").value = localStorage.getItem("maPersonCount");
	}
	if (!!(localStorage.getItem("materialHardware"))) {
		var materialHardware = localStorage.getItem("materialHardware");
		$.each($(".um-check-group").find("input:checkbox"), function() {
			if (materialHardware.indexOf($(this).val()) > 0) {
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
	localStorage.setItem("materialHardware", arr.toString());
	localStorage.setItem("maPersonCount", $summer.byId("personCount").value)

}

//上一步
function pre() {
	summer.closeWin("materialHardware");
}

//下一步
function next() {
	saveInfo();
	summer.openWin({
		id : 'qualityHardware',
		url : 'html/qualityHardware.html',
	});
}