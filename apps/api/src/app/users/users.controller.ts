import { Controller, Get, UseGuards } from '@nestjs/common';

import { UsersService } from './users.service';
import { JwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
    constructor(
        private userService: UsersService,
    ) {}

    @Get()
    getUserList() {
        return this.userService.getAllUsers();
    }

    @UseGuards(JwtGuard)
    @Get("me")
    getMe(@GetUser() user: User) {
        return user
    }
}
