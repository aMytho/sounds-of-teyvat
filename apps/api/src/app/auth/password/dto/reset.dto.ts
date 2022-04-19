import { IsEmail, IsNotEmpty, IsString } from "class-validator"

/**
 * Requests a new password
 */
export class Reset {
    @IsString()
    @IsNotEmpty()
    password: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsString()
    @IsNotEmpty()
    code: string;
}