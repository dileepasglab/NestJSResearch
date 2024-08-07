import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { UppercasePipe } from 'src/pipe/uppercase.pipe';

@Controller('cats')
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
  createBulk(@Body(new UppercasePipe()) cats: any[]): void {
    this.catsService.createBulk(cats);
  }

  //http://localhost:3000/cats/pet1
  @Get(':catName')
  findByName(@Param('catName') catName: string): any {
    const res =  this.catsService.findByName(catName);
    return res
  }
} 