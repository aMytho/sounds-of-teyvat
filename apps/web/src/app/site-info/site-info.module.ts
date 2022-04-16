import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteInfoRoutingModule } from './site-info-routing.module';
import { SiteInfoComponent } from './site-info.component';


@NgModule({
  declarations: [
    SiteInfoComponent
  ],
  imports: [
    CommonModule,
    SiteInfoRoutingModule
  ],
  exports: [SiteInfoComponent]
})
export class SiteInfoModule { }
