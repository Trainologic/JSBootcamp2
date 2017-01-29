var ori = {
    id: 1,
    name: "Ori",
};

var roni = {
    id: 2,
    name: "Roni",
};

ori.sibling = roni;
roni.sibling = ori;

var json = JSON.stringify(ori);
console.log(json);