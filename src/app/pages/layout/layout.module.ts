import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../shared/primeng.module';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
