var factories = [];
var index = 1;
var factoryCount = 2;
summerready = function() {
	//报价工厂数
	if (!!(localStorage.getItem("factoryCount"))) {
		factoryCount = localStorage.getItem("factoryCount");
	}
	//工厂信息数组
	if (!!(localStorage.getItem("factories"))) {
		factories = JSON.parse(localStorage.getItem("factories"));
		arrToValue();
	}
	updateH3();
}
//更新h3
function updateH3() {
	$summer.byId("hh").innerHTML = index + "/" + factoryCount + "工厂信息维护";
}

//数组元素赋值给页面
function arrToValue() {
	//工厂名称
	$summer.byId("factoryName").value = factories[index - 1].fac_name;
	//大宗物资进出厂门数
	$summer.byId("itemInOut").value = factories[index - 1].item_inout;
	//计量衡器数量
	$summer.byId("weightCount").value = factories[index - 1].wei_count;
	//开单员/班
	$summer.byId("ticketCount").value = factories[index - 1].tic_count;
	//计量员/班
	$summer.byId("meterCount").value = factories[index - 1].met_count;
	//是否无人值守计量
	$summer.byId("isNoduty").checked = factories[index - 1].is_noduty;
	//计量室/班
	$summer.byId("noDutyMonitors").value = factories[index - 1].nod_monitors;
}

//页面赋值给数组元素
function valueToArray() {
	var baseId = localStorage.getItem("baseinfoid");
	var obj = {};
	if (index < factories.length) {
		//工厂名称
		factories[index - 1].fac_name = $summer.byId("factoryName").value;
		//大宗物资进出厂门数
		factories[index - 1].item_inout = $summer.byId("itemInOut").value;
		//计量衡器数量
		factories[index - 1].wei_count = $summer.byId("weightCount").value;
		//开单员/班
		factories[index - 1].tic_count = $summer.byId("ticketCount").value;
		//计量员/班
		factories[index - 1].met_count = $summer.byId("meterCount").value;
		//是否无人值守计量
		factories[index - 1].is_noduty = $summer.byId("isNoduty").checked;
		//计量室/班
		factories[index - 1].nod_monitors = $summer.byId("noDutyMonitors").value;
		obj = factories[index - 1];
		//更新数据到数据库
		$.post("http://192.168.43.214/factory/update", 
			{
				fac_name:obj.fac_name,
				item_inout:obj.item_inout,
				wei_count:obj.wei_count,
				tic_count:obj.tic_count,
				met_count:obj.met_count,
				is_noduty:obj.is_noduty,
				nod_monitors:obj.nod_monitors,
				base_id:obj.base_id,
				fa_index:index,
				id:obj.id
			},
			function(data) {
			//alert("数据保存成功：" + data);
			
		});
	} else {
		//工厂名称
		obj.fac_name = $summer.byId("factoryName").value;
		//大宗物资进出厂门数
		obj.item_inout = $summer.byId("itemInOut").value;
		//计量衡器数量
		obj.wei_count = $summer.byId("weightCount").value;
		//开单员/班
		obj.tic_count = $summer.byId("ticketCount").value;
		//计量员/班
		obj.met_count = $summer.byId("meterCount").value;
		//是否无人值守计量
		obj.is_noduty = $summer.byId("isNoduty").checked;
		//计量室/班
		obj.nod_monitors = $summer.byId("noDutyMonitors").value;
		obj.base_id = baseId;
		
		//保存数据到数据库JSON.stringify(obj)
		$.post("http://192.168.43.214/factory/save", 
			{
				fac_name:obj.fac_name,
				item_inout:obj.item_inout,
				wei_count:obj.wei_count,
				tic_count:obj.tic_count,
				met_count:obj.met_count,
				is_noduty:obj.is_noduty,
				nod_monitors:obj.nod_monitors,
				base_id:obj.base_id,
				fa_index:index
			},
			function(data) {
				//alert("数据保存成功：" + data);
				if(data!=-1){
					obj.id = data;
					factories.push(obj);
				}
			});
	}

}

//保存页面信息
function saveInfo() {
	valueToArray();
}

//上一步
function pre() {
	saveInfo();
	index--;
	if (index < 1) {
		summer.closeWin("noduty");
	} else {
		updateH3();
		arrToValue();
	}
}

//下一步
function next() {
	saveInfo();

	index++;
	if (index <= factoryCount) {
		updateH3();
		if (index <= factories.length) {
			arrToValue();
		} else {
			$summer.byId("isNoduty").checked = true;
		}
	} else {
		index--;
		localStorage.setItem("factories", JSON.stringify(factories));
		summer.openWin({
			id : 'subMenu',
			url : 'html/subMenu.html',
		});
	}
}

