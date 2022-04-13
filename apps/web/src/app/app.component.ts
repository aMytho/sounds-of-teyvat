import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Message } from "@sounds-of-teyvat/api-interfaces";

@Component({
    selector: "sounds-of-teyvat-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    hello$ = this.http.get<Message>("/api/hello");
    constructor(private http: HttpClient) {}
}
