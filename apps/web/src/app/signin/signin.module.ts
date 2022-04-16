import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin.component';
import { SiteInfoModule } from '../site-info/site-info.module';


@NgModule({
    declarations: [
        SigninComponent
    ],
    imports: [
        CommonModule,
        SigninRoutingModule,
        FormsModule,
        SiteInfoModule
    ],
})
export class SigninModule { }