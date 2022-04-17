import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { Signin } from './signin.default';
@Component({
    selector: 'sounds-of-teyvat-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    constructor(
        public authService: AuthService,
        private router: Router
        ) {}

    model = new Signin('', '');
    validCredentials = true

    ngOnInit(): void {
        console.log(this.model);
    }

    async onSubmit() {
        console.log(this.model)
        const result = await this.authService.login(this.model);
        if (result.status === "success") {
            this.router.navigate(['/']);
        } else {
            this.validCredentials = false;
        }
    }
}
