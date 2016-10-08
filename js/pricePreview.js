summerready = function() {
	var index = summer.pageParam.index;
	//软件折扣
	var softDiscount = localStorage.getItem("softDiscount");
	$summer.byId("softDiscount").innerHTML = softDiscount;
	//工厂信息
	var factories = JSON.parse(localStorage.getItem("factories"));
	//计量衡器数
	$summer.byId("weightCount").innerHTML = factories[index - 1].wei_count;
	$summer.byId("weightCountN").innerHTML = factories[index - 1].wei_count * 10;
	//无人值守衡器数
	$summer.byId("noDutyMonitors").innerHTML = factories[index - 1].nod_monitors;
	$summer.byId("noDutyMonitorsN").innerHTML = factories[index - 1].nod_monitors * 10;
	//开单室-发卡器
	$summer.byId("ticketCount").innerHTML = factories[index - 1].tic_count;
	$summer.byId("ticketCountN").innerHTML = (factories[index - 1].tic_count * 0.05).toFixed(2);
	//
	var allDoors = JSON.parse(localStorage.getItem("doorHardware"));
	var doors = allDoors[index - 1];
	var doorA = 0;
	var doorB = 0;
	var doorC = 0;
	var doorD = 0;
	for(var i=0;i<doors.length;i++){
		if(doors[i].indexOf("A")!=-1){
			doorA++;
		}
		if(doors[i].indexOf("B")!=-1){
			doorB++;
		}
		if(doors[i].indexOf("C")!=-1){
			doorC++;
		}
		if(doors[i].indexOf("D")!=-1){
			doorD++;
		}
	}
	//门岗-A:门岗自助控制系统
	$summer.byId("doorA").innerHTML = doorA;
	$summer.byId("doorAN").innerHTML = (doorA * 0.5).toFixed(2);
	//门岗-B:计量单打印终端
	$summer.byId("doorB").innerHTML = doorB;
	$summer.byId("doorBN").innerHTML = (doorB * 0.3).toFixed(2);
	//门岗-C:语音提示与对讲系统
	$summer.byId("doorC").innerHTML = doorC;
	$summer.byId("doorCN").innerHTML = (doorC * 0.4).toFixed(2);
	//门岗-D:门岗视频监控
	$summer.byId("doorD").innerHTML = doorD;
	$summer.byId("doorDN").innerHTML = (doorD * 0.4).toFixed(2);
	//计量室硬件
	var allWeights = JSON.parse(localStorage.getItem("weightHardware"));
	var weights = allWeights[index - 1];
	var weightA = 0;
	var weightB = 0;
	var weightC = 0;
	var weightD = 0;
	for(var i=0;i<weights.length;i++){
		if(weights[i].indexOf("A")!=-1){
			weightA++;
		}
		if(weights[i].indexOf("B")!=-1){
			weightB++;
		}
		if(weights[i].indexOf("C")!=-1){
			weightC++;
		}
		if(weights[i].indexOf("D")!=-1){
			weightD++;
		}
	}
	//计量室-A:无人值守系统
	$summer.byId("weightA").innerHTML = weightA;
	$summer.byId("weightAN").innerHTML = (weightA * 5).toFixed(2);
	//计量室-B:红外检测系统
	$summer.byId("weightB").innerHTML = weightB;
	$summer.byId("weightBN").innerHTML = (weightB * 0.05).toFixed(2);
	//计量室-C:视频监控
	$summer.byId("weightC").innerHTML = weightC;
	$summer.byId("weightCN").innerHTML = (weightC * 0.4).toFixed(2);
	//计量室-D:IC卡读写器
	$summer.byId("weightD").innerHTML = weightD;
	$summer.byId("weightDN").innerHTML = (weightD * 0.4).toFixed(2);
	//监控室-语音对讲中控主机
	var allMonitors = JSON.parse(localStorage.getItem("monitorHardware"));
	if(allMonitors[index - 1]!=null){
		$summer.byId("monitorA").innerHTML = factories[index - 1].nod_monitors;
		$summer.byId("monitorAN").innerHTML = (factories[index - 1].nod_monitors*0.5).toFixed(2);
	}
	//手持收料
	var allMats = JSON.parse(localStorage.getItem("materialHardware"));
	var maPersonCount = allMats[index-1].maPersonCount==null?0:allMats[index-1].maPersonCount;
	$summer.byId("material").innerHTML = maPersonCount;
	$summer.byId("materialN").innerHTML = (maPersonCount*0.4).toFixed(2);
	//质检加密-手持终端
	var allQuas = JSON.parse(localStorage.getItem("qualityHardware"));
	var icRwCount = allQuas[index-1].icRwCount==null?0:allQuas[index-1].icRwCount;
	var icCount = allQuas[index-1].icCount==null?0:allQuas[index-1].icCount;
	$summer.byId("quaHardware").innerHTML = icRwCount;
	$summer.byId("quaHardwareN").innerHTML = (icRwCount*0.4).toFixed(2);
	$summer.byId("icCount").innerHTML = icCount;
	$summer.byId("icCountN").innerHTML = (icCount*0.0005).toFixed(2);
}





