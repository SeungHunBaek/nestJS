import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {

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
    create(@Body() movieData: CreateMovieDto) {

        return this.moviesService.create(movieData);
    }

    @Get(':id')
    getOne(@Param('id') moviveId: number): Movie {
        return this.moviesService.getOne(moviveId);
    }

    @Delete(':id')
    remove(@Param('id') movieId: number) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(':id')
    patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
        return this.moviesService.update(movieId, updateData);
    }

}
