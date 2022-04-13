import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';

/**
 * Controlls the token validation. If passes adds the user to the request object.
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
    constructor(
        configService: ConfigService,
        private prismaService: PrismaService,) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get('JWT_SECRET')
        })
    }

    /**
     * Returns user data that will be appended to the request object @req()
     * @param payload The sub and email of the user decoded from the token
     */
    async validate(payload: { sub: number, email: string }) {
        console.log("Passed guard, payload:", payload);
        console.log(payload);
        const user = await this.prismaService.user.findUnique({
            where: {
                id: payload.sub,
            }
        });
        delete user.password;
        return user;
    }
}