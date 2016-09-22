var index = 1;
var jsonArray = [];
$(function() {
	//构造控件实例
	var listview = UM.listview("#listview");
	//Knockout绑定
	var ViewModel = function() {
	};
	var email = localStorage.getItem("email");

	$.get("http://192.168.43.214/baseinfo?email=" + email, function(data, status) {
		//jsonArray = data.list;
		jsonArray = data;
		var viewModel = new ViewModel();
		viewModel.data = ko.observableArray(jsonArray);

		viewModel.rowCollect = function(data, e) {
			alert("点击收藏！这一行的数据是" + JSON.stringify(data));
			var $row = $(e.target).closest(".um-listview-row");
			listview.hideItemMenu($row);
		}
		ko.applyBindings(viewModel);
	});

	//添加控件方法
	listview.on("pullDown", function(sender) {
		//这是可以编写列表下拉加载逻辑，参数sender即为当前列表实例对象
		/*var row = {
		 "sender" : "king4@yonyou.com",
		 "img" : "../img/sender4.png",
		 "title": "【用友大学友学堂】Uber、奇虎360、百度等公司大咖来分享经验了！",
		 "msgNum" : 2,
		 "lastMsg" : "用友大学友学堂年终特别策划,原汁原味的互联网时代企业转型案例,Uber、奇虎360、百度等公司大咖为你直播分享心得",
		 "lastTime" : "12月22日",
		 };
		 viewModel.data.unshift(row);*/
		sender.refresh();
	});
	listview.on("pullUp", function(sender) {
		//这是可以编写列表上拉刷新逻辑，参数sender即为当前列表实例对象
		/*var row = {
		 "sender" : "fire5@yonyou.com",
		 "img" : "../img/sender5.png",
		 "title": "【培训通知】：1月15日某某教授《用户体验、服务设计与智慧的钱》讲座",
		 "msgNum" : 6,
		 "lastMsg" : "2016年1月15日（周五），有幸邀请到北京科技大学教授，博士生导师，覃京燕教授来用友做一期《用户体验、服务设计与智慧的钱》讲座，内容如下。",
		 "lastTime" : "12月22日"
		 };
		 viewModel.data.push(row);*/
		sender.refresh();
	});
	listview.on("itemClick", function(sender, args) {
		//这里可以处理行点击事件，参数sender即为当前列表实例对象，args对象有2个属性，即rowIndex(行索引)和$target(目标行的jquery对象)
		alert("您点击了列表第" + (args.rowIndex + 1) + "行！");
		/*$.post("http://192.168.43.214/baseinfo/updateExcel?id=", {
		 id : jsonArray[args.rowIndex].ID
		 }, function(data) {

		 });*/
		alert("进入报价界面");
		var data = jsonArray[args.rowIndex];
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

		$.get("http://192.168.43.214/factory/"+data.ID, 
			function(data, status) {
				var x;
				var factories = [];
				var allDoors = [];
				var allWeights = [];
				var index=0;
				if(status == 'success'){
					for(x in data){
						index++;
						var factory={};
						localStorage.setItem("ticketHardware",x.TIC_HARDWARE);
						localStorage.setItem("monitorHardware",x.MON_HARDWARE);
						localStorage.setItem("qualityHardware",
						{encrypHardware:x.QUA_HARDWARE,
						icRwCount:x.IC_RW_COUNT,icCount:x.IC_COUNT});
						localStorage.setItem("materialHardware",
						{maHardware:x.MAT_HARDWARE,
						maPersonCount:x.PERSON_COUNT});
						localStorage.setItem("ticketHardware",x.FAC_NAME);
						factory.fac_name = x.FAC_NAME;
						factory.item_inout = x.ITEM_INOUT;
						factory.wei_count = x.WEI_COUNT;
						factory.tic_count = x.TIC_COUNT;
						factory.met_count = x.MET_COUNT;
						factory.is_noduty = x.IS_NODUTY;
						factory.nod_monitors = x.NOD_MONITORS;
						factory.id = x.ID;
						factories.push(factory);
					}
					localStorage.setItem("factories",factories);
					
					$.get("http://192.168.43.214/door/"+data.ID+"/"+index, 
						function(data, status) {
							if(status=="success"){
								allDoors.push(data);
							}
					});
					
					$.get("http://192.168.43.214/weight/"+data.ID+"/"+index, 
						function(data, status) {
							if(status=="success"){
								allWeights.push(data);
							}
					});
					
					
				}
		});

		summer.openWin({
			id : 'subMenu',
			url : 'html/subMenu.html',
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

}
