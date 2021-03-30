import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { get } from 'node:http';
import { Movie } from './movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService){

    }

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    @Get('search')
    search(@Query('year') searchYear: string) {
        return `searchYear: ${searchYear}`;
    }

    @Post()
    create(@Body() movieData: any) {

        return this.moviesService.create(movieData);
    }

    @Get(':id')
    getOne(@Param('id') moviveId: string): Movie {
        return this.moviesService.getOne(moviveId);
    }

    @Delete(':id')
    remove(@Param('id') movieId: string) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(':id')
    patch(@Param('id') movieId: string, @Body() updateData: any) {
        return this.moviesService.update(movieId, updateData);
    }

}
