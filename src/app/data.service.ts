import { Injectable } from '@angular/core';
import { Http,
         Headers,
         Request,
         RequestOptions,
         RequestMethod,
         Response }         from '@angular/http';
import { Observable }       from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor() { }

  getMouseEvent(){
    // return Observable.fromEvent('mousemove')

  }


}
