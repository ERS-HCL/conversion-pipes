import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { SpeedPipe } from './converters/speed.pipe';
import { WeightPipe } from './converters/weight.pipe';
import { LengthPipe } from './converters/length.pipe';
import { TempPipe } from './converters/temp.pipe';
import { ConvertersComponent } from './converters/converters.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    SpeedPipe,
    WeightPipe,
    LengthPipe,
    TempPipe,
    ConvertersComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/