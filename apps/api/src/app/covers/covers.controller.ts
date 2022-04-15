import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateCover, DeleteCover } from '@sounds-of-teyvat/dto';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { CoversService } from './covers.service';

@Controller('covers')
export class CoversController {
    constructor(private coverService: CoversService) { }

    @Get()
    getCovers() {
        return this.coverService.getCovers();
    }

    @UseGuards(JwtGuard)
    @Post("")
    @UsePipes(ValidationPipe)
    createCover(
        @GetUser("id") id: number,
        @Body() dto: CreateCover
    ) {
        return this.coverService.createCover(dto, id);
    }

    @Get('/:id')
    getCover(@Param("id", ParseIntPipe) id: number) {
        return this.coverService.getCover(id);
    }

    @UseGuards(JwtGuard)
    @Delete("/:id")
    @UsePipes(ValidationPipe)
    deleteCover(
        @Param("id", ParseIntPipe) coverId: number,
        @GetUser("id") userId: number,
        @Body() coverMetadata: DeleteCover
    ) {
        return this.coverService.deleteCover(coverMetadata, userId);
    }
}