import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrl: './select-language.component.scss'
})
export class SelectLanguageComponent {

  constructor(private translateService: TranslateService){}

  obtainLanguage(lang: string){
    this.translateService.use(lang)
    // console.log("flag",lang)
  }
}
