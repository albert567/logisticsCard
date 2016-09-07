summerready = function() {
	//大宗物资进出厂门数
	if (!!(localStorage.getItem("itemInOut"))) {
		$summer.byId("itemInOut").value = localStorage.getItem("itemInOut");
	}
	//计量室数量
	if (!!(localStorage.getItem("meterRoomCount"))) {
		$summer.byId("meterRoomCount").value = localStorage.getItem("meterRoomCount");
	}
	//计量衡器数量
	if (!!(localStorage.getItem("weightCount"))) {
		$summer.byId("weightCount").value = localStorage.getItem("weightCount");
	}
}

function saveInfo() {
	//大宗物资进出厂门数
	var itemInOut = $summer.byId("itemInOut");
	//计量室数量
	var meterRoomCount = $summer.byId("meterRoomCount");
	//计量衡器数量
	var weightCount = $summer.byId("weightCount");
	
	localStorage.setItem("itemInOut", itemInOut.value);
	localStorage.setItem("meterRoomCount", meterRoomCount.value);
	localStorage.setItem("weightCount", weightCount.value);

	alert("itemInOut="+localStorage.getItem("itemInOut"));
	alert("meterRoomCount="+localStorage.getItem("meterRoomCount"));
	alert("weightCount="+localStorage.getItem("weightCount"));
	 
}

//上一步
function pre(){
	summer.closeWin("itemInOut");
}
//下一步
function next(){
	saveInfo();
	summer.openWin({
		id : 'suggestion',
		url : 'html/suggestion.html',
	});
}