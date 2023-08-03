import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

}
// private isAuthenticatedFlag = false;
// isAuthenticated(): boolean {
//   return this.isAuthenticatedFlag;
// }

// login(username: string, password: string): boolean {
//   
//  
//   if (username === 'usname from backend' && password === 'psw from backend') {
//     this.isAuthenticatedFlag = true;
//     return true;
//   } else {
//     return false;
//   }
// }

// logout(): void {
//   this.isAuthenticatedFlag = false;
// }
// }


//auth.guard.ts
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from './auth.service';
// export class AuthGuard implements CanActivate {

//   constructor(private authService: AuthService, private router: Router) { }

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//    
//     if (this.authService.isAuthenticated()) {
//       return true; // Allow access to the route
//     } else {
//   
//       this.router.navigate(['/login']);
//       return false; // Deny access to the route
//     }
//   }
// }