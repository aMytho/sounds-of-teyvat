import { Injectable } from '@angular/core';
import { Signin } from '../signin/signin.default';
import { AuthResult, Token } from './auth.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    jwt: string;

    constructor() {
        this.jwt = localStorage.getItem('jwt') || '';
    }

    getToken(): string {
        return this.jwt;
    }

    setToken(jwt: string): void {
        this.jwt = jwt;
        localStorage.setItem('jwt', jwt);
    }

    async login(details: Signin): Promise<AuthResult> {
        console.log(JSON.stringify(details));
        try {
            const response = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(details)
            });
            if (response.status === 200) {
                // All good, logged in
                const json: Token = await response.json();
                this.setToken(json.access_token);
                return {status: "success", token: this.getToken()};
            } else if (response.status === 403) {
                // Invalid credentials
                return {status: "failure", token: null};
            } else {
                // Something went wrong
                return {status: "failure", token: null};
            }
        } catch(e) {
            console.log(e);
            return {status: "failure", token: null};
        }
    }
}
