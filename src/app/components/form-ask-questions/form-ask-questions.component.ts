import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-ask-questions',
  templateUrl: './form-ask-questions.component.html',
  styleUrl: './form-ask-questions.component.scss'
})
export class FormAskQuestionsComponent implements OnInit {
  @Output() dataSend: EventEmitter<FormGroup>;
  formModel: FormGroup;

  constructor(){
    this.dataSend = new EventEmitter();
    this.formModel = new FormGroup({
      //Plan de pensiones persona fisica
      PPPF: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(0|[1-9][0-9]{0,2}|1[0-4][0-9]{2}|1500)$/)
      ]),
      //Plan de pensiones de empresa
      PPE: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(0|[1-9][0-9]{0,2}|1[0-4][0-9]{2}|8500)$/)
      ]),
      //Plan de pensiones de autonomo
      PPA: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(0|[1-9][0-9]{0,2}|1[0-4][0-9]{2}|5750)$/)
      ]),
      //Total facturado/Base imponible
      BI: new FormControl('', [
        Validators.required
      ]),
    })
  }

  ngOnInit(): void {
  }

  getDataForm() {

    if (this.formModel.valid) {
      this.dataSend.emit(this.formModel.value)
      // console.log(this.formModel.value)
    } else {
      console.log('El formulario no es valido')
    }

  }

  checkControl(pControlName: string, pError: string): boolean {
    if (this.formModel.get(pControlName)?.hasError(pError) && this.formModel.get(pControlName)?.touched) {
      return true
    } else {
      return false
    }
  }
}
