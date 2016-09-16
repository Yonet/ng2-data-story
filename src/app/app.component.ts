import { Component }    from '@angular/core';
import { DataService }  from './data.service';
import { Observable }   from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app works!';
  data: any;
  refugeeData: any;

  constructor(public dataService: DataService){
    this.dataService.getData().subscribe(data => this.data = data);
    this.dataService.getCsvData()
      .subscribe(res => this.refugeeData = res)
  }
  addData (name) {
    this.dataService.addData(name);
  }
}
