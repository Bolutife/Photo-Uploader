var args = arguments[0] || {};

$.loginButton.addEventListener('click',function(){
	var fb = require('facebook');
	//Alloy.Globals.Facebook = fb;
	fb.appid = "1418515881803510";
	fb.permissions = ['email', 'public_profile']; // Permissions your app needs
	fb.forceDialogAuth = true;
	fb.addEventListener('login', function(e) {
	    if (e.success) {
	        console.log('Logged In');
	        $.baseWindow.close();
	        $.photosWindow.open();
	    } else if (e.error) {
	        alert(e.error);
	    } else if (e.cancelled) {
	        alert("Canceled");
	    }
	});
	fb.authorize();
});