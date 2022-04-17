import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
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
        public userService: UserInfoService,
        private router: Router
    ) { }

    ngOnInit(): void {}

    getUser() {
        return this.userService.user;
    }

    logout() {
        this.authService.logout();
        this.router.navigate(["/home"]);
    }
}
