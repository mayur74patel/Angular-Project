import { Component, OnInit } from '@angular/core';
import {IssueService } from './../issue.service';

import {Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  
  msg: string;
  constructor(
    private auth: IssueService,
    private router: Router
    ) { }


  ngOnInit() {
   
  }

  onSubmit(event) {
    event.preventDefault()
    const target=event.target
    const username=target.querySelector('#username').value
    const password=target.querySelector('#password').value
    console.log(username,password)
    this.auth.authenticate({
      username: username,
      password: password
    }).subscribe(data => {
      this.msg = data['msg'];
      if(data['status']){
      console.log(data[status]);
      this.router.navigate(['add_restaurant']);
      }
      else{
        console.log("hello test123");
        this.router.navigate(['login']);
      }
      console.log(data);
    });
}
}
