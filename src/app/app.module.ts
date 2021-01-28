import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ItemsComponent } from './items/items.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { UsersComponent } from './users/users.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { AgePipe } from './age.pipe';
import { GenrePipe } from './genre.pipe';
import { RegistrationComponent } from './registration/registration.component';
import { QualityPipe } from './quality.pipe';
import { DescriptionPipe } from './description.pipe';
import { LoginComponent } from './login/login.component';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { QueryComponent } from './query/query.component';
import { ReadingclubComponent } from './readingclub/readingclub.component';
import { MasterclassComponent } from './masterclass/masterclass.component';
import { OrderReviewComponent } from './order-review/order-review.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AdminComponent } from './admin/admin.component';
import { BookAdminComponent } from './book-admin/book-admin.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ItemAdminComponent } from './item-admin/item-admin.component';
import { ClubAdminComponent } from './club-admin/club-admin.component';
import { ClassAdminComponent } from './class-admin/class-admin.component';
import { ClubGenrePipe } from './club-genre.pipe';
import { ClassTypePipe } from './class-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ItemsComponent,
    ProductsComponent,
    UsersComponent,
    BooksComponent,
    HomeComponent,
    AgePipe,
    GenrePipe,
    RegistrationComponent,
    QualityPipe,
    DescriptionPipe,
    LoginComponent,
    CatalogsComponent,
    QueryComponent,
    ReadingclubComponent,
    MasterclassComponent,
    OrderReviewComponent,
    AdminComponent,
    BookAdminComponent,
    ProductAdminComponent,
    ItemAdminComponent,
    ClubAdminComponent,
    ClassAdminComponent,
    ClubGenrePipe,
    ClassTypePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
