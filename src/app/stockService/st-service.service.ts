import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockData } from '../models/weather.models';

@Injectable({
  providedIn: 'root'
})
export class StServiceService {

  constructor(private http:HttpClient) {  }
  apple():Observable<StockData>{
    return this.http.get<StockData>('https://real-time-finance-data.p.rapidapi.com/search?query=Apple&language=en',{
      headers: new HttpHeaders()
      .set('X-RapidAPI-Key','Enter your Api Key')
      .set('X-RapidAPI-Host','Enter your Host Key')
    })
  }
}
