summerready = function() {
	$(".um-check-group").find("input:checkbox").on("change", function() {
		if (this.checked) {
			alert(this.id + "被选中");
			if (this.id == "ck_a") {
				$summer.byId("icRwCount").value = 2;
				$summer.byId("icCount").value = 200;
			}

		}
	});

	if (!!(localStorage.getItem("icRwCount"))) {
		$summer.byId("icRwCount").value = localStorage.getItem("icRwCount");
	}
	if (!!(localStorage.getItem("icCount"))) {
		$summer.byId("icCount").value = localStorage.getItem("icCount");
	}
	if (!!(localStorage.getItem("encrypHardware"))) {
		var encrypHardware = localStorage.getItem("encrypHardware");
		$.each($(".um-check-group").find("input:checkbox"), function() {
			if (encrypHardware.indexOf($(this).val()) > 0) {
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
	localStorage.setItem("encrypHardware", arr.toString());
	localStorage.setItem("icRwCount", $summer.byId("icRwCount").value)
	localStorage.setItem("icCount", $summer.byId("icCount").value)
}

//上一步
function pre() {
	summer.closeWin("qualityHardware");
}

//下一步
function next() {
	saveInfo();
	summer.openWin({
		id : 'finish',
		url : 'html/finish.html',
	});
}