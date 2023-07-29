import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  shareData:any[]=[];
  itemId:string="";

  constructor() { }
}
