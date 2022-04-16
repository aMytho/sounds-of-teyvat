import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CoversService {

    constructor() { }

    async getAllCovers() {
        const result = await fetch('/api/covers');
        const covers = await result.json();
        console.log(covers);
        return covers;
    }

    async getCover(id: number) {

    }

    async createCover(cover: any) {

    }
}
