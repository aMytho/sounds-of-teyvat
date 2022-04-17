import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoversRoutingModule } from './covers-routing.module';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { CoversComponent } from './covers.component';
import { ListViewComponent } from './list-view/list-view.component';


@NgModule({
    declarations: [
        AddComponent,
        CoversComponent,
        ListViewComponent
    ],
    imports: [
        CommonModule,
        CoversRoutingModule,
        FormsModule
    ],
    exports: [
        ListViewComponent
    ]
})
export class CoversModule { }