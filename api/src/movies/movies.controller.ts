import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { get } from 'node:http';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll() {
        return 'test';
    }
    @Get('/:id')
    getOne(@Param('id') moviveId: string) {
        return `id: ${moviveId}`;
    }
    @Post()
    create() {
        return `create`;
    }
    @Delete('/:id')
    remove(@Param('id') movieId: string) {
        return `delete : ${movieId}`;
    }
    @Patch('/:id')
    patch(@Param('id') movieId: string) {
        return `patch: ${movieId}`;
    }
}
