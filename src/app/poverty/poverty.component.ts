import { Component, OnInit }    from '@angular/core';
import { Observable, Subject }  from 'rxjs/Rx';

import { Animations }           from '../animations';
import { DataService }          from '../data.service';

@Component({
  selector: 'app-poverty',
  templateUrl: './poverty.component.html',
  styleUrls: ['./poverty.component.scss'],
  animations: [
    Animations.flyInOut,
    Animations.datumState,
    Animations.income
  ]
})
export class PovertyComponent implements OnInit {
  private data: any;
  private buttons: any;
  private idealData: any;
  private guessData: any;
  private inc$: any;
  private dec$: any;
  private count$: any;
  private current: number;
  constructor(public dataService: DataService) {
    this.dataService.getPovertyData()
      .subscribe((d) => console.log('d ', d));

    this.dataService.getData()
      .subscribe((res) => {
        this.data = res;
      })

    this.dataService.getSwedenData()
      .subscribe((res) => {
        this.idealData = res;
      })
    this.dataService.getGuessedData()
      .subscribe((res) => {
        this.guessData = res;
      })

  }

  ngOnInit() {
    let click$ = Observable.fromEvent(document.querySelector('button'), 'click');
    this.inc$ = new Subject();
    this.dec$ = new Subject();

    this.count$ = this.inc$.mapTo(+1)
      .merge(this.dec$.mapTo(-1))
      .scan((current, i) => current + i).startWith(1);

    this.count$.subscribe((current) => this.current = current)
  }

}
