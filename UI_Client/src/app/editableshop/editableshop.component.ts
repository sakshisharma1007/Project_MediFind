import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup,Validators,} from '@angular/forms';



@Component({
  selector: 'app-editableshop',
  templateUrl: './editableshop.component.html',
  styleUrls: ['./editableshop.component.scss'],
})
export class EditableshopComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  addForm!: FormGroup;
  editForm!: FormGroup;
  shops: any[] = [];
  selectedShop: any;
  
  

  medicines: any[] = [];
  isModalOpen: boolean = false;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      ShopName: ['', Validators.required], // field with required validation
      OpeningTime: ['', Validators.required], // field with required validation
      ClosingTime: ['', Validators.required],
      //Location: ['', [Validators.required,Validators.pattern(/^[a-zA-Z ]*$/) ]],
      Location: ['', [Validators.required,Validators.pattern(/https:\/\/goo\.gl\/maps\/[a-zA-Z0-9]+/)]],
      MedicineName: ['', Validators.required],
      Price: ['', Validators.required],
    });
    
    this.fetchShops();
    //this.fetchMedicines();
    //this.add();
    this.editForm = this.formBuilder.group({
      MedicineName: ['', Validators.required],
      Price: ['', Validators.required],
    });
  }

  get ShopName() {
    return this.addForm.get('ShopName');
  }
  get OpeningTime() {
    return this.addForm.get('OpeningTime');
  }
  get ClosingTime() {
    return this.addForm.get('ClosingTime');
  }
  get Location() {
    return this.addForm.get('Location');
  }
  get MedicineName() {
    return this.addForm.get('MedicineName');
  }
  get Price() {
    return this.addForm.get('Price');
  }
  onEdit(shop: any) {
    this.selectedShop = shop;
    this.editForm.patchValue({
      MedicineName: shop.MedicineName,
      Price: shop.Price,
    });
  }
  editDetails() {
    const updateEndpoint = `http://localhost:5000/api/shops/${this.selectedShop._id}`;
    if(this.selectedShop){
      const updatePayload = {
        MedicineName: this.editForm.value.MedicineName,
        Price: this.editForm.value.Price,
      };
      this.http.put(updateEndpoint, updatePayload).subscribe(

        (response) => {
  
          console.log('Details updated successfully.');
          this.selectedShop.MedicineName = updatePayload.MedicineName;
          this.selectedShop.Price = updatePayload.Price;
          //this.fetchShops();
          this.editForm.reset();
          alert("Details updated successfully!")
  
        },
  
        (error) => {
           console.log('Error updating Shop:', error);
  
        }
  
      );

    }
    //const updateEndpoint = `http://localhost:5000/api/shops/${id}`;

    
    
  }

  fetchShops(): void {
    //added jwt  
    this.http
      .get<any[]>('http://localhost:5000/api/shops')
      .subscribe((shops: any[]) => {
        this.shops = shops;
      });
  }
  // fetchMedicines(): void {
  //   this.http
  //     .get<any[]>('http://localhost:5000/api/medicines')
  //     .subscribe((medicines: any[]) => {
  //       this.medicines = medicines;
  //     });
  // }

  openModal() {
    this.isModalOpen = true;
  }

  add() {
    if (this.addForm) {
      const medObj = {
        ShopName: this.addForm.value.ShopName,
        OpeningTime: this.addForm.value.OpeningTime,
        ClosingTime: this.addForm.value.ClosingTime,
        Location: this.addForm.value.Location,
        MedicineName: this.addForm.value.MedicineName,
        Price: this.addForm.value.Price,
      };
      this.http.post('http://localhost:5000/api/shops', medObj).subscribe(
        (response) => {
          console.log(response);
          this.addForm.reset();
          this.closeModal();
        },
        (error) => {
          console.log(error);
        }
      );
      
    }
  }
  // saveStore() {
  //   this.closeModal();
  // }
  closeModal() {
    this.isModalOpen = false;
  }
  click() {
    console.log('Button clicked!');
    this.add();

  }

  // Getter for easier access in the template
  get locationControl() {
    return this.addForm.get('Location');
  }
  deleteItem(id:string) {
    console.log("delete button clicked!")
    this.http.delete(`http://localhost:5000/api/delete/${id}`)
    .subscribe(
       () => {
        console.log('shop deleted successfully');
        alert('shop deleted successfully');
         // Refresh the data after deleting
        this.fetchShops();
        },
        (error) => {
        console.log('Error deleting item:', error);
       }
    );
  }

}
