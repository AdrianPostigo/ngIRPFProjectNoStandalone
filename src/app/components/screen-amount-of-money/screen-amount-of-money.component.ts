import { Component, Input } from '@angular/core';
import { QuestionsObject } from '../../interfaces/questions-object';

@Component({
  selector: 'app-screen-amount-of-money',
  templateUrl: './screen-amount-of-money.component.html',
  styleUrl: './screen-amount-of-money.component.scss'
})
export class ScreenAmountOfMoneyComponent {
  @Input() amountOfMoney!: QuestionsObject;

  constructor (){}

  
}
