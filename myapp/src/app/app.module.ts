import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderItemsComponent } from './componts/order-items/order-items.component';
import { CatgoryComponent } from './componts/catgory/catgory.component';
import { RouterModule, Routes } from '@angular/router';
import { DropDownComponent } from './componts/drop-down/drop-down.component';
import { SearchComponent } from './componts/search/search.component';
import { OrderDetailsComponent } from './componts/order-details/order-details.component';
//http://localhost:4200/cat
const rout:Routes=[

  //http://localhost:4200/category/id
  {path:'category/:id',component:OrderItemsComponent},

  //http://localhost:4200/category
  {path:'category',component:OrderItemsComponent},

//http://localhost:4200/search/name
{path:'orders/:name',component:OrderItemsComponent},  

 //http://localhost:4200/order/id
 {path:'order/:key',component:OrderDetailsComponent},

//http://localhost:4200/order
  {path:'order',component:OrderItemsComponent},

  //http://localhost:4200/

  {path:'',redirectTo:'/order',pathMatch:'full'},

  //http://localhost:4200/anything
  {path:'**',redirectTo:'/order',pathMatch:'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    OrderItemsComponent,
    CatgoryComponent,
    DropDownComponent,
    SearchComponent,
    OrderDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(rout),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ 
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
