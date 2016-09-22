﻿var factoryCount = 2;
var index = 1;
var baseId = 1;

summerready = function() {
	index = summer.pageParam.index;
	baseId = localStorage.getItem("baseinfoid");
	factoryCount = summer.pageParam.factoryCount;
	updateH3();
}
//更新标题
function updateH3() {
	$summer.byId("hh").innerHTML = index + "/" + factoryCount + "工厂硬件选择";
}

//报价生成
function priceGenerate() {
	alert("报价生成");
}

//报价预览
function pricePreview() {
	alert("报价预览");
	summer.openWin({
		id : 'pricePreview',
		url : 'html/pricePreview.html',
	});
}

//上一步
function pre() {
	summer.openWin({
		id : 'materialHardware',
		url : 'html/materialHardware.html',
		pageParam : {
			index : index,
			factoryCount : factoryCount
		}
	});
	summer.closeWin("subFinish");
}

//
function next() {
	if (index < factoryCount) {
		alert("下一家维护"); ++index;
		summer.openWin({
			id : 'ticket',
			url : 'html/ticket.html',
			pageParam : {
				index : index,
				factoryCount : factoryCount
			}
		});
	} else {
		alert("维护完成");

		//保存数据到数据库JSON.stringify(obj)
		$.post("http://192.168.43.214/factory/saveOther", {
			base_id : baseId,
			fa_index : index,
			tic_hardware : localStorage.getItem("ticketHardware"),
			mon_hardware : localStorage.getItem("monitorHardware"),
			qua_hardware : localStorage.getItem("qualityHardware"),
			mat_hardware : localStorage.getItem("materialHardware"),
			door_hardware : localStorage.getItem("doorHardware"),
			wei_hardware : localStorage.getItem("weightHardware")
		}, function(data) {
			localStorage.clear();
			//alert("数据保存成功：" + data);
		});
		summer.openWin({
			id : 'finish',
			url : 'html/finish.html'
		});
	}
	summer.closeWin("subFinish");
}