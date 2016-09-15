import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { routing } from './core.routes';
import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    CommonModule,
    // routing
  ],
  declarations: [
    CoreComponent
  ]
})
export class CoreModule { }
