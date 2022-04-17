import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuard } from '../shared/guards/is-logged-in.guard';
import { MeComponent } from './me/me.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
    { path: "", component: UsersComponent },
    { path: "me", component: MeComponent, canActivate: [IsLoggedInGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {}