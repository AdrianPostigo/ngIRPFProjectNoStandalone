import { Component } from '@angular/core';
import { QuestionsObject } from '../../interfaces/questions-object';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  questions: QuestionsObject = {
    BI: 0,
    PPA: 0,
    PPE: 0,
    PPPF: 0
  }

  saveQuestions($event: any){
    // console.log($event)
    this.questions = $event;
  }
}
