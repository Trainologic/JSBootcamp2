var fs = [
    {
        id: 1, name: 'root', children: [
            {
                id: 2, name: 'sub2', children: [
                    {
                        id: 3, name: 'sub3', children: []
                    }
                ]
            },
            {
                id: 4, name: 'sub4', children: [
                    {
                        id: 5, name: 'sub5', children: [
                            {
                                id: 6, name: 'file6'
                            }
                        ]
                    }
                ]
            },
        ]
    }

]

var output = buildArray(fs)


var fs = require('fs');
fs.writeFile('./test.txt','roman1',function(err){
    if(err) console.log(err);
    else {
        console.log('ok');
    }
});


try {
    var fileContent = fs.readFileSync(__dirname + '/file.txt', 'UTF-8');
    parsedObject = JSON.parse(fileContent);
    var fileSystem = buildFs(parsedObject);
} catch (err) { 
    console.log(err);
}


debugger;

function buildArray(items, parent) {
    var _items = [];
    if (items) {
        for (var item of items) {
            _items.push({ id: item.id, parent: parent ? parent.id : null, name: item.name, type: item.children ? 'folder' : 'file' });
            _items = _items.concat(buildArray(item.children, item));
        }
    }
    return _items;
}

function buildFs(items) {
    var result = [];
    // better work on copy, to keep original consistent
    var itemsCopy = items.slice(0);
    for (var item of itemsCopy) {
        if (item.parent == null) {
            item.children = findChildren(item.id, itemsCopy);
            item = cleanProperties(item);
            result.push(item);
            return result;
        }
    }
}

function cleanProperties(item) {
    delete item.parent;
    delete item.type;
    return item;
}

function findChildren(id, items) {
    var children = [];
    for (var item of items) {
        if (item.parent == id) {
            if (item.type == 'folder')
                item.children = findChildren(item.id, items);
            item = cleanProperties(item);
            children.push(item);
        }
    }
    return children;
}