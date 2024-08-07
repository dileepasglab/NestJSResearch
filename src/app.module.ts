import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guard/auth.guard';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService, 
    //apply global guard.
  // {
  //   provide: APP_GUARD,
  //   useClass: AuthGuard
  // }
],
})
export class AppModule {}
