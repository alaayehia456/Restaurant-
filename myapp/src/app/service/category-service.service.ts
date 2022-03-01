import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private getCategory='http://localhost:8070/allCategory';
  constructor(private http: HttpClient) { }


  
  getcategor():Observable<Category[]>{
    return this.http.get<Category[]>(this.getCategory).pipe(
      map(response => response))
  
  
    }


}
