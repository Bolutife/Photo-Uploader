// check if there is a user session saved already

$.tabGroup.open();
$.tabGroup.setActiveTab(0);
initialize();
function initialize(){
	var fb = require('facebook');
		if (fb.loggedIn){	
	}
		else{
			var startWindow = Alloy.createController('start').getView();
			//$.tabGroup.activeTab.openWindow(startWindow);
			startWindow.open();
	}
}

