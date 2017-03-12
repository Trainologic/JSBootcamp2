var fs = require('fs');
var obj = {
    id: 1,
    name: 'roman'
};
// write to file
fs.writeFileSync('./text.txt', JSON.stringify(obj));

// read to file
if (fs.existsSync('./text.txt')) {
    var file = fs.readFileSync('./text.txt', 'UTF-8');
}


var obj2 = JSON.parse();

// check if object is Object
console.log(obj2.id);