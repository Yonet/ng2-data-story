import { Component,
         ElementRef,
         Input,
        //  OnChanges,
        //  OnDestroy,
         OnInit,
         SimpleChange}      from '@angular/core';

import { D3Service,
         D3,
         D3DragEvent,
         D3ZoomEvent,
         Selection }        from 'd3-ng2-service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  private d3: D3;
  private parentNativeElement: any;

  constructor(element: ElementRef, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnInit() {

  }

}
