import { Controller, Get, Body, Post } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}
  // curl -X POST  http://localhost:5000/players -H "Content-Type: application/json" -d '{"name":"John Doe", "role":"player", "best_time":120, "hashed_password":"hashed_password_example"}'
  @Post('')
  async createPlayer(@Body() createPlayerDto: CreatePlayerDto): Promise<any> {
    return this.playerService.createPlayer(createPlayerDto);
  }

  @Get('')
  async findAllPlayers(): Promise<any[]> {
    return this.playerService.findAll();
  }
}
