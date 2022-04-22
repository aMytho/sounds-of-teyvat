import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { SignUp } from './signup.default';

@Component({
    selector: 'sounds-of-teyvat-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    validCredentials: boolean = true;
    constructor(
        private authService: AuthService,
        private router: Router
        ) {}

    model = new SignUp('', '', '');

    ngOnInit(): void {}

    async onSubmit() {
        const result = await this.authService.signUp(this.model);
        if (result.token) {
            this.router.navigate(["/home"]);
        } else {
            this.validCredentials = false;
        }
    }
}
