
var contacts = [
    {id:1, name: "Ori", email: "ori@gmail.com"},
    {id:2, name: "Roni", email: "roni@gmail.com"},
];

function addContact(contact) {
    contacts.push(contact);
}

function getAll() {
    return contacts;
}

function deleteContact(id) {
}

function search(str) {
    var found = [];

    contacts.forEach(function(contact) {
        if(contact.name.indexOf(str)!=-1 ||
            contact.email.indexOf(str)!=-1) {
            found.push(contact);
        }
    })

    return found;
}

