import { Component } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl,ValidatorFn, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signForm: FormGroup;

  constructor(private router: Router,private formBuilder: FormBuilder, private http: HttpClient ) {
    this.signForm = this.formBuilder.group({
      usname: ['', Validators.required],
      psw: ['', [Validators.required,this.passwordLengthValidator]]
    })
 
  }
  passwordLengthValidator(control: { value: any; }) {
    const password = control.value;
    if (password && password.length !== 8) {
      return { invalidPasswordLength: true };
    }
    return null;
  }
  get usname(){
    return this.signForm.get('usname');
  }
  get psw(){
    return this.signForm.get('psw');
  }

 
  sign(){
    if(this.signForm && this.signForm.valid){

      console.log('Username:', this.usname);
      console.log('Password:', this.psw);

      const data ={
        usname:this.signForm.value.usname,
        psw:this.signForm.value.psw,
      };
      this.http.post("http://localhost:5000/api/signup",
          data
      ).subscribe(
       
        (response) => {

            console.log(response);
            this.signForm.reset();
            this.goLogin();
          },
          (error) => {
            console.log(error);
          }

         
        );
    } else {
      console.log('Invalid form');
    }

    
  }
  goLogin() {
    this.router.navigate(['/login']);
  }
  cancelSignUp() {
    this.signForm.reset();
  
  }
}

  
  
 
  


