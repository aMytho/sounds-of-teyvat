import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';

import {UserSignIn, UserSignUp} from "@sounds-of-teyvat/dto"
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("signin")
    @UsePipes(ValidationPipe)
    signIn(
        @Body() dto: UserSignIn
    ) {
        return this.authService.signIn(dto);
    }

    @Post("signup")
    @UsePipes(ValidationPipe)
    signUp(
        @Body() dto: UserSignUp
    ) {
        return this.authService.signUp(dto);
    }
}
