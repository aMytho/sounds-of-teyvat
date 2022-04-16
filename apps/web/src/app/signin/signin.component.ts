import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Signin } from './signin.default';
@Component({
    selector: 'sounds-of-teyvat-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    constructor(private authService: AuthService) {}

    model = new Signin('', '');
    validCredentials = true

    ngOnInit(): void {
        console.log(this.model);
    }

    async onSubmit() {
        console.log("Attempting to login...");
        console.log(this.model)
        const result = await this.authService.login(this.model);
        if (result.status === "success") {
            console.log("Login successful!");
        } else {
            console.log("Login failed!");
            this.validCredentials = false;
        }
    }
}
