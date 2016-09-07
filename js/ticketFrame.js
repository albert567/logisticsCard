summerready = function() {
	if(!!(localStorage.getItem("ticketHardware"))){
		var ticketHardware = localStorage.getItem("ticketHardware");
		$.each($(".um-check-group").find("input:checkbox"), function() {
			if (ticketHardware.indexOf($(this).val()) > 0){
				this.checked = true;
			}
		});
	}
}
function saveInfo() {
		var arr = [];
		$.each($(".um-check-group").find("input:checkbox"), function() {
			if (this.checked)
				arr.push($(this).val());
		})
		localStorage.setItem("ticketHardware", arr.toString());
	
	 alert("ticketHardware="+localStorage.getItem("ticketHardware"));
}

//上一步
function pre() {
	summer.closeWin("ticket");
}

//下一步
function next() {
	saveInfo();
	summer.openWin({
		id : 'doorHardware',
		url : 'html/doorHardware.html',
	});
}