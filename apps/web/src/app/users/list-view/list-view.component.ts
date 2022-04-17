import { Component, Input, OnInit } from '@angular/core';
import { User } from '@prisma/client';

@Component({
    selector: 'sounds-of-teyvat-users-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
    @Input() user: Partial<User> = {};
    constructor() { }

    ngOnInit(): void {
    }

}
