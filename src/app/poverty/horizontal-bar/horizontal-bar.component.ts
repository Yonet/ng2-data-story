import { AfterContentInit,
         Component,
         ContentChildren,
         OnInit,
         QueryList,
         ElementRef,
         Input } from '@angular/core';

import { D3Service,
        D3,
        D3DragEvent,
        D3ZoomEvent,
        DSV,
        ScaleOrdinal,
        Axis,
        BrushBehavior,
        BrushSelection,
        D3BrushEvent,
        ScaleLinear,
        Transition,
        Selection }        from 'd3-ng2-service';

var d3: D3;
@Component({
  selector: 'app-horizontal-bar',
  templateUrl: './horizontal-bar.component.html',
  styleUrls: ['./horizontal-bar.component.scss']
})
export class HorizontalBarComponent implements AfterContentInit {
  @Input() data: any;
  @ContentChildren('item') items: QueryList<ElementRef>;

  svg:any;
  constructor(private el: ElementRef, private d3Service: D3Service) {
    // d3 = this.d3Service.getD3();
    // var divs = this.el.nativeElement.
    // this.svg = d3.select(this.el.nativeElement).append('svg')
    //   .data(this.data)
    //   .append();
  }

  ngAfterContentInit() {
    console.log('i ', this.items);
    this.items.forEach((item, i) => {
      console.log("item ", item)
      item.nativeElement.style = {
        'width' : this.data[i].value + '%',
        'background-color': this.data[i].color
      }
      console.log("item ", item)
    })
  }

}
