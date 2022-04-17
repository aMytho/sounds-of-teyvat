import { Component, Input, OnInit } from '@angular/core';
import { Cover } from '@prisma/client';

@Component({
    selector: 'sounds-of-teyvat-covers-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
    @Input() cover: Partial<Cover> = {};
    constructor() { }

    ngOnInit(): void {
    }
}
