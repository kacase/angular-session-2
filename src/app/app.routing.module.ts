import { NgModule } from "@angular/core";

//TODO: import RouterModule and Routes class (we helped you a bit here)
// import { RouterModule, Routes} from "@angular/router"

//TODO: define Routes as a const array called appRoutes
// one route for home
// one route for products
// one route with an ID as the parameter for specific products
// one route capturing all invalid routes
// we have already created the array to hold the routes for you here:
//
// const appRoutes: Routes = []

@NgModule({
  imports: [
    // TODO: import the router module and inject your newly defined routes
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // )
  ],
  exports: [
    // TODO export the RouterModule
  ]
})
export class AppRoutingModule {}
