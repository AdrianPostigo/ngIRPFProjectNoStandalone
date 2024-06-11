import { Component, Input, OnChanges } from '@angular/core';
import { OperationsService } from '../../services/operations.service';
import { QuestionsObject } from '../../interfaces/questions-object';

@Component({
  selector: 'app-screen-irpf-results',
  templateUrl: './screen-irpf-results.component.html',
  styleUrl: './screen-irpf-results.component.scss'
})
export class ScreenIrpfResultsComponent implements OnChanges{

  @Input() amountOfMoney!: QuestionsObject;
  total: number = 0;
  irpf: number = 0;
  derecord: number = 0;

  constructor(private operationService: OperationsService){}

  async ngOnChanges(): Promise<void>{
    if (this.amountOfMoney) {
      this.total = await this.operationService.totalMoney(this.amountOfMoney);
      this.irpf = await this.operationService.calculateIRPF(this.amountOfMoney.BI);
      this.derecord = await this.operationService.calculateDerecord(this.total, this.irpf);
    }
  }



}
