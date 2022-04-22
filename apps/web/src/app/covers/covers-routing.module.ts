import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuard } from '../shared/guards/is-logged-in.guard';
import { AddComponent } from './add/add.component';
import { CoversComponent } from './covers.component';
import { MyCoversComponent } from './my-covers/my-covers.component';

const routes: Routes = [
    { path: "add", component: AddComponent, canActivate: [IsLoggedInGuard] },
    { path: "uploaded", component: MyCoversComponent, canActivate: [IsLoggedInGuard] },
    { path: "", component: CoversComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoversRoutingModule {}