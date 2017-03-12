var button = document.querySelector("button");

button.addEventListener("click", function() {
    //$("head").append('<script src=\"http://localhost:3000/api\"></script>');

           var xhr = new XMLHttpRequest();
           xhr.open("GET", "http://localhost:3000/api");
           xhr.send();
});

function g(data) {
    //var data = JSON.parse(json);
    console.log(data);
}
