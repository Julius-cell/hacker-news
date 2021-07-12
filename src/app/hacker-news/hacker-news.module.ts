import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DateAgoPipe } from '../shared/pipes/date-ago.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    DateAgoPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HackerNewsModule { }
