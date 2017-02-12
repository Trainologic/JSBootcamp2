function NewProductComponent (products) {
    this.products = products;
}

NewProductComponent.prototype.add = function() {
    this.products.add(this.productName);
}

appModule.component("myNewProduct", {
    controller: NewProductComponent,
    templateUrl: "components/newProduct.component.html",
});
