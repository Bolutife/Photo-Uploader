var args = arguments[0] || {};
$.logoutButton.addEventListener('click', function(){
	var fb = require('facebook');//Alloy.Globals.Facebook;
	fb.logout();
	$.photosWindow.close();
	var startWindow = Alloy.createController('start').getView();
	startWindow.open();
});

function showRequestResult(e) {
    var s = '';
    if (e.success) {
        s = "SUCCESS";
        if (e.result) {
            s += "; " + e.result;
        }
    } else {
        s = "FAIL";
        if (e.error) {
            s += "; " + e.error;
        }
    }
    
}
 
$.addPhotoButton.addEventListener('click', function(){
	 Titanium.Media.openPhotoGallery({
        success:function(event)
        {
            $.addPhotoButton.title = 'Uploading Photo...';
            var data = {picture: event.media};
            Titanium.Facebook.requestWithGraphPath('me/photos', data, "POST", showRequestResult);
        },
        cancel:function()
        {
        },
        error:function(error)
        {
        },
        allowEditing:true
    });
});
	




	
