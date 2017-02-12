function ProductListComponent (products) {
    this.products = products.getSelected();
}

appModule.component("myProductList", {
    controller: ProductListComponent,
    templateUrl: "components/productList.component.html",
});
