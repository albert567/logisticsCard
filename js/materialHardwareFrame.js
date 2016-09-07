var checkboxs = [];
summerready = function() {
	checkboxs = $(".um-check-group").find("input:checkbox");
	if (!!(localStorage.getItem("maPersonCount"))) {
		$summer.byId("personCount").value = localStorage.getItem("maPersonCount");
	}
	if (!!(localStorage.getItem("materialHardware"))) {
		var materialHardware = localStorage.getItem("materialHardware");
		$.each(checkboxs, function() {
			if (materialHardware.indexOf($(this).val()) != -1) {
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