import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName','lastName','mail','profil','function'];
  data: Customer[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.api.getCustomers().subscribe(res => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });    
     
  }
  

}
