import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export type RiddleDocument = Riddle & Document;

@Schema()
export class Riddle {
  @Prop({ required: true })
  category: string;

  @Prop({ required: true, enum: Difficulty })
  difficulty: Difficulty;

  @Prop({ required: true })
  riddleDescription: string;

  @Prop({ required: true })
  correctAnswer: string;
}

export const RiddleSchema = SchemaFactory.createForClass(Riddle);
