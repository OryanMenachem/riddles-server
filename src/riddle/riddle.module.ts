import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RiddleController } from './riddle.controller';
import { RiddleService } from './riddle.service';
import { Riddle, RiddleSchema } from './riddle.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Riddle.name, schema: RiddleSchema }]),
  ],
  controllers: [RiddleController],
  providers: [RiddleService],
})
export class RiddleModule {}
