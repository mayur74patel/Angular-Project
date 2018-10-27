import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import {IssueService } from './../issue.service';
import { CookieService } from 'ngx-cookie-service';
import {MyItems} from './../my-items';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {
  id: Array<MyItems>;
  public counter : number;
  private arrBirds;
  cookieValue = 'UNKNOWN';
  constructor(private issueService: IssueService,private cookieService: CookieService,private router: Router) { 
    this.counter=0;
    this.id = [];
  }
 
  ngOnInit() {
    
    console.log('from order list');
    this.issueService.getIssues().subscribe(data=>{
      this.arrBirds = data;
      console.log(data);
      
    });
  }

public select():void{
  console.log(this.id);
  this.router.navigate(['add_restaurant']);

}

public selected(index: number):void{ 
  window.location.reload();
  this.issueService.deleteMenu({
    res_name: this.arrBirds[index].res_name,
    res_address: this.arrBirds[index].res_address,
    res_mobile_no:this.arrBirds[index].res_mobile_no,
   
      item_id:this.arrBirds[index].item_id,item_img:this.arrBirds[index].item_image,item_name: this.arrBirds[index].item_name,item_price:this.arrBirds[index].item_price,item_category:this.arrBirds[index].item_category,item_count:this.arrBirds[index].item_count,
    
  }).subscribe(data => {
  if(data['status']){
  console.log('hello');
  console.log(data);
    }

});
}
}
