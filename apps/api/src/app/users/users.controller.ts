import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';

import { UsersService } from './users.service';
import { JwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { User } from '@prisma/client';
import { UserEdit } from '@sounds-of-teyvat/dto';

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

    @Get("/:id")
    getUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.getUserById(id);
    }

    @Get(":id/covers")
    getUserCovers(@Param('id', ParseIntPipe) id: number) {
        return this.userService.getCoversOfUser(id);
    }

    @UseGuards(JwtGuard)
    @Patch()
    @UsePipes(ValidationPipe)
    editUser(
        @GetUser('id') id: number,
        @Body() dto: UserEdit
        ) {
        return this.userService.editUser(id, dto);
    }

    @UseGuards(JwtGuard)
    @Delete("/:id")
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.deleteUser(id);
    }
}
