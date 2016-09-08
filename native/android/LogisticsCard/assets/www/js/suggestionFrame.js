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
	if (!!(localStorage.getItem("suggestion"))) {
		if (localStorage.getItem("suggestion").indexOf($summer.byId("ck_e").value) != -1) {
			alert("进入到具体的硬件选择");
			summer.openWin({
				id : 'ticket',
				url : 'html/ticket.html',
			});
		} else {
			alert("直接生成动画和报价");
			summer.openWin({
				id : 'finish',
				url : 'html/finish.html',
			});
		}
	} else {
		alert("请选择配置建议");
	}

}