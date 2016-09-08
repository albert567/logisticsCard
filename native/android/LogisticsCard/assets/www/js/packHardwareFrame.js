var checkboxs = [];
var packCount = 2
var index = 1;
var packs = []
summerready = function() {
	checkboxs = $(".um-check-group").find("input:checkbox");
	if (!!(localStorage.getItem("packCount"))) {
		packCount = localStorage.getItem("packCount");
	} else {
		alert("请输入包装机个数");
	}
	$summer.byId("lb_pack").innerHTML = index + "/" + packCount + "包装机硬件选择：<br />（一机二道）";
	if (!!(localStorage.getItem("packHardware"))) {
		packs = JSON.parse(localStorage.getItem("packHardware"));
		$.each(checkboxs, function() {
			if (packs[0].indexOf($(this).val()) != -1) {
				this.checked = true;
			}
		});
	}
}
function saveInfo() {
	var arr = [];
	$.each(checkboxs, function() {
		if (this.checked) {
			arr.push($(this).val());
		}
	});
	packs[index - 1] = arr.toString();
}

//上一步
function pre() {
	saveInfo();
	index--;
	if (index < 1) {
		summer.closeWin("packHardware");
	} else {
		$summer.byId("lb_pack").innerHTML = index + "/" + packCount + "包装机硬件选择：<br />（一机二道）";
		var hardware = packs[index - 1];
		$.each(checkboxs, function() {
			if (hardware.indexOf($(this).val()) != -1) {
				this.checked = true;
			} else {
				this.checked = false;
			}
		});
	}
}

//下一步
function next() {
	saveInfo();
	index++;
	if (index <= packCount) {
		$summer.byId("lb_pack").innerHTML = index + "/" + packCount + "包装机硬件选择：<br />（一机二道）";
		if (index <= packs.length) {
			$.each(checkboxs, function() {
				if (packs[index - 1].indexOf($(this).val()) != -1) {
					this.checked = true;
				} else {
					this.checked = false;
				}
			});
		} else {
			$.each(checkboxs, function() {
				this.checked = false;
			});
		}

	} else {
		index --;
		localStorage.setItem("packHardware", JSON.stringify(packs));
		summer.openWin({
			id : 'materialHardware',
			url : 'html/materialHardware.html',
		});
	}
}