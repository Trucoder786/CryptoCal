import { Component, OnInit } from '@angular/core';
import { StServiceService } from '../stockService/st-service.service';
import { Observable } from 'rxjs';
import { Stock, StockData } from '../models/weather.models';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})

export class StockComponent implements OnInit {
  stData?:StockData
  searching:boolean = false;
  submit(value:any){
    this.searching = true;

  }
   
  constructor(private services:StServiceService){
    this.services.apple().subscribe({
      next:(response)=>{
        this.stData = response;
        console.log(response);
      }
    })
  }
  ngOnInit(): void {
    
    throw new Error('Method not implemented.');
  }

}
