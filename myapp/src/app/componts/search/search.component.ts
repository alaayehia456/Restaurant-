import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  constructor(
    private route:Router
    ) { }

  ngOnInit(): void {
    
  }


  getSearch(name: string | null){
    
    this.route.navigateByUrl('/orders/' + name);
   
  }
}
