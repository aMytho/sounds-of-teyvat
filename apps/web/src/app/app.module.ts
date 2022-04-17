import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NxWelcomeComponent } from "./nx-welcome.component";
import { HttpClientModule } from "@angular/common/http";
import { NavComponent } from "./nav/nav.component";
import { RoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
    declarations: [AppComponent, NxWelcomeComponent, NavComponent, PageNotFoundComponent],
    imports: [BrowserModule, HttpClientModule, RoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}