import { Component, OnInit } from '@angular/core';
import { Cover } from '@prisma/client';
import { UserInfoService } from '../../shared/user-info.service';

@Component({
    selector: 'sounds-of-teyvat-my-covers',
    templateUrl: './my-covers.component.html',
    styleUrls: ['./my-covers.component.css']
})
export class MyCoversComponent implements OnInit {
    covers: Partial<Cover>[] = [];
    constructor(private userService: UserInfoService) { }

    ngOnInit(): void {
        this.userService.getCoversByUser(this.userService.getUserLocal()!.id as number).then(data => {
            this.covers = data;
        })
    }
}