import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalComponent } from './cal.component';
import { WordsComponent } from './words/words.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { RoundNumPipe } from './list-person/round-num.pipe';
import { MinAgePipe } from './list-person/min-age.pipe';
import { SortHeightPipe } from './list-person/sort-height.pipe';
import { SortPipe } from './list-person/sort.pipe';
import { LoginCompanyComponent } from './login-company/login-company.component';

@NgModule({
  declarations: [
    AppComponent,
    CalComponent,
    WordsComponent,
    ListPersonComponent,
    RoundNumPipe,
    MinAgePipe,
    SortHeightPipe,
    SortPipe,
    LoginCompanyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
