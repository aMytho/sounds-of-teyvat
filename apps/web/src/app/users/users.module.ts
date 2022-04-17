import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MeComponent } from './me/me.component';
import { CoversModule } from "../covers/covers.module";

@NgModule({
    declarations: [
        UsersComponent,
        ListViewComponent,
        MeComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        CoversModule
    ]
})
export class UsersModule {}