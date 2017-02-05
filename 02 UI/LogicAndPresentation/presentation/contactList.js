var ul = $("ul.contacts");

var li = ul.find("li");
li.removeClass("template");

var template = ul.html();
console.log(template);
ul.empty();

function updateUI() {
    var contacts = getAll();

    contacts.forEach(function(contact) {
        var li = $(template);
        ul.append(li);

        //$("li span.name")

        li.find("span.name").text(contact.name);
        li.find("span.email").text(contact.email);
    });
}

updateUI();
