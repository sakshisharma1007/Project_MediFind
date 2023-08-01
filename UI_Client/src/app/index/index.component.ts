import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  constructor(private router: Router){}
  //loggedIn: true = true;
  navigateToShop(): void {
 
      this.router.navigate(['/login']);
    }
    
  }




