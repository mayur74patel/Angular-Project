import {Component, OnInit } from '@angular/core';    
    
export class MyItems {    
                    res_address: String;
                    res_name: String;
                    res_mobile_no: String;
                    item_name: String;
                    item_category: String;
                    item_price: Number;
                    item_id: Number;
                    item_img: String;
                    item_count:Number;    
                    constructor(item_category,item_count,item_id,item_img,item_name,item_price,res_address,res_mobile_no,res_name){
                        this.res_name=res_name;
                        this.res_address=res_address;
                        this.res_mobile_no=res_mobile_no;
                        this.item_name;item_name;
                        this.item_category=item_category;
                        this.item_price=item_price;
                        this.item_id=item_id;
                        this.item_img=item_img;
                        this.item_count=item_count;
                    }
}    