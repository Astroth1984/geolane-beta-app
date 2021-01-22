import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'geolane-beta-app';
  checked = false;
  Language: string ='';

  setValue (){
    this.checked = !this.checked;
    if(this.checked){
      this.Language = 'Français'  
   }else{
      this.Language = 'English'  
   }
  }
  
}
