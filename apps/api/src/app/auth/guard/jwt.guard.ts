import { AuthGuard } from '@nestjs/passport';

/**
 * If passes the guard, the token info, sub, and email will be in the request object.
 * We specify the strategy to use in the constructor.
 */
export class JwtGuard extends AuthGuard('jwt') {
    constructor() {
        super();
    }
}