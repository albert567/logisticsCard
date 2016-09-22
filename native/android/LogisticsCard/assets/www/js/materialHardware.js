var checkboxs = [];
var factoryCount = 2;
var index = 1;
var allMats = [];
var factory;
summerready = function() {
	index = summer.pageParam.index;
	factoryCount = summer.pageParam.factoryCount;
	checkboxs = $(".um-check-group").find("input:checkbox");
	updateH3();
	if (!!(localStorage.getItem("materialHardware"))) {
		allMats = JSON.parse(localStorage.getItem("materialHardware"));
		if (index <= allMats.length) {
			var obj = allMats[index - 1];
			$.each(checkboxs, function() {
				if (obj.maHardware.indexOf($(this).val()) != -1) {
					this.checked = true;
				}
			});
			$summer.byId("personCount").value = obj.maPersonCount;
		}
	}
}
//更新标题
function updateH3() {
	$summer.byId("hh").innerHTML = index + "/" + factoryCount + "工厂硬件选择";
}
function saveInfo() {
	var arr = [];
	$.each(checkboxs, function() {
		if (this.checked) {
			arr.push($(this).val());
		}
	});
	if(index <= allMats.length){
		allMats[index-1].maHardware = arr.toString();
		allMats[index-1].maPersonCount = $summer.byId("personCount").value;
	}else{
		var obj = {maHardware:arr.toString(),
					maPersonCount:$summer.byId("personCount").value};
		allMats.push(obj);
	}
	localStorage.setItem("materialHardware", JSON.stringify(allMats));
}

//上一步
function pre() {
	summer.openWin({
		id : 'qualityHardware',
		url : 'html/qualityHardware.html',
		pageParam : {
			index : index,
			factoryCount : factoryCount
		}
	});
	summer.closeWin("materialHardware");
}

//下一步
function next() {
	saveInfo();
	summer.openWin({
		id : 'subFinish',
		url : 'html/subFinish.html',
		pageParam : {
			index : index,
			factoryCount : factoryCount
		}
	});
	summer.closeWin("materialHardware");
}