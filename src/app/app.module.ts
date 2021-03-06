//Angular
import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule }         from '@angular/router';

import { D3Service } from 'd3-ng2-service';

//App
import { SharedModule }         from './shared/shared.module';
import { RxjsModule }           from './rxjs/rxjs.module';
import { PovertyModule }        from './poverty/poverty.module';
import { RefugeesModule }       from './refugees/refugees.module';
import { routes }               from './app.routes';
import { AppComponent }         from './app.component';
import './core/rxjs-extensions';
import { SlidesModule }         from './slides/slides.module';
import { DataService }          from './data.service';
import { PieComponent }         from './pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RxjsModule,
    SharedModule,
    SlidesModule,
    PovertyModule,
    RefugeesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DataService,
    D3Service
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
