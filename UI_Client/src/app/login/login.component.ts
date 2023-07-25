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

  
 
  
  constructor(private router: Router,private formBuilder: FormBuilder){
        // Initialize the form group and form controls
        this.loginForm = this.formBuilder.group({
          uname: ['', Validators.required], // Username field with required validation
          psw: ['', Validators.required],   // Password field with required validation
          userType: ['', Validators.required] // User type field with required validation
        });
  }

  login() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('uname')?.value;
      const password = this.loginForm.get('psw')?.value;
      const userType = this.loginForm.get('userType')?.value;
  
      console.log('Username:', username);
      console.log('Password:', password);
      console.log('User Type:', userType);
  
      // Check if the login credentials match the expected values
      if (username === 'Sakshi' && password === '1234' && userType === 'user') {
        // Navigate to the 'user-website' component
        this.router.navigate(['/user-website']);
      } else {
        console.log('Invalid credentials!')
 
        // Handle incorrect login credentials
        // For example, show an error message
      
      }
    }
      
    }
  }



   




  


