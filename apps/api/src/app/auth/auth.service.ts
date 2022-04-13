import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserSignIn } from '@sounds-of-teyvat/dto';
import { PrismaService } from '../prisma/prisma.service';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AuthService {
    constructor(
        private prismaService: PrismaService
    ) { }

    async signIn(user: UserSignIn) {
        // Find the user
        const userData = await this.prismaService.user.findUnique({
            where: {
                email: user.email
            }
        });

        if (!userData) throw new ForbiddenException('User not found');

        // Check password
        const valid = await argon.verify(userData.password, user.password);
        if (!valid) throw new ForbiddenException('Credentials Invalid');

        delete userData.password;

        return userData;
    }

    async signUp(user) {
        // Generate password hash
        const hash = await argon.hash(user.password);
        // Create user in database
        try {
            const createdUser = await this.prismaService.user.create({
                data: {
                    email: user.email,
                    password: hash,
                    userName: user.userName
                }
            });
            // Remove password from user object
            delete createdUser.password;

            return user
        } catch (e) {
            if (e instanceof PrismaClientKnownRequestError) {
                if (e.code === 'P2002') {
                    throw new ForbiddenException('Credentials Taken');
                }
            }
            throw e;
        }
    }
}