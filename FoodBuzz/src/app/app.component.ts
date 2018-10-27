import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodBuzz';  
constructor( private cookieService: CookieService,
  private router: Router
  ){}
  
  val=this.cookieService.get('name');
   
}
