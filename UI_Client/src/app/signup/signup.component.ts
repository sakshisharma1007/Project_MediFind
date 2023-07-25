import { Component } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl,ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';
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
      psw: ['', Validators.required],
      repeatPsw: ['', Validators.required], // Add the repeat password FormControl
    },{ 
      validators: this.passwordMatchValidator 
    });
  }
  private passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('psw')?.value;
    const repeatPassword = control.get('repeatPsw')?.value;

    if (password !== repeatPassword) {
      control.get('repeatPsw')?.setErrors({ mismatch: true });
      return { mismatch: true };
    } else {
      control.get('repeatPsw')?.setErrors(null);
      return null;
    }
  };

  get usname(){
    return this.signForm.get('usname');
  }
  get psw(){
    return this.signForm.get('psw');
  }
  get repeatPsw(){
    return this.signForm.get('repeatPsw');
  }
 
  sign(){
    if(this.signForm && this.signForm.valid){

      console.log('Username:', this.usname);
      console.log('Password:', this.psw);
      console.log('reapeat pass:', this.repeatPsw);

      const data ={
        usname:this.signForm.value.usname,
        psw:this.signForm.value.psw,
        repeatPsw:this.signForm.value.repeatPsw
      };
      this.http.post("http://localhost:5000/api/signup/",
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

  
  
 
  


