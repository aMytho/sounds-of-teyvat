import { Component, OnInit } from '@angular/core';
import { Cover } from '@prisma/client';
import { CoversService } from '../shared/covers.service';

@Component({
    selector: 'sounds-of-teyvat-covers',
    templateUrl: './covers.component.html',
    styleUrls: ['./covers.component.css']
})
export class CoversComponent implements OnInit {
    covers: Partial<Cover>[] = [];
    constructor(private coversService: CoversService) { }

    ngOnInit(): void {
        this.coversService.getAllCovers().then(covers => {
            this.covers = covers;
        });
    }
}
