import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { ProductsListComponent } from './component/products-list/products-list.component';
import { ProductsParentComponent } from './component/products-parent/products-parent.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { NotFoundPageComponent } from './component/not-found-page/not-found-page.component';
import { ProductParentComponent } from './component/product-parent/product-parent.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductListDetailsComponent } from './component/product-list-details/product-list-details.component';
import { GroupOfRoutesComponent } from './component/group-of-routes/group-of-routes.component';
import { UserTemplateUserComponent } from './component/user/user-template-user/user-template-user.component';
import { AdminComponent } from './component/Admin/admin/admin.component';
import { NewproductComponent } from './component/Admin/newproduct/newproduct.component';
import { UserReactiveFormComponent } from './component/user/user-reactive-form/user-reactive-form.component';
import { NewproductReactiveComponent } from './component/Admin/newproduct-reactive/newproduct-reactive.component';
import { UserAuthComponent } from './component/user-auth/user-auth.component';
import { userGuard } from './Guards/user.guard';
// basics of routes

// first match wins => order matters
const routes: Routes = [
  { path: '', component: MainComponent }, // default path
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // default path
  {
    path: 'home',
    component: MainComponent,
    title: 'Home Page',
  },
  {
    path: 'products',
    component: ProductsListComponent,
    title: 'Products Page',
    canActivate: [userGuard],
  },
  {
    path: 'prdDetails/:pId',
    component: ProductDetailsComponent,
    title: 'Products Details',
  },
  {
    path: 'prdListDetails/:pId',
    component: ProductListDetailsComponent,
    title: 'Product List Details',
  },
  {
    path: 'productsParent',
    component: ProductsParentComponent,
    title: 'Products Parent Page',
  },
  {
    path: 'productParent',
    component: ProductParentComponent,
    title: 'Product Parent Page',
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent,
    title: 'About Us Page',
  },
  {
    path: 'userTemplate',
    component: UserTemplateUserComponent,
    title: 'User Template page',
  },
  {
    path: 'admin',
    component: AdminComponent,
    title: 'Admin page',
  },
  {
    path: 'newProduct',
    component: NewproductComponent,
    title: 'New Product page',
  },
  {
    path: 'userReactive',
    component: UserReactiveFormComponent,
    title: 'User Reactive page',
  },
  {
    path: 'newProductReactive',
    component: NewproductReactiveComponent,
    title: 'New Product page',
  },
  {
    path: 'login',
    component: UserAuthComponent,
    title: 'User Login page',
  },
  {
    path: 'logout',
    component: UserAuthComponent,
    title: 'User Logout page',
  },
  {
    path: 'order',
    loadChildren: () =>
      import('src/app/component/orders/orders.module').then(
        (m) => m.OrdersModule
      ),
  },
  // second case

  //   {
  //     path: 'main',
  //     component: GroupOfRoutesComponent,
  //     children: [
  //       { path: '', redirectTo: '/home', pathMatch: 'full' }, // default path
  //       {
  //         path: 'home',
  //         component: MainComponent,
  //         title: 'Home Page',
  //       },
  //       {
  //         path: 'products',
  //         component: ProductsListComponent,
  //         title: 'Products Page',
  //       },
  //       {
  //         path: 'prdDetails/:pId',
  //         component: ProductDetailsComponent,
  //         title: 'Products Details',
  //       },
  //       {
  //         path: 'prdListDetails/:pId',
  //         component: ProductListDetailsComponent,
  //         title: 'Product List Details',
  //       },
  //       {
  //         path: 'productsParent',
  //         component: ProductsParentComponent,
  //         title: 'Products Parent Page',
  //       },
  //       {
  //         path: 'productParent',
  //         component: ProductParentComponent,
  //         title: 'Product Parent Page',
  //       },
  //       {
  //         path: 'aboutUs',
  //         component: AboutUsComponent,
  //         title: 'About Us Page',
  //       },
  //     ],
  //   },
  { path: '**', component: NotFoundPageComponent, title: 'Not Found Page' }, // wild card path => not found page  // ** => means path doesn't exist
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
