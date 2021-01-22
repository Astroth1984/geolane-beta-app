import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  customerForm: FormGroup;
  id: number = null;
  firstName:string='';
  lastName:string='';
  mail: string='';
  profil:number = null;
  function: string = '';
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.customerForm = this.formBuilder.group({
      'id' : [null, Validators.required],
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'mail' : [null, Validators.required],
      'profil' : [null, Validators.required],
      'function' : [null, Validators.required]
    });
  }
  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.addCustomer(form)
      .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/customer-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
