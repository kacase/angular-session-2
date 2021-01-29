import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  products: Product[] = [
    {
      id: "000001",
      name: "Cheese",
      price: 2.5,
      location: "Refrigerated foods"
    },
    { id: "000002", name: "Crisps", price: 3, location: "the Snack isle" },
    { id: "000003", name: "Pizza", price: 4, location: "Refrigerated foods" },
    {
      id: "000004",
      name: "Chocolate",
      price: 1.5,
      location: "the Snack isle"
    },
    {
      id: "000005",
      name: "Self-raising flour",
      price: 1.5,
      location: "Home baking"
    },
    {
      id: "000006",
      name: "Ground almonds",
      price: 3,
      location: "Home baking"
    }
  ];

  getProducts() {
    return this.products;
  }

  getProductByID(id: String) {
    return this.products.find(product => product.id === id);
  }
}

export interface Product {
  id: string;
  name: string;
  price: number;
  location: string;
}
