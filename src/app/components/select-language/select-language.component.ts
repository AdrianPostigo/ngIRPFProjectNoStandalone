import { Component } from '@angular/core';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrl: './select-language.component.scss'
})
export class SelectLanguageComponent {


  obtainLanguage(lang: string){
    console.log("flag",lang)
  }
}
