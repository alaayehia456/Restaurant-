import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryServiceService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  cate:Category[]=[]

  constructor(private catego:CategoryServiceService) { }

  ngOnInit(): void {
    this.getcat();
  }

  getcat(){
    this.catego.getcategor().subscribe(
      data =>{
        this.cate=data
      }
    )
  }

}
