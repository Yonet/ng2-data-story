import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app works!';
  data = [
    {name: "first", value: 12},
    {name: "second", value: 42},
    {name: "third", value: 33}
  ]
}
