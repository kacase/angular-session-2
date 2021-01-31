import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app.routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { DetailComponent } from "./detail.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ProductsComponent } from "./products.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    ProductsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
