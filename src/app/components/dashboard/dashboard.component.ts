import { Component, OnInit } from '@angular/core';
import { QuestionsObject } from '../../interfaces/questions-object';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  browserLanguage: string | undefined;

  constructor(private i18nService: I18nService){}

  ngOnInit(){
    this.browserLanguage = this.i18nService.borwserDefaultLanguage();
    // console.log('Idioma del navegador:', this.browserLanguage);
  }

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
