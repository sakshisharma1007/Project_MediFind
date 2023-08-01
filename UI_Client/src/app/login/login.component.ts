import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  
 
  
  constructor(private router: Router,private formBuilder: FormBuilder,private http: HttpClient){
        // Initialize the form group and form controls
        this.loginForm = this.formBuilder.group({
          usname: ['', Validators.required], // Username field with required validation
          psw: ['', Validators.required],   // Password field with required validation
        });
  }

  login() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('usname')?.value;
      const password = this.loginForm.get('psw')?.value;
     
  
      console.log('Username:', username);
      console.log('Password:', password);

      

    const data = {
      usname: this.loginForm.value.usname,
      psw: this.loginForm.value.psw,
    };
    this.http.post<any>('http://localhost:5000/api/login', data).subscribe(
      (response) => {
        if (response.success) {
        
          // Redirect to the home page after successful login
          this.router.navigate(['/userIndex/index']);
        } else {
          // Handle login failure, show error message, etc.
          console.log(response.msg);
        }
      },
      (error) => {
        console.log(error);
      
      }
    );
  } else {
    console.log('Invalid form');
  }
}




}
  



  


