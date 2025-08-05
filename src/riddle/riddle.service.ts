import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Riddle, RiddleDocument } from './riddle.schema';
import { CreateRiddleDto } from './dto/create-riddle.dto';

@Injectable()
export class RiddleService {
  constructor(
    @InjectModel(Riddle.name) private riddleModel: Model<RiddleDocument>,
  ) {}

  async createRiddle(createRiddleDto: CreateRiddleDto): Promise<Riddle> {
    const createdRiddle = new this.riddleModel(createRiddleDto);
    return createdRiddle.save();
  }

  async findAllRiddles(): Promise<Riddle[]> {
    return this.riddleModel.find().exec();
  }
  async findRiddleById(id: string): Promise<Riddle | null> {
    return this.riddleModel.findById(id).exec();
  }

  async findRiddleByDifficulty(difficulty: string): Promise<Riddle[]> {
    return this.riddleModel.find({ difficulty }).exec();
  }

  async updateRiddleById(
    id: string,
    updateData: Partial<CreateRiddleDto>,
  ): Promise<Riddle | null> {
    return this.riddleModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
  }

  async deleteRiddleById(id: string): Promise<Riddle | null> {
    return this.riddleModel.findByIdAndDelete(id).exec();
  }
}
