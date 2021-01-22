import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Product } from '../product';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  productForm: FormGroup;
  id:number=null;
  prod_name:string='';
  prod_desc:string='';
  prod_price:number=null;
  isLoadingResults = false;


  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.getProduct(this.route.snapshot.params['id']);
    this.productForm = this.formBuilder.group({
      'prod_name' : [null, Validators.required],
      'prod_desc' : [null, Validators.required],
      'prod_price' : [null, Validators.required],
      'prod_priceHT' : [null, Validators.required],
      'sieze' : [null, Validators.required]
    });
    
  }

  getProduct(id:number) {
    this.api.getProduct(id).subscribe(data => {
      this.id = data.id;
      this.productForm.setValue({
        prod_name: data.prod_name,
        prod_desc: data.prod_desc,
        prod_price: data.prod_price,
        prod_priceHT: data.prod_priceHT,
        sieze: data.sieze
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateProduct(this.id, form)
      .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/product-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  productDetails() {
    this.router.navigate(['/product-details', this.id]);
  }

  

}
