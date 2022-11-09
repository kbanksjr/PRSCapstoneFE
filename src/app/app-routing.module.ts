import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { E404Component } from './misc/e404/e404.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserChangeComponent } from './user/user-change/user-change.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserCreateComponent } from './user/user-create/user-create.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorChangeComponent } from './vendor/vendor-change/vendor-change.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductChangeComponent } from './product/product-change/product-change.component';

import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestChangeComponent } from './request/request-change/request-change.component';
import { RequestReviewComponent } from './request/request-review-list/request-review.component';
import { RequestReviewDetailComponent } from './request/request-review-detail/request-review-detail.component';

import { RequestLineListComponent } from './requestline/requestline-list/requestline-list.component';
import { RequestLineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestLineChangeComponent } from './requestline/requestline-change/requestline-change.component';

const routes: Routes = [
  { path:"", redirectTo:"/user/login", pathMatch:"full"},

  { path:"user/login", component: UserLoginComponent},
  { path:"user/list", component: UserListComponent},
  { path:"user/create", component: UserCreateComponent},
  { path:"user/detail/:id", component:UserDetailComponent},
  { path:"user/change/:id", component: UserChangeComponent},

  { path:"vendor/list", component: VendorListComponent},
  { path:"vendor/create", component: VendorCreateComponent},
  { path:"vendor/detail/:id", component: VendorDetailComponent},
  { path:"vendor/change/:id", component: VendorChangeComponent},

  { path:"product/list", component: ProductListComponent},
  { path:"product/create", component: ProductCreateComponent},
  { path:"product/detail/:id", component: ProductDetailComponent},
  { path:"product/change/:id", component: ProductChangeComponent},

  { path:"request/review", component: RequestReviewComponent},
  { path:"request/review/:id", component: RequestReviewDetailComponent},
  { path:"request/list", component: RequestListComponent},
  { path:"request/create", component: RequestCreateComponent},
  { path:"request/detail/:id", component: RequestDetailComponent},
  { path:"request/change/:id", component: RequestChangeComponent},

  { path:"requestline/list/:id", component: RequestLineListComponent},
  { path:"requestline/create/:id", component: RequestLineCreateComponent},
  { path:"requestline/change/:id", component: RequestLineChangeComponent},

  { path:"home", component: HomeComponent},
  { path:"about", component: AboutComponent},

  { path:"**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
