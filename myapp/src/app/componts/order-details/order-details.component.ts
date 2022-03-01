import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {


  orders:Order | null=null;

    
  constructor(private rote:ActivatedRoute,private order:OrderServiceService,private route:Router) { }

  ngOnInit(): void {
    this.getOrderBy();
  }

  

  getOrderBy(){
    let id=this.rote.snapshot.paramMap.get('key');

    this.order.getElemntById(id).subscribe(
      data=>{
        this.orders=data;
      }
    )
  
  }
  


}
