var checkboxs = [];
summerready = function() {
	checkboxs = $(".um-check-group").find("input:checkbox");
	if (!!(localStorage.getItem("packCount"))) {
		$summer.byId("packCount").value = localStorage.getItem("packCount");
	}
	if (!!(localStorage.getItem("packHardware"))) {
		var packHardware = localStorage.getItem("packHardware");
		$.each(checkboxs, function() {
			if (packHardware.indexOf($(this).val()) != -1) {
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
	localStorage.setItem("packHardware", arr.toString());
	localStorage.setItem("packCount", $summer.byId("packCount").value);

}

//上一步
function pre() {
	summer.closeWin("packHardware");
}

//下一步
function next() {
	saveInfo();
	summer.openWin({
		id : 'materialHardware',
		url : 'html/materialHardware.html',
	});
}