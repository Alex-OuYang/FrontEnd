import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../shared/primeng.module';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { TopbarComponent } from './base/topbar/topbar.component';
import { SidebarComponent } from './base/sidebar/sidebar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    TopbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
