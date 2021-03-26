import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { get } from 'node:http';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll() {
        return 'test';
    }

    @Get('search')
    search(@Query('year') searchYear: string) {
        return `searchYear: ${searchYear}`;
    }

    @Post()
    create(@Body() movieData: any) {

        return `create ${movieData}`;
    }

    @Get(':id')
    getOne(@Param('id') moviveId: string) {
        return `id: ${moviveId}`;
    }

    @Delete(':id')
    remove(@Param('id') movieId: string) {
        return `delete : ${movieId}`;
    }

    @Patch(':id')
    patch(@Param('id') movieId: string, @Body() updateData: any) {
        return {
            update: movieId,
            ...updateData
        }
    }

}
