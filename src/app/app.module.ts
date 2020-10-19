import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowscoreComponent } from './showscore/showscore.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { TwowayComponent } from './twoway/twoway.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { MyfilterPipe } from './myfilter.pipe';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AddScoresComponent } from './add-scores/add-scores.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowscoreComponent,
    FooterComponentComponent,
    TwowayComponent,
    SearchComponent,
    MyfilterPipe,
    RegisterUserComponent,
    AddScoresComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
