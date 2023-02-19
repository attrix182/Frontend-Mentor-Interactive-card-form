import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormCreditCardComponent } from './components/form-credit-card/form-credit-card.component';
import { CardPreviewComponent } from './components/card-preview/card-preview.component';
import { CompleteComponent } from './components/complete/complete.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCreditCardComponent,
    CardPreviewComponent,
    CompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
