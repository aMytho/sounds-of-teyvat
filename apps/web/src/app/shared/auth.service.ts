import { Injectable } from '@angular/core';
import { Signin } from '../signin/signin.default';
import { AuthResult, Token } from './auth.interface';
import { UserInfoService } from './user-info.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    jwt: string;
    isLoggedIn: boolean = false;

    constructor(private userService: UserInfoService) {
        this.jwt = localStorage.getItem('jwt') || '';
        this.checkToken();
    }

    /**
     * Returns the JWT token
     */
    getToken(): string {
        return this.jwt;
    }

    /**
     * Runs on startup. Checks the token expiration. Requests user info if logged in.
     */
    checkToken() {
        const expiresIn = Number(localStorage.getItem('jwt_expires_in'));
        const currentTime = Number(localStorage.getItem('jwt_current_time'));
        if (expiresIn && currentTime) {
            if (currentTime + expiresIn > new Date().getTime() / 1000) {
                // Token is still valid
                this.isLoggedIn = true;
                // Get user info
                this.userService.getUserInfo(this.getToken());
            } else {
                // Token has expired
                this.isLoggedIn = false;
                // Reset the token info
                localStorage.setItem('jwt', '');
                localStorage.setItem('jwt_expires_in', '');
                localStorage.setItem('jwt_current_time', '');
            }
        } else {
            this.isLoggedIn = false;
        }
    }

    /**
     * Sets the token info
     */
    setToken(tokenInfo: Token): void {
        this.jwt = tokenInfo.access_token;
        this.isLoggedIn = true;
        // Save the token info
        localStorage.setItem('jwt', tokenInfo.access_token);
        localStorage.setItem('jwt_expires_in', tokenInfo.expires_in.toString());
        localStorage.setItem('jwt_current_time', tokenInfo.current_time.toString());
    }

    /**
     * Logs into the server
     */
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
                this.setToken(json);
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

    /**
     * Logs out. Sets state and resets the token info.
     */
    logout() {
        this.isLoggedIn = false;
        // Reset the token info
        localStorage.setItem('jwt', '');
        localStorage.setItem('jwt_expires_in', '');
        localStorage.setItem('jwt_current_time', '');
    }
}