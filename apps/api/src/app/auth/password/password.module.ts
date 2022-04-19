import { Module } from "@nestjs/common";
import { PrismaModule } from "../../prisma/prisma.module";
import { PasswordController } from "./password.controller";
import { PasswordService } from "./password.service";

@Module({
    imports: [PrismaModule],
    controllers: [PasswordController],
    providers: [PasswordService],
})
export class PasswordModule {}