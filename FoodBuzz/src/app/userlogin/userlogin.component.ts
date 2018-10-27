import { Component, OnInit } from '@angular/core';
import {IssueService } from './../issue.service';
import {Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  msg: string;
  constructor(
    private auth: IssueService,
    private router: Router,
    private cookieService: CookieService
    ) { }



  ngOnInit() {
  }

  onSubmit(event) {
    event.preventDefault()
    const target=event.target
    const username=target.querySelector('#username').value
    const password=target.querySelector('#password').value
    console.log(username,password)
    this.auth.userlogin({
      username: username,
      password: password
    }).subscribe(data => {
      this.msg = data['msg'];
      if(data['status']){
        var t=data['user'];
    this.cookieService.set('tes', t[0]._id);
    this.cookieService.set('name', t[0].username);
    
    this.router.navigate(['orderlist']);
      }
      else{
        console.log("hello test123");
        this.router.navigate(['userlogin']);
      }
      console.log(data);
      
    console.log(this.cookieService.get('tes'));
    });
}
}
