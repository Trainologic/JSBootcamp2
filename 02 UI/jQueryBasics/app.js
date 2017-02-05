var btn = $("button");
var body = $("body");
var counter = 1;

btn.on("click", function() {
    createUI();
});

function createUI() {
    //var div = $("<div>" + (counter++) + "</div>");

    var template = "<div><button>Delete</button><span></span></div>";

    var div = $(template);
    div.find("span").text(counter++);
    div.find("button").on("click", onDelete);

    body.append(div);
}

function onDelete() {
    var button = $(this);
    var div = button.closest("div");
    div.remove();
}

