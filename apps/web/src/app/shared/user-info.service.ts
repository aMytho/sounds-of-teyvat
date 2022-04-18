import { Injectable } from '@angular/core';
import { Cover, User } from "@prisma/client";

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
    async getUserInfo(jwt: string): Promise<void> {
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

    /**
     * Gets the user info from the logged in user
     * @returns the user info we saved locally. Doesn't fetch updated user
     */
    getUserLocal() {
        if (this.user != {}) {
            return this.user;
        } else {
            return null;
        }
    }

    async getAllUsers() {
        const response = await fetch('/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result: Partial<User>[] = await response.json();
        return result;
    }

    async getCoversByUser(id: number) {
        const result = await fetch(`/api/users/${id}/covers`);
        const covers: Partial<Cover>[] = await result.json();
        return covers;
    }
}
