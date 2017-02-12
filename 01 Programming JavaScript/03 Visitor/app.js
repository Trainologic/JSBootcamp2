var root = {
    val: 1,
    nodes: [
        {val: 2, nodes: []},
        {val: 3, nodes: [
            {val: 4, nodes: []}
        ]},
    ]
};

function dump(node) {
    console.log(node.val);
}

function walkTheTree(root, visitor) {
    visitor(root);

    if(root.nodes) {
        for (let node of root.nodes) {
            walkTheTree(node, visitor);
        }
    }
}

walkTheTree(root, dump);

var found = null
walkTheTree(root, function(node) {
    if(node.val == 4) {
        found = true;
    }
});