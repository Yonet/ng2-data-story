import { Component }    from '@angular/core';
import { DataService }  from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app works!';
  data: any;
  constructor(public dataService: DataService){
    this.dataService.getData().subscribe(data => this.data = data);
  }
  addData (name) {
    this.dataService.addData(name);
  }
}
