import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryServiceService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-catgory',
  templateUrl: './catgory.component.html',
  styleUrls: ['./catgory.component.css']
})
export class CatgoryComponent implements OnInit {

   cate:Category[] = [];
  constructor(private category:CategoryServiceService) { }

  ngOnInit(): void {
    this.getcategory();
  }


  getcategory(){

    this.category.getcategor().subscribe(
      data =>{
          this.cate=data;
      }
    )

  }

}
