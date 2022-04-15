import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserSignIn, UserSignUp } from '@sounds-of-teyvat/dto';
import { PrismaService } from '../prisma/prisma.service';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
        private prismaService: PrismaService,
        private jwtService: JwtService,
        private configService: ConfigService
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

        return this.signToken(userData.id, userData.email);
    }

    async signUp(user: UserSignUp) {
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

            return this.signToken(createdUser.id, createdUser.email);
        } catch (e) {
            // If the user already exists, throw an error
            if (e instanceof PrismaClientKnownRequestError) {
                if (e.code === 'P2002') {
                    throw new ForbiddenException('Credentials Taken');
                }
            }
            throw e;
        }
    }

    /**
     * Creates an access token for a given user.
     */
    async signToken(userId: number, email: string): Promise<{access_token: string}> {
        const payload = {
            // Sub must be unqiue
            sub: userId,
            email: email
        }

        const token = await this.jwtService.signAsync(payload, {
            expiresIn: "30m",
            secret: this.configService.get('JWT_SECRET')
        });

        return {
            access_token: token,
        }
    }
}