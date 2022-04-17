import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuard } from '../shared/guards/is-logged-in.guard';
import { AddComponent } from './add/add.component';
import { CoversComponent } from './covers.component';

const routes: Routes = [
    { path: "", component: CoversComponent },
    { path: "add", component: AddComponent, canActivate: [IsLoggedInGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoversRoutingModule {}