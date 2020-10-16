import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowscoreComponent } from './showscore/showscore.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { TwowayComponent } from './twoway/twoway.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShowscoreComponent,
    FooterComponentComponent,
    TwowayComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
