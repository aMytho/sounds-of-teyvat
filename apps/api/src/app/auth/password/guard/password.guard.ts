import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { Reset } from "../dto/reset.dto";
import { PasswordService } from "../password.service";

/**
 * Checks to make sure that the user is resetting their own password.
 */
@Injectable()
export class PasswordResetGuard implements CanActivate {
    constructor(private passwordService: PasswordService) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        // We check the body for the code.
        const body = context.switchToHttp().getRequest().body as Partial<Reset>;

        // We scan the emails and codes that are in memory. Searches for a match.
        if (typeof body !== undefined && body !== {}) {
            const userExists = this.passwordService.getUsers().find(user => {
                return user.email === body.email && user.code === body.code && user.userName === body.userName;
            });
            // If the user exists, we allow the request.
            if (userExists) {
                return true;
            }
        }

        return false;
    }
}