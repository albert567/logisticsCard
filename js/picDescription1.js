summerready = function() {
	
	$('.um-back').click(function() {
		summer.closeWin();
	}); 

	var data = [{
		"img" : "../img/swipeNews1.png",
		"title" : "图片1",
		"brief" : "图片描述1图片描述1图片描述1图片描述1图片描述1图片描述1图片描述1图片描述1。"
	}, {
		"img" : "../img/swipeNews2.png",
		"title" : "图片2",
		"brief" : "图片描述2图片描述2图片描述2图片描述2图片描述2图片描述2图片描述2图片描述2。"
	}, {
		"img" : "../img/swipeNews3.png",
		"title" : "图片3",
		"brief" : "图片描述3图片描述3图片描述3图片描述3图片描述3图片描述3图片描述3图片描述3。"
	}];
	var ViewModel = function() {
	};
	var viewModel = new ViewModel();
	viewModel.data = ko.observableArray(data);
	ko.applyBindings(viewModel);
	var slider = $("#slider").swipeContent({
		auto : 2500,
		continuous : true
	});
}
//上一步
function pre() {
	/*summer.openWin({
		id : 'subMenu',
		url : 'html/subMenu.html'
	});*/
	summer.closeWin("picDescription1");
}

//下一步
function next() {
	summer.openWin({
		id : 'finish',
		url : 'html/finish.html'
	});
}

