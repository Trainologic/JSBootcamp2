appModule.factory("products", function() {
    "use strict";

    var availableProducts = [
        {id:1, name: "Banana"},
        {id:2, name: "Mellon"},
        {id:3, name: "Apple"},
    ];
    var selectedProducts = [];

    function getAvailable() {
        return availableProducts;
    }

    function getSelected() {
        return selectedProducts;
    }

    function getAvailableByName(productName) {
        for(var product of availableProducts) {
            if(product.name == productName) {
                return product;
            }
        }

        throw new Error("Product with name: " + productName + " was not found");
    }

    function add(productName) {
        var product = getAvailableByName(productName);

        selectedProducts.push(product);
    }

    return {
        getAvailable: getAvailable,
        getSelected: getSelected,
        add: add,
    };
});
