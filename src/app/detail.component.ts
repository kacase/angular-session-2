import { Component } from "@angular/core";

import { Product, ProductsService } from "./products.service";
// TODO: import activatedRoute from "@angular/router";
// import { ActivatedRoute} from "@angular/router"

@Component({
  selector: "app-details",
  templateUrl: "./detail.component.html"
})
export class DetailComponent {
  product: Product;

  constructor(
    // TODO: inject activatedRoute into the component, so it an be used
    // private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {
    // TODO: access the route parameter that contains the id of the product you want
    // tip: you might find it in the activatedRoute in route.snapshot.params.id
    // save the parameter in a variable and use it to get the correct product from the service
    // currently the product id is set statically
    this.product = this.productsService.getProductByID("000001");
  }
}
