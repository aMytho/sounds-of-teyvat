import { Component, OnInit } from '@angular/core';
import { Cover, User } from '@prisma/client';
import { UserInfoService } from '../../shared/user-info.service';

@Component({
    selector: 'sounds-of-teyvat-me',
    templateUrl: './me.component.html',
    styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {
    user: Partial<User> = {};
    covers: Partial<Cover>[] = [];
    constructor(private userService: UserInfoService) { }

    async ngOnInit() {
        const possibleUser = this.userService.getUserLocal();
        if (possibleUser) {
            this.user = possibleUser;
            const covers = await this.userService.getCoversByUser(this.user.id as number);
            this.covers = covers;
        }

    }
}