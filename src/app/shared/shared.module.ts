import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { RouterModule }         from '@angular/router';

//Material
import { MdButtonModule }       from '@angular2-material/button';
import { MdCardModule }         from '@angular2-material/card';
import { MdCoreModule }         from '@angular2-material/core';
// import { MdGridListModule }     from '@angular2-material/grid-list';
import { MdInputModule }        from '@angular2-material/input';
import { MdListModule }         from '@angular2-material/list';
// import { MdToolbarModule }      from '@angular2-material/toolbar';

import { ListButtonsComponent } from './list-buttons/list-buttons.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MdButtonModule,
    MdCardModule,
    MdCoreModule,
    // MdGridListModule,
    MdInputModule,
    MdListModule,
    // MdToolbarModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MdButtonModule,
    MdCardModule,
    MdCoreModule,
    // MdGridListModule,
    MdInputModule,
    MdListModule,
    ListButtonsComponent
    // MdToolbarModule,
  ],
  declarations: [
    ListButtonsComponent
  ]
})
export class SharedModule { }
