import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptoApiService {

  constructor(private http:HttpClient) { }
  bitCoin(){
    return this.http.get('https://api.coingecko.com/api/v3/simple/price?ids=Bitcoin&vs_currencies=USD')
  }
  dogeCoin(){
    return this.http.get('https://api.coingecko.com/api/v3/simple/price?ids=Dogecoin&vs_currencies=USD')
  }
  etherium(){
    return this.http.get('https://api.coingecko.com/api/v3/simple/price?ids=Ethereum&vs_currencies=USD')
  }
}
