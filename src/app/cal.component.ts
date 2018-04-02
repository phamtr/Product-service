import { Component } from '@angular/core';
import { CalService } from './cal.service';

@Component({
  selector: 'app-cal',
  template: `
      <div>
          <input placeholder="So a" [(ngModel)]="soA" />
          <br><br>
          <input placeholder="So b" [(ngModel)]="soB" />
          <br><br>
          <input placeholder="Ten phep tinh" [(ngModel)]="tenPhepTinh" />
          <br><br>
          <button (click)="calculate()">Tinh</button>
      </div>
  `,
  providers: [CalService]
})
export class CalComponent {
    soA = '';
    soB = '';
    tenPhepTinh = 'CONG';
    constructor(private calService: CalService) {
        // this.calService.getResult('4', '5', 'CONG')
        // .then(result => console.log(result));
    }

    calculate() {
        // const { soA, soB, tenPhepTinh } = this;
        // this.calService.getResultByPost(soA, soB, tenPhepTinh)
        // .then(result => console.log(result));
    }
}
