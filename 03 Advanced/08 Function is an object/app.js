function wrapper() {

    function g() {
        var x = 13;

        g.x = 12;

        //console.log(this.x);

        console.log(g.x);
    }

    g();
}

//g.x = 12;

//g();

wrapper();
