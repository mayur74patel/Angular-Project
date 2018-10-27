import { Component, OnInit } from '@angular/core';
import {IssueService } from './../issue.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

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
    const email=target.querySelector('#email').value
    const dob=target.querySelector('#dob').value
    const phoneno=target.querySelector('#phoneno').value

    console.log(username,password)
    this.auth.usersignup({
      username: username,
      password: password,
      email:email,
      dob:dob,
      phoneno : phoneno
    }).subscribe(data => {
      this.msg = data['msg'];
      if(data['status']){
      console.log('hello');
      console.log(data);
        this.router.navigate(['/home']);
    }
    else{
      console.log(data);
      this.router.navigate(['/usersignup']);
    }
    });
}


}
