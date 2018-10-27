import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {IssueService } from './../issue.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  private arrBirds;
  constructor(private issueService: IssueService,private router: Router,private cookieService: CookieService) { }
  public str:number;
  ngOnInit() {
    this.issueService.gettest().subscribe(data=>{
      this.arrBirds = data;
     // this.arrBirds=this.arrBirds.find(a => a['userid']==this.cookieService.get('tes'));
     console.log("hII");
    
this.str=0;
  for(let i=0;i<data['length'] ;i++){
    this.str=this.str+data[i]['item_price']*data[i]['item_count'];
  }
  if(this.str <=0)
  {
    this.router.navigate(['/menu']); 
  }

  });
}
Onsubmit()
   {
    this.cookieService.delete('name');
   
    this.router.navigate(['/home']);
    
   }
}
