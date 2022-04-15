import { ForbiddenException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { UserEdit } from '@sounds-of-teyvat/dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prismaService: PrismaService) {}

    getAllUsers() {
        return this.prismaService.user.findMany({
            select: {
                id: true,
                userName: true,
            }
        });
    }

    async getUserById(id: number) {
        const userFound = await this.prismaService.user.findUnique({
            where: {
                id: id,
            }
        });

        if (!userFound) throw new ForbiddenException('User not found');

        delete userFound.password;
        return userFound;
    }

    async editUser(id: number, user: UserEdit) {
        const updatedUser = await this.prismaService.user.update({
            where: {
                id: id,
            },
            data: {
                email: user.email,
                userName: user.userName,
            },
        });

        delete updatedUser.password;
        return updatedUser;
    }

    async deleteUser(id: number) {
        try {
            const deleted = await this.prismaService.user.delete({
                where: {
                    id: id,
                },
            });

            return deleted;
        } catch(e) {
            if (e instanceof PrismaClientKnownRequestError) {
                if (e.code == 'P2025') {
                    throw new ForbiddenException('User not found');
                }
            }
            throw new InternalServerErrorException('Internal server error');
        }
    }
}
