import { ForbiddenException, Injectable } from "@nestjs/common";
import { hash } from 'argon2';
import { PrismaService } from "../../prisma/prisma.service";
import { CodeVerifier } from "./codeVerifier";

@Injectable()
export class PasswordService {
    users: CodeVerifier[] = [];
    constructor(private prismaService: PrismaService) {}

    /**
     * Allows a user to reset their password. Removes ability after 30 minutes
     */
    allowUserToResetPassword(email: string, userName: string):string {
        const code = this.generateRandomCode();
        this.users.push({
            email,
            code: code,
            userName,
        });

        setTimeout(() => {
            this.users = this.users.filter(user => user.email !== email);
        }, 1800000);

        return code;
    }

    /**
     * Resets the password for the user
     */
    async resetPassword(email: string, newPassword: string) {

        const hashedPassword = await hash(newPassword);
        // Find the user
        const userData = await this.prismaService.user.update({
            where: {
                email: email
            },
            data: {
                password: hashedPassword,
            }
        });
        if (!userData) throw new ForbiddenException('User not found');

        // Clear the user from the list
        this.users = this.users.filter(user => user.email !== email);

        return true
    }

    /**
     * Generates a random unique code
     */
    generateRandomCode() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    /**
     * Returns all the users who need a password reset
     */
    getUsers() {
        return this.users;
    }
}