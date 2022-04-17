import { Component, OnInit } from '@angular/core';
import { User } from '@prisma/client';
import { UserInfoService } from '../shared/user-info.service';

@Component({
    selector: 'sounds-of-teyvat-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users: Partial<User>[] = [];

    constructor(private userService: UserInfoService) {}

    async ngOnInit() {
        this.users = await this.userService.getAllUsers();
    }
}