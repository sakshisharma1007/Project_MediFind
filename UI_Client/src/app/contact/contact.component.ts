import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup ;
  selectedFile: string | ArrayBuffer | null = null;
  t = '';
  //isProfilePictureInvalid: boolean = false;
  
  constructor(private formBuilder: FormBuilder,private http: HttpClient){
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required], // field with required validation
      email: ['', [Validators.required, Validators.email]], // field with required validation
      message: ['', Validators.required],
      picture: ['',Validators.required]
    });
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }
  // get picture() {
  //    return this.contactForm.get('picture');
  // }

  //  get isProfilePictureInvalid(): boolean {
  //   const control = this.contactForm.get('picture');
  //    return control ? (control.invalid && (control.dirty || control.touched) && control.errors?.['invalidFileType']) || false : false;
  //  }
  contact(){
    if (this.contactForm && this.contactForm.valid) {
      
      // console.log('name:', this.name);
      // console.log('email:', this.email);
      // console.log('message:', this.message);
      // console.log('picture:', this.selectedFile);
     //console.log('picture:',this.picture)
      const dataObj ={
        name:this.contactForm.value.name,
        email:this.contactForm.value.email,
        message:this.contactForm.value.message,
        picture:this.selectedFile
      };
      this.http.post("http://localhost:5000/api/contact/",
          dataObj
      ).subscribe(
       
        (response) => {

            console.log(response);
            this.contactForm.reset();
            this.selectedFile = null;

          },
          (error) => {

            console.log(error);
  
          }

         
        );
    } else {
      console.log('Invalid form');
    }



  }
  onFileUpload(event: any) {
    const file = event.target.files[0];

    const allowedExtensions = ['.jpg', '.jpeg', '.png'];

    const fileExtension = file.name
      .substring(file.name.lastIndexOf('.'))
      .toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      // for file extension
      this.t =
        'Invalid file extension. Please select a .jpg, .jpeg, or .png file.';
      this.selectedFile = '';
      return;
    } else {
      this.t = '';
      const reader = new FileReader();
      reader.onloadend = () => {
        this.selectedFile = reader.result;
        console.log('The image string is:', this.selectedFile);
      };
      reader.readAsDataURL(file);
    }

  
  }

}
