import { Injectable } from '@angular/core';
import { Cover } from "@prisma/client";
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class CoversService {
    constructor(private authService: AuthService) {}

    async getAllCovers() {
        const result = await fetch('/api/covers');
        const covers: Partial<Cover>[] = await result.json();
        console.log(covers);
        return covers;
    }

    async getCover(id: number) {
        const result = await fetch(`/api/covers/${id}`);
        const cover: Partial<Cover> = await result.json();
        return cover;
    }

    async createCover(cover: Partial<Cover>) {
        const result = await fetch('/api/covers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.authService.getToken()}`
            },
            body: JSON.stringify(cover)
        });
        const createdCover: Partial<Cover> = await result.json();
        return createdCover;
    }
}
