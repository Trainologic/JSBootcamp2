"use strict";
var test_js_1 = require("./modules/test.js");
var test_js_2 = require("./modules/test.js");
var $ = require("jquery");
$('.test').html(test_js_1.testInstance.getName());
$('.test2').html(test_js_2.testInstance.getName());
//# sourceMappingURL=app.js.map