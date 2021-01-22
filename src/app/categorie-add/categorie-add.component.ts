import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-categorie-add',
  templateUrl: './categorie-add.component.html',
  styleUrls: ['./categorie-add.component.scss']
})
export class CategorieAddComponent implements OnInit {

  categorieForm: FormGroup;
  id: number = null;
  login:string='';
  code:string='';
  title: string='';
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.categorieForm = this.formBuilder.group({
      'id' : [null, Validators.required],
      'login' : [null, Validators.required],
      'code' : [null, Validators.required],
      'title' : [null, Validators.required]
    });

  }
  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.addCategorie(form)
      .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/categorie-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
