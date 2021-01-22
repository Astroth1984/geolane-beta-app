import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categorie-edit',
  templateUrl: './categorie-edit.component.html',
  styleUrls: ['./categorie-edit.component.scss']
})
export class CategorieEditComponent implements OnInit {

  categorieForm: FormGroup;
  id:number=null;
  login:string='';
  code:number=null;
  title:string='';
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getCategorie(this.route.snapshot.params['id']);
    this.categorieForm = this.formBuilder.group({
      'id' : [null, Validators.required],
      'login' : [null, Validators.required],
      'code' : [null, Validators.required],
      'title' : [null, Validators.required],
    });
  }

  getCategorie(id:number) {
    this.api.getCategorie(id).subscribe(data => {
      this.id = data.id;
      this.categorieForm.setValue({
        id: data.id,
        login: data.login,
        code: data.code,
        title: data.title
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateCategorie(this.id, form)
      .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/categorie-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  categorieDetails() {
    this.router.navigate(['/categorie-details', this.id]);
  }

}
