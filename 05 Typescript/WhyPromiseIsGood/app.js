var network = {
    get: function(url) {
        return Promise.reject(new Error("Ooops"));
        //throw ;

        // return Promise.resolve([
        //     {id:1, name: "Ori"},
        //     {id:2, name: "Roni"},
        //     {id:3, name: "Udi"},
        // ]);
    }
}

var DAL = {
    getAllContacts: function() {
        return network.get();
    }
}

var BL = {
    getTop10Contacts: function() {
        return DAL.getAllContacts().then(contacts => contacts.slice(0, 2));
    }
}

BL.getTop10Contacts().then(contacts => {
    for(var contact of contacts) {
        console.log(contact);
    }
}).catch(err => {
    console.log("ERROR:" + err.message);
});
