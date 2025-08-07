import { IsString, IsNotEmpty, IsOptional, IsIn } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsIn(['player', 'admin'])
  role: 'player' | 'admin';

  @IsString()
  @IsOptional()
  best_time?: number;

  @IsString()
  @IsNotEmpty()
  hashed_password: string;
}
