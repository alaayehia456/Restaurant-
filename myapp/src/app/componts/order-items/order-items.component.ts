import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

   orders:Order[]=[];
  constructor(private order:OrderServiceService,
              private route:ActivatedRoute,
              
    ) { }



  ngOnInit(): void {
   this.route.paramMap.subscribe(
     () =>{
       this.finisgOrder();
     }
   )
   
  }
  finisgOrder(){
    let resulat=this.route.snapshot.paramMap.has('id');
    let we=this.route.snapshot.paramMap.has('name');
    if(resulat){
      this.getorderCategory();
    }else if(we){
      this.getSearch();
    }
    else{
      this.getorder();
    }
  }

  getorder(){
    this.order.getOrder().subscribe(
      we =>{
        this.orders= we;
      }
    );
  }


getorderCategory(){
  let wow=this.route.snapshot.paramMap.get('id');

  this.order.getOrderByCategoryId(wow).subscribe(
    data =>{
      this.orders=data
    }
  )
}
getSearch(){
   
    let we=this.route.snapshot.paramMap.get('name');
    
    this.order.getSearchOrder(we).subscribe(
      data =>{
        this.orders=data
      }
    )
  }

 

}
