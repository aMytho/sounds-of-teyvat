import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteInfoComponent } from './site-info.component';

const routes: Routes = [
    { path: '', component: SiteInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteInfoRoutingModule {}