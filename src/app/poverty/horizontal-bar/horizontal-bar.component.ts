import { Component,
         OnInit,
         Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar',
  templateUrl: './horizontal-bar.component.html',
  styleUrls: ['./horizontal-bar.component.scss']
})
export class HorizontalBarComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
