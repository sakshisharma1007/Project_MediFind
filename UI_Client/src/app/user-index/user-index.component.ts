import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent {
  constructor(private router: Router){}
  signout(){
    this.router.navigate(['/login']);
  }
  navigateToDetails(){
    this.router.navigate(['/med'])
  }

}
