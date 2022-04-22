import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'covers', loadChildren: () => import('./covers/covers.module').then(m => m.CoversModule) },
    { path: 'signin', loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule) },
    { path: 'login', loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule) },
    { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)},
    { path: "info", loadChildren: () => import('./site-info/site-info.module').then(m => m.SiteInfoModule) },
    { path: "users", loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
    { path: "home", component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class RoutingModule {}