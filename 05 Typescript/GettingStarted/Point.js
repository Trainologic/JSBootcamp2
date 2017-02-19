var Point = (function() {
    "use strict";

    var numberOfPoints;

    function Point(x, y) {
        this.x = x;
        this.y = y;

        ++numberOfPoints;
    }

    Point.prototype.dump = function() {
    }

    return Point;
})();
