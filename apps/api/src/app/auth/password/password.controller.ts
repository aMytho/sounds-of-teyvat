import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { Forgot } from "./dto/forgot.dto";
import { Reset } from "./dto/reset.dto";
import { PasswordResetGuard } from "./guard/password.guard";
import { PasswordService } from "./password.service";

@Controller("auth/password")
export class PasswordController {
    constructor(
        private passwordService: PasswordService,
    ) {}

    @Post("/forgot")
    @UsePipes(ValidationPipe)
    async forgotPassword(
        @Body() userInfo: Forgot,
    ) {
        return this.passwordService.allowUserToResetPassword(userInfo.email, userInfo.userName);
    }

    @UseGuards(PasswordResetGuard)
    @Post("/reset")
    @UsePipes(ValidationPipe)
    async resetPassword(
        @Body() newAuthInfo: Reset,
    ) {
        return this.passwordService.resetPassword(newAuthInfo.email, newAuthInfo.password);
    }
}
