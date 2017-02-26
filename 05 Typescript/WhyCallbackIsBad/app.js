
var network = {
    get: function(url, success, error) {
        setTimeout(function() {
            var contacts =[
                {id: 1, name: "Ori"},
                {id: 2, name: "Roni"},
            ];

            success(contacts);
            //error(new Error("Network error"));
        }, 1000);
    }
}

var DAL = {
    getAllContacts: function(success, error) {
        network.get("/api/contact", function success(contacts) {
            if(success) {
                success(contacts);
            }
        }, function error(err) {
            if(error) {
                error(err);
            }
        });
    }
}

var BL = {
    getTop10Contacts: function(success, error) {
        DAL.getAllContacts(function(contacts) {
            if(success) {
                try {
                    success(contacts.slice(0, 10));
                }
                catch(err) {
                    if(error) {
                        error(err);
                    }
                }
            }
        }, function (err){
            if(error) {
                error(err);
            }
        })
    }
}

network.get("/api/contact", function success(contacts) {
    console.log(contacts.length);
}, function error(err) {
    console.log("ERROR: " + err.message);
});
