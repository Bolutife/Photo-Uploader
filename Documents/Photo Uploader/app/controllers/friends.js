var args = arguments[0] || {};

function createListView(_data) {
 
    // this is pretty straight forward, assigning the values to the specific
    // properties in the template we defined above
    var items = [];
    for (var i in _data) {
        
        // add items to an array
        items.push({
            template : "template1",            // set the template
            textLabel : {
                text : _data[i].name           // assign the values from the data
            },
            pic : {
                image : _data[i].pic_square    // assign the values from the data
            }
        });
    }
    
    // add the array, items, to the section defined in the view.xml file
    $.section.setItems(items);
 
}
 
function _doFacebookLoginAction() {
 
    if (!fb.loggedIn) { 
        fb.permissions = ["read_stream", "email"];
        fb.authorize();
        return;
    }
 
    var query = "SELECT uid, name, pic_square, hometown_location  FROM user ";
    query += "where uid IN (SELECT uid2 FROM friend WHERE uid1 = " + fb.uid + ")";
    query += "order by last_name limit 1000";
    Ti.API.info("user id " + fb.uid);
    fb.request("fql.query", {
        query : query
    }, function(r) {
        if (r.success) {
            createListView(JSON.parse(r.result));
        } else {
            alert('error happened!');
        }
    });
 
    // set login callback
    fb.addEventListener('login', function(e) {
        _doFacebookLoginAction();
    });
 
}
/* 
// open the view
$.index.open();
 
var fb = require("facebook");
 
// YOU MUST DO THIS
// set this in your tiapp.xml file
fb.appid = Ti.App.Properties.getString("ti.facebook.appid");
 
// Start process by loggin in
_doFacebookLoginAction();*/