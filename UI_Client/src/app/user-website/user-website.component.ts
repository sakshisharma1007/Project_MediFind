import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-website',
  templateUrl: './user-website.component.html',
  styleUrls: ['./user-website.component.scss']
})
export class UserWebsiteComponent {
  constructor(private router: Router) {}
  logout(): void {
    // Redirect to the login page
    this.router.navigate(['/login']);
  }


}
