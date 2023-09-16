import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipe } from './pipes/custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide:DEFAULT_CURRENCY_CODE,useValue:"₺"}, CustomPipe]  // bu property sayesinde deffault para birimini ₺ olarak belirleriz.  birden fazla property tanımlanmış
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
