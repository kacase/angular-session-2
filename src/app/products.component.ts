import { Component } from "@angular/core";
import { ProductsService } from "./products.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html"
})
export class ProductsComponent {
  // list of all the products
  products;

  constructor(private productsService: ProductsService) {
    // gets all products from our product service
    this.products = productsService.getProducts();
  }
}
