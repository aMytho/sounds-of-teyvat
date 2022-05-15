import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { NxWelcomeComponent } from "./nx-welcome.component";
import { NavComponent } from "./nav/nav.component";
import { RoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ToastComponent } from "./toast/toast.component";

@NgModule({
    declarations: [
        AppComponent,
        NxWelcomeComponent,
        NavComponent,
        PageNotFoundComponent,
        ToastComponent,
    ],
    imports: [BrowserModule, RoutingModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}