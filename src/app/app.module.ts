import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { E404Component } from './misc/e404/e404.component';
import { MenuComponent } from './misc/menu/menu.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserChangeComponent } from './user/user-change/user-change.component';
import { HeadComponent } from './common/head/head.component';
import { FootComponent } from './common/foot/foot.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { AppInitService } from './app-init.service';
import { BoolDisplayPipe } from './common/bool-display.pipe';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorChangeComponent } from './vendor/vendor-change/vendor-change.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductChangeComponent } from './product/product-change/product-change.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestChangeComponent } from './request/request-change/request-change.component';
import { RejectionPipe } from './request/rejection.pipe';
import { RequestLineListComponent } from './requestline/requestline-list/requestline-list.component';
import { RequestLineDetailComponent } from './requestline/requestline-detail/requestline-detail.component';
import { RequestLineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestLineChangeComponent } from './requestline/requestline-change/requestline-change.component';
import { RequestReviewComponent } from './request/request-review-list/request-review.component';
import { RequestReviewDetailComponent } from './request/request-review-detail/request-review-detail.component';

export function startupServiceFactory(appInit: AppInitService) : Function {
  return () => appInit.getSettings();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    HeadComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserChangeComponent,
    FootComponent,
    UserLoginComponent,
    BoolDisplayPipe,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorChangeComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductChangeComponent,
    RequestListComponent,
    RequestDetailComponent,
    RequestCreateComponent,
    RequestChangeComponent,
    RejectionPipe,
    RequestLineListComponent,
    RequestLineDetailComponent,
    RequestLineCreateComponent,
    RequestLineChangeComponent,
    RequestReviewComponent,
    RequestReviewDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AppInitService, {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
        deps: [AppInitService],
        multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
