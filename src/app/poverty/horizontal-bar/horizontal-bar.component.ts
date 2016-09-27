import { AfterContentInit,
         Component,
         ContentChildren,
         OnChanges,
         QueryList,
         ElementRef,
         Input } from '@angular/core';

import { Animations }   from '../../animations';

@Component({
  selector: 'app-horizontal-bar',
  templateUrl: './horizontal-bar.component.html',
  styleUrls: ['./horizontal-bar.component.scss'],
  animations: [
    Animations.flyInOut,
    Animations.datumState,
    Animations.income
  ]
})
export class HorizontalBarComponent implements OnChanges {
  @Input() data: any;

  constructor(private element: ElementRef) {

  }


  ngOnChanges(): void {

  }

  setup() {

  }

  buildSVG() {

  }

  populate() {

  }

}
