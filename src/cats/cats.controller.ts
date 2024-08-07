import { Controller, Get, Post, Body, Param, UseFilters, HttpException, HttpStatus } from '@nestjs/common';
import { CatsService } from './cats.service';
import { AllExceptionsFilter } from 'src/filters/all.exceptions.filter';

@Controller('cats')
// @UseFilters(AllExceptionsFilter) //apply controller level.
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  //http://localhost:3000/cats
  @Get()
  findAll(): any[] {
    return this.catsService.findAll();
  }

  //http://localhost:3000/cats
  //Body: { "name": "pet", "age": 2,"color": "brown"}
  @Post()
  create(@Body() cat): void {
    this.catsService.create(cat);
  }

  //http://localhost:3000/cats/count
  @Get('count')
  count(): number {
    return this.catsService.count();
  }

  //http://localhost:3000/cats/bulk
  //Body: [{ "name": "pet1", "age": 2,"color": "white"}, { "name": "pet2", "age": 2,"color": "black"}]
  @Post('bulk')
  createBulk(@Body() cats: any[]): void {
    this.catsService.createBulk(cats);
  }

  //http://localhost:3000/cats/filterCheck
  @Get('filterCheck')
  @UseFilters(AllExceptionsFilter) //apply method level.
  filterCheck(): void {
    throw new HttpException('Custom error message', HttpStatus.BAD_REQUEST);
  }

  // http://localhost:3000/cats/pet1
  @Get(':catName')
  findByName(@Param('catName') catName: string): any {
    const res =  this.catsService.findByName(catName);
    return res
  }

  
} 