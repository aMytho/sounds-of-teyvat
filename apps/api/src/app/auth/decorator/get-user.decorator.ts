import { createParamDecorator, ExecutionContext } from "@nestjs/common";

/**
 * Gets a user from the request object. It was added from the strategy.
 */
export const GetUser = createParamDecorator((data: string, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    // if we pass in a param we can request only that property from the user
    if (data) {
        return request.user[data];
    }
    return request.user;
})