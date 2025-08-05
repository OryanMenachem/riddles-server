import { IsString, IsEnum } from 'class-validator';

enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export class CreateRiddleDto {
  @IsString()
  category: string;

  @IsEnum(Difficulty)
  difficulty: Difficulty;

  @IsString()
  riddleDescription: string;

  @IsString()
  correctAnswer: string;
}
