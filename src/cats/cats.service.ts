import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private cats = [];

  findAll(): any[] {
    return this.cats;
  }

  count(): number {
    return this.cats.length;
  }

  findByName(name: string): any {
    return this.cats.find(cat => cat.name == name);
  }

  create(cat): void {
    this.cats.push(cat);
  }

  createBulk(cats: any[]): void {
    this.cats.push(...cats);
  }
}