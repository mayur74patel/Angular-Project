import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {IssueService} from './issue.service';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import {Routes,RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { BookingComponent } from './booking/booking.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminUploadRestaurantComponent } from './admin-upload-restaurant/admin-upload-restaurant.component';
import { SignupComponent } from './signup/signup.component' ;
import { CookieService } from 'ngx-cookie-service';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
const routes : Routes = [ 
  { path: 'home', component: HomeComponent}, 
  { path: 'menu', component: MenuComponent},
  { path: 'adminmenu', component: AdminMenuComponent},
  { path: 'orderlist', component: OrderListComponent},
  { path: 'login', component: AdminLoginComponent},
  { path: 'add_restaurant', component: AdminUploadRestaurantComponent},
  { path: 'booking', component: BookingComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'userlogin', component: UserloginComponent},
  { path: 'usersignup', component: UsersignupComponent},
  { path: '', component: HomeComponent} 
] 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    OrderListComponent,
    BookingComponent,
    AdminLoginComponent,
    AdminUploadRestaurantComponent,
    SignupComponent,
    UserloginComponent,
    UsersignupComponent,
    AdminMenuComponent
  ],
  imports: [

      HttpClientModule, BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [IssueService,CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
