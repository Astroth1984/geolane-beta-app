import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup;
  prod_name:string='';
  prod_desc:string='';
  prod_price:number=null;
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.productForm = this.formBuilder.group({
      'prod_name' : [null, Validators.required],
      'prod_desc' : [null, Validators.required],
      'prod_price' : [null, Validators.required],
      'prod_priceHT' : [null, Validators.required],
      'sieze' : [null, Validators.required]
    });
  }
  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.addProduct(form)
      .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/product-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
