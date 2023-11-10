import { Component } from '@angular/core';
import { CryptoApiService } from '../service/crypto-api.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent {
  bitcoin:any = 0;
  dogecoin:any = 0;
  etherium:any = 0;
  constructor(private curr:CryptoApiService ){
    curr.bitCoin().subscribe((bitcurr)=>{
      console.log(bitcurr);
      this.bitcoin = bitcurr;
    })
    curr.dogeCoin().subscribe((dgcurr)=>{
      console.log(dgcurr);
      this.dogecoin = dgcurr
    })
    curr.etherium().subscribe((ecoin)=>{
      console.log(ecoin)
      this.etherium = ecoin
    })
  }
}
