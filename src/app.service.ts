import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {

  constructor(private configService: ConfigService) {}

  getHello(): string {
    const dbUser = this.configService.get<number>('DATABASE_USER');
    return `Application is running on port ${dbUser}`;
  }
}
