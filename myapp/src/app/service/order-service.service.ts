import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Observable, observable } from 'rxjs';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category';
@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  private getallOrder='http://localhost:8070/';
  //private url='http://localhost:8070/allOrders?id=';
 

  constructor(private http: HttpClient) { }

getOrder():Observable<Order[]>{

  return this.http.get<Order[]>( `${this.getallOrder}allOrders`).pipe(
    map(
        response => response
    )

    
  )

}

getOrderByCategoryId(id: string | null):Observable<Order[]>{

  return this.http.get<Order[]>(`${this.getallOrder}category?id=`+id).pipe(
    map(
      res =>res    
    )
  )
}
getSearchOrder(name:string | null):Observable<Order[]>{
  return this.http.get<Order[]>(`${this.getallOrder}search?name=` + name).pipe(
    map(
      res =>res
    )
  )
}

getElemntById(key: string | null):Observable<Order>{
  return this.http.get<Order>(`${this.getallOrder}getorder?id=` + key ).pipe(
    map(
      res => res
    ) 

    
  )

}
}