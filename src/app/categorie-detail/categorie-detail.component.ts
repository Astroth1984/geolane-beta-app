import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Categorie } from '../categorie';

@Component({
  selector: 'app-categorie-detail',
  templateUrl: './categorie-detail.component.html',
  styleUrls: ['./categorie-detail.component.scss']
})
export class CategorieDetailComponent implements OnInit {

  categorie: Categorie = { id: null, 
                           updated_at: null,
                           login: '', 
                           code: null, 
                           title:''
                         };
isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getCategorieDetails(this.route.snapshot.params['id']);
  }

  getCategorieDetails(id) {
    this.api.getCategorie(id)
      .subscribe(data => {
        this.categorie = data;
        console.log(this.categorie);
        this.isLoadingResults = false;
      });
  }
  deleteCategorie(id) {
    this.isLoadingResults = true;
    this.api.deleteCategorie(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/categories']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }


}
