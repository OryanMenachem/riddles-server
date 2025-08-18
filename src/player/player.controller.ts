import { Controller, Get, Body, Post } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post('')
  async createPlayer(@Body() createPlayerDto: CreatePlayerDto): Promise<any> {
    return this.playerService.createPlayer(createPlayerDto);
  }

  @Get('')
  async findAllPlayers(): Promise<any[]> {
    return this.playerService.findAll();
  }
}
