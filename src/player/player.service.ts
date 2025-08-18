import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { Player } from './player.entity';
import { CreatePlayerDto } from './dto/create-player.dto';

@Injectable()
export class PlayerService {
  private readonly TABLE_NAME = 'players';

  constructor(private readonly supabaseService: SupabaseService) {}

  async createPlayer(data: CreatePlayerDto): Promise<any> {
    const supabase = this.supabaseService.getClient();

    const { data: insertedData, error } = await supabase
      .from(this.TABLE_NAME)
      .insert(data)
      .select();

    if (error) {
      throw new Error(`Failed to create player: ${error.message}`);
    }

    return insertedData[0];
  }

  async findAll(): Promise<Player[]> {
    const supabase = this.supabaseService.getClient();
    const { data, error } = await supabase.from(this.TABLE_NAME).select('*');

    if (error) {
      throw new Error(`Failed to fetch players: ${error.message}`);
    }

    return data;
  }
  async findTopTen(): Promise<Array<{ name: any; best_time: any }> | null> {
    const supabase = this.supabaseService.getClient();
    const { data: topTen, error } = await supabase
      .from(this.TABLE_NAME)
      .select('name, best_time')
      .order('best_time', { ascending: false })
      .limit(10);

    if (error) {
      throw new Error(`Failed to fetch top players: ${error.message}`);
    }

    return topTen;
  }
}