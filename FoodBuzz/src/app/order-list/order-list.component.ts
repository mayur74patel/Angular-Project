import { Component, OnInit } from '@angular/core';
import {IssueService } from './../issue.service';
import { CookieService } from 'ngx-cookie-service';
import {MyItems} from './../my-items';
import {Router} from '@angular/router';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  id: Array<MyItems>;
  
  public counter : number;
  private arrBirds;
  cookieValue = 'UNKNOWN';
  constructor(private issueService: IssueService,private cookieService: CookieService,private router: Router) { 
    this.counter=0;
    this.id = [];
  }
  ngOnInit() {
    this.cookieValue = this.cookieService.get('Test');
    console.log(this.cookieService.get('Test'));
    this.issueService.gettest().subscribe(data=>{
      this.arrBirds = data;
     // this.arrBirds=this.arrBirds.find(a => a['userid']==this.cookieService.get('tes'));
      console.log(data);
    });
 
  } 
  public sel:number;
  
public selected(index: number):void{
  
  window.location.reload();
  this.issueService.deleteIssues({
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

public redirect(){
  this.router.navigate(['booking']);
}
}
