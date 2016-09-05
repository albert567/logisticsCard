summerready = function() {
	//大宗物资进出厂门数
	if(!!(localStorage.getItem("itemInOut"))){
		$summer.byId("itemInOut").value = localStorage.getItem("itemInOut");
	}
	//厂门用途
	if(!!(localStorage.getItem("gateUses"))){
		var gateUses = localStorage.getItem("gateUses");
		$.each($(".um-check-group").find("input:checkbox"), function() {
			if (gateUses.indexOf($(this).val()) > 0)
				this.checked = true;
		})
	}
}
function saveInfo() {
	var itemInOut = $summer.byId("itemInOut");
	var arr = [];
	$.each($(".um-check-group").find("input:checkbox"), function() {
		if (this.checked)
			arr.push($(this).val());
	})
	//大宗物资进出厂门数
	localStorage.setItem("itemInOut", itemInOut.value);
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