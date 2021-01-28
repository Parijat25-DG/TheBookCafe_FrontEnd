import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from '../app/books/books.component';
import { AdminComponent } from './admin/admin.component';
import { BookAdminComponent } from './book-admin/book-admin.component';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { ClassAdminComponent } from './class-admin/class-admin.component';
import { ClubAdminComponent } from './club-admin/club-admin.component';
import { HomeComponent } from './home/home.component';
import { ItemAdminComponent } from './item-admin/item-admin.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { MasterclassComponent } from './masterclass/masterclass.component';
import { OrderReviewComponent } from './order-review/order-review.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductsComponent } from './products/products.component';
import { QueryComponent } from './query/query.component';
import { ReadingclubComponent } from './readingclub/readingclub.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', redirectTo:'/Home', pathMatch:'full'},
  {path:'Books', component: BooksComponent},
  {path:'Products', component: ProductsComponent},
  {path:'Items', component: ItemsComponent},
  {path:'Users', component:UsersComponent},
  {path:'Home', component:HomeComponent},
  {path:'Register', component:RegistrationComponent},
  {path:'Login', component:LoginComponent},
  {path:'Catalog', component:CatalogsComponent},
  {path:'Query', component:QueryComponent},
  {path:'ReadingClub', component:ReadingclubComponent},
  {path:'MasterClass', component:MasterclassComponent},
  {path:'OrderReview', component:OrderReviewComponent},
  {path:'Admin', component:AdminComponent},
  {path:'BookAdmin', component:BookAdminComponent},
  {path:'ProductAdmin', component:ProductAdminComponent},
  {path:'ItemAdmin', component:ItemAdminComponent},
  {path:'ClubAdmin', component:ClubAdminComponent},
  {path:'ClassAdmin', component:ClassAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
