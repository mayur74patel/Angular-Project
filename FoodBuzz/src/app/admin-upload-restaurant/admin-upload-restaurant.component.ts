import { Component, OnInit } from '@angular/core';
import {IssueService } from './../issue.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-upload-restaurant',
  templateUrl: './admin-upload-restaurant.component.html',
  styleUrls: ['./admin-upload-restaurant.component.css']
})
export class AdminUploadRestaurantComponent implements OnInit {

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
    const res_name=target.querySelector('#res_name').value
    const res_address=target.querySelector('#res_address').value
    const res_mobile_no=target.querySelector('#res_mobile_no').value
    const item_id=target.querySelector('#item_id').value
    const item_name=target.querySelector('#item_name').value
    const item_price=target.querySelector('#item_price').value
    const item_category=target.querySelector('#item_category').value
    const item_image=target.querySelector('#item_image').value
    const item_count=0
    console.log(item_image,res_address)
    this.auth.addmenu({
      res_name: res_name,
      res_address: res_address,
      res_mobile_no:res_mobile_no,
     
        item_id:item_id,item_img:item_image,item_name: item_name,item_price:item_price,item_category:item_category,item_count:item_count,
        
      
    }).subscribe(data => {
      this.msg = data['msg'];
      if(data['status']){
      console.log('hello');
      console.log(data);
        }
    });
}

}
