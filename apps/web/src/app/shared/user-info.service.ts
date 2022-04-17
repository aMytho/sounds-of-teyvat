import { Injectable } from '@angular/core';
import { User } from "@prisma/client";

@Injectable({
    providedIn: 'root'
})
export class UserInfoService {
    user: Partial<User> = {};
    constructor() { }

    /**
     * Gets the user info from the logged in user
     * @param jwt - JWT token
     */
    async getUserInfo(jwt: string): Promise<any> {
        if (jwt) {
            const response = await fetch('/api/users/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                }
            });

            if (response.status === 200) {
                const result:Partial<User> = await response.json();
                this.user = result;
            }
        }
    }
}
