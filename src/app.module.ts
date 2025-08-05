import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PlayerModule } from './player/player.module';
import { RiddleModule } from './riddle/riddle.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PlayerModule,
    RiddleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
