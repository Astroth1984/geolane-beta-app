import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Categorie } from '../categorie';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'updated_at','login','code','title'];
  data: Categorie[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.api.getCategories().subscribe(res => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });    
     
  }

}
