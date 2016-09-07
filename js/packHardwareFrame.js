summerready = function() {
	if (!!(localStorage.getItem("packCount"))) {
		$summer.byId("packCount").value = localStorage.getItem("packCount");
	}
	if (!!(localStorage.getItem("packHardware"))) {
		var packHardware = localStorage.getItem("packHardware");
		$.each($(".um-check-group").find("input:checkbox"), function() {
			if (packHardware.indexOf($(this).val()) > 0) {
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