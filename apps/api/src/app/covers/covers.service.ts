import { ForbiddenException, Injectable } from '@nestjs/common';
import { Cover } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { CreateCover, DeleteCover } from '@sounds-of-teyvat/dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CoversService {
    constructor(private prismaService: PrismaService) {}

    async getCovers(): Promise<Cover[]> {
        const covers = await this.prismaService.cover.findMany();
        return covers;
    }

    async getCover(id: number) {
        const cover = await this.prismaService.cover.findUnique({
            where: {
                id: id,
            },
        });

        if (!cover) throw new ForbiddenException('Cover not found');
        return cover;
    }

    async createCover(cover: CreateCover, id: number) {
        // Create cover in database
        try {
            const createdCover = await this.prismaService.cover.create({
                data: {
                    description: cover.description,
                    notes: cover.notes,
                    title: cover.title,
                    performanceUrl: cover.performanceUrl,
                    userId: id
                }
            });

            return createdCover;

        } catch (e) {
            // If the cover already exists, throw an error
            if (e instanceof PrismaClientKnownRequestError) {
                if (e.code === 'P2002') {
                    throw new ForbiddenException('Dupicate Cover');
                }
            }
            throw e;
        }
    }

    async deleteCover(cover: DeleteCover, userId: number) {
        // Make sure the user owns the cover
        if (userId !== cover.userId) throw new ForbiddenException('Not authorized');

        try {
            const deleted = await this.prismaService.cover.delete({
                where: {
                    id: cover.id,
                },
            });

            return deleted;
        } catch(e) {
            if (e instanceof PrismaClientKnownRequestError) {
                if (e.code == 'P2025') {
                    throw new ForbiddenException('Cover not found');
                }
            }
            throw "Internal server error";
        }
    }
}