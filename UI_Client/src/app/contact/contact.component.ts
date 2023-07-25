import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup ;
  selectedFile: string | null = null;
  picture: any;
  constructor(private formBuilder: FormBuilder,private http: HttpClient){
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required], // field with required validation
      email: ['', [Validators.required, Validators.email]], // field with required validation
      message: ['', Validators.required],
      picture: ['']
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

  get isProfilePictureInvalid(): boolean {
    const control = this.contactForm.get('picture');
    return control ? (control.invalid && (control.dirty || control.touched) && control.errors?.['invalidFileType']) || false : false;
  }
  contact(){
    if (this.contactForm && this.contactForm.valid) {
      
      console.log('name:', this.name);
      console.log('email:', this.email);
      console.log('message:', this.message);
      console.log('picture:', this.picture);

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

          },
          (error) => {

            console.log(error);
  
          }

         
        );
    } else {
      console.log('Invalid form');
    }



  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  
    if (file && allowedFileTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Read the file as a Data URL
  
      reader.onload = () => {
        // When the file is loaded, the result will be a Base64-encoded string
        const base64Image = reader.result as string;
        this.selectedFile = base64Image; // Set the selectedFile as the Base64 image
        
        
      };
    } else {
      // File type is not supported
      this.selectedFile = null;
      this.contactForm.patchValue({ picture: '' }); // Reset the file input in the form
      this.contactForm.get('picture')?.setErrors({ invalidFileType: true });
    }
  }
}
