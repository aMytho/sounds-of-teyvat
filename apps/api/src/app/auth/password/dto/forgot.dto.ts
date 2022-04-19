import { IsEmail, IsNotEmpty, IsString } from "class-validator"

/**
 * Required info to request a password reset
 */
export class Forgot {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    userName: string;
}