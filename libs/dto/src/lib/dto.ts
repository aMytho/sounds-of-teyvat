import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class UserSignIn {
    /**
     * The email of the user.
     */
    @IsEmail()
    @IsNotEmpty()
    email: string;

    /**
     * The password of the user. (is hashed)
     */
    @IsString()
    @IsNotEmpty()
    password: string;
}

export class UserSignUp {
    /**
     * The email of the user.
     */
    @IsEmail()
    @IsNotEmpty()
    email: string;

    /**
     * The username of the user.
     */
    @IsString()
    @IsNotEmpty()
    userName: string;

    /**
     * The password of the user. (is hashed)
     */
    @IsString()
    @IsNotEmpty()
    password: string;
}

export class UserEdit {
    /**
     * The email of the user.
     */
    @IsEmail()
    @IsOptional()
    email: string;

    /**
     * The username of the user.
     */
    @IsString()
    @IsOptional()
    userName: string;
}

export class CreateCover {
    /**
     * The title of the cover.
     */
    @IsString()
    @IsNotEmpty()
    title: string;

    /**
     * The description of the cover.
     */
    @IsString()
    @IsNotEmpty()
    description: string;

    /**
     * The notes of the cover.
     */
    @IsString()
    @IsNotEmpty()
    notes: string;

    /**
     * The performance url of the cover. Youtube link
     */
    @IsString()
    @IsOptional()
    performanceUrl?: string;
}

export class DeleteCover {
    /**
     * The id of the cover to delete
     */
    @IsInt()
    @IsNotEmpty()
    id: number;

    /**
     * The id of the user who owns the cover
     */
    @IsInt()
    @IsNotEmpty()
    userId: number;
}