import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouitngModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { QuestionOneComponent } from './questions/question-one/question-one.component';
import { QuestionThirteenComponent } from './questions/question-thirteen/question-thirteen.component';
import { ItemComponent } from './questions/question-one/item/item.component';
import { QuestionFourteenComponent } from './questions/question-fourteen/question-fourteen.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionOneComponent,
    QuestionThirteenComponent,
    ItemComponent,
    QuestionFourteenComponent
  ],
  imports: [
    BrowserModule,
    AppRouitngModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
