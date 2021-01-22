import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from '../product';
import { SharedService} from '../shared.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['prod_name', 'prod_price','prod_priceHT','sieze'];
  data: Product[] = [];
  fakeData : Product[] = [];
  isLoadingResults = true;
  listedProducts = [];
  listedPrices = [];

  constructor(private api: ApiService, private sharedService : SharedService) { }

  ngOnInit(): void {

    this.api.getProducts().subscribe(res => {
      
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
 
    console.log(this.listedPrices);
    console.log(this.listedProducts);    
     
  }
    

}
