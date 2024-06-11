import { Injectable } from '@angular/core';
import { IrpfMainObject } from '../interfaces/irpf-main-object';
import { QuestionsObject } from '../interfaces/questions-object';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  private irpfValues: IrpfMainObject = {
    irpfTable: {
      irpfType1: {
        min: 0,
        max: 12449,
        value: 19
      },
      irpfType2: {
        min: 12450,
        max: 20199,
        value: 24
      },
      irpfType3: {
        min: 20200,
        max: 35199,
        value: 30
      },
      irpfType4: {
        min: 35200,
        max: 59999,
        value: 37
      },
      irpfType5: {
        min: 60000,
        max: 299999,
        value: 45
      },
      irpfType6: {
        min: 300000,
        max: 0,
        value: 47
      }
    }
  }

  constructor(){}

  totalMoney(object: QuestionsObject): number{
    return object.PPPF + object.PPE + object.PPA;
  }

  calculateIRPF(BI: number): number {
    if (BI <= this.irpfValues.irpfTable.irpfType1.max) return this.irpfValues.irpfTable.irpfType1.value;
    else if (BI >= this.irpfValues.irpfTable.irpfType2.min && BI <= this.irpfValues.irpfTable.irpfType2.max) return this.irpfValues.irpfTable.irpfType2.value;
    else if (BI >= this.irpfValues.irpfTable.irpfType3.min && BI <= this.irpfValues.irpfTable.irpfType3.max) return this.irpfValues.irpfTable.irpfType3.value;
    else if (BI >= this.irpfValues.irpfTable.irpfType4.min && BI <= this.irpfValues.irpfTable.irpfType4.max) return this.irpfValues.irpfTable.irpfType4.value;
    else if (BI >= this.irpfValues.irpfTable.irpfType5.min && BI <= this.irpfValues.irpfTable.irpfType5.max) return this.irpfValues.irpfTable.irpfType5.value;
    else return this.irpfValues.irpfTable.irpfType6.value;
  }

  calculateDerecord(total: number, irpf: number): number{
    return (total * irpf)/100;
  }
}
