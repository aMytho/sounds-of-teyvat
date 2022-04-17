import { Component, OnInit } from "@angular/core";
import { AuthService } from "../shared/auth.service";
import { UserInfoService } from "../shared/user-info.service";

@Component({
    selector: "sounds-of-teyvat-nav",
    templateUrl: "./nav.component.html",
    styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
    constructor(
        public authService: AuthService,
        public userService: UserInfoService
    ) { }

    ngOnInit(): void {}

    getUser() {
        return this.userService.user;
    }
}
