import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "sounds-of-teyvat-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    hello$ = this.http.get<any>("/api/hello");
    constructor(private http: HttpClient) {}
}
