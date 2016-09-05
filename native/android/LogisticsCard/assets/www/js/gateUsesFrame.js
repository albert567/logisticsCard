summerready = function() {
	if(!!(localStorage.getItem("gateUses"))){
		var gateUses = localStorage.getItem("gateUses");
		$.each($(".um-check-group").find("input:checkbox"), function() {
			if (gateUses.indexOf($(this).val()) > 0)
				this.checked = true;
		})
	}
}
function saveInfo() {
	var arr = [];
	$.each($(".um-check-group").find("input:checkbox"), function() {
		if (this.checked)
			arr.push($(this).val());
	})
	//厂门用途
	localStorage.setItem("gateUses", arr.toString());
}

//上一步
function pre() {
	summer.closeWin("gateUses");
}

//下一步
function next() {
	saveInfo();
	summer.openWin({
		id : 'meterRoomCnt',
		url : 'html/meterRoomCnt.html',
	});
}