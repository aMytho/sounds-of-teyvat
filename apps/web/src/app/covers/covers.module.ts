import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoversRoutingModule } from './covers-routing.module';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { CoversComponent } from './covers.component';


@NgModule({
    declarations: [
        AddComponent,
        CoversComponent
    ],
    imports: [
        CommonModule,
        CoversRoutingModule,
        FormsModule
    ]
})
export class CoversModule { }