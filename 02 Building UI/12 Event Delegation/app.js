(function() {
    var nextButtonId = 5;
    var parent = $(".parent");

    parent.on("click", "button", function() {
        console.log("Clicked: ", $(this).text());
    });

    $(".button-add").click(function() {
        var btn = $("<button>Btn" + (nextButtonId++) + "</button>");
        parent.append(btn);
    });

    // $("button").click(function() {
    //     console.log("Clicked");
    // });
})();
