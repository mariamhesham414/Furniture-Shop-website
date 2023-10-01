import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MainComponent } from './component/main/main.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductsComponent } from './component/products/products.component';
import { SidemenuComponent } from './component/sidemenu/sidemenu.component';
import { ProductsListComponent } from './component/products-list/products-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalcDiscountPipe } from './Pipes/calc-discount.pipe';
import { ProductCardDirective } from './Directives/product-card.directive';

import { CreditCardPipe } from './Pipes/credit-card.pipe';
import { ProductsParentComponent } from './component/products-parent/products-parent.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { NotFoundPageComponent } from './component/not-found-page/not-found-page.component';
import { ProductParentComponent } from './component/product-parent/product-parent.component';
import { CounterPipe } from './Pipes/counter.pipe';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductListDetailsComponent } from './component/product-list-details/product-list-details.component';
import { GroupOfRoutesComponent } from './component/group-of-routes/group-of-routes.component';
import { ImgStyleDirective } from './Directives/img-style.directive';
import { HttpClientModule } from '@angular/common/http';
import { UserTemplateUserComponent } from './component/user/user-template-user/user-template-user.component';
import { AdminComponent } from './component/Admin/admin/admin.component';
import { NewproductComponent } from './component/Admin/newproduct/newproduct.component';
import { UserReactiveFormComponent } from './component/user/user-reactive-form/user-reactive-form.component';
import { NewproductReactiveComponent } from './component/Admin/newproduct-reactive/newproduct-reactive.component';
import { UserAuthComponent } from './component/user-auth/user-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    ProductsComponent,
    ImgStyleDirective,
    SidemenuComponent,
    ProductsListComponent,
    CalcDiscountPipe,
    ProductCardDirective,
    CreditCardPipe,
    ProductsParentComponent,
    AboutUsComponent,
    NotFoundPageComponent,
    ProductParentComponent,
    CounterPipe,
    ProductDetailsComponent,
    ProductListDetailsComponent,
    GroupOfRoutesComponent,
    UserTemplateUserComponent,
    AdminComponent,
    NewproductComponent,
    UserReactiveFormComponent,
    NewproductReactiveComponent,
    UserAuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
