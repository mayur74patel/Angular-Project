import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User{
  username:string;
  password:string;
}

interface User3{
  username:string;
  password:string;
}
interface User1{
  username:string;
  password:string;
  email:string;
  dob:string;  
}
interface User4{
  username:string;
  password:string;
  email:string;
  dob:string;
  phoneno:string; 
}
interface User2{
  res_name:string;
  res_address:string;
  res_mobile_no:string;
  
      item_id:Number,
      item_name:String,
      item_price:Number,
      item_category:String,
      item_img:String,
      item_count:Number
  }
interface User5{
  user_id:string;
  res_name:string;
  res_address:string;
  res_mobile_no:string;
  
      item_id:Number,
      item_name:String,
      item_price:Number,
      item_category:String,
      item_img:String,
      item_count:Number
  

}

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get('http://localhost:4000/menu_list', {responseType: 'json'});
  }
  gettest() {
    return this.http.get('http://localhost:4000/test_list', {responseType: 'json'});
  }
authenticate(user:User){
  return this.http.post('http://localhost:4000/login',user, {responseType: 'json'});
}

userlogin(user:User3){
  return this.http.post('http://localhost:4000/userlogin',user, {responseType: 'json'});
}
postuser(user:User1){
  return this.http.post('http://localhost:4000/postuser',user, {responseType: 'json'});
}

usersignup(user:User4){
  return this.http.post('http://localhost:4000/usersignup',user, {responseType: 'json'});
}

addmenu(user:User2){
  console.log(user);
  return this.http.post('http://localhost:4000/menuadd',user, {responseType: 'json'});
}
addtest(user:User5){
  return this.http.post('http://localhost:4000/testadd',user, {responseType: 'json'});
}

  getIssueById() {
    return this.http.get('http://localhost:4000/issue/${id}', { responseType: 'json'});
  }

  addIssue(title, responsible, description, severity) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity
    };
    return this.http.post('${this.uri}/issue/add', issue);
  }

  updateIssue(id, title, responsible, description, severity, status) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    };
    return this.http.post('${this.uri}/issue/update/${id}', issue);
  }

  deleteIssues(user : User2) {
    console.log("hello");
    return this.http.post('http://localhost:4000/list/delete', user, {responseType: 'json'});
  }
   
  deleteMenu(user : User2) {
    console.log("hello");
    return this.http.post('http://localhost:4000/listed/delete', user, {responseType: 'json'});
  }
}
