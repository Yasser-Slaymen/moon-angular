import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponentComponent } from './text-component/text-component.component';
import { ImagComponentComponent } from './imag-component/imag-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponentComponent,
    ImagComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
