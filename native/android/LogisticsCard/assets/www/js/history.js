var viewModel;
var email;
var jsonArray = [];
var listview;

$(function() {
	//构造控件实例
	listview = UM.listview("#listview");
	//Knockout绑定
	var ViewModel = function() {
	};
	var index = 1;
	email = localStorage.getItem("email");
	viewModel = new ViewModel();

	$.get("http://zhangyph-pc/baseinfo?email=" + email + "&index=" + index, function(data, status) {
		jsonArray = data.list;
		viewModel.data = ko.observableArray(jsonArray);

		viewModel.rowCollect = function(data, e) {
			var $row = $(e.target).closest(".um-listview-row");
			listview.hideItemMenu($row);
		}
		ko.applyBindings(viewModel);
	});

	//添加控件方法
	listview.on("pullDown", function(sender) {
		//这是可以编写列表下拉加载逻辑，参数sender即为当前列表实例对象
		index++;
		$.get("http://zhangyph-pc/baseinfo?email=" + email + "&index=" + index, function(data, status) {
			jsonArray = data.list;

			for (var i = 0; i < jsonArray.length; i++) {
				viewModel.data.unshift(jsonArray[i]);
			}
			sender.refresh();
		});

	});
	listview.on("pullUp", function(sender) {
		//这是可以编写列表上拉刷新逻辑，参数sender即为当前列表实例对象
		index++;
		$.get("http://zhangyph-pc/baseinfo?email=" + email + "&index=" + index, function(data, status) {
			jsonArray = data.list;
			for (var i = 0; i < jsonArray.length; i++) {
				viewModel.data.push(jsonArray[i]);
			}

			sender.refresh();
		});
	});
	listview.on("itemClick", function(sender, args) {
		//这里可以处理行点击事件，参数sender即为当前列表实例对象，args对象有2个属性，即rowIndex(行索引)和$target(目标行的jquery对象)
		var data = viewModel.data()[args.rowIndex];
		//数据初始化
		localStorage.setItem("baseinfoid", data.ID);
		//报价主表id
		localStorage.setItem("industry", data.INDUSTRY);
		//行业选择
		localStorage.setItem("company", data.COMPANY);
		//公司名称
		localStorage.setItem("saleCompany", data.SALE_COMPANY);
		//销售分公司
		localStorage.setItem("saleAdviser", data.SALE_ADVISER);
		//销售顾问
		localStorage.setItem("saftDiscount", data.SOFT_DISCOUNT);
		//软件折扣
		localStorage.setItem("factoryCount", data.FACTORY_COUNT);
		//报价工厂数
		localStorage.setItem("isBuyReport", data.IS_BUY_REPORT);
		//是否按工厂购买自由报表

		$.get("http://zhangyph-pc/history/" + data.ID, function(data, status) {
			var facList = [];
			var x;
			var factories = [];
			var ticketHardware = [];
			var monitorHardware = [];
			var qualityHardware = [];
			var materialHardware = [];
			if (status == 'success') {
				facList = data.facList;

				for (x in facList) {
					var factory = {};
					ticketHardware.push(facList[x].TIC_HARDWARE);
					monitorHardware.push(facList[x].MON_HARDWARE);
					qualityHardware.push({
						encrypHardware : facList[x].QUA_HARDWARE,
						icRwCount : facList[x].IC_RW_COUNT,
						icCount : facList[x].IC_COUNT
					});
					materialHardware.push({
						maHardware : facList[x].MAT_HARDWARE,
						maPersonCount : facList[x].PERSON_COUNT
					});
					factory.fac_name = facList[x].FAC_NAME;
					factory.item_inout = facList[x].ITEM_INOUT;
					factory.wei_count = facList[x].WEI_COUNT;
					factory.tic_count = facList[x].TIC_COUNT;
					factory.met_count = facList[x].MET_COUNT;
					factory.is_noduty = facList[x].IS_NODUTY;
					factory.nod_monitors = facList[x].NOD_MONITORS;
					factory.id = facList[x].ID;
					factory.base_id = facList[x].BASE_ID
					factories.push(factory);
				}
				localStorage.setItem("factories", JSON.stringify(factories));
				localStorage.setItem("doorHardware", JSON.stringify(data.allDoors));
				localStorage.setItem("weightHardware", JSON.stringify(data.allWeights));
				localStorage.setItem("ticketHardware", JSON.stringify(ticketHardware));
				localStorage.setItem("monitorHardware", JSON.stringify(monitorHardware));
				localStorage.setItem("qualityHardware", JSON.stringify(qualityHardware));
				localStorage.setItem("materialHardware", JSON.stringify(materialHardware));

				summer.openWin({
					id : 'subMenu',
					url : 'html/subMenu.html'
				});
			}
		});

	});
	listview.on("itemDelete", function(sender, args) {
		//这是可以编写行删除逻辑，参数sender即为当前列表实例对象，args对象有2个属性，即rowIndex(行索引)和$target(目标行的jquery对象)
		var item = viewModel.data()[args.rowIndex];
		alert("您点击了删除按钮!这一行的数据是" + JSON.stringify(item));
		/* args.$target.slideUp(500, function() {
		 viewModel.data.remove(item);
		 }); */
	});
	listview.on("itemSwipeLeft", function(sender, args) {
		//这里可以处理行左滑事件，参数sender即为当前列表实例对象，args对象有2个属性，即rowIndex(行索引)和$target(目标行的jquery对象)
		/*sender.showItemMenu(args.$target);*/
	});
	listview.on("tapHold", function() {
		//这里可以处理长按事件
		/*console.log("您长按了列表！");*/
	});
});

function search() {
	var key = $summer.byId("search").value;
	$.get("http://zhangyph-pc/baseinfo/findByKey?email=" + email + "&key=" + key, function(data, status) {
		if (status == "success") {
			viewModel.data.removeAll();
			for (var i = 0; i < data.length; i++) {
				viewModel.data.push(data[i]);
			}
			listview.refresh();
		}
	});
}
