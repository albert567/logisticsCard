var checkboxs = [];

summerready = function() {
	checkboxs = $(".um-check-group").find("input:radio");
	//配置建议
	if (!!(localStorage.getItem("suggestion"))) {
		var suggestion = localStorage.getItem("suggestion");
		$.each(checkboxs, function() {
			if (suggestion == $(this).val())
				this.checked = true;
		})
	}
}
function saveInfo() {
	$.each(checkboxs, function() {
		if (this.checked) {
			var value = $(this).val();
			alert("您选择的是：" + value);
			//配置建议
			localStorage.setItem("suggestion", value);
			if (value.indexOf("E") != -1) {
				alert("进入到具体的硬件选择");
			} else {
				alert("直接生成动画和报价");
			}
			return true;
		}
	});
}

//上一步
function pre() {
	summer.closeWin("suggestion");
}

//下一步
function next() {
	saveInfo();
	summer.openWin({
		id : 'ticket',
		url : 'html/ticket.html',
	});
}