import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowscoreComponent } from './showscore/showscore.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowscoreComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
