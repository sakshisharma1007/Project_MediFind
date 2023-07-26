import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-med-details',
  templateUrl: './med-details.component.html',
  styleUrls: ['./med-details.component.scss']
})
export class MedDetailsComponent implements OnInit{
  medicines: any[] =[];
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.fetchMedicines();
  }
  fetchMedicines(): void {
    this.http.get<any[]>('http://localhost:5000/api/medicines')
      .subscribe((medicines: any[]) => {
        
        this.medicines = medicines;
      });
  }
}
