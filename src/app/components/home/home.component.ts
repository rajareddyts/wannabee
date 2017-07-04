import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})

export class HomeComponent {
 
  onToTop(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}
