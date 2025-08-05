import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RiddleDocument = Riddle & Document;

@Schema()
export class Riddle {
  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  difficulty: string;

  @Prop({ required: true })
  riddleDescription: string;

  @Prop({ required: true })
  correctAnswer: string;
}

export const RiddleSchema = SchemaFactory.createForClass(Riddle);
