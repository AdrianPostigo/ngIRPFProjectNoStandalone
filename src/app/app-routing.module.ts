import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormAskQuestionsComponent } from './components/form-ask-questions/form-ask-questions.component';
import { SelectLanguageComponent } from './components/select-language/select-language.component';
import { ScreenAmountOfMoneyComponent } from './components/screen-amount-of-money/screen-amount-of-money.component';
import { ScreenIrpfResultsComponent } from './components/screen-irpf-results/screen-irpf-results.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/dashboard' },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'form-ask-questions', component: FormAskQuestionsComponent },
  { path: 'select-language', component: SelectLanguageComponent },
  { path: 'screen-amount-of-money', component: ScreenAmountOfMoneyComponent },
  { path: 'screen-irpf-results', component: ScreenIrpfResultsComponent },

  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
