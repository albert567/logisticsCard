var itemInOut = 2;
var doorCount = 1;
var doors = [];
var checkboxs = [];

summerready = function() {
	checkboxs = $(".um-check-group").find("input:checkbox");
	if (!!(localStorage.getItem("itemInOut"))) {
		itemInOut = localStorage.getItem("itemInOut");
	} else {
		alert("请输入门岗数");
	}
	$summer.byId("lb_door").innerHTML = "岗位：" + doorCount + "/" + itemInOut + "门岗";
	if (!!(localStorage.getItem("doorHardware"))) {
		doors = JSON.parse(localStorage.getItem("doorHardware"));
		$.each(checkboxs, function() {
			if (doors[0].indexOf($(this).val()) != -1) {
				this.checked = true;
			}
		});
	} else {
		if (localStorage.getItem("isNoduty") == "false") {
			$summer.byId("ck_a").checked = true;
			$summer.byId("ck_b").checked = true;
		}
	}
}
function saveInfo() {
	var arr = [];
	$.each(checkboxs, function() {
		if (this.checked) {
			arr.push($(this).val());
		}
	});

	doors[doorCount - 1] = arr.toString();
}

//上一步
function pre() {
	saveInfo();
	doorCount--;
	if (doorCount < 1) {
		summer.closeWin("doorHardware");
	} else {
		$summer.byId("lb_door").innerHTML = "岗位：" + doorCount + "/" + itemInOut + "门岗";
		var hardware = doors[doorCount - 1];
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
	doorCount++;
	if (doorCount <= itemInOut) {
		$summer.byId("lb_door").innerHTML = "岗位：" + doorCount + "/" + itemInOut + "门岗";
		if (doorCount <= doors.length) {
			$.each(checkboxs, function() {
				if (doors[doorCount - 1].indexOf($(this).val()) != -1) {
					this.checked = true;
				} else {
					this.checked = false;
				}
			});
		} else {
			if (localStorage.getItem("isNoduty") == "false") {
				$summer.byId("ck_a").checked = true;
				$summer.byId("ck_b").checked = true;
			} else {
				$summer.byId("ck_a").checked = false;
				$summer.byId("ck_b").checked = false;
			}
			$summer.byId("ck_c").checked = false;
			$summer.byId("ck_d").checked = false;
		}

	} else {
		doorCount--;
		localStorage.setItem("doorHardware", JSON.stringify(doors));
		summer.openWin({
			id : 'meterHardware',
			url : 'html/meterHardware.html',
		});
	}

}