//Angular
import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
//Material
import { MdButtonModule }       from '@angular2-material/button';
import { MdCardModule }         from '@angular2-material/card';
// import { MdInputModule } from '@angular2-material/input';
//App
import { AppComponent }         from './app.component';
import { AnimationsComponent }  from './animations/animations.component';
import './core/rxjs-extensions';
import './core/d3';
import { SlidesModule }         from './slides/slides.module';
import { DataService }          from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    // MdInputModule
    SlidesModule
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
