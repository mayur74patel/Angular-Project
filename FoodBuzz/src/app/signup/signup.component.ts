import { Component, OnInit } from '@angular/core';
import {IssueService } from './../issue.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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
      
    console.log(username,password)
    this.auth.postuser({
      username: username,
      password: password,
      email:email,
      dob:dob
    }).subscribe(data => {
      this.msg = data['msg'];
      if(data['status']){
      console.log('hello');
      console.log(data);
        this.router.navigate(['/add_restaurant']);
    }
    else{
      console.log(data);
      this.router.navigate(['/signup']);
    }
    });
}

}
