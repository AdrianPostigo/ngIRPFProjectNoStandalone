import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormAskQuestionsComponent } from './components/form-ask-questions/form-ask-questions.component';
import { SelectLanguageComponent } from './components/select-language/select-language.component';
import { ScreenAmountOfMoneyComponent } from './components/screen-amount-of-money/screen-amount-of-money.component';
import { ScreenIrpfResultsComponent } from './components/screen-irpf-results/screen-irpf-results.component';

//Angular Materials
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormAskQuestionsComponent,
    SelectLanguageComponent,
    ScreenAmountOfMoneyComponent,
    ScreenIrpfResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,


    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
