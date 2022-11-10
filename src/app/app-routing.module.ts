import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductChangeComponent } from './product/product-change/product-change.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestChangeComponent } from './request/request-change/request-change.component';
import { RequestlineListComponent } from './requestline/requestline-list/requestline-list.component';
import { RequestlineDetailComponent } from './requestline/requestline-detail/requestline-detail.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineChangeComponent } from './requestline/requestline-change/requestline-change.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserChangeComponent } from './user/user-change/user-change.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorChangeComponent } from './vendor/vendor-change/vendor-change.component';
import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { E404Component } from './misc/e404/e404.component';
import { RequestReviewComponent } from './request/request-review/request-review.component';
import { MenuComponent } from './misc/menu/menu.component';
import { ReviewListComponent } from './requestline/review-list/review-list.component';
import { ReviewItemComponent } from './requestline/review-item/review-item.component';

const routes: Routes = [
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"home",component: HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"Products",component:ProductListComponent},
  {path:"Products/change/:id",component:ProductChangeComponent},
  {path:"Products/create",component:ProductCreateComponent},
  {path:"Products/detail/:id",component:ProductDetailComponent},


  {path:"Users",component:UserListComponent},
  {path:"Users/change/:id",component:UserChangeComponent},
  {path:"Users/create",component:UserCreateComponent},
  {path:"Users/detail/:id",component:UserDetailComponent},
  {path:"login", component:UserLoginComponent},


  {path:"Vendors",component:VendorListComponent},
  {path:"Vendors/change/:id",component:VendorChangeComponent},
  {path:"Vendors/create",component:VendorCreateComponent},
  {path:"Vendors/detail/:id",component:VendorDetailComponent},


  {path:"Requests",component:RequestListComponent},
  {path:"Requests/change/:id",component:RequestChangeComponent},
  {path:"Requests/create",component:RequestCreateComponent},
  {path:"Requests/detail/:id",component:RequestDetailComponent},
  {path:"review",component:RequestReviewComponent},


  {path:"Requests/lines/:id",component:RequestlineListComponent},
  {path:"Requests/lines/change/:id",component:RequestlineChangeComponent},
  {path:"Requests/lines/create/:id",component:RequestlineCreateComponent},
  {path:"Requestlines/detail/:id",component:RequestlineDetailComponent},
  
  {path:"Review", component: ReviewListComponent},
  {path:"Review/:id", component: ReviewItemComponent},


  {path:"**", component:E404Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
