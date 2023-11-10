import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptoComponent } from './crypto/crypto.component';
import { StockComponent } from './stock/stock.component';
import { CalculatePriceComponent } from './calculate-price/calculate-price.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptoComponent,
    StockComponent,
    CalculatePriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
