import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RiddleService } from './riddle.service';
import { CreateRiddleDto } from './dto/create-riddle.dto';
import { Riddle } from './riddle.schema';

@Controller('riddles')
export class RiddleController {
  constructor(private readonly riddleService: RiddleService) {}

  @Post()
  async createRiddle(
    @Body() createRiddleDto: CreateRiddleDto,
  ): Promise<Riddle> {
    return this.riddleService.createRiddle(createRiddleDto);
  }

  @Get()
  async findAllRiddles(): Promise<Riddle[]> {
    return this.riddleService.findAllRiddles();
  }
  @Get(':id')
  async findRiddleById(@Param('id') id: string): Promise<Riddle | null> {
    return this.riddleService.findRiddleById(id);
  }

  @Get('difficulty/:difficulty')
  async findRiddleByDifficulty(
    @Param('difficulty') difficulty: string,
  ): Promise<Riddle[]> {
    return this.riddleService.findRiddleByDifficulty(difficulty);
  }

  @Post('update/:id')
  async updateRiddleById(
    @Body() updateData: Partial<CreateRiddleDto>,
    @Body('id') id: string,
  ): Promise<Riddle | null> {
    return this.riddleService.updateRiddleById(id, updateData);
  }

  @Post('delete/:id')
  async deleteRiddleById(@Param('id') id: string): Promise<Riddle | null> {
    return this.riddleService.deleteRiddleById(id);
  }
}
