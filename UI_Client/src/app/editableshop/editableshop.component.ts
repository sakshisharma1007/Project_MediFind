import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

interface Shop {
  _id: string;
  ShopName: string;
  OpeningTime: string;
  ClosingTime: string;
  Location: string;
}

@Component({
  selector: 'app-editableshop',
  templateUrl: './editableshop.component.html',
  styleUrls: ['./editableshop.component.scss']
})
export class EditableshopComponent implements OnInit{
  faEdit = faEdit;
  faTrash = faTrash;
  shops: Shop[] = [];
  isModalOpen: boolean = false;
  constructor(private http: HttpClient){}
  ngOnInit() {
    // Fetch the data from the MongoDB collection
    this.http
      .get<Shop[]>('/editableshop') // Replace with your Node.js server URL
      .subscribe(
        (data) => {
          this.shops = data;
        },
        (error) => {
          console.error('Error fetching shops:', error);
        }
      );
  }
  openModal() {
    this.isModalOpen = true;
 
  }
  saveStore() {
    // Add your logic to save the store data here

    this.closeModal();
  }
  closeModal() {
    this.isModalOpen = false;
 
  }
  


}
