import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  customerForm: FormGroup;
  id:number=null;
  firstName:string='';
  lastName:string='';
  mail:string='';
  profil:number=null;
  function:string='';
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getCustomer(this.route.snapshot.params['id']);
    this.customerForm = this.formBuilder.group({
      'id' : [null, Validators.required],
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'mail' : [null, Validators.required],
      'profil' : [null, Validators.required],
      'function' : [null, Validators.required],

    });
  }
  getCustomer(id:number) {
    this.api.getCustomer(id).subscribe(data => {
      this.id = data.id;
      this.customerForm.setValue({
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        mail: data.mail,
        profil: data.profil,
        function: data.function
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateCustomer(this.id, form)
      .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/customer-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  customerDetails() {
    this.router.navigate(['/customer-details', this.id]);
  }

}
